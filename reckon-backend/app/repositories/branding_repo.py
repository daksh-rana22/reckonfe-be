from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession
from app.models.branding import BrandingLogo


class BrandingRepository:
    """Data-access layer for site branding assets."""

    @staticmethod
    async def get_logo(db: AsyncSession) -> str:
        """Returns the branding logo URL, or defaults to '/images/logo.png'."""
        stmt = select(BrandingLogo).where(BrandingLogo.id == 1)
        result = await db.execute(stmt)
        logo = result.scalar_one_or_none()
        if logo:
            return logo.logo_url
        return "/images/logo.png"

    @staticmethod
    async def update_logo(db: AsyncSession, logo_url: str) -> str:
        """Updates the brand logo URL. Inserts if row doesn't exist."""
        stmt = select(BrandingLogo).where(BrandingLogo.id == 1)
        result = await db.execute(stmt)
        logo = result.scalar_one_or_none()
        
        if not logo:
            logo = BrandingLogo(id=1, logo_url=logo_url)
            db.add(logo)
        else:
            logo.logo_url = logo_url
            
        await db.commit()
        await db.refresh(logo)
        return logo.logo_url

    @staticmethod
    async def reset_logo(db: AsyncSession) -> str:
        """Resets the logo back to default."""
        stmt = select(BrandingLogo).where(BrandingLogo.id == 1)
        result = await db.execute(stmt)
        logo = result.scalar_one_or_none()
        
        if logo:
            await db.delete(logo)
            await db.commit()
            
        return "/images/logo.png"
