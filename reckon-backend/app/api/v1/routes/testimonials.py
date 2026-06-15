from fastapi import APIRouter, Depends, status, Response
from sqlalchemy.ext.asyncio import AsyncSession
from typing import List

from app.db.session import get_db
from app.core.permissions import require_role
from app.models.user import UserRole
from app.repositories.testimonial_repo import TestimonialRepository
from app.schemas.testimonial import TestimonialCreate, TestimonialUpdate, TestimonialResponse
from app.core.defaults import DEFAULT_TESTIMONIALS

router = APIRouter()


@router.get("/", response_model=List[TestimonialResponse])
async def list_testimonials(db: AsyncSession = Depends(get_db)):
    """List all client testimonials."""
    return await TestimonialRepository.get_all(db)


@router.post("/", response_model=TestimonialResponse, status_code=status.HTTP_201_CREATED)
async def add_testimonial(
    data: TestimonialCreate,
    db: AsyncSession = Depends(get_db),
    current_user = Depends(require_role(UserRole.ADMIN))
):
    """Add a new client testimonial/review."""
    return await TestimonialRepository.create(
        db,
        name=data.name,
        designation=data.designation,
        company=data.company,
        industry=data.industry,
        quote=data.quote,
        rating=data.rating
    )


@router.put("/{testimonial_id}", response_model=TestimonialResponse)
async def update_testimonial(
    testimonial_id: str,
    data: TestimonialUpdate,
    db: AsyncSession = Depends(get_db),
    current_user = Depends(require_role(UserRole.ADMIN))
):
    """Update an existing client testimonial/review."""
    testimonial = await TestimonialRepository.get_by_id(db, testimonial_id)
    if not testimonial:
        from app.core.exceptions import NotFoundError
        raise NotFoundError("Testimonial not found.")
        
    return await TestimonialRepository.update(db, testimonial, data.model_dump())


@router.delete("/{testimonial_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_testimonial(
    testimonial_id: str,
    db: AsyncSession = Depends(get_db),
    current_user = Depends(require_role(UserRole.ADMIN))
):
    """Delete a client testimonial/review."""
    testimonial = await TestimonialRepository.get_by_id(db, testimonial_id)
    if not testimonial:
        from app.core.exceptions import NotFoundError
        raise NotFoundError("Testimonial not found.")
        
    await TestimonialRepository.delete(db, testimonial)
    return Response(status_code=status.HTTP_204_NO_CONTENT)


@router.post("/reset", response_model=List[TestimonialResponse])
async def reset_testimonials(
    db: AsyncSession = Depends(get_db),
    current_user = Depends(require_role(UserRole.ADMIN))
):
    """Reset testimonials back to default dataset."""
    return await TestimonialRepository.reset(db, DEFAULT_TESTIMONIALS)
