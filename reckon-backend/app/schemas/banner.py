from pydantic import BaseModel, Field
from typing import Optional


class BannerBase(BaseModel):
    title: str
    description: Optional[str] = None
    sort_order: int = 0
    is_active: bool = True
    redirect_path: Optional[str] = None


class BannerCreate(BannerBase):
    pass


class BannerUpdate(BannerBase):
    pass


class BannerResponse(BannerBase):
    id: str
    image_url: str

    class Config:
        from_attributes = True


class BannerDurationUpdate(BaseModel):
    slide_duration: int = Field(default=5, ge=1, le=60)
