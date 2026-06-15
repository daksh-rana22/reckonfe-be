"""
Common API dependencies re-exported for convenience.
"""

from app.db.session import get_db
from app.core.permissions import (
    get_current_user,
    get_current_active_user,
    require_role,
)
