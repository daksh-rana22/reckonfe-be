from fastapi import APIRouter, Depends, UploadFile, File
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.session import get_db
from app.core.permissions import require_role
from app.models.user import UserRole
from app.repositories.branding_repo import BrandingRepository
from app.utils.cloudinary_upload import upload_image

router = APIRouter()


@router.get("/logo")
async def get_logo(db: AsyncSession = Depends(get_db)):
    """Fetch active branding logo URL."""
    url = await BrandingRepository.get_logo(db)
    return {"logoUrl": url}


@router.post("/logo")
async def upload_logo(
    file: UploadFile = File(...),
    db: AsyncSession = Depends(get_db),
    current_user = Depends(require_role(UserRole.ADMIN))
):
    """Upload new branding logo image."""
    logo_url = upload_image(file, folder="branding")
    saved_url = await BrandingRepository.update_logo(db, logo_url)
    return {"logoUrl": saved_url}


@router.post("/logo/reset")
async def reset_logo(
    db: AsyncSession = Depends(get_db),
    current_user = Depends(require_role(UserRole.ADMIN))
):
    """Reset branding logo back to default."""
    url = await BrandingRepository.reset_logo(db)
    return {"logoUrl": url}
