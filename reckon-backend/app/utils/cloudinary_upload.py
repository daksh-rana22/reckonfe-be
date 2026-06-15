import os
import uuid
import cloudinary
import cloudinary.uploader
from fastapi import UploadFile

from app.core.config import settings
from app.core.exceptions import BadRequestError

# Only configure Cloudinary if credentials are provided
cloudinary_configured = False
if (
    settings.CLOUDINARY_CLOUD_NAME
    and settings.CLOUDINARY_API_KEY
    and settings.CLOUDINARY_API_SECRET
):
    cloudinary.config(
        cloud_name=settings.CLOUDINARY_CLOUD_NAME,
        api_key=settings.CLOUDINARY_API_KEY,
        api_secret=settings.CLOUDINARY_API_SECRET,
        secure=True,
    )
    cloudinary_configured = True


def upload_image(file: UploadFile, folder: str = "reckon") -> str:
    """
    Uploads an image to Cloudinary and returns the secure URL.
    Falls back to local file storage if Cloudinary credentials are not configured.
    """
    if cloudinary_configured:
        try:
            result = cloudinary.uploader.upload(
                file.file,
                folder=folder,
                resource_type="image"
            )
            return result.get("secure_url")
        except Exception as e:
            # If Cloudinary upload fails, log and fallback to local storage
            print(f"Cloudinary upload failed: {str(e)}. Falling back to local storage.")

    # FALLBACK: Local file storage
    try:
        # Create static uploads directory
        uploads_dir = os.path.join("app", "static", "uploads")
        os.makedirs(uploads_dir, exist_ok=True)
        
        # Create a unique filename
        ext = os.path.splitext(file.filename)[1]
        unique_filename = f"{uuid.uuid4().hex}{ext}"
        filepath = os.path.join(uploads_dir, unique_filename)
        
        # Write file contents
        file.file.seek(0)
        with open(filepath, "wb") as f:
            f.write(file.file.read())
            
        # Return local static URL
        return f"/static/uploads/{unique_filename}"
    except Exception as e:
        raise BadRequestError(f"File upload failed: {str(e)}")


def save_local_download_file(file: UploadFile) -> str:
    """
    Saves a software installer file locally on disk.
    Served from static files for download.
    """
    try:
        downloads_dir = os.path.join("app", "static", "downloads")
        os.makedirs(downloads_dir, exist_ok=True)
        
        # Use secure name or preserve original filename (preserving helps when user downloads)
        # To avoid overwrite, suffix with a short uuid if file already exists
        filename = file.filename
        filepath = os.path.join(downloads_dir, filename)
        if os.path.exists(filepath):
            name, ext = os.path.splitext(filename)
            filename = f"{name}_{uuid.uuid4().hex[:6]}{ext}"
            filepath = os.path.join(downloads_dir, filename)
            
        file.file.seek(0)
        with open(filepath, "wb") as f:
            f.write(file.file.read())
            
        return f"/static/downloads/{filename}"
    except Exception as e:
        raise BadRequestError(f"Installer file upload failed: {str(e)}")
