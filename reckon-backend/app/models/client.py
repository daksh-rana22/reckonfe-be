from sqlalchemy import String
from sqlalchemy.orm import Mapped, mapped_column

from app.db.base import Base
from app.models.mixins import TimestampMixin
import uuid


def generate_client_id():
    return f"client-{uuid.uuid4().hex[:12]}"


class ClientLogo(TimestampMixin, Base):
    """Client logos displayed in the marquee slider on the home page."""
    __tablename__ = "client_logos"

    id: Mapped[str] = mapped_column(String(50), primary_key=True, default=generate_client_id, index=True)
    name: Mapped[str] = mapped_column(String(100), nullable=False)
    img: Mapped[str] = mapped_column(String(500), nullable=False)  # Named 'img' to match frontend client.img
    city: Mapped[str | None] = mapped_column(String(100), nullable=True)
    software: Mapped[str | None] = mapped_column(String(50), nullable=True)
    type: Mapped[str] = mapped_column(String(20), default="client", server_default="client")
