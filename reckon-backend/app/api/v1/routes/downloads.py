import math
from fastapi import APIRouter, Depends, UploadFile, File, Form, status, Response
from sqlalchemy.ext.asyncio import AsyncSession
from typing import List, Optional

from app.db.session import get_db
from app.core.permissions import require_role
from app.models.user import UserRole
from app.repositories.download_repo import DownloadRepository
from app.schemas.download import CategoryResponse, DownloadResponse
from app.utils.cloudinary_upload import save_local_download_file
from app.core.defaults import DEFAULT_DOWNLOAD_CATEGORIES, DEFAULT_DOWNLOADS
from pydantic import BaseModel, Field

router = APIRouter()


class CategoryCreatePayload(BaseModel):
    value: str
    label: str


class CategoryUpdatePayload(BaseModel):
    label: str


def format_bytes(size_in_bytes: int) -> str:
    """Consistently formats file size strings (e.g. '1.24 MB')."""
    if size_in_bytes == 0:
        return "0 Bytes"
    size_name = ("Bytes", "KB", "MB", "GB")
    i = int(math.floor(math.log(size_in_bytes, 1024)))
    p = math.pow(1024, i)
    s = round(size_in_bytes / p, 2)
    return f"{s} {size_name[i]}"


# ── Category routes ──

@router.get("/categories", response_model=List[CategoryResponse])
async def get_categories(db: AsyncSession = Depends(get_db)):
    """List download categories."""
    return await DownloadRepository.get_all_categories(db)


@router.post("/categories", response_model=CategoryResponse, status_code=status.HTTP_201_CREATED)
async def create_category(
    payload: CategoryCreatePayload,
    db: AsyncSession = Depends(get_db),
    current_user = Depends(require_role(UserRole.ADMIN))
):
    """Create a new download category."""
    # Check if category exists
    existing = await DownloadRepository.get_category(db, payload.value)
    if existing:
        from app.core.exceptions import ConflictError
        raise ConflictError("Category already exists.")
    return await DownloadRepository.create_category(db, value=payload.value, label=payload.label)


@router.put("/categories/{value}", response_model=CategoryResponse)
async def update_category(
    value: str,
    payload: CategoryUpdatePayload,
    db: AsyncSession = Depends(get_db),
    current_user = Depends(require_role(UserRole.ADMIN))
):
    """Update a download category label."""
    category = await DownloadRepository.get_category(db, value)
    if not category:
        from app.core.exceptions import NotFoundError
        raise NotFoundError("Category not found.")
    return await DownloadRepository.update_category(db, category, payload.label)


@router.delete("/categories/{value}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_category(
    value: str,
    db: AsyncSession = Depends(get_db),
    current_user = Depends(require_role(UserRole.ADMIN))
):
    """Delete a download category and all files inside it."""
    category = await DownloadRepository.get_category(db, value)
    if not category:
        from app.core.exceptions import NotFoundError
        raise NotFoundError("Category not found.")
    await DownloadRepository.delete_category(db, category)
    return Response(status_code=status.HTTP_204_NO_CONTENT)


@router.put("/categories/{value}/toggle-active", response_model=CategoryResponse)
async def toggle_category_active(
    value: str,
    db: AsyncSession = Depends(get_db),
    current_user = Depends(require_role(UserRole.ADMIN))
):
    """Toggle a category active state."""
    category = await DownloadRepository.get_category(db, value)
    if not category:
        from app.core.exceptions import NotFoundError
        raise NotFoundError("Category not found.")
    return await DownloadRepository.toggle_category_active(db, category)


# ── Download item routes ──

@router.get("/files", response_model=List[DownloadResponse])
async def list_downloads(db: AsyncSession = Depends(get_db)):
    """List all download files."""
    return await DownloadRepository.get_all_downloads(db)


