from fastapi import APIRouter, Depends, status, Response
from sqlalchemy.ext.asyncio import AsyncSession
from typing import List

from app.db.session import get_db
from app.core.permissions import get_current_active_user, require_role
from app.models.user import User, UserRole
from app.repositories.user_repo import UserRepository
from app.services.auth_service import AuthService
from app.schemas.auth import TokenResponse, UserResponse, AdminCreate, AdminUpdate
from pydantic import BaseModel, Field

router = APIRouter()


class LoginPayload(BaseModel):
    username: str
    password: str


class RefreshPayload(BaseModel):
    refresh_token: str


@router.post("/login", response_model=TokenResponse)
async def login(payload: LoginPayload, db: AsyncSession = Depends(get_db)):
    """Authenticate admin and return JWT tokens."""
    # Look up user by email or name
    user = await UserRepository.get_by_email(db, payload.username)
    if not user:
        # Fallback to matching by full_name
        from sqlalchemy import select
        stmt = select(User).where(User.full_name == payload.username)
        result = await db.execute(stmt)
        user = result.scalar_one_or_none()
        
    if not user:
        from app.core.exceptions import UnauthorizedError
        raise UnauthorizedError("Invalid username or password.")
        
    # Verify password directly
    from app.core.security import verify_password
    if not verify_password(payload.password, user.hashed_password):
        from app.core.exceptions import UnauthorizedError
        raise UnauthorizedError("Invalid username or password.")
        
    if not user.is_active:
        from app.core.exceptions import UnauthorizedError
        raise UnauthorizedError("Your account has been deactivated.")
        
    from app.services.auth_service import _generate_tokens
    return await _generate_tokens(db, user)


@router.post("/logout", status_code=status.HTTP_204_NO_CONTENT)
async def logout(payload: RefreshPayload, db: AsyncSession = Depends(get_db)):
    """Revoke user session."""
    await AuthService.logout(db, payload.refresh_token)
    return Response(status_code=status.HTTP_204_NO_CONTENT)


@router.post("/refresh", response_model=TokenResponse)
async def refresh(payload: RefreshPayload, db: AsyncSession = Depends(get_db)):
    """Refresh JWT tokens."""
    return await AuthService.refresh(db, payload.refresh_token)


@router.get("/me", response_model=UserResponse)
async def get_me(current_user: User = Depends(get_current_active_user)):
    """Get active profile."""
    return current_user


# ── Admin User CRUD ──

class AdminResponseItem(BaseModel):
    username: str
    password: str = "••••••••" # Hidden, frontend stores password for edits


@router.get("/admins", response_model=List[AdminResponseItem])
async def list_admins(
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(require_role(UserRole.ADMIN))
):
    """List all registered admin accounts."""
    users = await UserRepository.get_all(db)
    admins = [u for u in users if u.role == UserRole.ADMIN]
    return [{"username": u.full_name} for u in admins]


@router.post("/admins", status_code=status.HTTP_201_CREATED)
async def add_admin(
    payload: AdminCreate,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(require_role(UserRole.ADMIN))
):
    """Create a new admin user."""
    # Check if admin already exists
    from sqlalchemy import select
    stmt = select(User).where(User.full_name == payload.username)
    res = await db.execute(stmt)
    if res.scalar_one_or_none():
        from app.core.exceptions import ConflictError
        raise ConflictError("Admin username already exists.")
        
    from app.core.security import hash_password
    await UserRepository.create(
        db,
        full_name=payload.username,
        email=f"{payload.username.lower()}@reckonsales.in",
        hashed_password=hash_password(payload.password),
        role=UserRole.ADMIN
    )
    return {"message": "Admin added successfully"}


@router.put("/admins/{username}")
async def update_admin(
    username: str,
    payload: AdminUpdate,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(require_role(UserRole.ADMIN))
):
    """Update an admin credentials."""
    # Find existing admin by username (full_name)
    from sqlalchemy import select
    stmt = select(User).where(User.full_name == username)
    res = await db.execute(stmt)
    user = res.scalar_one_or_none()
    if not user:
        from app.core.exceptions import NotFoundError
        raise NotFoundError("Admin user not found.")
        
    # Check if renaming to a username that already exists
    if payload.username != username:
        stmt2 = select(User).where(User.full_name == payload.username)
        res2 = await db.execute(stmt2)
        if res2.scalar_one_or_none():
            from app.core.exceptions import ConflictError
            raise ConflictError("New username already exists.")

    from app.core.security import hash_password
    update_data = {
        "full_name": payload.username,
        "email": f"{payload.username.lower()}@reckonsales.in",
        "hashed_password": hash_password(payload.password)
    }
    await UserRepository.update(db, user, update_data)
    return {"message": "Admin updated successfully"}


@router.delete("/admins/{username}")
async def delete_admin(
    username: str,
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(require_role(UserRole.ADMIN))
):
    """Delete an admin account."""
    # Count admins first
    from sqlalchemy import select, func
    stmt_count = select(func.count(User.id)).where(User.role == UserRole.ADMIN)
    cnt_res = await db.execute(stmt_count)
    if cnt_res.scalar_one() <= 1:
        from app.core.exceptions import BadRequestError
        raise BadRequestError("Cannot delete the last remaining admin account.")
        
    if current_user.full_name == username:
        from app.core.exceptions import BadRequestError
        raise BadRequestError("Cannot delete your own logged-in account.")

    # Find the user
    stmt = select(User).where(User.full_name == username)
    res = await db.execute(stmt)
    user = res.scalar_one_or_none()
    if not user:
        from app.core.exceptions import NotFoundError
        raise NotFoundError("Admin user not found.")
        
    await UserRepository.delete(db, user)
    return {"message": "Admin deleted successfully"}
