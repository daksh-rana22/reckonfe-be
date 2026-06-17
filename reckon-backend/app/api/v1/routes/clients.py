from fastapi import APIRouter, Depends, UploadFile, File, Form, status, Response
from sqlalchemy.ext.asyncio import AsyncSession
from typing import List, Optional

from app.db.session import get_db
from app.core.permissions import require_role
from app.models.user import UserRole
from app.repositories.client_repo import ClientRepository
from app.schemas.client import ClientLogoResponse
from app.utils.cloudinary_upload import upload_image
from app.core.defaults import DEFAULT_CLIENTS

router = APIRouter()


@router.get("/", response_model=List[ClientLogoResponse])
async def list_clients(db: AsyncSession = Depends(get_db)):
    """List all client partners logos."""
    return await ClientRepository.get_all(db, type_filter="client")


@router.post("/", response_model=ClientLogoResponse, status_code=status.HTTP_201_CREATED)
async def add_client(
    name: str = Form(...),
    city: str = Form(None),
    software: str = Form(None),
    file: UploadFile = File(...),
    db: AsyncSession = Depends(get_db),
    current_user = Depends(require_role(UserRole.ADMIN))
):
    """Add a new client partner with uploaded image logo."""
    img_url = upload_image(file, folder="clients")
    return await ClientRepository.create(db, name=name, img=img_url, city=city, software=software, type="client")


@router.put("/{client_id}", response_model=ClientLogoResponse)
async def update_client(
    client_id: str,
    name: str = Form(...),
    city: str = Form(None),
    software: str = Form(None),
    file: Optional[UploadFile] = File(None),
    db: AsyncSession = Depends(get_db),
    current_user = Depends(require_role(UserRole.ADMIN))
):
    """Update an existing client logo."""
    client = await ClientRepository.get_by_id(db, client_id)
    if not client:
        from app.core.exceptions import NotFoundError
        raise NotFoundError("Client logo not found.")
        
    update_data = {
        "name": name,
        "city": city,
        "software": software
    }
    if file:
        update_data["img"] = upload_image(file, folder="clients")
        
    return await ClientRepository.update(db, client, update_data)


@router.delete("/{client_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_client(
    client_id: str,
    db: AsyncSession = Depends(get_db),
    current_user = Depends(require_role(UserRole.ADMIN))
):
    """Delete a client partner logo."""
    client = await ClientRepository.get_by_id(db, client_id)
    if not client:
        from app.core.exceptions import NotFoundError
        raise NotFoundError("Client logo not found.")
        
    await ClientRepository.delete(db, client)
    return Response(status_code=status.HTTP_204_NO_CONTENT)


@router.post("/reset", response_model=List[ClientLogoResponse])
async def reset_clients(
    db: AsyncSession = Depends(get_db),
    current_user = Depends(require_role(UserRole.ADMIN))
):
    """Reset client logos back to default dataset."""
    return await ClientRepository.reset(db, DEFAULT_CLIENTS, item_type="client")
