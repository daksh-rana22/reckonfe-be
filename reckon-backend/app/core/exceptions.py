from typing import Any, Optional


class AppException(Exception):
    """Base exception for all custom application errors."""
    def __init__(
        self,
        status_code: int = 500,
        message: str = "An unexpected error occurred",
        errors: Optional[Any] = None
    ):
        self.status_code = status_code
        self.message = message
        self.errors = errors
        super().__init__(message)


class NotFoundError(AppException):
    def __init__(self, message: str = "Resource not found"):
        super().__init__(status_code=404, message=message)


class BadRequestError(AppException):
    def __init__(self, message: str = "Bad request", errors: Optional[Any] = None):
        super().__init__(status_code=400, message=message, errors=errors)


class UnauthorizedError(AppException):
    def __init__(self, message: str = "Unauthorized access"):
        super().__init__(status_code=401, message=message)


class ForbiddenError(AppException):
    def __init__(self, message: str = "You do not have permission to access this resource"):
        super().__init__(status_code=403, message=message)


class ConflictError(AppException):
    def __init__(self, message: str = "Resource conflict"):
        super().__init__(status_code=409, message=message)
