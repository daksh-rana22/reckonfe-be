import uuid
from datetime import datetime, timezone, timedelta
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.config import settings
from app.core.exceptions import ConflictError, UnauthorizedError
from app.core.security import (
    create_access_token,
    create_refresh_token,
    decode_token,
    hash_password,
    verify_password,
)
from app.models.user import User, UserRole
from app.repositories.user_repo import UserRepository
from app.repositories.token_repo import TokenRepository
from app.schemas.auth import TokenResponse, UserLogin, UserRegister


class AuthService:
    """Stateless authentication service."""

    @staticmethod
    async def register(db: AsyncSession, payload: UserRegister) -> TokenResponse:
        """Create a new user account and return tokens."""
        existing = await UserRepository.get_by_email(db, payload.email)
        if existing:
            raise ConflictError("A user with this email already exists.")

        user = await UserRepository.create(
            db,
            full_name=payload.full_name,
            email=payload.email.lower(),
            phone=payload.phone,
            hashed_password=hash_password(payload.password),
            role=UserRole.ADMIN,  # Defaults to admin for this system
        )

        return await _generate_tokens(db, user)

    @staticmethod
    async def login(db: AsyncSession, payload: UserLogin) -> TokenResponse:
        """Authenticate a user and return tokens."""
        user = await UserRepository.get_by_email(db, payload.email)

        if not user or not verify_password(payload.password, user.hashed_password):
            raise UnauthorizedError("Invalid email or password.")

        if not user.is_active:
            raise UnauthorizedError("Your account has been deactivated.")

        return await _generate_tokens(db, user)

    @staticmethod
    async def refresh(db: AsyncSession, refresh_token: str) -> TokenResponse:
        """Validate refresh token and issue a fresh pair."""
        try:
            payload = decode_token(refresh_token)
        except Exception:
            raise UnauthorizedError("Invalid or expired refresh token.")

        if payload.get("type") != "refresh":
            raise UnauthorizedError("Invalid token type.")

        user_id_str = payload.get("sub")
        if user_id_str is None:
            raise UnauthorizedError("Invalid refresh token payload.")

        try:
            user_id = uuid.UUID(user_id_str)
        except ValueError:
            raise UnauthorizedError("Invalid user ID in token.")

        user = await UserRepository.get_by_id(db, user_id)
        if user is None or not user.is_active:
            raise UnauthorizedError("User inactive or not found.")

        # Check token exists in database (not revoked)
        db_token = await TokenRepository.get_by_token(db, refresh_token)
        if not db_token:
            raise UnauthorizedError("Refresh token is revoked or unrecognized.")

        # Revoke old token and rotate
        await TokenRepository.delete_by_token(db, refresh_token)
        return await _generate_tokens(db, user)

    @staticmethod
    async def logout(db: AsyncSession, refresh_token: str) -> None:
        """Invalidate a refresh token."""
        await TokenRepository.delete_by_token(db, refresh_token)


# ── Helper ───────────────────────────────────────────────────────────────────

async def _generate_tokens(db: AsyncSession, user: User) -> TokenResponse:
    """Build and persist access + refresh token pair."""
    token_data = {"sub": str(user.id), "role": user.role.value}

    access_token = create_access_token(token_data)
    refresh_token = create_refresh_token(token_data)

    expires_at = datetime.now(timezone.utc) + timedelta(days=settings.REFRESH_TOKEN_EXPIRE_DAYS)
    expires_at_naive = expires_at.replace(tzinfo=None)

    await TokenRepository.create(
        db,
        user_id=user.id,
        token=refresh_token,
        expires_at=expires_at_naive
    )

    return TokenResponse(
        access_token=access_token,
        refresh_token=refresh_token,
    )
