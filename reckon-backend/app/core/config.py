from pydantic_settings import BaseSettings
from pydantic import field_validator, model_validator
from typing import List, Optional


class Settings(BaseSettings):
    """Application configuration settings."""

    DATABASE_URL: str
    DB_USER: Optional[str] = "postgres"
    DB_PASSWORD: Optional[str] = ""
    DB_HOST: Optional[str] = "localhost"
    DB_PORT: Optional[str] = "5432"
    DB_NAME: Optional[str] = ""
    SECRET_KEY: str
    ALGORITHM: str = "HS256"
    ACCESS_TOKEN_EXPIRE_MINUTES: int = 120
    REFRESH_TOKEN_EXPIRE_DAYS: int = 7
    APP_NAME: str = "Reckon Admin Services API"
    APP_VERSION: str = "1.0.0"
    DEBUG: bool = True
    CORS_ORIGINS: List[str] = ["http://localhost:5173", "http://localhost:3000"]
    CLOUDINARY_URL: Optional[str] = ""
    CLOUDINARY_CLOUD_NAME: Optional[str] = ""
    CLOUDINARY_API_KEY: Optional[str] = ""
    CLOUDINARY_API_SECRET: Optional[str] = ""

    @field_validator("CORS_ORIGINS", mode="before")
    @classmethod
    def parse_cors_origins(cls, v):
        if isinstance(v, str):
            import json
            try:
                return json.loads(v)
            except json.JSONDecodeError:
                return [origin.strip() for origin in v.split(",")]
        return v

    @model_validator(mode="after")
    def assemble_db_connection(self) -> "Settings":
        if self.DATABASE_URL and "{" in self.DATABASE_URL:
            self.DATABASE_URL = self.DATABASE_URL.format(
                DB_USER=self.DB_USER,
                DB_PASSWORD=self.DB_PASSWORD,
                DB_HOST=self.DB_HOST,
                DB_PORT=self.DB_PORT,
                DB_NAME=self.DB_NAME,
            )
        return self

    model_config = {
        "env_file": ".env",
        "env_file_encoding": "utf-8",
        "case_sensitive": True,
    }


# Singleton settings instance
settings = Settings()
