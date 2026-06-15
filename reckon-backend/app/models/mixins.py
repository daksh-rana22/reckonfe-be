from datetime import datetime, timezone, timedelta
import uuid
from sqlalchemy import DateTime, Integer, Uuid
from sqlalchemy.orm import Mapped, mapped_column
from sqlalchemy.sql import func


def get_ist_time():
    """Returns current time in IST (UTC +5:30) as a naive datetime."""
    return (datetime.now(timezone.utc) + timedelta(hours=5, minutes=30)).replace(tzinfo=None)


class TimestampMixin:
    """Adds created_at and updated_at datetime columns."""
    created_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=False),
        default=get_ist_time,
        server_default=func.now(),
        nullable=False,
    )
    
    updated_at: Mapped[datetime] = mapped_column(
        DateTime(timezone=False),
        default=get_ist_time,
        onupdate=get_ist_time,
        server_default=func.now(),
        nullable=False,
    )


class IDMixin:
    """Adds an autoincrementing integer id primary key."""
    id: Mapped[int] = mapped_column(
        Integer,
        primary_key=True,
        index=True,
        autoincrement=True,
    )


class UUIDMixin:
    """Adds a UUID primary key (database-agnostic)."""
    id: Mapped[uuid.UUID] = mapped_column(
        Uuid,
        primary_key=True,
        index=True,
        default=uuid.uuid4,
    )
