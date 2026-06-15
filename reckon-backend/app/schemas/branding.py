from pydantic import BaseModel


class LogoResponse(BaseModel):
    logo_url: str

    class Config:
        from_attributes = True
