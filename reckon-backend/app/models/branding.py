from sqlalchemy import String
from sqlalchemy.orm import Mapped, mapped_column

from app.db.base import Base
from app.models.mixins import IDMixin, TimestampMixin


class BrandingLogo(IDMixin, TimestampMixin, Base):
    """Branding settings containing the main portal logo URL."""
    __tablename__ = "branding_logo"

    logo_url: Mapped[str] = mapped_column(String(500), default="/images/logo.png", server_default="/images/logo.png", nullable=False)
