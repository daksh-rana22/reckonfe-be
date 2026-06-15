from sqlalchemy import String, Integer
from sqlalchemy.orm import Mapped, mapped_column

from app.db.base import Base
from app.models.mixins import TimestampMixin
import uuid


def generate_testimonial_id():
    return f"testi-{uuid.uuid4().hex[:12]}"


class Testimonial(TimestampMixin, Base):
    """Client reviews/testimonials displayed on the homepage."""
    __tablename__ = "testimonials"

    id: Mapped[str] = mapped_column(String(50), primary_key=True, default=generate_testimonial_id, index=True)
    name: Mapped[str] = mapped_column(String(100), nullable=False)
    designation: Mapped[str] = mapped_column(String(100), nullable=False)
    company: Mapped[str] = mapped_column(String(100), nullable=False)
    industry: Mapped[str] = mapped_column(String(100), nullable=False)
    quote: Mapped[str] = mapped_column(String(1000), nullable=False)
    rating: Mapped[int] = mapped_column(Integer, default=5, nullable=False)
