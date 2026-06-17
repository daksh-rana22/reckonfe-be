import os
from contextlib import asynccontextmanager
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

from app.core.config import settings
from app.api.v1.api import api_router
from app.core.handlers import setup_exception_handlers


@asynccontextmanager
async def lifespan(app: FastAPI):
    """
    Lifespan context manager for FastAPI.
    Handles startup database initialization and auto-seeding.
    """
    # ── Startup database initialization ──
    print("Initializing database...")
    from app.db.session import engine
    from app.db.base import Base
    
    async with engine.begin() as conn:
        # Automatically creates tables if they don't exist
        await conn.run_sync(Base.metadata.create_all)
        
        # Ensure redirect_path column exists in banners table
        from sqlalchemy import text
        try:
            await conn.execute(text("ALTER TABLE banners ADD COLUMN IF NOT EXISTS redirect_path VARCHAR(200);"))
            print("Checked/added redirect_path column to banners table.")
        except Exception as e:
            print(f"Banners alter table warning: {e}")
        
    # ── Seed Default Datasets ──
    print("Checking and seeding default data...")
    from app.db.session import AsyncSessionLocal
    from sqlalchemy import select
    
    async with AsyncSessionLocal() as db:
        # 1. Admin account seeding
        from app.models.user import User, UserRole
        from app.core.security import hash_password
        
        stmt = select(User).where(User.role == UserRole.ADMIN)
        result = await db.execute(stmt)
        if not result.scalars().first():
            # Seed default admin user (admin/admin)
            admin_user = User(
                full_name="admin",
                email="admin@reckonsales.in",
                hashed_password=hash_password("admin"),
                role=UserRole.ADMIN
            )
            db.add(admin_user)
            await db.commit()
            print("Successfully seeded default admin user (admin/admin)")
            
        # 2. Download categories seeding
        from app.models.download import DownloadCategory, Download
        from app.core.defaults import DEFAULT_DOWNLOAD_CATEGORIES, DEFAULT_DOWNLOADS
        
        stmt_cat = select(DownloadCategory)
        res_cat = await db.execute(stmt_cat)
        if not res_cat.scalars().first():
            for c in DEFAULT_DOWNLOAD_CATEGORIES:
                db.add(DownloadCategory(value=c["value"], label=c["label"]))
            await db.commit()
            print("Successfully seeded default download categories")
            
        # 3. Downloads file seeding
        stmt_dl = select(Download)
        res_dl = await db.execute(stmt_dl)
        if not res_dl.scalars().first():
            for d in DEFAULT_DOWNLOADS:
                db.add(Download(
                    id=d["id"],
                    name=d["name"],
                    link=d["link"],
                    type=d["type"],
                    desc=d.get("desc"),
                    icon=d.get("icon", "Monitor"),
                    isActive=d.get("isActive", True)
                ))
            await db.commit()
            print("Successfully seeded default download files")

        # 4. Client Logos marquee seeding
        from app.models.client import ClientLogo
        from app.core.defaults import DEFAULT_CLIENTS, DEFAULT_PARTNERS
        
        stmt_cli = select(ClientLogo).where(ClientLogo.type == "client")
        res_cli = await db.execute(stmt_cli)
        if not res_cli.scalars().first():
            for c in DEFAULT_CLIENTS:
                db.add(ClientLogo(id=c["id"], name=c["name"], img=c["img"], city=c.get("city"), software=c.get("software"), type="client"))
            await db.commit()
            print("Successfully seeded default client logos")

        # 4b. Partner Logos seeding
        stmt_part = select(ClientLogo).where(ClientLogo.type == "partner")
        res_part = await db.execute(stmt_part)
        if not res_part.scalars().first():
            for p in DEFAULT_PARTNERS:
                db.add(ClientLogo(id=p["id"], name=p["name"], img=p["img"], city=p.get("city"), type="partner"))
            await db.commit()
            print("Successfully seeded default partner logos")

        # 5. Gallery categories and images seeding
        from app.models.gallery import GalleryCategory, GalleryItem
        from app.core.defaults import DEFAULT_GALLERY_CATEGORIES, DEFAULT_GALLERY_ITEMS
        
        stmt_gcat = select(GalleryCategory)
        res_gcat = await db.execute(stmt_gcat)
        if not res_gcat.scalars().first():
            for gc in DEFAULT_GALLERY_CATEGORIES:
                db.add(GalleryCategory(value=gc["value"], label=gc["label"]))
            await db.commit()
            print("Successfully seeded default gallery categories")
            
        stmt_gi = select(GalleryItem)
        res_gi = await db.execute(stmt_gi)
        if not res_gi.scalars().first():
            for gi in DEFAULT_GALLERY_ITEMS:
                db.add(GalleryItem(
                    id=gi["id"],
                    title=gi["title"],
                    category=gi["category"],
                    src=gi["src"]
                ))
            await db.commit()
            print("Successfully seeded default gallery photos")

        # 6. Testimonials seeding
        from app.models.testimonial import Testimonial
        from app.core.defaults import DEFAULT_TESTIMONIALS
        
        stmt_testi = select(Testimonial)
        res_testi = await db.execute(stmt_testi)
        if not res_testi.scalars().first():
            for t in DEFAULT_TESTIMONIALS:
                db.add(Testimonial(
                    id=t["id"],
                    name=t["name"],
                    designation=t["designation"],
                    company=t["company"],
                    industry=t["industry"],
                    quote=t["quote"],
                    rating=t["rating"]
                ))
            await db.commit()
            print("Successfully seeded default client testimonials")

        # 7. Banner & BannerSetting seeding
        from app.models.banner import Banner, BannerSetting
        from app.core.defaults import DEFAULT_BANNERS
        
        stmt_banner = select(Banner)
        res_banner = await db.execute(stmt_banner)
        if not res_banner.scalars().first():
            for b in DEFAULT_BANNERS:
                db.add(Banner(
                    id=b["id"],
                    title=b["title"],
                    description=b.get("description"),
                    image_url=b["image_url"],
                    sort_order=b.get("sort_order", 0),
                    is_active=b.get("is_active", True),
                    redirect_path=b.get("redirect_path")
                ))
            await db.commit()
            print("Successfully seeded default product banners")

        stmt_bsetting = select(BannerSetting)
        res_bsetting = await db.execute(stmt_bsetting)
        if not res_bsetting.scalars().first():
            db.add(BannerSetting(id=1, slide_duration=5))
            await db.commit()
            print("Successfully seeded default banner duration settings")
            
    yield  # Serve requests

    
    # ── Shutdown Logic ──
    print("Shutting down backend services...")


