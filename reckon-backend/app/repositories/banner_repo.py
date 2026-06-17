from typing import Optional, Sequence
from sqlalchemy import select, delete
from sqlalchemy.ext.asyncio import AsyncSession
from app.models.banner import Banner, BannerSetting


class BannerRepository:
    """Data-access layer for Banner and BannerSetting entities."""

    @staticmethod
    async def get_by_id(db: AsyncSession, banner_id: str) -> Optional[Banner]:
        stmt = select(Banner).where(Banner.id == banner_id)
        result = await db.execute(stmt)
        return result.scalar_one_or_none()

    @staticmethod
    async def get_all(db: AsyncSession) -> Sequence[Banner]:
        stmt = select(Banner).order_by(Banner.sort_order.asc(), Banner.created_at.desc())
        result = await db.execute(stmt)
        return result.scalars().all()

    @staticmethod
    async def create(
        db: AsyncSession,
        title: str,
        description: Optional[str],
        image_url: str,
        sort_order: int = 0,
        is_active: bool = True,
        redirect_path: Optional[str] = None
    ) -> Banner:
        banner = Banner(
            title=title,
            description=description,
            image_url=image_url,
            sort_order=sort_order,
            is_active=is_active,
            redirect_path=redirect_path
        )
        db.add(banner)
        await db.commit()
        await db.refresh(banner)
        return banner

    @staticmethod
    async def update(
        db: AsyncSession,
        banner: Banner,
        update_data: dict
    ) -> Banner:
        for key, val in update_data.items():
            if hasattr(banner, key):
                setattr(banner, key, val)
        await db.commit()
        await db.refresh(banner)
        return banner

    @staticmethod
    async def delete(db: AsyncSession, banner: Banner) -> None:
        await db.delete(banner)
        await db.commit()

    @staticmethod
    async def reset(db: AsyncSession, default_banners: list[dict]) -> Sequence[Banner]:
        """Clears all banners and seeds default banners."""
        await db.execute(delete(Banner))
        await db.commit()

        seeded = []
        for b in default_banners:
            banner = Banner(
                id=b.get("id"),
                title=b["title"],
                description=b.get("description"),
                image_url=b["image_url"],
                sort_order=b.get("sort_order", 0),
                is_active=b.get("is_active", True),
                redirect_path=b.get("redirect_path")
            )
            db.add(banner)
            seeded.append(banner)

        await db.commit()
        for s in seeded:
            await db.refresh(s)

        return seeded

    @staticmethod
    async def get_duration(db: AsyncSession) -> int:
        """Returns the banner autoplay slide duration, defaults to 5."""
        stmt = select(BannerSetting).where(BannerSetting.id == 1)
        result = await db.execute(stmt)
        setting = result.scalar_one_or_none()
        if setting:
            return setting.slide_duration
        return 5

    @staticmethod
    async def update_duration(db: AsyncSession, slide_duration: int) -> int:
        """Updates the banner slide duration setting."""
        stmt = select(BannerSetting).where(BannerSetting.id == 1)
        result = await db.execute(stmt)
        setting = result.scalar_one_or_none()

        if not setting:
            setting = BannerSetting(id=1, slide_duration=slide_duration)
            db.add(setting)
        else:
            setting.slide_duration = slide_duration

        await db.commit()
        await db.refresh(setting)
        return setting.slide_duration
