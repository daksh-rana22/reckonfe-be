import uuid
from sqlalchemy import String, ForeignKey
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.db.base import Base
from app.models.mixins import TimestampMixin


def generate_gallery_id():
    return f"gi-{uuid.uuid4().hex[:12]}"


class GalleryCategory(TimestampMixin, Base):
    """Photo gallery categories representing event albums."""
    __tablename__ = "gallery_categories"

    value: Mapped[str] = mapped_column(String(50), primary_key=True, index=True)
    label: Mapped[str] = mapped_column(String(100), nullable=False)

    # Relationship to items
    items = relationship("GalleryItem", back_populates="category_rel", cascade="all, delete-orphan")


class GalleryItem(TimestampMixin, Base):
    """Gallery photos representing events and functions."""
    __tablename__ = "gallery_items"

    id: Mapped[str] = mapped_column(String(50), primary_key=True, default=generate_gallery_id, index=True)
    title: Mapped[str] = mapped_column(String(150), nullable=False)
    category: Mapped[str] = mapped_column(String(50), ForeignKey("gallery_categories.value", ondelete="CASCADE"), nullable=False)
    src: Mapped[str] = mapped_column(String(500), nullable=False)  # Named 'src' to match frontend item.src

    # Relationship back to category
    category_rel = relationship("GalleryCategory", back_populates="items")
