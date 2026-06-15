from typing import Any
from sqlalchemy.ext.declarative import declared_attr
from sqlalchemy.orm import DeclarativeBase


class Base(DeclarativeBase):
    """
    Base class for all database models.
    Automatically generates the table name from the class name (lowercased) + "s".
    """
    id: Any

    @declared_attr.directive
    def __tablename__(cls) -> str:
        # Avoid duplicate "s" if naming convention is followed
        name = cls.__name__.lower()
        if name.endswith("s"):
            return name
        return name + "s"
