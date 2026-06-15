from typing import Optional, Sequence
from sqlalchemy import select, delete
from sqlalchemy.ext.asyncio import AsyncSession
from app.models.download import DownloadCategory, Download


class DownloadRepository:
    """Data-access layer for Download and DownloadCategory entities."""

    # ── Category operations ──
    @staticmethod
    async def get_category(db: AsyncSession, value: str) -> Optional[DownloadCategory]:
        return await db.get(DownloadCategory, value)

    @staticmethod
    async def get_all_categories(db: AsyncSession) -> Sequence[DownloadCategory]:
        stmt = select(DownloadCategory).order_by(DownloadCategory.created_at.asc())
        result = await db.execute(stmt)
        return result.scalars().all()

    @staticmethod
    async def create_category(db: AsyncSession, value: str, label: str, is_active: bool = True) -> DownloadCategory:
        category = DownloadCategory(value=value, label=label, is_active=is_active)
        db.add(category)
        await db.commit()
        await db.refresh(category)
        return category

    @staticmethod
    async def update_category(db: AsyncSession, category: DownloadCategory, label: str) -> DownloadCategory:
        category.label = label
        await db.commit()
        await db.refresh(category)
        return category

    @staticmethod
    async def delete_category(db: AsyncSession, category: DownloadCategory) -> None:
        await db.delete(category)
        await db.commit()

    @staticmethod
    async def toggle_category_active(db: AsyncSession, category: DownloadCategory) -> DownloadCategory:
        category.is_active = not category.is_active
        await db.commit()
        await db.refresh(category)
        return category

    # ── Download item operations ──
    @staticmethod
    async def get_download(db: AsyncSession, download_id: str) -> Optional[Download]:
        return await db.get(Download, download_id)

    @staticmethod
    async def get_all_downloads(db: AsyncSession) -> Sequence[Download]:
        stmt = select(Download).order_by(Download.created_at.desc())
        result = await db.execute(stmt)
        return result.scalars().all()

    @staticmethod
    async def create_download(db: AsyncSession, **kwargs) -> Download:
        download = Download(**kwargs)
        db.add(download)
        await db.commit()
        await db.refresh(download)
        return download

    @staticmethod
    async def update_download(db: AsyncSession, download: Download, update_data: dict) -> Download:
        for key, value in update_data.items():
            setattr(download, key, value)
        await db.commit()
        await db.refresh(download)
        return download

    @staticmethod
    async def delete_download(db: AsyncSession, download: Download) -> None:
        await db.delete(download)
        await db.commit()

    @staticmethod
    async def toggle_download_active(db: AsyncSession, download: Download) -> Download:
        download.isActive = not download.isActive
        await db.commit()
        await db.refresh(download)
        return download

    # ── Seeding and Resetting ──
    @staticmethod
    async def reset(
        db: AsyncSession,
        default_categories: list[dict],
        default_downloads: list[dict]
    ) -> tuple[Sequence[DownloadCategory], Sequence[Download]]:
        """Clears both categories and download items and seeds default values."""
        await db.execute(delete(Download))
        await db.execute(delete(DownloadCategory))
        await db.commit()

        categories_seeded = []
        for cat in default_categories:
            category = DownloadCategory(
                value=cat["value"],
                label=cat["label"],
                is_active=cat.get("isActive", True)
            )
            db.add(category)
            categories_seeded.append(category)

        await db.commit()
        for cat in categories_seeded:
            await db.refresh(cat)

        downloads_seeded = []
        for dl in default_downloads:
            download = Download(
                id=dl["id"],
                name=dl["name"],
                link=dl["link"],
                type=dl["type"],
                desc=dl.get("desc"),
                icon=dl.get("icon", "Monitor"),
                fileName=dl.get("fileName"),
                fileSize=dl.get("fileSize"),
                fileType=dl.get("fileType"),
                isActive=dl.get("isActive", True)
            )
            db.add(download)
            downloads_seeded.append(download)

        await db.commit()
        for dl in downloads_seeded:
            await db.refresh(dl)

        return categories_seeded, downloads_seeded
