import uuid
from sqlalchemy import String, Integer, Boolean
from sqlalchemy.orm import Mapped, mapped_column

from app.db.base import Base
from app.models.mixins import TimestampMixin


def generate_banner_id():
    return f"ban-{uuid.uuid4().hex[:12]}"


class Banner(TimestampMixin, Base):
    """Banners showing new products/promotions displayed on the homepage."""
    __tablename__ = "banners"

    id: Mapped[str] = mapped_column(String(50), primary_key=True, default=generate_banner_id, index=True)
    title: Mapped[str] = mapped_column(String(200), nullable=False)
    description: Mapped[str] = mapped_column(String(1000), nullable=True)
    image_url: Mapped[str] = mapped_column(String(500), nullable=False)
    sort_order: Mapped[int] = mapped_column(Integer, default=0, nullable=False)
    is_active: Mapped[bool] = mapped_column(Boolean, default=True, nullable=False)
    redirect_path: Mapped[str] = mapped_column(String(200), nullable=True)


class BannerSetting(Base):
    """Global banner settings like autoplay slide duration."""
    __tablename__ = "banner_settings"

    id: Mapped[int] = mapped_column(Integer, primary_key=True, default=1)
    slide_duration: Mapped[int] = mapped_column(Integer, default=5, nullable=False)  # in seconds