def create_app() -> FastAPI:
    """Application factory."""
    application = FastAPI(
        title=settings.APP_NAME,
        version=settings.APP_VERSION,
        description="FastAPI Backend for Reckon Admin Services Portal",
        docs_url="/docs",
        redoc_url="/redoc",
        debug=settings.DEBUG,
        lifespan=lifespan,
    )

    # ── CORS Middleware ──
    application.add_middleware(
        CORSMiddleware,
        allow_origins=settings.CORS_ORIGINS,
        allow_origin_regex=r"^https?://(localhost|127\.0\.0\.1)(:\d+)?$",
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    # ── Global Exception Handlers ──
    setup_exception_handlers(application)

    # ── Mount Static Files ──
    # Ensure static directories exist
    os.makedirs(os.path.join("app", "static", "uploads"), exist_ok=True)
    os.makedirs(os.path.join("app", "static", "downloads"), exist_ok=True)
    application.mount("/static", StaticFiles(directory=os.path.join("app", "static")), name="static")

    # ── Routers ──
    application.include_router(api_router, prefix="/api/v1")

    # ── Root endpoint ──
    @application.get("/", tags=["Root"], include_in_schema=False)
    async def root():
        return {
            "app": settings.APP_NAME,
            "version": settings.APP_VERSION,
            "docs": "/docs",
        }

    return application


app = create_app()
