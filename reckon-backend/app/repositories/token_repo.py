from typing import Optional
import uuid
import hashlib
from datetime import datetime

from sqlalchemy import select, delete
from sqlalchemy.ext.asyncio import AsyncSession

from app.models.token import RefreshToken


def _hash_token(token: str) -> str:
    """Consistently hash tokens (SHA-256) for secure DB storage."""
    return hashlib.sha256(token.encode("utf-8")).hexdigest()


class TokenRepository:
    """Data-access layer for RefreshToken entities."""

    @staticmethod
    async def create(db: AsyncSession, *, user_id: uuid.UUID, token: str, expires_at: datetime) -> RefreshToken:
        hashed_token = _hash_token(token)
        refresh_token = RefreshToken(user_id=user_id, token=hashed_token, expires_at=expires_at)
        db.add(refresh_token)
        await db.commit()
        await db.refresh(refresh_token)
        return refresh_token

    @staticmethod
    async def get_by_token(db: AsyncSession, token: str) -> Optional[RefreshToken]:
        hashed_token = _hash_token(token)
        stmt = select(RefreshToken).where(RefreshToken.token == hashed_token)
        result = await db.execute(stmt)
        return result.scalar_one_or_none()

    @staticmethod
    async def delete_by_token(db: AsyncSession, token: str) -> None:
        hashed_token = _hash_token(token)
        stmt = delete(RefreshToken).where(RefreshToken.token == hashed_token)
        await db.execute(stmt)
        await db.commit()

    @staticmethod
    async def delete_by_user(db: AsyncSession, user_id: uuid.UUID) -> None:
        stmt = delete(RefreshToken).where(RefreshToken.user_id == user_id)
        await db.execute(stmt)
        await db.commit()
