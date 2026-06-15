from pydantic import BaseModel, Field
from typing import Optional


class CategoryCreate(BaseModel):
    value: str = Field(..., min_length=2, max_length=50)
    label: str = Field(..., min_length=2, max_length=100)


class CategoryResponse(BaseModel):
    value: str
    label: str
    is_active: bool

    class Config:
        from_attributes = True


class DownloadResponse(BaseModel):
    id: str
    name: str
    link: str
    type: str
    desc: Optional[str] = None
    icon: str
    fileName: Optional[str] = None
    fileSize: Optional[str] = None
    fileType: Optional[str] = None
    isActive: bool

    class Config:
        from_attributes = True
