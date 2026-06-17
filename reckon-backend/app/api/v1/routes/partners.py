from fastapi import APIRouter, Depends, UploadFile, File, Form, status, Response
from sqlalchemy.ext.asyncio import AsyncSession
from typing import List

from app.db.session import get_db
from app.core.permissions import require_role
from app.models.user import UserRole
from app.repositories.client_repo import ClientRepository
from app.schemas.client import ClientLogoResponse
from app.utils.cloudinary_upload import upload_image
from app.core.defaults import DEFAULT_PARTNERS

router = APIRouter()


@router.get("/", response_model=List[ClientLogoResponse])
async def list_partners(db: AsyncSession = Depends(get_db)):
    """List all partner logos."""
    return await ClientRepository.get_all(db, type_filter="partner")


@router.post("/", response_model=ClientLogoResponse, status_code=status.HTTP_201_CREATED)
async def add_partner(
    name: str = Form(...),
    city: str = Form(None),
    file: UploadFile = File(...),
    db: AsyncSession = Depends(get_db),
    current_user = Depends(require_role(UserRole.ADMIN))
):
    """Add a new partner logo (without software category option)."""
    img_url = upload_image(file, folder="partners")
    return await ClientRepository.create(db, name=name, img=img_url, city=city, type="partner")


@router.delete("/{partner_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_partner(
    partner_id: str,
    db: AsyncSession = Depends(get_db),
    current_user = Depends(require_role(UserRole.ADMIN))
):
    """Delete a partner logo."""
    partner = await ClientRepository.get_by_id(db, partner_id)
    if not partner or partner.type != "partner":
        from app.core.exceptions import NotFoundError
        raise NotFoundError("Partner logo not found.")
        
    await ClientRepository.delete(db, partner)
    return Response(status_code=status.HTTP_204_NO_CONTENT)


@router.post("/reset", response_model=List[ClientLogoResponse])
async def reset_partners(
    db: AsyncSession = Depends(get_db),
    current_user = Depends(require_role(UserRole.ADMIN))
):
    """Reset partner logos back to default dataset."""
    return await ClientRepository.reset(db, DEFAULT_PARTNERS, item_type="partner")
