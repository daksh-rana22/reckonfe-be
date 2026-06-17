from fastapi import APIRouter, Depends, status, Response, UploadFile, File, Form
from sqlalchemy.ext.asyncio import AsyncSession
from typing import List, Optional

from app.db.session import get_db
from app.core.permissions import require_role
from app.models.user import UserRole
from app.repositories.banner_repo import BannerRepository
from app.schemas.banner import BannerResponse, BannerDurationUpdate
from app.utils.cloudinary_upload import upload_image
from app.core.defaults import DEFAULT_BANNERS

router = APIRouter()


@router.get("/", response_model=List[BannerResponse])
async def list_banners(db: AsyncSession = Depends(get_db)):
    """List all banners."""
    return await BannerRepository.get_all(db)


@router.post("/", response_model=BannerResponse, status_code=status.HTTP_201_CREATED)
async def add_banner(
    title: str = Form(...),
    description: Optional[str] = Form(None),
    sort_order: int = Form(0),
    is_active: bool = Form(True),
    redirect_path: Optional[str] = Form(None),
    file: Optional[UploadFile] = File(None),
    db: AsyncSession = Depends(get_db),
    current_user = Depends(require_role(UserRole.ADMIN))
):
    """Add a new homepage banner with an optional uploaded image."""
    image_url = "placeholder"
    if file:
        image_url = upload_image(file, folder="banners")
        
    return await BannerRepository.create(
        db,
        title=title,
        description=description,
        image_url=image_url,
        sort_order=sort_order,
        is_active=is_active,
        redirect_path=redirect_path
    )


@router.delete("/{banner_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_banner(
    banner_id: str,
    db: AsyncSession = Depends(get_db),
    current_user = Depends(require_role(UserRole.ADMIN))
):
    """Delete a banner."""
    banner = await BannerRepository.get_by_id(db, banner_id)
    if not banner:
        from app.core.exceptions import NotFoundError
        raise NotFoundError("Banner not found.")
        
    await BannerRepository.delete(db, banner)
    return Response(status_code=status.HTTP_204_NO_CONTENT)


@router.post("/reset", response_model=List[BannerResponse])
async def reset_banners(
    db: AsyncSession = Depends(get_db),
    current_user = Depends(require_role(UserRole.ADMIN))
):
    """Reset banners back to default dataset."""
    return await BannerRepository.reset(db, DEFAULT_BANNERS)


@router.get("/duration")
async def get_slide_duration(db: AsyncSession = Depends(get_db)):
    """Get global banner slide duration."""
    duration = await BannerRepository.get_duration(db)
    return {"slide_duration": duration}


@router.post("/duration")
async def update_slide_duration(
    data: BannerDurationUpdate,
    db: AsyncSession = Depends(get_db),
    current_user = Depends(require_role(UserRole.ADMIN))
):
    """Update global banner slide duration."""
    duration = await BannerRepository.update_duration(db, data.slide_duration)
    return {"slide_duration": duration}
