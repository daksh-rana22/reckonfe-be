from typing import Optional, Sequence
from sqlalchemy import select, delete
from sqlalchemy.ext.asyncio import AsyncSession
from app.models.testimonial import Testimonial


class TestimonialRepository:
    """Data-access layer for Testimonial entities."""

    @staticmethod
    async def get_by_id(db: AsyncSession, testimonial_id: str) -> Optional[Testimonial]:
        stmt = select(Testimonial).where(Testimonial.id == testimonial_id)
        result = await db.execute(stmt)
        return result.scalar_one_or_none()

    @staticmethod
    async def get_all(db: AsyncSession) -> Sequence[Testimonial]:
        stmt = select(Testimonial).order_by(Testimonial.created_at.desc())
        result = await db.execute(stmt)
        return result.scalars().all()

    @staticmethod
    async def create(
        db: AsyncSession,
        name: str,
        designation: str,
        company: str,
        industry: str,
        quote: str,
        rating: int
    ) -> Testimonial:
        testimonial = Testimonial(
            name=name,
            designation=designation,
            company=company,
            industry=industry,
            quote=quote,
            rating=rating
        )
        db.add(testimonial)
        await db.commit()
        await db.refresh(testimonial)
        return testimonial

    @staticmethod
    async def update(
        db: AsyncSession,
        testimonial: Testimonial,
        update_data: dict
    ) -> Testimonial:
        for key, val in update_data.items():
            if hasattr(testimonial, key):
                setattr(testimonial, key, val)
        await db.commit()
        await db.refresh(testimonial)
        return testimonial

    @staticmethod
    async def delete(db: AsyncSession, testimonial: Testimonial) -> None:
        await db.delete(testimonial)
        await db.commit()

    @staticmethod
    async def reset(db: AsyncSession, default_testimonials: list[dict]) -> Sequence[Testimonial]:
        """Clears all testimonials and seeds default testimonials."""
        await db.execute(delete(Testimonial))
        await db.commit()

        seeded = []
        for t in default_testimonials:
            testimonial = Testimonial(
                id=t["id"],
                name=t["name"],
                designation=t["designation"],
                company=t["company"],
                industry=t["industry"],
                quote=t["quote"],
                rating=t["rating"]
            )
            db.add(testimonial)
            seeded.append(testimonial)

        await db.commit()
        for s in seeded:
            await db.refresh(s)

        return seeded
