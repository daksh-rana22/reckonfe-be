from typing import Optional, Sequence
from sqlalchemy import select, delete
from sqlalchemy.ext.asyncio import AsyncSession
from app.models.gallery import GalleryCategory, GalleryItem


class GalleryRepository:
    """Data-access layer for GalleryCategory and GalleryItem entities."""

    # ── Album Categories ──
    @staticmethod
    async def get_category(db: AsyncSession, value: str) -> Optional[GalleryCategory]:
        return await db.get(GalleryCategory, value)

    @staticmethod
    async def get_all_categories(db: AsyncSession) -> Sequence[GalleryCategory]:
        stmt = select(GalleryCategory).order_by(GalleryCategory.created_at.asc())
        result = await db.execute(stmt)
        return result.scalars().all()

    @staticmethod
    async def create_category(db: AsyncSession, value: str, label: str) -> GalleryCategory:
        category = GalleryCategory(value=value, label=label)
        db.add(category)
        await db.commit()
        await db.refresh(category)
        return category

    @staticmethod
    async def update_category(db: AsyncSession, category: GalleryCategory, label: str) -> GalleryCategory:
        category.label = label
        await db.commit()
        await db.refresh(category)
        return category

    @staticmethod
    async def delete_category(db: AsyncSession, category: GalleryCategory) -> None:
        await db.delete(category)
        await db.commit()

    # ── Photos Items ──
    @staticmethod
    async def get_item(db: AsyncSession, item_id: str) -> Optional[GalleryItem]:
        return await db.get(GalleryItem, item_id)

    @staticmethod
    async def get_all_items(db: AsyncSession) -> Sequence[GalleryItem]:
        stmt = select(GalleryItem).order_by(GalleryItem.created_at.desc())
        result = await db.execute(stmt)
        return result.scalars().all()

    @staticmethod
    async def create_item(db: AsyncSession, title: str, category: str, src: str) -> GalleryItem:
        item = GalleryItem(title=title, category=category, src=src)
        db.add(item)
        await db.commit()
        await db.refresh(item)
        return item

    @staticmethod
    async def delete_item(db: AsyncSession, item: GalleryItem) -> None:
        await db.delete(item)
        await db.commit()

    # ── Seeding and Resetting ──
    @staticmethod
    async def reset(
        db: AsyncSession,
        default_categories: list[dict],
        default_items: list[dict]
    ) -> tuple[Sequence[GalleryCategory], Sequence[GalleryItem]]:
        """Clears all gallery albums and photo items and seeds defaults."""
        await db.execute(delete(GalleryItem))
        await db.execute(delete(GalleryCategory))
        await db.commit()

        categories_seeded = []
        for cat in default_categories:
            category = GalleryCategory(value=cat["value"], label=cat["label"])
            db.add(category)
            categories_seeded.append(category)

        await db.commit()
        for cat in categories_seeded:
            await db.refresh(cat)

        items_seeded = []
        for it in default_items:
            item = GalleryItem(
                id=it["id"],
                title=it["title"],
                category=it["category"],
                src=it["src"]
            )
            db.add(item)
            items_seeded.append(item)

        await db.commit()
        for it in items_seeded:
            await db.refresh(it)

        return categories_seeded, items_seeded
