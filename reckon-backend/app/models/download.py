import uuid
from sqlalchemy import String, Boolean, ForeignKey, Text
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.db.base import Base
from app.models.mixins import TimestampMixin


def generate_download_id():
    return f"dl-{uuid.uuid4().hex[:12]}"


class DownloadCategory(TimestampMixin, Base):
    """Download Categories (e.g. setups, files, patches)."""
    __tablename__ = "download_categories"

    value: Mapped[str] = mapped_column(String(50), primary_key=True, index=True)
    label: Mapped[str] = mapped_column(String(100), nullable=False)
    is_active: Mapped[bool] = mapped_column(Boolean, default=True, nullable=False)

    # Relationship to downloads
    downloads = relationship("Download", back_populates="category_rel", cascade="all, delete-orphan")


class Download(TimestampMixin, Base):
    """Download installer items and utility files."""
    __tablename__ = "downloads"

    id: Mapped[str] = mapped_column(String(50), primary_key=True, default=generate_download_id, index=True)
    name: Mapped[str] = mapped_column(String(100), nullable=False)
    link: Mapped[str] = mapped_column(String(500), nullable=False)
    type: Mapped[str] = mapped_column(String(50), ForeignKey("download_categories.value", ondelete="CASCADE"), nullable=False)
    desc: Mapped[str | None] = mapped_column(Text, nullable=True) # Maps to frontend 'desc'
    icon: Mapped[str] = mapped_column(String(50), default="Monitor", nullable=False)
    
    # Metadata for uploaded files
    fileName: Mapped[str | None] = mapped_column(String(255), nullable=True)
    fileSize: Mapped[str | None] = mapped_column(String(50), nullable=True)
    fileType: Mapped[str | None] = mapped_column(String(100), nullable=True)
    
    isActive: Mapped[bool] = mapped_column(Boolean, default=True, nullable=False) # Maps to frontend 'isActive'

    # Relationship back to category
    category_rel = relationship("DownloadCategory", back_populates="downloads")
