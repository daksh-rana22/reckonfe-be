from typing import Optional, Sequence
from sqlalchemy import select, delete
from sqlalchemy.ext.asyncio import AsyncSession
from app.models.client import ClientLogo


class ClientRepository:
    """Data-access layer for Client logo entities."""

    @staticmethod
    async def create(db: AsyncSession, name: str, img: str) -> ClientLogo:
        client = ClientLogo(name=name, img=img)
        db.add(client)
        await db.commit()
        await db.refresh(client)
        return client

    @staticmethod
    async def get_by_id(db: AsyncSession, client_id: str) -> Optional[ClientLogo]:
        stmt = select(ClientLogo).where(ClientLogo.id == client_id)
        result = await db.execute(stmt)
        return result.scalar_one_or_none()

    @staticmethod
    async def get_all(db: AsyncSession) -> Sequence[ClientLogo]:
        stmt = select(ClientLogo).order_by(ClientLogo.created_at.desc())
        result = await db.execute(stmt)
        return result.scalars().all()

    @staticmethod
    async def delete(db: AsyncSession, client: ClientLogo) -> None:
        await db.delete(client)
        await db.commit()

    @staticmethod
    async def reset(db: AsyncSession, default_clients: list[dict]) -> Sequence[ClientLogo]:
        """Clears all client logos and seeds default clients."""
        await db.execute(delete(ClientLogo))
        await db.commit()
        
        seeded = []
        for c in default_clients:
            client = ClientLogo(id=c["id"], name=c["name"], img=c["img"])
            db.add(client)
            seeded.append(client)
            
        await db.commit()
        for s in seeded:
            await db.refresh(s)
            
        return seeded
