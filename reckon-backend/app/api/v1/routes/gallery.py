from fastapi import APIRouter, Depends, UploadFile, File, Form, status, Response
from sqlalchemy.ext.asyncio import AsyncSession
from typing import List, Optional

from app.db.session import get_db
from app.core.permissions import require_role
from app.models.user import UserRole
from app.repositories.gallery_repo import GalleryRepository
from app.schemas.gallery import GalleryCategoryResponse, GalleryItemResponse
from app.utils.cloudinary_upload import upload_image
from app.core.defaults import DEFAULT_GALLERY_CATEGORIES, DEFAULT_GALLERY_ITEMS
from pydantic import BaseModel

router = APIRouter()


class GalleryCatCreatePayload(BaseModel):
    value: str
    label: str


class GalleryCatUpdatePayload(BaseModel):
    label: str


# ── Category (Album) Routes ──

@router.get("/categories", response_model=List[GalleryCategoryResponse])
async def get_categories(db: AsyncSession = Depends(get_db)):
    """List gallery categories."""
    return await GalleryRepository.get_all_categories(db)


@router.post("/categories", response_model=GalleryCategoryResponse, status_code=status.HTTP_201_CREATED)
async def create_category(
    payload: GalleryCatCreatePayload,
    db: AsyncSession = Depends(get_db),
    current_user = Depends(require_role(UserRole.ADMIN))
):
    """Create a new gallery category."""
    existing = await GalleryRepository.get_category(db, payload.value)
    if existing:
        from app.core.exceptions import ConflictError
        raise ConflictError("Gallery category already exists.")
    return await GalleryRepository.create_category(db, value=payload.value, label=payload.label)


@router.put("/categories/{value}", response_model=GalleryCategoryResponse)
async def update_category(
    value: str,
    payload: GalleryCatUpdatePayload,
    db: AsyncSession = Depends(get_db),
    current_user = Depends(require_role(UserRole.ADMIN))
):
    """Update a gallery category label."""
    category = await GalleryRepository.get_category(db, value)
    if not category:
        from app.core.exceptions import NotFoundError
        raise NotFoundError("Gallery category not found.")
    return await GalleryRepository.update_category(db, category, payload.label)


@router.delete("/categories/{value}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_category(
    value: str,
    db: AsyncSession = Depends(get_db),
    current_user = Depends(require_role(UserRole.ADMIN))
):
    """Delete a gallery category and all photos inside it."""
    category = await GalleryRepository.get_category(db, value)
    if not category:
        from app.core.exceptions import NotFoundError
        raise NotFoundError("Gallery category not found.")
    await GalleryRepository.delete_category(db, category)
    return Response(status_code=status.HTTP_204_NO_CONTENT)


# ── Item (Photo) Routes ──

@router.get("/items", response_model=List[GalleryItemResponse])
async def list_items(db: AsyncSession = Depends(get_db)):
    """List all gallery photos."""
    return await GalleryRepository.get_all_items(db)


@router.post("/items", response_model=GalleryItemResponse, status_code=status.HTTP_201_CREATED)
async def create_item(
    title: str = Form(...),
    category: str = Form(...),
    src: Optional[str] = Form(None),
    file: Optional[UploadFile] = File(None),
    db: AsyncSession = Depends(get_db),
    current_user = Depends(require_role(UserRole.ADMIN))
):
    """Add a photo to a gallery album (supports file upload or raw image link)."""
    # Check category exists
    cat_exists = await GalleryRepository.get_category(db, category)
    if not cat_exists:
        from app.core.exceptions import BadRequestError
        raise BadRequestError(f"Category '{category}' does not exist.")

    img_src = src or ""
    if file:
        img_src = upload_image(file, folder="gallery")

    return await GalleryRepository.create_item(db, title=title, category=category, src=img_src)


@router.delete("/items/{item_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_item(
    item_id: str,
    db: AsyncSession = Depends(get_db),
    current_user = Depends(require_role(UserRole.ADMIN))
):
    """Delete a gallery photo."""
    item = await GalleryRepository.get_item(db, item_id)
    if not item:
        from app.core.exceptions import NotFoundError
        raise NotFoundError("Gallery item not found.")
    await GalleryRepository.delete_item(db, item)
    return Response(status_code=status.HTTP_204_NO_CONTENT)


@router.post("/reset")
async def reset_gallery(
    db: AsyncSession = Depends(get_db),
    current_user = Depends(require_role(UserRole.ADMIN))
):
    """Reset gallery albums and photos back to default dataset."""
    categories, items = await GalleryRepository.reset(
        db,
        DEFAULT_GALLERY_CATEGORIES,
        DEFAULT_GALLERY_ITEMS
    )
    return {"message": "Gallery reset successfully"}
