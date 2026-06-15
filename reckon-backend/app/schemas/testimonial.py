from pydantic import BaseModel, Field


class TestimonialBase(BaseModel):
    name: str
    designation: str
    company: str
    industry: str
    quote: str
    rating: int = Field(default=5, ge=1, le=5)


class TestimonialCreate(TestimonialBase):
    pass


class TestimonialUpdate(TestimonialBase):
    pass


class TestimonialResponse(TestimonialBase):
    id: str

    class Config:
        from_attributes = True
