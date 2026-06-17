from fastapi import APIRouter
from app.api.v1.routes import auth, branding, clients, downloads, gallery, testimonials, partners, banners

api_router = APIRouter()
api_router.include_router(auth.router, prefix="/auth", tags=["Authentication"])
api_router.include_router(branding.router, prefix="/branding", tags=["Branding Logo"])
api_router.include_router(clients.router, prefix="/clients", tags=["Client Logos"])
api_router.include_router(partners.router, prefix="/partners", tags=["Partner Logos"])
api_router.include_router(downloads.router, prefix="/downloads", tags=["Downloads Manager"])
api_router.include_router(gallery.router, prefix="/gallery", tags=["Gallery Manager"])
api_router.include_router(testimonials.router, prefix="/testimonials", tags=["Reviews Manager"])
api_router.include_router(banners.router, prefix="/banners", tags=["Banners Manager"])

