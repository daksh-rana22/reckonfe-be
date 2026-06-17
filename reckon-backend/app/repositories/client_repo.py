from typing import Optional, Sequence
from sqlalchemy import select, delete
from sqlalchemy.ext.asyncio import AsyncSession
from app.models.client import ClientLogo


class ClientRepository:
    """Data-access layer for Client/Partner logo entities."""

    @staticmethod
    async def create(db: AsyncSession, name: str, img: str, city: Optional[str] = None, software: Optional[str] = None, type: str = "client") -> ClientLogo:
        client = ClientLogo(name=name, img=img, city=city, software=software, type=type)
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
    async def get_all(db: AsyncSession, type_filter: Optional[str] = None) -> Sequence[ClientLogo]:
        stmt = select(ClientLogo)
        if type_filter:
            stmt = stmt.where(ClientLogo.type == type_filter)
        stmt = stmt.order_by(ClientLogo.created_at.desc())
        result = await db.execute(stmt)
        return result.scalars().all()

    @staticmethod
    async def delete(db: AsyncSession, client: ClientLogo) -> None:
        await db.delete(client)
        await db.commit()

    @staticmethod
    async def reset(db: AsyncSession, default_items: list[dict], item_type: str) -> Sequence[ClientLogo]:
        """Clears all logos of the specified type and seeds default items."""
        await db.execute(delete(ClientLogo).where(ClientLogo.type == item_type))
        await db.commit()
        
        seeded = []
        for c in default_items:
            client = ClientLogo(
                id=c["id"],
                name=c["name"],
                img=c["img"],
                city=c.get("city"),
                software=c.get("software"),
                type=item_type
            )
            db.add(client)
            seeded.append(client)
            
        await db.commit()
        for s in seeded:
            await db.refresh(s)
            
        return seeded

    @staticmethod
    async def update(db: AsyncSession, client: ClientLogo, update_data: dict) -> ClientLogo:
        """Update an existing client/partner logo record."""
        for key, val in update_data.items():
            if hasattr(client, key):
                setattr(client, key, val)
        await db.commit()
        await db.refresh(client)
        return client