@router.post("/files", response_model=DownloadResponse, status_code=status.HTTP_201_CREATED)
async def create_download(
    name: str = Form(...),
    desc: Optional[str] = Form(None),
    link: Optional[str] = Form(None),
    type: str = Form(...),
    icon: str = Form("Monitor"),
    isActive: str = Form("true"),
    file: Optional[UploadFile] = File(None),
    db: AsyncSession = Depends(get_db),
    current_user = Depends(require_role(UserRole.ADMIN))
):
    """Create a new download entry (supports uploading a file or storing an external link)."""
    # Check category exists
    category = await DownloadRepository.get_category(db, type)
    if not category:
        from app.core.exceptions import BadRequestError
        raise BadRequestError(f"Category '{type}' does not exist.")

    file_link = link or ""
    file_name = None
    file_size = None
    file_type = None

    if file:
        # Save file locally
        file_link = save_local_download_file(file)
        # Calculate size
        file.file.seek(0, 2)
        bytes_len = file.file.tell()
        file.file.seek(0)
        
        file_name = file.filename
        file_size = format_bytes(bytes_len)
        file_type = file.content_type

    is_active_bool = isActive.lower() == "true"
    
    return await DownloadRepository.create_download(
        db,
        name=name,
        link=file_link,
        type=type,
        desc=desc,
        icon=icon,
        fileName=file_name,
        fileSize=file_size,
        fileType=file_type,
        isActive=is_active_bool
    )


@router.put("/files/{download_id}", response_model=DownloadResponse)
async def update_download(
    download_id: str,
    name: str = Form(...),
    desc: Optional[str] = Form(None),
    link: Optional[str] = Form(None),
    type: str = Form(...),
    icon: str = Form("Monitor"),
    isActive: str = Form("true"),
    file: Optional[UploadFile] = File(None),
    db: AsyncSession = Depends(get_db),
    current_user = Depends(require_role(UserRole.ADMIN))
):
    """Update a download entry."""
    download = await DownloadRepository.get_download(db, download_id)
    if not download:
        from app.core.exceptions import NotFoundError
        raise NotFoundError("Download item not found.")

    category = await DownloadRepository.get_category(db, type)
    if not category:
        from app.core.exceptions import BadRequestError
        raise BadRequestError(f"Category '{type}' does not exist.")

    update_data = {
        "name": name,
        "desc": desc,
        "type": type,
        "icon": icon,
        "isActive": isActive.lower() == "true"
    }

    if file:
        file_link = save_local_download_file(file)
        file.file.seek(0, 2)
        bytes_len = file.file.tell()
        file.file.seek(0)
        
        update_data["link"] = file_link
        update_data["fileName"] = file.filename
        update_data["fileSize"] = format_bytes(bytes_len)
        update_data["fileType"] = file.content_type
    elif link is not None:
        # If user cleared the file and switched to a URL link:
        update_data["link"] = link
        # If link is not local static file, clear filename metadata
        if not link.startswith("/static/"):
            update_data["fileName"] = None
            update_data["fileSize"] = None
            update_data["fileType"] = None

    return await DownloadRepository.update_download(db, download, update_data)


@router.delete("/files/{download_id}", status_code=status.HTTP_204_NO_CONTENT)
async def delete_download(
    download_id: str,
    db: AsyncSession = Depends(get_db),
    current_user = Depends(require_role(UserRole.ADMIN))
):
    """Delete a download entry."""
    download = await DownloadRepository.get_download(db, download_id)
    if not download:
        from app.core.exceptions import NotFoundError
        raise NotFoundError("Download item not found.")
        
    await DownloadRepository.delete_download(db, download)
    return Response(status_code=status.HTTP_204_NO_CONTENT)


@router.put("/files/{download_id}/toggle-active", response_model=DownloadResponse)
async def toggle_download_active(
    download_id: str,
    db: AsyncSession = Depends(get_db),
    current_user = Depends(require_role(UserRole.ADMIN))
):
    """Toggle download active state."""
    download = await DownloadRepository.get_download(db, download_id)
    if not download:
        from app.core.exceptions import NotFoundError
        raise NotFoundError("Download item not found.")
    return await DownloadRepository.toggle_download_active(db, download)


@router.post("/reset")
async def reset_downloads(
    db: AsyncSession = Depends(get_db),
    current_user = Depends(require_role(UserRole.ADMIN))
):
    """Reset downloads back to defaults."""
    categories, downloads = await DownloadRepository.reset(
        db,
        DEFAULT_DOWNLOAD_CATEGORIES,
        DEFAULT_DOWNLOADS
    )
    return {"message": "Downloads reset successfully"}
