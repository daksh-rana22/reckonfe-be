import { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { Monitor, FileText, Cloud, Hammer } from 'lucide-react';

const AdminStoreContext = createContext();

const API_BASE = 'http://127.0.0.1:8000/api/v1';
const HOST_BASE = 'http://127.0.0.1:8000';

// Helper to format file source links
function formatLink(url) {
  if (url && url.startsWith('/static/')) {
    return `${HOST_BASE}${url}`;
  }
  return url;
}

// Icon name → component mapping
const ICON_MAP = { Monitor, FileText, Cloud, Hammer };

export function getIconComponent(iconName) {
  return ICON_MAP[iconName] || Monitor;
}

export function AdminStoreProvider({ children }) {
  const [logoUrl, setLogoUrl] = useState('/images/logo.png');
  const [clientLogos, setClientLogos] = useState([]);
  const [partnerLogos, setPartnerLogos] = useState([]);
  const [categories, setCategories] = useState([]);
  const [downloads, setDownloads] = useState([]);
  const [galleryCategories, setGalleryCategories] = useState([]);
  const [galleryItems, setGalleryItems] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [banners, setBanners] = useState([]);
  const [slideDuration, setSlideDuration] = useState(5);

  // Fetch token helper
  const getHeaders = useCallback((isMultipart = false) => {
    const token = localStorage.getItem('reckon-access-token');
    const headers = {};
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }
    if (!isMultipart) {
      headers['Content-Type'] = 'application/json';
    }
    return headers;
  }, []);

  // ── Getters ──
  const fetchLogo = useCallback(async () => {
    try {
      const res = await fetch(`${API_BASE}/branding/logo`);
      if (res.ok) {
        const data = await res.json();
        setLogoUrl(formatLink(data.logoUrl));
      }
    } catch (err) {
      console.error('Error fetching logo:', err);
    }
  }, []);

  const fetchClientLogos = useCallback(async () => {
    try {
      const res = await fetch(`${API_BASE}/clients`);
      if (res.ok) {
        const data = await res.json();
        setClientLogos(data.map(c => ({ ...c, img: formatLink(c.img) })));
      }
    } catch (err) {
      console.error('Error fetching client logos:', err);
    }
  }, []);

  const fetchPartnerLogos = useCallback(async () => {
    try {
      const res = await fetch(`${API_BASE}/partners`);
      if (res.ok) {
        const data = await res.json();
        setPartnerLogos(data.map(p => ({ ...p, img: formatLink(p.img) })));
      }
    } catch (err) {
      console.error('Error fetching partner logos:', err);
    }
  }, []);

  const fetchDownloads = useCallback(async () => {
    try {
      const resCat = await fetch(`${API_BASE}/downloads/categories`);
      if (resCat.ok) {
        const dataCat = await resCat.json();
        setCategories(dataCat);
      }
      
      const resFiles = await fetch(`${API_BASE}/downloads/files`);
      if (resFiles.ok) {
        const dataFiles = await resFiles.json();
        setDownloads(dataFiles.map(d => ({ ...d, link: formatLink(d.link) })));
      }
    } catch (err) {
      console.error('Error fetching downloads:', err);
    }
  }, []);

  const fetchGallery = useCallback(async () => {
    try {
      const resCat = await fetch(`${API_BASE}/gallery/categories`);
      if (resCat.ok) {
        const dataCat = await resCat.json();
        setGalleryCategories(dataCat);
      }
      
      const resItems = await fetch(`${API_BASE}/gallery/items`);
      if (resItems.ok) {
        const dataItems = await resItems.json();
        setGalleryItems(dataItems.map(item => ({ ...item, src: formatLink(item.src) })));
      }
    } catch (err) {
      console.error('Error fetching gallery:', err);
    }
  }, []);

  const fetchTestimonials = useCallback(async () => {
    try {
      const res = await fetch(`${API_BASE}/testimonials`);
      if (res.ok) {
        const data = await res.json();
        setTestimonials(data);
      }
    } catch (err) {
      console.error('Error fetching testimonials:', err);
    }
  }, []);

  const fetchBanners = useCallback(async () => {
    try {
      const res = await fetch(`${API_BASE}/banners`);
      if (res.ok) {
        const data = await res.json();
        setBanners(data.map(b => ({ ...b, image_url: formatLink(b.image_url) })));
      }
    } catch (err) {
      console.error('Error fetching banners:', err);
    }
  }, []);

  const fetchSlideDuration = useCallback(async () => {
    try {
      const res = await fetch(`${API_BASE}/banners/duration`);
      if (res.ok) {
        const data = await res.json();
        setSlideDuration(data.slide_duration);
      }
    } catch (err) {
      console.error('Error fetching slide duration:', err);
    }
  }, []);

  // Load all data on mount
  useEffect(() => {
    fetchLogo();
    fetchClientLogos();
    fetchPartnerLogos();
    fetchDownloads();
    fetchGallery();
    fetchTestimonials();
    fetchBanners();
    fetchSlideDuration();
  }, [fetchLogo, fetchClientLogos, fetchPartnerLogos, fetchDownloads, fetchGallery, fetchTestimonials, fetchBanners, fetchSlideDuration]);

  // ── Branding mutations ──
  const updateLogo = useCallback(async (fileBlob) => {
    try {
      const formData = new FormData();
      formData.append('file', fileBlob);
      
      const res = await fetch(`${API_BASE}/branding/logo`, {
        method: 'POST',
        headers: getHeaders(true),
        body: formData
      });
      if (res.ok) {
        const data = await res.json();
        setLogoUrl(formatLink(data.logoUrl));
      }
    } catch (err) {
      console.error('Error updating logo:', err);
    }
  }, [getHeaders]);

  const resetLogo = useCallback(async () => {
    try {
      const res = await fetch(`${API_BASE}/branding/logo/reset`, {
        method: 'POST',
        headers: getHeaders()
      });
      if (res.ok) {
        const data = await res.json();
        setLogoUrl(formatLink(data.logoUrl));
      }
    } catch (err) {
      console.error('Error resetting logo:', err);
    }
  }, [getHeaders]);

  // ── Client mutations ──
  const addClientLogo = useCallback(async (name, fileBlob, city, software) => {
    try {
      const formData = new FormData();
      formData.append('name', name);
      if (city) {
        formData.append('city', city);
      }
      if (software) {
        formData.append('software', software);
      }
      formData.append('file', fileBlob);
      
      const res = await fetch(`${API_BASE}/clients`, {
        method: 'POST',
        headers: getHeaders(true),
        body: formData
      });
      if (res.ok) {
        await fetchClientLogos();
      } else {
        const err = await res.json();
        throw new Error(err.message || 'Failed to add client logo.');
      }
    } catch (err) {
      console.error('Error adding client logo:', err);
      throw err;
    }
  }, [fetchClientLogos, getHeaders]);

  const deleteClientLogo = useCallback(async (id) => {
    try {
      const res = await fetch(`${API_BASE}/clients/${id}`, {
        method: 'DELETE',
        headers: getHeaders()
      });
      if (res.ok) {
        await fetchClientLogos();
      }
    } catch (err) {
      console.error('Error deleting client logo:', err);
    }
  }, [fetchClientLogos, getHeaders]);

  const updateClientLogo = useCallback(async (id, name, fileBlob, city, software) => {
    try {
      const formData = new FormData();
      formData.append('name', name);
      if (city) {
        formData.append('city', city);
      } else {
        formData.append('city', '');
      }
      if (software) {
        formData.append('software', software);
      } else {
        formData.append('software', 'all');
      }
      if (fileBlob) {
        formData.append('file', fileBlob);
      }
      
      const res = await fetch(`${API_BASE}/clients/${id}`, {
        method: 'PUT',
        headers: getHeaders(true),
        body: formData
      });
      if (res.ok) {
        await fetchClientLogos();
      } else {
        const err = await res.json();
        throw new Error(err.message || 'Failed to update client logo.');
      }
    } catch (err) {
      console.error('Error updating client logo:', err);
      throw err;
    }
  }, [fetchClientLogos, getHeaders]);

  const resetClientLogos = useCallback(async () => {
    try {
      const res = await fetch(`${API_BASE}/clients/reset`, {
        method: 'POST',
        headers: getHeaders()
      });
      if (res.ok) {
        await fetchClientLogos();
      }
    } catch (err) {
      console.error('Error resetting client logos:', err);
    }
  }, [fetchClientLogos, getHeaders]);

  // ── Partner mutations ──
  const addPartnerLogo = useCallback(async (name, fileBlob, city) => {
    try {
      const formData = new FormData();
      formData.append('name', name);
      if (city) {
        formData.append('city', city);
      }
      formData.append('file', fileBlob);
      
      const res = await fetch(`${API_BASE}/partners`, {
        method: 'POST',
        headers: getHeaders(true),
        body: formData
      });
      if (res.ok) {
        await fetchPartnerLogos();
      } else {
        const err = await res.json();
        throw new Error(err.message || 'Failed to add partner logo.');
      }
    } catch (err) {
      console.error('Error adding partner logo:', err);
      throw err;
    }
  }, [fetchPartnerLogos, getHeaders]);

  const deletePartnerLogo = useCallback(async (id) => {
    try {
      const res = await fetch(`${API_BASE}/partners/${id}`, {
        method: 'DELETE',
        headers: getHeaders()
      });
      if (res.ok) {
        await fetchPartnerLogos();
      }
    } catch (err) {
      console.error('Error deleting partner logo:', err);
    }
  }, [fetchPartnerLogos, getHeaders]);

  const resetPartnerLogos = useCallback(async () => {
    try {
      const res = await fetch(`${API_BASE}/partners/reset`, {
        method: 'POST',
        headers: getHeaders()
      });
      if (res.ok) {
        await fetchPartnerLogos();
      }
    } catch (err) {
      console.error('Error resetting partner logos:', err);
    }
  }, [fetchPartnerLogos, getHeaders]);

  // ── Download Categories mutations ──
  const addCategory = useCallback(async (label) => {
    try {
      const value = label.trim().toLowerCase().replace(/[^a-z0-9]/g, '-');
      const res = await fetch(`${API_BASE}/downloads/categories`, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify({ value, label })
      });
      if (res.ok) {
        await fetchDownloads();
      } else {
        const err = await res.json();
        throw new Error(err.message || 'Category already exists.');
      }
    } catch (err) {
      console.error('Error adding category:', err);
      throw err;
    }
  }, [fetchDownloads, getHeaders]);

  const removeCategory = useCallback(async (value) => {
    try {
      const res = await fetch(`${API_BASE}/downloads/categories/${value}`, {
        method: 'DELETE',
        headers: getHeaders()
      });
      if (res.ok) {
        await fetchDownloads();
      }
    } catch (err) {
      console.error('Error removing category:', err);
    }
  }, [fetchDownloads, getHeaders]);

  const updateCategory = useCallback(async (oldValue, newLabel) => {
    try {
      const res = await fetch(`${API_BASE}/downloads/categories/${oldValue}`, {
        method: 'PUT',
        headers: getHeaders(),
        body: JSON.stringify({ label: newLabel })
      });
      if (res.ok) {
        await fetchDownloads();
      } else {
        const err = await res.json();
        throw new Error(err.message || 'Category update failed.');
      }
    } catch (err) {
      console.error('Error updating category:', err);
      throw err;
    }
  }, [fetchDownloads, getHeaders]);

  const toggleCategoryActive = useCallback(async (value) => {
    try {
      const res = await fetch(`${API_BASE}/downloads/categories/${value}/toggle-active`, {
        method: 'PUT',
        headers: getHeaders()
      });
      if (res.ok) {
        await fetchDownloads();
      }
    } catch (err) {
      console.error('Error toggling category active status:', err);
    }
  }, [fetchDownloads, getHeaders]);

  // ── Downloads Item mutations ──
  const addDownload = useCallback(async (item, fileBlob) => {
    try {
      const formData = new FormData();
      formData.append('name', item.name);
      formData.append('desc', item.desc || '');
      formData.append('link', item.link || '');
      formData.append('type', item.type);
      formData.append('icon', item.icon || 'Monitor');
      formData.append('isActive', String(item.isActive !== false));
      
      if (fileBlob) {
        formData.append('file', fileBlob);
      }

      const res = await fetch(`${API_BASE}/downloads/files`, {
        method: 'POST',
        headers: getHeaders(true),
        body: formData
      });
      if (res.ok) {
        await fetchDownloads();
      } else {
        const err = await res.json();
        throw new Error(err.message || 'Failed to save download.');
      }
    } catch (err) {
      console.error('Error adding download:', err);
      throw err;
    }
  }, [fetchDownloads, getHeaders]);

  const removeDownload = useCallback(async (id) => {
    try {
      const res = await fetch(`${API_BASE}/downloads/files/${id}`, {
        method: 'DELETE',
        headers: getHeaders()
      });
      if (res.ok) {
        await fetchDownloads();
      }
    } catch (err) {
      console.error('Error removing download:', err);
    }
  }, [fetchDownloads, getHeaders]);

  const updateDownload = useCallback(async (id, data, fileBlob) => {
    try {
      const formData = new FormData();
      formData.append('name', data.name);
      formData.append('desc', data.desc || '');
      formData.append('link', data.link || '');
      formData.append('type', data.type);
      formData.append('icon', data.icon || 'Monitor');
      formData.append('isActive', String(data.isActive !== false));

      if (fileBlob) {
        formData.append('file', fileBlob);
      }

      const res = await fetch(`${API_BASE}/downloads/files/${id}`, {
        method: 'PUT',
        headers: getHeaders(true),
        body: formData
      });
      if (res.ok) {
        await fetchDownloads();
      } else {
        const err = await res.json();
        throw new Error(err.message || 'Failed to update download.');
      }
    } catch (err) {
      console.error('Error updating download:', err);
      throw err;
    }
  }, [fetchDownloads, getHeaders]);

  const toggleDownloadActive = useCallback(async (id) => {
    try {
      const res = await fetch(`${API_BASE}/downloads/files/${id}/toggle-active`, {
        method: 'PUT',
        headers: getHeaders()
      });
      if (res.ok) {
        await fetchDownloads();
      }
    } catch (err) {
      console.error('Error toggling download status:', err);
    }
  }, [fetchDownloads, getHeaders]);

  const resetDownloads = useCallback(async () => {
    try {
      const res = await fetch(`${API_BASE}/downloads/reset`, {
        method: 'POST',
        headers: getHeaders()
      });
      if (res.ok) {
        await fetchDownloads();
      }
    } catch (err) {
      console.error('Error resetting downloads:', err);
    }
  }, [fetchDownloads, getHeaders]);

  const downloadFile = useCallback(async (item) => {
    if (item.link) {
      const a = document.createElement('a');
      a.href = item.link;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  }, []);

  // ── Gallery Album Categories mutations ──
  const addGalleryCategory = useCallback(async (label) => {
    try {
      const value = label.trim().toLowerCase().replace(/[^a-z0-9]/g, '-');
      const res = await fetch(`${API_BASE}/gallery/categories`, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify({ value, label })
      });
      if (res.ok) {
        await fetchGallery();
      } else {
        const err = await res.json();
        throw new Error(err.message || 'Category already exists.');
      }
    } catch (err) {
      console.error('Error adding gallery category:', err);
      throw err;
    }
  }, [fetchGallery, getHeaders]);

  const removeGalleryCategory = useCallback(async (value) => {
    try {
      const res = await fetch(`${API_BASE}/gallery/categories/${value}`, {
        method: 'DELETE',
        headers: getHeaders()
      });
      if (res.ok) {
        await fetchGallery();
      }
    } catch (err) {
      console.error('Error removing gallery category:', err);
    }
  }, [fetchGallery, getHeaders]);

  const updateGalleryCategory = useCallback(async (oldValue, newLabel) => {
    try {
      const res = await fetch(`${API_BASE}/gallery/categories/${oldValue}`, {
        method: 'PUT',
        headers: getHeaders(),
        body: JSON.stringify({ label: newLabel })
      });
      if (res.ok) {
        await fetchGallery();
      } else {
        const err = await res.json();
        throw new Error(err.message || 'Failed to update category.');
      }
    } catch (err) {
      console.error('Error updating gallery category:', err);
      throw err;
    }
  }, [fetchGallery, getHeaders]);

  // ── Gallery Photos mutations ──
  const addGalleryItem = useCallback(async (item, fileBlob) => {
    try {
      const formData = new FormData();
      formData.append('title', item.title);
      formData.append('category', item.category);
      formData.append('src', item.src || '');

      if (fileBlob) {
        formData.append('file', fileBlob);
      }

      const res = await fetch(`${API_BASE}/gallery/items`, {
        method: 'POST',
        headers: getHeaders(true),
        body: formData
      });
      if (res.ok) {
        await fetchGallery();
      } else {
        const err = await res.json();
        throw new Error(err.message || 'Failed to save gallery photo.');
      }
    } catch (err) {
      console.error('Error adding gallery item:', err);
      throw err;
    }
  }, [fetchGallery, getHeaders]);

  const removeGalleryItem = useCallback(async (id) => {
    try {
      const res = await fetch(`${API_BASE}/gallery/items/${id}`, {
        method: 'DELETE',
        headers: getHeaders()
      });
      if (res.ok) {
        await fetchGallery();
      }
    } catch (err) {
      console.error('Error removing gallery photo:', err);
    }
  }, [fetchGallery, getHeaders]);

  const resetGallery = useCallback(async () => {
    try {
      const res = await fetch(`${API_BASE}/gallery/reset`, {
        method: 'POST',
        headers: getHeaders()
      });
      if (res.ok) {
        await fetchGallery();
      }
    } catch (err) {
      console.error('Error resetting gallery:', err);
    }
  }, [fetchGallery, getHeaders]);

  // ── Testimonials mutations ──
  const addTestimonial = useCallback(async (data) => {
    try {
      const res = await fetch(`${API_BASE}/testimonials`, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify(data)
      });
      if (res.ok) {
        await fetchTestimonials();
      } else {
        const err = await res.json();
        throw new Error(err.message || 'Failed to add testimonial.');
      }
    } catch (err) {
      console.error('Error adding testimonial:', err);
      throw err;
    }
  }, [fetchTestimonials, getHeaders]);

  const updateTestimonial = useCallback(async (id, data) => {
    try {
      const res = await fetch(`${API_BASE}/testimonials/${id}`, {
        method: 'PUT',
        headers: getHeaders(),
        body: JSON.stringify(data)
      });
      if (res.ok) {
        await fetchTestimonials();
      } else {
        const err = await res.json();
        throw new Error(err.message || 'Failed to update testimonial.');
      }
    } catch (err) {
      console.error('Error updating testimonial:', err);
      throw err;
    }
  }, [fetchTestimonials, getHeaders]);

  const deleteTestimonial = useCallback(async (id) => {
    try {
      const res = await fetch(`${API_BASE}/testimonials/${id}`, {
        method: 'DELETE',
        headers: getHeaders()
      });
      if (res.ok) {
        await fetchTestimonials();
      } else {
        const err = await res.json();
        throw new Error(err.message || 'Failed to delete testimonial.');
      }
    } catch (err) {
      console.error('Error deleting testimonial:', err);
      throw err;
    }
  }, [fetchTestimonials, getHeaders]);

  const resetTestimonials = useCallback(async () => {
    try {
      const res = await fetch(`${API_BASE}/testimonials/reset`, {
        method: 'POST',
        headers: getHeaders()
      });
      if (res.ok) {
        await fetchTestimonials();
      }
    } catch (err) {
      console.error('Error resetting testimonials:', err);
    }
  }, [fetchTestimonials, getHeaders]);

  // ── Banner mutations ──
  const addBanner = useCallback(async (title, description, sortOrder, isActive, fileBlob, redirectPath) => {
    try {
      const formData = new FormData();
      formData.append('title', title);
      if (description) {
        formData.append('description', description);
      }
      formData.append('sort_order', String(sortOrder));
      formData.append('is_active', String(isActive));
      if (redirectPath) {
        formData.append('redirect_path', redirectPath);
      }
      if (fileBlob) {
        formData.append('file', fileBlob);
      }

      const res = await fetch(`${API_BASE}/banners`, {
        method: 'POST',
        headers: getHeaders(true),
        body: formData
      });
      if (res.ok) {
        await fetchBanners();
      } else {
        const err = await res.json();
        throw new Error(err.message || 'Failed to add banner.');
      }
    } catch (err) {
      console.error('Error adding banner:', err);
      throw err;
    }
  }, [fetchBanners, getHeaders]);

  const deleteBanner = useCallback(async (id) => {
    try {
      const res = await fetch(`${API_BASE}/banners/${id}`, {
        method: 'DELETE',
        headers: getHeaders()
      });
      if (res.ok) {
        await fetchBanners();
      } else {
        const err = await res.json();
        throw new Error(err.message || 'Failed to delete banner.');
      }
    } catch (err) {
      console.error('Error deleting banner:', err);
      throw err;
    }
  }, [fetchBanners, getHeaders]);

  const resetBanners = useCallback(async () => {
    try {
      const res = await fetch(`${API_BASE}/banners/reset`, {
        method: 'POST',
        headers: getHeaders()
      });
      if (res.ok) {
        await fetchBanners();
      }
    } catch (err) {
      console.error('Error resetting banners:', err);
    }
  }, [fetchBanners, getHeaders]);

  const updateSlideDuration = useCallback(async (duration) => {
    try {
      const res = await fetch(`${API_BASE}/banners/duration`, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify({ slide_duration: Number(duration) })
      });
      if (res.ok) {
        const data = await res.json();
        setSlideDuration(data.slide_duration);
      } else {
        const err = await res.json();
        throw new Error(err.message || 'Failed to update slide duration.');
      }
    } catch (err) {
      console.error('Error updating slide duration:', err);
      throw err;
    }
  }, [getHeaders]);

  return (
    <AdminStoreContext.Provider value={{
      logoUrl, updateLogo, resetLogo,
      clientLogos, addClientLogo, updateClientLogo, deleteClientLogo, resetClientLogos,
      partnerLogos, addPartnerLogo, deletePartnerLogo, resetPartnerLogos,
      categories, addCategory, removeCategory, updateCategory, toggleCategoryActive,
      downloads, addDownload, removeDownload, updateDownload, resetDownloads, toggleDownloadActive,
      downloadFile, getIconComponent,
      galleryCategories, addGalleryCategory, removeGalleryCategory, updateGalleryCategory,
      galleryItems, addGalleryItem, removeGalleryItem, resetGallery,
      testimonials, addTestimonial, updateTestimonial, deleteTestimonial, resetTestimonials,
      banners, addBanner, deleteBanner, resetBanners, slideDuration, updateSlideDuration
    }}>
      {children}
    </AdminStoreContext.Provider>
  );
}

export function useAdminStore() {
  const context = useContext(AdminStoreContext);
  if (!context) {
    throw new Error('useAdminStore must be used within an AdminStoreProvider');
  }
  return context;
}
