from pydantic import BaseModel


class ClientLogoResponse(BaseModel):
    id: str
    name: str
    img: str # Named 'img' to match frontend client.img key exactly
    city: str | None = None
    software: str | None = None
    type: str = "client"

    class Config:
        from_attributes = True
