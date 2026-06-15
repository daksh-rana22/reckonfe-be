from pydantic import BaseModel


class GalleryCategoryResponse(BaseModel):
    value: str
    label: str

    class Config:
        from_attributes = True


class GalleryItemResponse(BaseModel):
    id: str
    title: str
    category: str # Maps to frontend item.category
    src: str # Maps to frontend item.src

    class Config:
        from_attributes = True
