import { useState, useRef, useEffect } from 'react';
import { Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useAdmin } from '@/hooks/useAdmin';
import { useAdminStore } from '@/hooks/useAdminStore';
import { useTheme } from '@/hooks/useTheme';
import { cn } from '@/lib/utils';
import { getFile } from '@/lib/db';
import {
  ImageIcon, Download, LogOut, Upload, RotateCcw,
  Plus, Trash2, Pencil, X, Check, AlertCircle,
  Monitor, FileText, Cloud, Hammer, Search,
  Sun, Moon, ArrowLeft, Shield, ChevronDown, Menu,
  TrendingUp, Calendar, User, Settings, FolderOpen,
  Layers, PlayCircle, Clock, Home, ArrowUpRight, Eye, EyeOff,
  RefreshCw, Handshake, MessageSquare
} from 'lucide-react';

const ICON_OPTIONS = [
  { value: 'Monitor', label: 'Monitor (Setup)', Icon: Monitor },
  { value: 'FileText', label: 'Document (File)', Icon: FileText },
  { value: 'Cloud', label: 'Cloud (Patch)', Icon: Cloud },
  { value: 'Hammer', label: 'Hammer (Tool)', Icon: Hammer },
];

function GalleryImage({ src, alt, className, ...props }) {
  const [localSrc, setLocalSrc] = useState('');

  useEffect(() => {
    let active = true;
    let objectUrl = '';

    if (src && src.startsWith('db://')) {
      const fileId = src.replace('db://', '');
      getFile(fileId).then(blob => {
        if (blob && active) {
          objectUrl = URL.createObjectURL(blob);
          setLocalSrc(objectUrl);
        }
      }).catch(err => {
        console.error('Error loading image from DB:', err);
      });
    } else {
      setLocalSrc(src);
    }

    return () => {
      active = false;
      if (objectUrl) {
        URL.revokeObjectURL(objectUrl);
      }
    };
  }, [src]);

  return <img src={localSrc} alt={alt} className={className} {...props} />;
}

export default function AdminPage() {
  const {
    isAdmin,
    logout,
    currentUser,
    adminUsers,
    addAdminUser,
    removeAdminUser,
    updateAdminUser
  } = useAdmin();
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  const {
    logoUrl, updateLogo, resetLogo,
    clientLogos, addClientLogo, deleteClientLogo, resetClientLogos,
    categories, addCategory, removeCategory, updateCategory, toggleCategoryActive,
    downloads, addDownload, removeDownload, updateDownload, resetDownloads, toggleDownloadActive,
    downloadFile, getIconComponent,
    galleryCategories, addGalleryCategory, removeGalleryCategory, updateGalleryCategory,
    galleryItems, addGalleryItem, removeGalleryItem, resetGallery,
    testimonials, addTestimonial, updateTestimonial, deleteTestimonial, resetTestimonials
  } = useAdminStore();

  const [activeTab, setActiveTab] = useState('dashboard'); // Tab state driven by sidebar

  // Reviews/Testimonials State
  const [reviewsSearch, setReviewsSearch] = useState('');
  const [reviewsFilter, setReviewsFilter] = useState('all');
  const [showAddReviewModal, setShowAddReviewModal] = useState(false);
  const [editingReviewId, setEditingReviewId] = useState(null);
  const [reviewFormData, setReviewFormData] = useState({
    name: '',
    designation: '',
    company: '',
    industry: 'Pharmacy',
    quote: '',
    rating: 5
  });
  const [reviewError, setReviewError] = useState('');
  const [reviewSuccess, setReviewSuccess] = useState('');
  
  // Client Logos state
  const [newClientName, setNewClientName] = useState('');
  const [newClientLogoPreview, setNewClientLogoPreview] = useState(null);
  const [newClientLogoFile, setNewClientLogoFile] = useState(null);
  const [clientLogoSuccess, setClientLogoSuccess] = useState('');
  const [showAddClientModal, setShowAddClientModal] = useState(false);
  const [clientError, setClientError] = useState('');
  const clientLogoInputRef = useRef(null);

  // Gallery state
  const [gallerySearch, setGallerySearch] = useState('');
  const [galleryFilter, setGalleryFilter] = useState('all');
  const [showAddPhotoModal, setShowAddPhotoModal] = useState(false);
  const [newPhotoTitle, setNewPhotoTitle] = useState('');
  const [newPhotoCategory, setNewPhotoCategory] = useState('');
  const [newPhotoSourceType, setNewPhotoSourceType] = useState('upload'); // 'upload' | 'link'
  const [newPhotoUrl, setNewPhotoUrl] = useState('');
  const [newPhotoFile, setNewPhotoFile] = useState(null);
  const [newPhotoFilePreview, setNewPhotoFilePreview] = useState(null);
  const [photoError, setPhotoError] = useState('');
  const [photoSuccess, setPhotoSuccess] = useState('');
  const galleryImageInputRef = useRef(null);

  // Gallery categories management state
  const [showManageGalleryCatsModal, setShowManageGalleryCatsModal] = useState(false);
  const [newGalleryCatNameInput, setNewGalleryCatNameInput] = useState('');
  const [editingGalleryCatVal, setEditingGalleryCatVal] = useState(null);
  const [editingGalleryCatLabel, setEditingGalleryCatLabel] = useState('');
  const [galleryCatErrorMsg, setGalleryCatErrorMsg] = useState('');

  // Downloads state
  const [dlSearch, setDlSearch] = useState('');
  const [dlFilter, setDlFilter] = useState('all');
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [deleteConfirm, setDeleteConfirm] = useState(null);

  const [formData, setFormData] = useState({ name: '', desc: '', link: '', type: 'setups', icon: 'Monitor' });
  const [formError, setFormError] = useState('');

  // File upload state in form
  const [sourceType, setSourceType] = useState('upload'); // 'upload' | 'link'
  const [selectedFile, setSelectedFile] = useState(null);
  const [existingFileMeta, setExistingFileMeta] = useState(null); // { name, size }

  // Category addition/edit state
  const [catToDelete, setCatToDelete] = useState(null);
  const [showManageCategoriesModal, setShowManageCategoriesModal] = useState(false);
  const [inlineNewCatName, setInlineNewCatName] = useState('');
  const [inlineEditingCatVal, setInlineEditingCatVal] = useState(null);
  const [inlineEditCatName, setInlineEditCatName] = useState('');
  const [inlineCatError, setInlineCatError] = useState('');

  // Admin accounts settings state
  const [showAddAdminModal, setShowAddAdminModal] = useState(false);
  const [showEditAdminModal, setShowEditAdminModal] = useState(false);
  const [newAdminUsername, setNewAdminUsername] = useState('');
  const [newAdminPassword, setNewAdminPassword] = useState('');
  const [newAdminConfirmPassword, setNewAdminConfirmPassword] = useState('');
  const [editingAdminUser, setEditingAdminUser] = useState(null);
  const [editAdminUsername, setEditAdminUsername] = useState('');
  const [editAdminPassword, setEditAdminPassword] = useState('');
  const [adminError, setAdminError] = useState('');
  const [showNewAdminPass, setShowNewAdminPass] = useState(false);
  const [showEditAdminPass, setShowEditAdminPass] = useState(false);

  // Mobile navigation state
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  // Dynamic timestamp
  const [currentTimestamp, setCurrentTimestamp] = useState('');
  useEffect(() => {
    const now = new Date();
    const formatted = now.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) + ' • ' + now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    setCurrentTimestamp(formatted);
  }, []);

  if (!isAdmin) {
    return <Navigate to="/login" replace />;
  }

  const formatBytes = (bytes) => {
    if (!bytes) return '';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const typeLabels = categories.reduce((acc, cat) => {
    acc[cat.value] = cat.label;
    return acc;
  }, {});

  // ── Client Logos handlers ──
  const handleClientLogoUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 204800) { // 200KB limit
      setClientError('File too large. Please use an image under 200KB.');
      return;
    }
    setNewClientLogoFile(file);
    const reader = new FileReader();
    reader.onload = (ev) => {
      setNewClientLogoPreview(ev.target.result);
      setClientError('');
    };
    reader.readAsDataURL(file);
  };

  const handleAddClientLogo = () => {
    if (!newClientName.trim()) {
      setClientError('Client name is required.');
      return;
    }
    if (!newClientLogoFile) {
      setClientError('Client logo image is required.');
      return;
    }

    addClientLogo(newClientName, newClientLogoFile);
    setNewClientName('');
    setNewClientLogoPreview(null);
    setNewClientLogoFile(null);
    setClientError('');
    setShowAddClientModal(false);
    
    setClientLogoSuccess('Client logo added successfully!');
    setTimeout(() => setClientLogoSuccess(''), 3000);
  };

  const handleDeleteClientLogo = (id, name) => {
    if (confirm(`Are you sure you want to delete "${name}"?`)) {
      deleteClientLogo(id);
      setClientLogoSuccess('Client logo deleted successfully!');
      setTimeout(() => setClientLogoSuccess(''), 3000);
    }
  };

  const handleResetClientLogos = () => {
    if (confirm('Are you sure you want to reset all client logos to default?')) {
      resetClientLogos();
      setClientLogoSuccess('Client logos reset to default!');
      setTimeout(() => setClientLogoSuccess(''), 3000);
    }
  };

  // ── Reviews Management Handlers ──
  const handleAddOrEditReview = async () => {
    if (!reviewFormData.name.trim() || !reviewFormData.designation.trim() || !reviewFormData.company.trim() || !reviewFormData.quote.trim()) {
      setReviewError('All fields are required.');
      return;
    }
    setReviewError('');
    try {
      if (editingReviewId) {
        await updateTestimonial(editingReviewId, reviewFormData);
        setReviewSuccess('Review updated successfully.');
      } else {
        await addTestimonial(reviewFormData);
        setReviewSuccess('Review added successfully.');
      }
      setShowAddReviewModal(false);
      setEditingReviewId(null);
      setReviewFormData({ name: '', designation: '', company: '', industry: 'Pharmacy', quote: '', rating: 5 });
      setTimeout(() => setReviewSuccess(''), 3000);
    } catch (err) {
      setReviewError(err.message || 'An error occurred.');
    }
  };

  const handleEditReviewClick = (review) => {
    setReviewFormData({
      name: review.name,
      designation: review.designation,
      company: review.company,
      industry: review.industry,
      quote: review.quote,
      rating: review.rating
    });
    setEditingReviewId(review.id);
    setReviewError('');
    setShowAddReviewModal(true);
  };

  const handleDeleteReview = async (id, name) => {
    if (confirm(`Are you sure you want to delete the review by ${name}?`)) {
      try {
        await deleteTestimonial(id);
        setReviewSuccess('Review deleted successfully.');
        setTimeout(() => setReviewSuccess(''), 3000);
      } catch (err) {
        alert(err.message || 'Failed to delete review.');
      }
    }
  };

  const handleResetReviews = async () => {
    if (confirm('Are you sure you want to reset testimonials to default? This will overwrite your changes.')) {
      try {
        await resetTestimonials();
        setReviewSuccess('Testimonials reset to default successfully.');
        setTimeout(() => setReviewSuccess(''), 3000);
      } catch (err) {
        alert('Failed to reset testimonials.');
      }
    }
  };

  // ── Gallery Management Handlers ──
  const handleGalleryPhotoUpload = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) { // 5MB limit for IndexedDB
      setPhotoError('File too large. Maximum size is 5MB.');
      return;
    }
    setNewPhotoFile(file);
    const reader = new FileReader();
    reader.onload = (ev) => {
      setNewPhotoFilePreview(ev.target.result);
      setPhotoError('');
    };
    reader.readAsDataURL(file);
  };

  const handleAddGalleryPhoto = async () => {
    if (!newPhotoTitle.trim()) {
      setPhotoError('Title is required.');
      return;
    }
    const catToUse = newPhotoCategory || (galleryCategories[0]?.value || '');
    if (!catToUse) {
      setPhotoError('Category is required. Please add a category first.');
      return;
    }
    if (newPhotoSourceType === 'link' && !newPhotoUrl.trim()) {
      setPhotoError('Image URL is required.');
      return;
    }
    if (newPhotoSourceType === 'upload' && !newPhotoFile) {
      setPhotoError('Please select a photo file to upload.');
      return;
    }

    try {
      setPhotoError('');
      await addGalleryItem({
        title: newPhotoTitle,
        category: catToUse,
        src: newPhotoSourceType === 'link' ? newPhotoUrl.trim() : ''
      }, newPhotoSourceType === 'upload' ? newPhotoFile : null);

      // Reset form
      setNewPhotoTitle('');
      setNewPhotoUrl('');
      setNewPhotoFile(null);
      setNewPhotoFilePreview(null);
      setShowAddPhotoModal(false);

      setPhotoSuccess('Photo added successfully!');
      setTimeout(() => setPhotoSuccess(''), 3000);
    } catch (err) {
      setPhotoError('Failed to add photo: ' + err.message);
    }
  };

  const handleDeleteGalleryItem = async (id, title) => {
    if (confirm(`Are you sure you want to delete "${title}"?`)) {
      try {
        await removeGalleryItem(id);
        setPhotoSuccess('Photo deleted successfully!');
        setTimeout(() => setPhotoSuccess(''), 3000);
      } catch (err) {
        alert('Failed to delete: ' + err.message);
      }
    }
  };


  const handleResetGalleryData = async () => {
    if (confirm('Are you sure you want to reset all gallery items and categories to default? This will delete all your uploads.')) {
      try {
        await resetGallery();
        setPhotoSuccess('Gallery reset to defaults successfully!');
        setTimeout(() => setPhotoSuccess(''), 3000);
      } catch (err) {
        alert('Failed to reset gallery: ' + err.message);
      }
    }
  };

  // Gallery category CRUD
  const handleAddGalleryCategory = () => {
    if (!newGalleryCatNameInput.trim()) {
      setGalleryCatErrorMsg('Category name is required.');
      return;
    }
    try {
      setGalleryCatErrorMsg('');
      addGalleryCategory(newGalleryCatNameInput);
      setNewGalleryCatNameInput('');
    } catch (err) {
      setGalleryCatErrorMsg(err.message);
    }
  };

  const handleDeleteGalleryCategory = async (value, label) => {
    if (confirm(`Are you sure you want to delete category "${label}"? This will delete all photos inside it.`)) {
      try {
        await removeGalleryCategory(value);
      } catch (err) {
        alert('Failed to delete category: ' + err.message);
      }
    }
  };

  const handleUpdateGalleryCategory = () => {
    if (!editingGalleryCatLabel.trim()) {
      setGalleryCatErrorMsg('Category name cannot be empty.');
      return;
    }
    try {
      setGalleryCatErrorMsg('');
      updateGalleryCategory(editingGalleryCatVal, editingGalleryCatLabel);
      setEditingGalleryCatVal(null);
      setEditingGalleryCatLabel('');
    } catch (err) {
      setGalleryCatErrorMsg(err.message);
    }
  };

  // ── Download form handlers ──
  const resetForm = () => {
    setFormData({ name: '', desc: '', link: '', type: categories[0]?.value || 'setups', icon: 'Monitor', isActive: true });
    setFormError('');
    setShowAddForm(false);
    setEditingId(null);
    setSourceType('upload');
    setSelectedFile(null);
    setExistingFileMeta(null);
  };

  const handleFormSubmit = async () => {
    if (!formData.name.trim()) {
      setFormError('Name is required.');
      return;
    }
    if (sourceType === 'link' && !formData.link.trim()) {
      setFormError('Download Link is required.');
      return;
    }
    if (sourceType === 'upload' && !selectedFile && !existingFileMeta) {
      setFormError('Please upload a file.');
      return;
    }

    try {
      if (editingId) {
        await updateDownload(editingId, {
          name: formData.name,
          desc: formData.desc,
          link: sourceType === 'link' ? formData.link : '',
          type: formData.type,
          icon: formData.icon,
          isActive: formData.isActive !== false
        }, selectedFile);
      } else {
        await addDownload({
          name: formData.name,
          desc: formData.desc,
          link: sourceType === 'link' ? formData.link : '',
          type: formData.type,
          icon: formData.icon,
          isActive: formData.isActive !== false
        }, selectedFile);
      }
      resetForm();
    } catch (err) {
      setFormError('Error saving: ' + err.message);
    }
  };

  const startEdit = (item) => {
    const isUploaded = item.link && item.link.startsWith('db://');
    setFormData({ name: item.name, desc: item.desc, link: isUploaded ? '' : item.link, type: item.type, icon: item.icon, isActive: item.isActive !== false });
    setEditingId(item.id);
    setSourceType(isUploaded ? 'upload' : 'link');
    setSelectedFile(null);
    setExistingFileMeta(isUploaded ? { name: item.fileName, size: item.fileSize } : null);
    setShowAddForm(true);
  };

  const handleDelete = (id) => {
    removeDownload(id);
    setDeleteConfirm(null);
  };

  // Filter downloads
  const filteredDownloads = downloads.filter(d => {
    const matchesType = dlFilter === 'all' || d.type === dlFilter;
    const matchesSearch = d.name.toLowerCase().includes(dlSearch.toLowerCase());
    return matchesType && matchesSearch;
  });

  const countByType = (type) => downloads.filter(d => d.type === type).length;

  const getCategoryStatStyle = (index) => {
    const styles = [
      { color: 'text-amber-500 bg-amber-50 dark:bg-amber-500/10', Icon: Monitor },
      { color: 'text-violet-500 bg-violet-50 dark:bg-violet-500/10', Icon: FolderOpen },
      { color: 'text-blue-500 bg-blue-50 dark:bg-blue-500/10', Icon: Cloud },
      { color: 'text-emerald-500 bg-emerald-50 dark:bg-emerald-500/10', Icon: PlayCircle },
      { color: 'text-pink-500 bg-pink-50 dark:bg-pink-500/10', Icon: Hammer },
      { color: 'text-cyan-500 bg-cyan-50 dark:bg-cyan-500/10', Icon: Layers }
    ];
    return styles[index % styles.length];
  };

  const averageRating = testimonials && testimonials.length > 0 
    ? (testimonials.reduce((sum, r) => sum + r.rating, 0) / testimonials.length).toFixed(1)
    : '5.0';

  const dashboardStats = [
    { label: 'TOTAL FILES', count: downloads.length, Icon: FileText, color: 'text-red-500 bg-red-50 dark:bg-red-500/10', desc: 'All uploaded files' },
    { label: 'CLIENT REVIEWS', count: testimonials ? testimonials.length : 0, Icon: MessageSquare, color: 'text-teal-500 bg-teal-50 dark:bg-teal-500/10', desc: `Avg. Rating: ${averageRating} ★` },
    ...categories.map((cat, idx) => {
      const style = getCategoryStatStyle(idx);
      return {
        label: cat.label.toUpperCase(),
        count: countByType(cat.value),
        Icon: style.Icon,
        color: style.color,
        desc: `Total ${cat.label} files`
      };
    })
  ];

  return (
    <>
      <Helmet>
        <title>Console - Reckon Sales</title>
        <meta name="description" content="Reckon Sales modern SaaS admin dashboard console." />
      </Helmet>

      {/* Main Layout Container (Permanent left sidebar + main content right) */}
      <div className="min-h-screen bg-background flex text-slate-900 dark:text-slate-100 transition-colors duration-200">

        {/* ── LEFT SIDEBAR (Standard & Desktop) ── */}
        <aside className="w-64 bg-surface border-r border-slate-200 dark:border-white/5 shrink-0 flex flex-col justify-between hidden md:flex p-6">
          <div className="space-y-8">
            {/* Top Logo */}
            <Link to="/" className="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
              <img
                src={logoUrl}
                alt="Reckon Logo"
                className="w-10 h-10 object-contain rounded-xl bg-white p-1 shadow-sm border border-border/50"
              />
              <div className="flex flex-col">
                <span className="text-base font-black tracking-tight text-foreground leading-tight">Reckon</span>
                <span className="text-[9px] font-bold text-muted uppercase tracking-widest leading-none">ADMIN PANEL</span>
              </div>
            </Link>

            {/* Sidebar Navigation */}
            <nav className="space-y-1">
              {[
                { id: 'dashboard', label: 'Dashboard', Icon: Home },
                { id: 'downloads', label: 'Downloads Manager', Icon: Download },
                { id: 'clientLogos', label: 'Client Logos', Icon: Layers },
                { id: 'partnerLogos', label: 'Partner Logos', Icon: Handshake },
                { id: 'gallery', label: 'Gallery Manager', Icon: ImageIcon },
                { id: 'reviews', label: 'Reviews Manager', Icon: MessageSquare },
                { id: 'settings', label: 'Settings', Icon: Settings },
              ].map(item => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={cn(
                      "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold transition-all cursor-pointer",
                      isActive
                        ? "bg-primary/10 dark:bg-primary/10 text-primary"
                        : "text-muted hover:text-foreground hover:bg-slate-50 dark:hover:bg-white/5"
                    )}
                  >
                    <item.Icon className={cn("w-4.5 h-4.5", isActive ? "text-primary" : "text-muted")} />
                    {item.label}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Sidebar Help Box */}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-border space-y-3">
            <div className="w-8 h-8 rounded-lg bg-red-50 dark:bg-red-500/10 flex items-center justify-center text-red-600 dark:text-red-400 shrink-0">
              <Hammer className="w-4.5 h-4.5" />
            </div>
            <div className="space-y-1">
              <h4 className="text-[11px] font-bold text-foreground">Need Help?</h4>
              <p className="text-[10px] text-muted leading-relaxed">Our support team is here to help you.</p>
            </div>
            <button
              onClick={() => alert('Support team notified! We will contact you at admin@reckonsales.in')}
              className="w-full py-2 rounded-xl border border-border text-foreground hover:bg-slate-100 dark:hover:bg-white/5 text-[10px] font-bold transition-all cursor-pointer text-center"
            >
              Contact Support
            </button>
          </div>
        </aside>

        {/* ── MOBILE SIDEBAR DRAWERS ── */}
        {isMobileSidebarOpen && (
          <div className="fixed inset-0 z-50 flex md:hidden animate-fade-in bg-black/50 backdrop-blur-sm" onClick={() => setIsMobileSidebarOpen(false)}>
            <div className="w-64 bg-surface p-6 flex flex-col justify-between h-full border-r border-border" onClick={e => e.stopPropagation()}>
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
                    <img src={logoUrl} alt="Logo" className="w-8 h-8 object-contain" />
                    <span className="text-sm font-bold">Reckon Console</span>
                  </Link>
                  <button onClick={() => setIsMobileSidebarOpen(false)} className="p-1 rounded hover:bg-slate-100 dark:hover:bg-white/5">
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <nav className="space-y-1">
                  {[
                    { id: 'dashboard', label: 'Dashboard', Icon: Home },
                    { id: 'downloads', label: 'Downloads Manager', Icon: Download },
                    { id: 'clientLogos', label: 'Client Logos', Icon: Layers },
                    { id: 'partnerLogos', label: 'Partner Logos', Icon: Handshake },
                    { id: 'gallery', label: 'Gallery Manager', Icon: ImageIcon },
                    { id: 'reviews', label: 'Reviews Manager', Icon: MessageSquare },
                    { id: 'settings', label: 'Settings', Icon: Settings },
                  ].map(item => {
                    const isActive = activeTab === item.id;
                    return (
                      <button
                        key={item.id}
                        onClick={() => {
                          setActiveTab(item.id);
                          setIsMobileSidebarOpen(false);
                        }}
                        className={cn(
                          "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-bold transition-all cursor-pointer",
                          isActive
                            ? "bg-primary/10 dark:bg-primary/10 text-primary"
                            : "text-muted hover:text-foreground"
                        )}
                      >
                        <item.Icon className={cn("w-4 h-4", isActive ? "text-primary" : "text-muted")} />
                        {item.label}
                      </button>
                    );
                  })}
                </nav>
              </div>
            </div>
          </div>
        )}

        {/* ── RIGHT MAIN COLUMN ── */}
        <div className="flex-1 flex flex-col min-w-0 overflow-y-auto">

          {/* ── TOP NAV HEADER ── */}
          <header className="h-[72px] bg-surface border-b border-slate-200 dark:border-white/5 px-4 sm:px-6 md:px-8 flex items-center justify-between shrink-0">
            {/* Mobile Hamburger toggle */}
            <button
              onClick={() => setIsMobileSidebarOpen(true)}
              className="p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-white/5 md:hidden border border-border text-muted"
            >
              <Menu className="w-5 h-5 text-primary" />
            </button>
            <div className="hidden md:block text-xs font-semibold text-muted">
              Console Dashboard Management
            </div>

            {/* Profile Dropdown Actions */}
            <div className="flex items-center gap-2 sm:gap-4">
              <Link
                to="/"
                className="inline-flex items-center gap-1.5 px-3 py-2 sm:px-4.5 rounded-xl text-xs font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/5 border border-slate-200 dark:border-white/10 transition-all shadow-sm bg-surface"
              >
                <ArrowLeft className="w-4 h-4 text-muted" />
                <span className="hidden sm:inline">Back to Site</span>
              </Link>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-xl text-muted hover:text-foreground hover:bg-slate-100 dark:hover:bg-white/5 transition-all border border-border/80"
              >
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>

              {/* Profile card matching image */}
              <div className="flex items-center gap-2.5 pl-2 border-l border-border/80">
                <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#DC2626] to-[#2563EB] text-white flex items-center justify-center font-bold text-xs shadow-sm overflow-hidden border border-border/50">
                  <div className="w-full h-full bg-slate-200 flex items-center justify-center text-slate-800 uppercase font-black">
                    {currentUser ? currentUser.substring(0, 2).toUpperCase() : 'AD'}
                  </div>
                </div>
                <div className="hidden lg:flex flex-col">
                  <span className="text-[11px] font-black leading-tight max-w-[80px] truncate">
                    {currentUser || 'Admin User'}
                  </span>
                  <span className="text-[9px] text-muted font-bold">Super Admin</span>
                </div>
              </div>

              {/* Logout button matching mockup */}
              <button
                onClick={logout}
                className="inline-flex items-center gap-1.5 px-3 py-2 sm:px-4.5 rounded-xl text-xs font-bold text-[#DC2626] hover:bg-red-50 dark:hover:bg-red-500/10 border border-red-200 dark:border-red-500/20 transition-all cursor-pointer shadow-sm bg-surface"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </div>
          </header>

          {/* ── CORE CONTENT AREA ── */}
          <div className="p-4 sm:p-6 md:p-8 space-y-6 md:space-y-8 max-w-7xl w-full mx-auto flex-1">

            {/* ═══════ VIEW: DASHBOARD OVERVIEW ═══════ */}
            {activeTab === 'dashboard' && (
              <div className="space-y-8 animate-fade-up">
                <div className="flex flex-col gap-1">
                  <h1 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">Dashboard Overview</h1>
                  <p className="text-xs text-muted">A summary of files, setup assets, and system configuration repositories.</p>
                </div>

                {/* Statistics Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                  {dashboardStats.map(stat => (
                    <div
                      key={stat.label}
                      className="bg-surface rounded-2xl border border-slate-200 dark:border-white/5 p-5 text-slate-800 dark:text-slate-100 flex flex-col justify-between shadow-sm hover:scale-[1.01] transition-transform duration-300 min-h-[135px]"
                    >
                      <div className="flex items-start justify-between">
                        <div className={cn("w-9 h-9 rounded-xl flex items-center justify-center shrink-0 shadow-sm border border-slate-100 dark:border-white/5", stat.color)}>
                          <stat.Icon className="w-4.5 h-4.5" />
                        </div>
                        <ArrowUpRight className="w-4 h-4 text-muted/60" />
                      </div>
                      <div className="mt-3">
                        <p className="text-[10px] font-black text-muted uppercase tracking-wider leading-none mb-1">{stat.label}</p>
                        <p className="text-2xl font-black text-foreground tabular-nums leading-none mb-1">{stat.count}</p>
                        <p className="text-[9px] text-muted truncate">{stat.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Additional Quick Actions / Info widgets on Dashboard */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Quick Guide Card */}
                  <div className="bg-surface p-6 rounded-2xl border border-slate-200 dark:border-white/5 shadow-sm space-y-4">
                    <h3 className="text-sm font-black text-foreground">Console Control Center</h3>
                    <p className="text-xs text-muted leading-relaxed">
                      Welcome to the Reckon Admin Console. From here, you can manage the branding logo displayed across the main platform, structure file classifications in Categories, and configure download lists for setup portals.
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      <button
                        onClick={() => setActiveTab('downloads')}
                        className="px-4 py-2 rounded-xl bg-primary text-white text-xs font-bold shadow-md hover:bg-primary-dark transition-all cursor-pointer"
                      >
                        Manage Downloads
                      </button>
                      <button
                        onClick={() => setActiveTab('clientLogos')}
                        className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-foreground text-xs font-bold hover:bg-slate-200 dark:hover:bg-white/10 transition-all cursor-pointer"
                      >
                        Client Logos
                      </button>
                    </div>
                  </div>

                  {/* System Status / Meta info */}
                  <div className="bg-surface p-6 rounded-2xl border border-slate-200 dark:border-white/5 shadow-sm space-y-4">
                    <h3 className="text-sm font-black text-foreground">System & Database Status</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-muted">Database Connection</span>
                        <span className="font-semibold text-emerald-500 flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                          Online (Local IndexedDB)
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-muted">Total Categories</span>
                        <span className="font-semibold text-foreground">{categories.length} Active Categories</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-muted">Last System Update</span>
                        <span className="text-muted font-mono">{currentTimestamp || 'Just now'}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ═══════ VIEW: CLIENT LOGOS ═══════ */}
            {activeTab === 'clientLogos' && (
              <div className="space-y-6 animate-fade-up">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex flex-col gap-1">
                    <h1 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">Client Logos</h1>
                    <p className="text-xs text-muted">Manage the client and partner logos displayed on the home page marquee slider.</p>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <button
                      onClick={() => {
                        setNewClientName('');
                        setNewClientLogoPreview(null);
                        setNewClientLogoFile(null);
                        setClientError('');
                        setShowAddClientModal(true);
                      }}
                      className="inline-flex items-center justify-center gap-1.5 px-4.5 py-2.5 rounded-xl bg-primary/10 hover:bg-primary/15 text-primary border border-primary/20 dark:bg-primary/15 dark:hover:bg-primary/25 dark:border-primary-light/20 text-xs font-bold shadow-sm transition-all duration-300 cursor-pointer"
                    >
                      <Plus className="w-4 h-4" />
                      Add Client Logo
                    </button>
                  </div>
                </div>

                {clientLogoSuccess && (
                  <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs flex items-center gap-2 font-semibold shadow-sm animate-fade-in">
                    <Check className="w-4 h-4" />
                    {clientLogoSuccess}
                  </div>
                )}

                <div className="bg-surface rounded-2xl border border-border p-6 shadow-sm">
                  {clientLogos.length > 0 ? (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                      {clientLogos.map((client) => (
                        <div
                          key={client.id}
                          className="group relative flex flex-col items-center p-3 rounded-2xl border border-border bg-slate-50/50 dark:bg-white/[0.01] hover:bg-white dark:hover:bg-white/[0.03] hover:border-primary/25 hover:shadow-lg transition-all duration-300 text-center"
                        >
                          {/* Image frame */}
                          <div className="w-full h-24 rounded-xl overflow-hidden bg-white border border-border/60 flex items-center justify-center p-2 relative">
                            <img
                              src={client.img}
                              alt={client.name}
                              className="max-w-full max-h-full object-contain select-none"
                              onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.parentNode.classList.add('fallback-logo');
                              }}
                            />
                          </div>
                          {/* Name */}
                          <p className="mt-2 text-[10px] font-bold text-foreground truncate w-full px-1">
                            {client.name}
                          </p>
                          {/* Hover action delete button */}
                          <button
                            onClick={() => handleDeleteClientLogo(client.id, client.name)}
                            className="absolute -top-2 -right-2 p-1.5 rounded-full bg-red-50 hover:bg-red-100 text-red-500 hover:text-red-600 border border-red-200 dark:bg-red-500/10 dark:hover:bg-red-500/20 dark:border-red-500/20 shadow-md cursor-pointer transition-all hover:scale-105"
                            title="Delete Client Logo"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-16 flex flex-col items-center gap-4 max-w-md mx-auto">
                      <ImageIcon className="w-12 h-12 text-muted/40" />
                      <div className="space-y-1">
                        <h3 className="font-extrabold text-foreground text-sm">No Client Logos</h3>
                        <p className="text-[11px] text-muted leading-relaxed">
                          Add your first client logo or reset to restore default clients.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* ═══════ VIEW: PARTNER LOGOS ═══════ */}
            {activeTab === 'partnerLogos' && (
              <div className="space-y-6 animate-fade-up">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex flex-col gap-1">
                    <h1 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">Partner Logos</h1>
                    <p className="text-xs text-muted">Manage partner logos displayed on the Partners page marquee slider.</p>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <button
                      onClick={() => {
                        setNewClientName('');
                        setNewClientLogoPreview(null);
                        setNewClientLogoFile(null);
                        setClientError('');
                        setShowAddClientModal(true);
                      }}
                      className="inline-flex items-center justify-center gap-1.5 px-4.5 py-2.5 rounded-xl bg-primary/10 hover:bg-primary/15 text-primary border border-primary/20 dark:bg-primary/15 dark:hover:bg-primary/25 dark:border-primary-light/20 text-xs font-bold shadow-sm transition-all duration-300 cursor-pointer"
                    >
                      <Plus className="w-4 h-4" />
                      Add Partner Logo
                    </button>
                  </div>
                </div>

                {clientLogoSuccess && (
                  <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs flex items-center gap-2 font-semibold shadow-sm animate-fade-in">
                    <Check className="w-4 h-4" />
                    {clientLogoSuccess}
                  </div>
                )}

                {/* Info note */}
                <div className="flex items-start gap-3 p-4 rounded-xl bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-blue-700 dark:text-blue-400 text-xs">
                  <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>Partner logos and Client logos share the same list — changes here are also reflected under Client Logos and vice versa.</span>
                </div>

                <div className="bg-surface rounded-2xl border border-border p-6 shadow-sm">
                  {clientLogos.length > 0 ? (
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                      {clientLogos.map((client) => (
                        <div
                          key={client.id}
                          className="group relative flex flex-col items-center p-3 rounded-2xl border border-border bg-slate-50/50 dark:bg-white/[0.01] hover:bg-white dark:hover:bg-white/[0.03] hover:border-primary/25 hover:shadow-lg transition-all duration-300 text-center"
                        >
                          <div className="w-full h-24 rounded-xl overflow-hidden bg-white border border-border/60 flex items-center justify-center p-2 relative">
                            <img
                              src={client.img}
                              alt={client.name}
                              className="max-w-full max-h-full object-contain select-none"
                              onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.parentNode.classList.add('fallback-logo');
                              }}
                            />
                          </div>
                          <p className="mt-2 text-[10px] font-bold text-foreground truncate w-full px-1">
                            {client.name}
                          </p>
                          <button
                            onClick={() => handleDeleteClientLogo(client.id, client.name)}
                            className="absolute -top-2 -right-2 p-1.5 rounded-full bg-red-50 hover:bg-red-100 text-red-500 hover:text-red-600 border border-red-200 dark:bg-red-500/10 dark:hover:bg-red-500/20 dark:border-red-500/20 shadow-md cursor-pointer transition-all hover:scale-105"
                            title="Delete Partner Logo"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-16 flex flex-col items-center gap-4 max-w-md mx-auto">
                      <Handshake className="w-12 h-12 text-muted/40" />
                      <div className="space-y-1">
                        <h3 className="font-extrabold text-foreground text-sm">No Partner Logos</h3>
                        <p className="text-[11px] text-muted leading-relaxed">
                          Add your first partner logo to display it on the Partners page.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* ═══════ VIEW: DOWNLOADS MANAGER ═══════ */}
            {activeTab === 'downloads' && (
              <div className="space-y-6 animate-fade-up">
                <div className="flex flex-col gap-1">
                  <h1 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">Downloads Manager</h1>
                  <p className="text-xs text-muted">Manage, filter, and upload software installer setup assets.</p>
                </div>

                {/* Content Box wrapping the whole manager */}
                <div className="bg-surface rounded-2xl border border-border p-6 shadow-sm space-y-6">

                  {/* Dynamic Categories Pills Toolbar */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-border">
                    <div className="flex flex-wrap gap-1.5 items-center">
                      <button
                        onClick={() => setDlFilter('all')}
                        className={cn(
                          "px-4.5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer border",
                          dlFilter === 'all'
                            ? "bg-primary/10 border-primary/20 text-primary font-black dark:bg-primary/15 dark:border-primary-light/20 dark:text-primary-light"
                            : "bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/5 text-muted hover:text-foreground hover:bg-slate-100 dark:hover:bg-white/10"
                        )}
                      >
                        All ({downloads.length})
                      </button>
                      {categories.map(opt => {
                        return (
                          <div key={opt.value} className="flex items-center">
                            <button
                              onClick={() => setDlFilter(opt.value)}
                              className={cn(
                                "px-4.5 py-2 rounded-full text-xs font-bold transition-all cursor-pointer border",
                                dlFilter === opt.value
                                  ? "bg-primary/10 border-primary/20 text-primary font-black dark:bg-primary/15 dark:border-primary-light/20 dark:text-primary-light"
                                  : "bg-slate-50 dark:bg-white/5 border-slate-200 dark:border-white/5 text-muted hover:text-foreground hover:bg-slate-100 dark:hover:bg-white/10"
                              )}
                            >
                              <span>{opt.label} ({countByType(opt.value)})</span>
                            </button>
                          </div>
                        );
                      })}
                    </div>

                    {/* Toolbar Search / Actions */}
                    <div className="flex flex-wrap sm:flex-nowrap gap-2 items-center w-full md:w-auto">
                      <div className="relative w-full sm:w-60">
                        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
                        <input
                          type="text"
                          placeholder="Search files..."
                          value={dlSearch}
                          onChange={(e) => setDlSearch(e.target.value)}
                          className="w-full pl-9.5 pr-4 py-2 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 focus:border-[#863BFF] focus:ring-1 focus:ring-[#863BFF]/20 outline-none text-xs text-foreground placeholder:text-muted/65 transition-all h-[38px]"
                        />
                      </div>
                      <button
                        onClick={() => {
                          setInlineNewCatName('');
                          setInlineEditingCatVal(null);
                          setInlineCatError('');
                          setShowManageCategoriesModal(true);
                        }}
                        className="inline-flex items-center justify-center gap-1.5 px-4.5 py-2.5 rounded-xl bg-slate-100 dark:bg-white/5 border border-border text-foreground text-xs font-black shadow-sm hover:bg-slate-200 dark:hover:bg-white/10 transition-all cursor-pointer h-[38px] w-full sm:w-auto"
                      >
                        <FolderOpen className="w-4 h-4 text-muted" />
                        Categories
                      </button>
                      <button
                        onClick={() => {
                          setFormData({ name: '', desc: '', link: '', type: categories[0]?.value || 'setups', icon: 'Monitor', isActive: true });
                          setFormError('');
                          setEditingId(null);
                          setSourceType('upload');
                          setSelectedFile(null);
                          setExistingFileMeta(null);
                          setShowAddForm(true);
                        }}
                        className="inline-flex items-center justify-center gap-1.5 px-4.5 py-2.5 rounded-xl bg-primary/10 hover:bg-primary/15 text-primary border border-primary/20 dark:bg-primary/15 dark:hover:bg-primary/25 dark:border-primary-light/20 text-xs font-black shadow-sm transition-all duration-300 cursor-pointer h-[38px] w-full sm:w-auto"
                      >
                        <Plus className="w-4 h-4" />
                        Add File
                      </button>
                    </div>
                  </div>

                  {/* Empty state illustration or Files Grid */}
                  {filteredDownloads.length > 0 ? (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
                      {filteredDownloads.map((item) => {
                        const Icon = getIconComponent(item.icon);
                        const catObj = categories.find(c => c.value === item.type);
                        const isCategoryActive = catObj ? catObj.is_active !== false : true;
                        const isFileActive = item.isActive !== false;
                        return (
                          <div
                            key={item.id}
                            className={cn(
                              "group flex flex-col justify-between p-5 bg-surface rounded-2xl border transition-all duration-300",
                              !isFileActive
                                ? "border-dashed border-slate-300 dark:border-white/10 opacity-70"
                                : "border-slate-200 dark:border-white/5 hover:border-[#863BFF]/25 hover:shadow-lg"
                            )}
                          >
                            <div className="space-y-4">
                              <div className="flex items-center justify-between">
                                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#FF3B62]/10 to-[#863BFF]/10 flex items-center justify-center text-[#863BFF] shrink-0">
                                  <Icon className="w-4.5 h-4.5" />
                                </div>
                                <div className="flex items-center gap-2">
                                  <span 
                                    className="text-[9px] px-2.5 py-1 rounded bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 uppercase font-bold tracking-widest text-muted inline-flex items-center gap-1.5"
                                    title={!isCategoryActive ? "Category is Inactive - Hidden on public page" : undefined}
                                  >
                                    {!isCategoryActive && <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />}
                                    {typeLabels[item.type] || item.type}
                                  </span>
                                </div>
                              </div>

                              <div className="space-y-1 text-left">
                                <h4 className="font-extrabold text-foreground text-xs leading-snug truncate group-hover:text-primary transition-colors text-left">
                                  {item.name}
                                </h4>
                                <p className="text-[11px] text-muted leading-relaxed line-clamp-2 h-7 text-left">
                                  {item.desc || 'No description provided.'}
                                </p>
                              </div>

                              {item.fileName && (
                                <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-white/[0.02] border border-border/60 text-[9px] text-muted font-mono truncate text-left">
                                  File: {item.fileName}
                                </div>
                              )}
                            </div>

                            <div className="mt-5 pt-4 border-t border-slate-100 dark:border-white/5 flex flex-col gap-3">
                              {/* Top row of footer: Download count on left, active toggle on right */}
                              <div className="flex items-center justify-between">
                                <span className="text-[10px] text-muted font-bold flex items-center gap-1.5">
                                  <Download className="w-3.5 h-3.5 text-muted/60" />
                                  {item.downloadCount || 0} downloads
                                </span>

                                <div className="flex items-center gap-2">
                                  <span className={cn(
                                    "text-[9px] font-extrabold uppercase tracking-wider",
                                    !isCategoryActive 
                                      ? "text-amber-500" 
                                      : (isFileActive ? "text-emerald-500" : "text-slate-400 dark:text-white/30")
                                  )}>
                                    {!isCategoryActive ? "Suspended" : (isFileActive ? "Active" : "Inactive")}
                                  </span>
                                  <button
                                    onClick={() => toggleDownloadActive(item.id)}
                                    className={cn(
                                      "relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:ring-offset-1",
                                      isFileActive ? "bg-emerald-500" : "bg-slate-200 dark:bg-white/10"
                                    )}
                                    title={!isCategoryActive ? "Parent category is deactivated" : (isFileActive ? "Deactivate File" : "Activate File")}
                                  >
                                    <span
                                      className={cn(
                                        "pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out",
                                        isFileActive ? "translate-x-4" : "translate-x-0"
                                      )}
                                    />
                                  </button>
                                </div>
                              </div>

                              {/* Bottom row of footer: Action buttons (Edit, Delete) */}
                              <div className="flex gap-2 pt-1">
                                <button
                                  onClick={() => startEdit(item)}
                                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/10 text-slate-700 dark:text-slate-200 text-xs font-bold transition-all border border-border cursor-pointer"
                                  title="Edit Item"
                                >
                                  <Pencil className="w-3.5 h-3.5 text-muted" />
                                  Edit File
                                </button>
                                <button
                                  onClick={() => setDeleteConfirm(item)}
                                  className="inline-flex items-center justify-center p-2 rounded-xl bg-red-50 hover:bg-red-100 dark:bg-red-500/10 dark:hover:bg-red-500/20 text-[#DC2626] dark:text-red-400 border border-red-100 dark:border-red-500/20 transition-all cursor-pointer w-10"
                                  title="Delete Item"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    /* Mockup Aligned Empty State Illustration */
                    <div className="text-center py-16 flex flex-col items-center gap-5 max-w-xl mx-auto">
                      <div className="relative w-36 h-36 flex items-center justify-center">
                        {/* Folder svg icon with red circle X inside */}
                        <svg width="120" height="100" viewBox="0 0 120 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="drop-shadow-sm">
                          <path d="M10 20C10 14.4772 14.4772 10 20 10H45L55 25H100C105.523 25 110 29.4772 110 35V80C110 85.5228 105.523 90 100 90H20C14.4772 90 10 85.5228 10 80V20Z" fill="#FFE3E8" stroke="#FFCCD3" strokeWidth="2" />
                          <path d="M25 35H95V75H25V35Z" fill="white" stroke="#E5E7EB" strokeWidth="1.5" strokeDasharray="3 3" />
                          <circle cx="85" cy="65" r="18" fill="white" stroke="#FFCCD3" strokeWidth="1.5" />
                          <circle cx="85" cy="65" r="14" fill="#FF3B62" />
                          <path d="M79 59L91 71M91 59L79 71" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                        </svg>
                      </div>
                      <div className="space-y-1">
                        <h3 className="font-extrabold text-foreground text-base">No Files Found</h3>
                        <p className="text-[11px] text-muted max-w-xs leading-relaxed">
                          Upload your first file or adjust filters to find existing content.
                        </p>
                      </div>
                      <div className="flex items-center justify-center pt-2">
                        <button
                          onClick={() => {
                            setFormData({ name: '', desc: '', link: '', type: categories[0]?.value || 'setups', icon: 'Monitor', isActive: true });
                            setFormError('');
                            setEditingId(null);
                            setSourceType('upload');
                            setSelectedFile(null);
                            setExistingFileMeta(null);
                            setShowAddForm(true);
                          }}
                          className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-primary/10 hover:bg-primary/15 text-primary border border-primary/20 dark:bg-primary/15 dark:hover:bg-primary/25 dark:border-primary-light/20 text-xs font-bold shadow-sm cursor-pointer"
                        >
                          <Upload className="w-3.5 h-3.5" />
                          Upload File
                        </button>
                      </div>
                    </div>
                  )}



                </div>

              </div>
            )}

            {/* ═══════ VIEW: GALLERY MANAGER ═══════ */}
            {activeTab === 'gallery' && (() => {
              // Filters and search
              const filteredPhotos = galleryItems.filter(item => {
                const matchesType = galleryFilter === 'all' || item.category === galleryFilter;
                const matchesSearch = item.title.toLowerCase().includes(gallerySearch.toLowerCase());
                return matchesType && matchesSearch;
              });

              return (
                <div className="space-y-6 animate-fade-up">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex flex-col gap-1">
                      <h1 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">Gallery Manager</h1>
                      <p className="text-xs text-muted">Manage the categories and photos displayed on the public Gallery page.</p>
                    </div>
                    <div className="flex flex-wrap items-center gap-2.5">
                      <button
                        onClick={() => {
                          setNewGalleryCatNameInput('');
                          setEditingGalleryCatVal(null);
                          setEditingGalleryCatLabel('');
                          setGalleryCatErrorMsg('');
                          setShowManageGalleryCatsModal(true);
                        }}
                        className="inline-flex items-center justify-center gap-1.5 px-4.5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 dark:bg-white/5 dark:hover:bg-white/10 dark:text-slate-200 dark:border-white/10 text-xs font-bold shadow-sm transition-all duration-300 cursor-pointer"
                      >
                        <Layers className="w-4 h-4 text-muted" />
                        Manage Categories
                      </button>
                      <button
                        onClick={handleResetGalleryData}
                        className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-100 text-muted hover:text-foreground dark:border-white/10 dark:hover:bg-white/5 text-xs font-bold transition-all cursor-pointer"
                        title="Reset to Defaults"
                      >
                        <RotateCcw className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {photoSuccess && (
                    <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs flex items-center gap-2 font-semibold shadow-sm animate-fade-in">
                      <Check className="w-4 h-4" />
                      {photoSuccess}
                    </div>
                  )}

                  {/* Filter and Search Bar */}
                  <div className="bg-surface rounded-2xl border border-border p-4 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
                    {/* Category Filter tabs */}
                    <div className="flex flex-wrap gap-1.5">
                      <button
                        onClick={() => setGalleryFilter('all')}
                        className={cn(
                          "px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer",
                          galleryFilter === 'all'
                            ? "bg-primary text-white shadow-md"
                            : "bg-slate-50 dark:bg-white/5 text-muted hover:text-foreground"
                        )}
                      >
                        All ({galleryItems.length})
                      </button>
                      {galleryCategories.map(cat => (
                        <button
                          key={cat.value}
                          onClick={() => setGalleryFilter(cat.value)}
                          className={cn(
                            "px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer",
                            galleryFilter === cat.value
                              ? "bg-primary text-white shadow-md"
                              : "bg-slate-50 dark:bg-white/5 text-muted hover:text-foreground"
                          )}
                        >
                          {cat.label} ({galleryItems.filter(i => i.category === cat.value).length})
                        </button>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-3 w-full md:w-auto">
                      {/* Search */}
                      <div className="relative w-full sm:w-64">
                        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
                        <input
                          type="text"
                          placeholder="Search photos..."
                          value={gallerySearch}
                          onChange={(e) => setGallerySearch(e.target.value)}
                          className={cn(
                            "w-full pl-10 pr-4 py-2 rounded-xl text-xs border focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all",
                            isDark
                              ? "bg-slate-950/50 border-slate-800 text-white focus:border-primary/50"
                              : "bg-slate-50/50 border-slate-200 text-slate-900 focus:border-primary/50"
                          )}
                        />
                      </div>

                      {/* Add Photo Button */}
                      <button
                        onClick={() => {
                          setNewPhotoTitle('');
                          setNewPhotoUrl('');
                          setNewPhotoFile(null);
                          setNewPhotoFilePreview(null);
                          setNewPhotoCategory(galleryCategories[0]?.value || '');
                          setPhotoError('');
                          setShowAddPhotoModal(true);
                        }}
                        className="inline-flex items-center justify-center gap-1.5 px-4.5 py-2 rounded-xl bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 text-xs font-bold transition-all w-full sm:w-auto shrink-0 cursor-pointer text-center"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        Add Photo
                      </button>
                    </div>
                  </div>

                  {/* Photos Grid view */}
                  <div className="bg-surface rounded-2xl border border-border p-6 shadow-sm">
                    {filteredPhotos.length > 0 ? (
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
                        {filteredPhotos.map((photo) => (
                          <div
                            key={photo.id}
                            className="group relative flex flex-col items-center p-3 rounded-2xl border border-border bg-slate-50/50 dark:bg-white/[0.01] hover:bg-white dark:hover:bg-white/[0.03] hover:border-primary/25 hover:shadow-lg transition-all duration-300"
                          >
                            {/* Image container */}
                            <div className="w-full h-28 rounded-xl overflow-hidden bg-white border border-border/60 flex items-center justify-center relative shadow-inner">
                              <GalleryImage
                                src={photo.src}
                                alt={photo.title}
                                className="max-w-full max-h-full object-contain select-none transition-transform duration-500 group-hover:scale-105"
                              />
                            </div>
                            
                            {/* Caption */}
                            <div className="mt-2 text-left w-full px-1 space-y-0.5">
                              <p className="text-[10px] font-bold text-foreground truncate" title={photo.title}>
                                {photo.title}
                              </p>
                              <span className="text-[8px] px-1.5 py-0.5 rounded bg-slate-100 dark:bg-white/5 border border-border text-muted font-bold tracking-wide uppercase select-none">
                                {galleryCategories.find(c => c.value === photo.category)?.label || photo.category}
                              </span>
                            </div>

                            {/* Actions Overlay / Hover buttons */}
                            <div className="absolute top-1 right-1 flex items-center gap-1 md:opacity-0 md:group-hover:opacity-100 opacity-100 transition-opacity">
                              <button
                                onClick={() => handleDeleteGalleryItem(photo.id, photo.title)}
                                className="p-1.5 rounded-full bg-red-50 hover:bg-red-100 text-red-500 hover:text-red-600 border border-red-200 dark:bg-red-500/10 dark:hover:bg-red-500/20 dark:border-red-500/20 shadow-md cursor-pointer transition-all hover:scale-105"
                                title="Delete Photo"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-16 flex flex-col items-center gap-4 max-w-md mx-auto">
                        <ImageIcon className="w-12 h-12 text-muted/40" />
                        <div className="space-y-1">
                          <p className="text-sm font-bold text-foreground">No photos found</p>
                          <p className="text-xs text-muted leading-relaxed">Try shifting search filters or add a new photo to begin structure.</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })()}

            {/* ═══════ VIEW: REVIEWS MANAGER ═══════ */}
            {activeTab === 'reviews' && (() => {
              const filteredReviews = (testimonials || []).filter(item => {
                const matchesIndustry = reviewsFilter === 'all' || item.industry === reviewsFilter;
                const matchesSearch = item.name.toLowerCase().includes(reviewsSearch.toLowerCase()) ||
                                      item.company.toLowerCase().includes(reviewsSearch.toLowerCase()) ||
                                      item.quote.toLowerCase().includes(reviewsSearch.toLowerCase());
                return matchesIndustry && matchesSearch;
              });

              return (
                <div className="space-y-6 animate-fade-up">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex flex-col gap-1 text-left">
                      <h1 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">Reviews Manager</h1>
                      <p className="text-xs text-muted">Manage, edit, delete, and add client reviews and testimonials shown on the homepage.</p>
                    </div>
                    <div className="flex flex-wrap items-center gap-2.5">
                      <button
                        onClick={handleResetReviews}
                        className="inline-flex items-center justify-center gap-1.5 px-4.5 py-2.5 rounded-xl border border-border bg-slate-100 hover:bg-slate-200 text-slate-700 dark:bg-white/5 dark:hover:bg-white/10 dark:text-slate-200 text-xs font-bold shadow-sm transition-all duration-300 cursor-pointer"
                        title="Reset Reviews to Defaults"
                      >
                        <RotateCcw className="w-4 h-4 text-muted" />
                        Reset Defaults
                      </button>
                      <button
                        onClick={() => {
                          setReviewFormData({ name: '', designation: '', company: '', industry: 'Pharmacy', quote: '', rating: 5 });
                          setEditingReviewId(null);
                          setReviewError('');
                          setShowAddReviewModal(true);
                        }}
                        className="inline-flex items-center justify-center gap-1.5 px-4.5 py-2.5 rounded-xl bg-primary/10 hover:bg-primary/15 text-primary border border-primary/20 dark:bg-primary/15 dark:hover:bg-primary/25 dark:border-primary-light/20 text-xs font-bold shadow-sm transition-all duration-300 cursor-pointer"
                      >
                        <Plus className="w-4 h-4" />
                        Add Review
                      </button>
                    </div>
                  </div>

                  {reviewSuccess && (
                    <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs flex items-center gap-2 font-semibold shadow-sm animate-fade-in">
                      <Check className="w-4 h-4" />
                      {reviewSuccess}
                    </div>
                  )}

                  {/* Filter and Search Bar */}
                  <div className="bg-surface rounded-2xl border border-border p-4 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-1.5">
                      <button
                        onClick={() => setReviewsFilter('all')}
                        className={cn(
                          "px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer",
                          reviewsFilter === 'all'
                            ? "bg-primary text-white shadow-md"
                            : "bg-slate-50 dark:bg-white/5 text-muted hover:text-foreground"
                        )}
                      >
                        All ({(testimonials || []).length})
                      </button>
                      {['Pharmacy', 'Retail', 'Auto Parts', 'Garments', 'Home Appliances', 'FMCG'].map(ind => (
                        <button
                          key={ind}
                          onClick={() => setReviewsFilter(ind)}
                          className={cn(
                            "px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer",
                            reviewsFilter === ind
                              ? "bg-primary text-white shadow-md"
                              : "bg-slate-50 dark:bg-white/5 text-muted hover:text-foreground"
                          )}
                        >
                          {ind} ({(testimonials || []).filter(r => r.industry === ind).length})
                        </button>
                      ))}
                    </div>

                    <div className="relative w-full md:w-64">
                      <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
                      <input
                        type="text"
                        placeholder="Search reviews..."
                        value={reviewsSearch}
                        onChange={(e) => setReviewsSearch(e.target.value)}
                        className="w-full pl-9.5 pr-4 py-2 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 focus:border-[#863BFF] focus:ring-1 focus:ring-[#863BFF]/20 outline-none text-xs text-foreground placeholder:text-muted/65 transition-all h-[38px]"
                      />
                    </div>
                  </div>

                  {/* Reviews Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredReviews.length > 0 ? (
                      filteredReviews.map((review) => {
                        const indColorMap = {
                          Pharmacy: 'border-red-500/20 text-red-500 bg-red-500/5',
                          Retail: 'border-blue-500/20 text-blue-500 bg-blue-500/5',
                          'Auto Parts': 'border-purple-500/20 text-purple-500 bg-purple-500/5',
                          Garments: 'border-pink-500/20 text-pink-500 bg-pink-500/5',
                          'Home Appliances': 'border-cyan-500/20 text-cyan-500 bg-cyan-500/5',
                          FMCG: 'border-rose-500/20 text-rose-500 bg-rose-500/5',
                        };
                        const colorClass = indColorMap[review.industry] || 'border-slate-500/20 text-slate-500 bg-slate-500/5';

                        return (
                          <div
                            key={review.id}
                            className="bg-surface rounded-2xl border border-border p-5 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between relative"
                          >
                            <div className="space-y-3.5">
                              {/* Rating & Industry */}
                              <div className="flex items-center justify-between">
                                <div className="flex items-center gap-0.5">
                                  {[...Array(5)].map((_, idx) => (
                                    <span key={idx} className={cn('text-xs', idx < review.rating ? 'text-warning' : 'text-border')}>★</span>
                                  ))}
                                </div>
                                <span className={cn("text-[9px] px-2 py-0.5 rounded-full font-bold select-none border uppercase tracking-wider", colorClass)}>
                                  {review.industry}
                                </span>
                              </div>

                              {/* Quote */}
                              <p className="text-xs text-muted leading-relaxed italic text-left">
                                "{review.quote}"
                              </p>
                            </div>

                            <div className="mt-5 pt-4 border-t border-border flex items-center justify-between">
                              <div className="flex items-center gap-2.5 min-w-0 flex-1 text-left">
                                <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-white/5 border border-border/80 flex items-center justify-center font-bold text-xs uppercase text-foreground">
                                  {review.name.charAt(0)}
                                </div>
                                <div className="min-w-0">
                                  <h4 className="text-xs font-bold text-foreground truncate">{review.name}</h4>
                                  <p className="text-[10px] text-muted truncate">{review.designation} · {review.company}</p>
                                </div>
                              </div>

                              <div className="flex items-center gap-1 pl-2">
                                <button
                                  onClick={() => handleEditReviewClick(review)}
                                  className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 text-muted hover:text-foreground transition-all border border-transparent hover:border-border cursor-pointer"
                                  title="Edit Review"
                                >
                                  <Pencil className="w-3.5 h-3.5" />
                                </button>
                                <button
                                  onClick={() => handleDeleteReview(review.id, review.name)}
                                  className="p-1.5 rounded-lg hover:bg-red-50 dark:hover:bg-red-500/10 text-muted hover:text-red-500 transition-all border border-transparent hover:border-red-100 cursor-pointer"
                                  title="Delete Review"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </div>
                          </div>
                        );
                      })
                    ) : (
                      <div className="col-span-full text-center py-16 flex flex-col items-center gap-4">
                        <MessageSquare className="w-12 h-12 text-muted/40" />
                        <div className="space-y-1">
                          <p className="text-sm font-bold text-foreground">No reviews found</p>
                          <p className="text-xs text-muted leading-relaxed">Add a new review or reset defaults to populate the list.</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })()}

          </div>

        </div>

      </div>

      {/* Add / Edit Form Modal */}
      {showAddForm && (
        <div className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in" onClick={() => resetForm()}>
          <div className="bg-surface rounded-2xl border border-border shadow-2xl w-full max-w-lg p-6 animate-fade-up" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-base font-black text-foreground">
                {editingId ? 'Edit Download Asset' : 'Upload New Download Asset'}
              </h3>
              <button onClick={resetForm} className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 text-muted hover:text-foreground transition-all cursor-pointer">
                <X className="w-5 h-5" />
              </button>
            </div>

            {formError && (
              <div className="p-3.5 rounded-xl bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 text-[#DC2626] dark:text-red-400 text-xs flex items-center gap-2 mb-4 font-semibold">
                <AlertCircle className="w-4 h-4 shrink-0" />
                {formError}
              </div>
            )}

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-1.5">Asset Name *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData(p => ({ ...p, name: e.target.value }))}
                  placeholder="e.g. Reckon Core Installer"
                  className="w-full px-4 py-2.5 rounded-xl bg-background border border-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#863BFF]/20 focus:border-[#863BFF] transition-all text-xs"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-1.5">Description</label>
                <input
                  type="text"
                  value={formData.desc}
                  onChange={(e) => setFormData(p => ({ ...p, desc: e.target.value }))}
                  placeholder="Provide a detailed description of this asset update"
                  className="w-full px-4 py-2.5 rounded-xl bg-background border border-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#863BFF]/20 focus:border-[#863BFF] transition-all text-xs"
                />
              </div>

              {/* Source Toggle & Upload */}
              <div>
                <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-1.5">File Source</label>
                <div className="flex gap-2 p-1 bg-slate-50 dark:bg-white/5 border border-border rounded-xl mb-3 shadow-inner">
                  <button
                    type="button"
                    onClick={() => { setSourceType('upload'); setFormError(''); }}
                    className={cn(
                      "flex-1 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer",
                      sourceType === 'upload'
                        ? "bg-primary text-white shadow-sm font-extrabold"
                        : "text-muted hover:text-foreground"
                    )}
                  >
                    Upload File
                  </button>
                  <button
                    type="button"
                    onClick={() => { setSourceType('link'); setFormError(''); }}
                    className={cn(
                      "flex-1 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer",
                      sourceType === 'link'
                        ? "bg-primary text-white shadow-sm font-extrabold"
                        : "text-muted hover:text-foreground"
                    )}
                  >
                    External URL Link
                  </button>
                </div>

                {sourceType === 'upload' ? (
                  <div className="space-y-2">
                    <div
                      onClick={() => document.getElementById('dl-file-input')?.click()}
                      className="border-2 border-dashed border-border/80 hover:border-[#863BFF]/45 rounded-xl p-8 flex flex-col items-center justify-center gap-2.5 cursor-pointer bg-slate-50/50 dark:bg-white/[0.01] hover:bg-slate-50 dark:hover:bg-white/[0.03] transition-all text-center"
                    >
                      <Upload className="w-7 h-7 text-muted/60 animate-pulse" />
                      <div className="text-xs text-muted">
                        <span className="font-semibold text-primary">Click to upload file</span> or drag and drop
                      </div>
                      <span className="text-[10px] text-muted/65">Supports setups, utilities, and zips (stored client-side)</span>
                    </div>
                    <input
                      id="dl-file-input"
                      type="file"
                      className="hidden"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                          setSelectedFile(file);
                        }
                      }}
                    />

                    {(selectedFile || existingFileMeta) && (
                      <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-border text-xs animate-fade-in">
                        <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary font-bold uppercase shrink-0">
                          {((selectedFile?.name || existingFileMeta?.name)?.split('.').pop() || 'zip').substring(0, 3)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-foreground truncate">{selectedFile?.name || existingFileMeta?.name}</p>
                          <p className="text-[10px] text-muted">
                            {selectedFile ? formatBytes(selectedFile.size) : existingFileMeta?.size}
                            {selectedFile && <span className="text-emerald-500 ml-2 font-bold">(Ready)</span>}
                            {!selectedFile && existingFileMeta && <span className="text-muted/60 ml-2 font-semibold">(Stored in DB)</span>}
                          </p>
                        </div>
                        {selectedFile && (
                          <button
                            type="button"
                            onClick={() => setSelectedFile(null)}
                            className="p-1 rounded-md hover:bg-slate-100 dark:hover:bg-white/10 text-muted hover:text-foreground transition-all cursor-pointer"
                          >
                            <X className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  <input
                    type="url"
                    value={formData.link}
                    onChange={(e) => setFormData(p => ({ ...p, link: e.target.value }))}
                    placeholder="https://reckonsales.in/downloads/core-installer.zip"
                    className="w-full px-4 py-2.5 rounded-xl bg-background border border-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#863BFF]/20 focus:border-[#863BFF] transition-all text-xs"
                  />
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-1.5">Category</label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData(p => ({ ...p, type: e.target.value }))}
                    className="w-full px-4 py-2.5 rounded-xl bg-background border border-input text-foreground focus:outline-none focus:ring-2 focus:ring-[#863BFF]/20 focus:border-[#863BFF] transition-all text-xs"
                  >
                    {categories.map(opt => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-1.5">Icon Represent</label>
                  <select
                    value={formData.icon}
                    onChange={(e) => setFormData(p => ({ ...p, icon: e.target.value }))}
                    className="w-full px-4 py-2.5 rounded-xl bg-background border border-input text-foreground focus:outline-none focus:ring-2 focus:ring-[#863BFF]/20 focus:border-[#863BFF] transition-all text-xs"
                  >
                    {ICON_OPTIONS.map(opt => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-1.5">Status</label>
                <div className="flex items-center gap-3 p-3.5 bg-slate-50 dark:bg-white/5 border border-border rounded-xl">
                  <button
                    type="button"
                    onClick={() => setFormData(p => ({ ...p, isActive: p.isActive === false ? true : false }))}
                    className={cn(
                      "relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:ring-offset-1",
                      formData.isActive !== false ? "bg-emerald-500" : "bg-slate-200 dark:bg-white/10"
                    )}
                  >
                    <span
                      className={cn(
                        "pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out",
                        formData.isActive !== false ? "translate-x-4" : "translate-x-0"
                      )}
                    />
                  </button>
                  <span className="text-xs text-foreground font-semibold">
                    {formData.isActive !== false ? 'Active (Visible on public downloads)' : 'Inactive (Hidden on public downloads)'}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-8 pt-4 border-t border-border">
              <button
                onClick={handleFormSubmit}
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-primary/10 hover:bg-primary/15 text-primary border border-primary/20 dark:bg-primary/15 dark:hover:bg-primary/25 dark:border-primary-light/20 text-xs font-bold shadow-sm transition-all duration-300 cursor-pointer"
              >
                <Check className="w-4 h-4" />
                {editingId ? 'Save Changes' : 'Publish Asset'}
              </button>
              <button
                onClick={resetForm}
                className="px-5 py-3 rounded-xl border border-border text-foreground hover:bg-slate-50 dark:hover:bg-white/5 text-xs font-bold transition-all cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Manage Categories Modal */}
      {showManageCategoriesModal && (
        <div className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in" onClick={() => setShowManageCategoriesModal(false)}>
          <div className="bg-surface rounded-2xl border border-border shadow-2xl w-full max-w-sm p-6 animate-fade-up" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-border">
              <h3 className="text-base font-black text-foreground">Manage Categories</h3>
              <button onClick={() => setShowManageCategoriesModal(false)} className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 text-muted hover:text-foreground transition-all cursor-pointer">
                <X className="w-5 h-5" />
              </button>
            </div>

            {inlineCatError && (
              <div className="p-3 rounded-xl bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 text-[#DC2626] dark:text-red-400 text-xs flex items-center gap-2 mb-4 font-semibold">
                <AlertCircle className="w-4.5 h-4.5 shrink-0" />
                {inlineCatError}
              </div>
            )}

            {/* Add Category Section */}
            <div className="mb-6 space-y-2">
              <label className="block text-xs font-bold text-muted uppercase tracking-wider">Add New Category</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inlineNewCatName}
                  onChange={(e) => setInlineNewCatName(e.target.value)}
                  placeholder="e.g. Software Guides"
                  className="flex-1 px-4 py-2.5 rounded-xl bg-background border border-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#863BFF]/20 focus:border-[#863BFF] transition-all text-xs"
                />
                <button
                  onClick={() => {
                    if (!inlineNewCatName.trim()) {
                      setInlineCatError('Category name is required.');
                      return;
                    }
                    try {
                      addCategory(inlineNewCatName);
                      setInlineNewCatName('');
                      setInlineCatError('');
                    } catch (err) {
                      setInlineCatError(err.message);
                    }
                  }}
                  className="inline-flex items-center justify-center p-2.5 rounded-xl bg-primary text-white hover:bg-primary-dark transition-all cursor-pointer w-10 h-10 shadow-sm"
                  title="Add Category"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Categories List */}
            <div className="space-y-2.5">
              <label className="block text-xs font-bold text-muted uppercase tracking-wider">Existing Categories</label>
              <div className="max-h-60 overflow-y-auto pr-1 space-y-2 scrollbar-thin">
                {categories.map((cat) => {
                  const fileCount = countByType(cat.value);
                  const isEditing = inlineEditingCatVal === cat.value;

                  return (
                    <div key={cat.value} className="p-3 border border-border bg-slate-50/50 dark:bg-white/[0.01] rounded-xl flex items-center justify-between gap-3 min-h-[52px]">
                      {isEditing ? (
                        <div className="flex items-center gap-2 w-full">
                          <input
                            type="text"
                            value={inlineEditCatName}
                            onChange={(e) => setInlineEditCatName(e.target.value)}
                            className="flex-1 px-3 py-1 rounded-lg bg-background border border-input text-foreground focus:outline-none text-xs"
                            autoFocus
                          />
                          <button
                            onClick={() => {
                              if (!inlineEditCatName.trim()) {
                                setInlineCatError('Category name cannot be empty.');
                                return;
                              }
                              try {
                                updateCategory(cat.value, inlineEditCatName);
                                setInlineEditingCatVal(null);
                                setInlineCatError('');
                              } catch (err) {
                                setInlineCatError(err.message);
                              }
                            }}
                            className="p-1 rounded bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20 transition-all cursor-pointer"
                            title="Save"
                          >
                            <Check className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => {
                              setInlineEditingCatVal(null);
                              setInlineCatError('');
                            }}
                            className="p-1 rounded bg-slate-500/10 text-slate-500 hover:bg-slate-500/20 transition-all cursor-pointer"
                            title="Cancel"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ) : (
                        <>
                          <div className="space-y-0.5 min-w-0 flex-1 text-left">
                            <p className={cn("text-xs font-bold truncate", cat.is_active === false ? "text-muted/60" : "text-foreground")}>
                              {cat.label} {cat.is_active === false && <span className="text-[9px] font-bold text-red-500 normal-case ml-1">(Inactive)</span>}
                            </p>
                            <p className="text-[9px] text-muted">{fileCount} files assigned</p>
                          </div>
                          <div className="flex items-center gap-1.5 shrink-0">
                            <button
                              onClick={() => toggleCategoryActive(cat.value)}
                              className={cn(
                                "relative inline-flex h-5 w-9 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:ring-offset-1 mr-1",
                                cat.is_active !== false ? "bg-emerald-500" : "bg-slate-200 dark:bg-white/10"
                              )}
                              title={cat.is_active !== false ? "Deactivate Category" : "Activate Category"}
                            >
                              <span
                                className={cn(
                                  "pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out",
                                  cat.is_active !== false ? "translate-x-4" : "translate-x-0"
                                )}
                              />
                            </button>
                            <button
                              onClick={() => {
                                setInlineEditingCatVal(cat.value);
                                setInlineEditCatName(cat.label);
                                setInlineCatError('');
                              }}
                              className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 text-muted hover:text-foreground transition-all cursor-pointer"
                              title="Edit Category"
                            >
                              <Pencil className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => {
                                setCatToDelete(cat);
                              }}
                              className="p-1.5 rounded-lg hover:bg-red-50 text-muted hover:text-red-500 transition-all cursor-pointer"
                              title="Delete Category"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-border flex justify-end">
              <button
                onClick={() => setShowManageCategoriesModal(false)}
                className="px-4 py-2 rounded-xl border border-border text-foreground hover:bg-slate-50 dark:hover:bg-white/5 text-xs font-bold transition-all cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete Category Confirmation Modal */}
      {catToDelete && (
        <div className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in" onClick={() => setCatToDelete(null)}>
          <div className="bg-surface rounded-2xl border border-border shadow-2xl w-full max-w-sm p-6 text-center animate-fade-up" onClick={e => e.stopPropagation()}>
            <div className="w-14 h-14 rounded-2xl bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 flex items-center justify-center mx-auto mb-4 text-[#DC2626] dark:text-red-400">
              <Trash2 className="w-6 h-6 animate-bounce" />
            </div>
            <h3 className="text-base font-black text-foreground mb-2">Delete Category?</h3>
            <p className="text-xs text-muted mb-6 leading-relaxed">
              Are you sure you want to remove <span className="font-bold text-foreground">"{catToDelete.label}"</span>? All files assigned to this category will be permanently removed.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => {
                  removeCategory(catToDelete.value);
                  setDlFilter('all');
                  setCatToDelete(null);
                }}
                className="flex-1 px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold transition-all cursor-pointer"
              >
                Delete Category
              </button>
              <button
                onClick={() => setCatToDelete(null)}
                className="flex-1 px-4 py-2.5 rounded-xl border border-border text-foreground hover:bg-slate-50 dark:hover:bg-white/5 text-xs font-bold transition-colors cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Delete File Confirm Modal */}
      {deleteConfirm && (
        <div className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in" onClick={() => setDeleteConfirm(null)}>
          <div className="bg-surface rounded-2xl border border-border shadow-2xl w-full max-w-sm p-6 text-center animate-fade-up" onClick={e => e.stopPropagation()}>
            <div className="w-14 h-14 rounded-2xl bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 flex items-center justify-center mx-auto mb-4 text-[#DC2626] dark:text-red-400">
              <Trash2 className="w-6 h-6 animate-bounce" />
            </div>
            <h3 className="text-base font-black text-foreground mb-2">Delete Download?</h3>
            <p className="text-xs text-muted mb-6 leading-relaxed">
              Are you sure you want to remove <span className="font-bold text-foreground">"{deleteConfirm.name}"</span>? This action cannot be undone.
            </p>
            <div className="flex gap-3">
              <button
                onClick={() => handleDelete(deleteConfirm.id)}
                className="flex-1 px-4 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white text-xs font-bold transition-all cursor-pointer"
              >
                Confirm Delete
              </button>
              <button
                onClick={() => setDeleteConfirm(null)}
                className="flex-1 px-4 py-2.5 rounded-xl border border-border text-foreground hover:bg-slate-50 dark:hover:bg-white/5 text-xs font-bold transition-colors cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Admin Modal */}
      {showAddAdminModal && (
        <div className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in" onClick={() => setShowAddAdminModal(false)}>
          <div className="bg-surface rounded-2xl border border-border shadow-2xl w-full max-w-sm p-6 animate-fade-up" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-black text-foreground">Add Administrator</h3>
              <button onClick={() => setShowAddAdminModal(false)} className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 text-muted hover:text-foreground transition-all cursor-pointer">
                <X className="w-5 h-5" />
              </button>
            </div>

            {adminError && (
              <div className="p-3 rounded-xl bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 text-[#DC2626] dark:text-red-400 text-xs flex items-center gap-2 mb-4 font-semibold">
                <AlertCircle className="w-4 h-4 shrink-0" />
                {adminError}
              </div>
            )}

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-1.5">Username *</label>
                <input
                  type="text"
                  value={newAdminUsername}
                  onChange={(e) => setNewAdminUsername(e.target.value)}
                  placeholder="e.g. manager"
                  className="w-full px-4 py-2.5 rounded-xl bg-background border border-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#863BFF]/20 focus:border-[#863BFF] transition-all text-xs"
                  autoFocus
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-1.5">Password *</label>
                <div className="relative">
                  <input
                    type={showNewAdminPass ? "text" : "password"}
                    value={newAdminPassword}
                    onChange={(e) => setNewAdminPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-4 pr-10 py-2.5 rounded-xl bg-background border border-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#863BFF]/20 focus:border-[#863BFF] transition-all text-xs"
                  />
                  <button
                    type="button"
                    onClick={() => setShowNewAdminPass(!showNewAdminPass)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-md text-muted hover:text-foreground hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
                  >
                    {showNewAdminPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-1.5">Confirm Password *</label>
                <div className="relative">
                  <input
                    type={showNewAdminPass ? "text" : "password"}
                    value={newAdminConfirmPassword}
                    onChange={(e) => setNewAdminConfirmPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-4 pr-10 py-2.5 rounded-xl bg-background border border-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#863BFF]/20 focus:border-[#863BFF] transition-all text-xs"
                  />
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-6 pt-4 border-t border-border">
              <button
                onClick={async () => {
                  if (!newAdminUsername.trim()) {
                    setAdminError('Username is required.');
                    return;
                  }
                  if (!newAdminPassword) {
                    setAdminError('Password is required.');
                    return;
                  }
                  if (newAdminPassword !== newAdminConfirmPassword) {
                    setAdminError('Passwords do not match.');
                    return;
                  }
                  try {
                    await addAdminUser(newAdminUsername, newAdminPassword);
                    setShowAddAdminModal(false);
                  } catch (err) {
                    setAdminError(err.message);
                  }
                }}
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-primary/10 hover:bg-primary/15 text-primary border border-primary/20 dark:bg-primary/15 dark:hover:bg-primary/25 dark:border-primary-light/20 text-xs font-bold shadow-sm transition-all duration-300 cursor-pointer"
              >
                <Check className="w-4 h-4" />
                Create
              </button>
              <button
                onClick={() => setShowAddAdminModal(false)}
                className="px-5 py-3 rounded-xl border border-border text-foreground hover:bg-slate-50 dark:hover:bg-white/5 text-xs font-bold transition-all cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Edit Admin Modal */}
      {showEditAdminModal && editingAdminUser && (
        <div className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in" onClick={() => { setShowEditAdminModal(false); setEditingAdminUser(null); }}>
          <div className="bg-surface rounded-2xl border border-border shadow-2xl w-full max-w-sm p-6 animate-fade-up" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-black text-foreground">Edit Administrator</h3>
              <button onClick={() => { setShowEditAdminModal(false); setEditingAdminUser(null); }} className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 text-muted hover:text-foreground transition-all cursor-pointer">
                <X className="w-5 h-5" />
              </button>
            </div>

            {adminError && (
              <div className="p-3 rounded-xl bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 text-[#DC2626] dark:text-red-400 text-xs flex items-center gap-2 mb-4 font-semibold">
                <AlertCircle className="w-4 h-4 shrink-0" />
                {adminError}
              </div>
            )}

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-1.5">Username *</label>
                <input
                  type="text"
                  value={editAdminUsername}
                  onChange={(e) => setEditAdminUsername(e.target.value)}
                  placeholder="e.g. manager"
                  className="w-full px-4 py-2.5 rounded-xl bg-background border border-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#863BFF]/20 focus:border-[#863BFF] transition-all text-xs"
                  autoFocus
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-1.5">Password *</label>
                <div className="relative">
                  <input
                    type={showEditAdminPass ? "text" : "password"}
                    value={editAdminPassword}
                    onChange={(e) => setEditAdminPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full pl-4 pr-10 py-2.5 rounded-xl bg-background border border-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#863BFF]/20 focus:border-[#863BFF] transition-all text-xs"
                  />
                  <button
                    type="button"
                    onClick={() => setShowEditAdminPass(!showEditAdminPass)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-md text-muted hover:text-foreground hover:bg-slate-100 dark:hover:bg-white/10 transition-colors"
                  >
                    {showEditAdminPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-6 pt-4 border-t border-border">
              <button
                onClick={async () => {
                  if (!editAdminUsername.trim()) {
                    setAdminError('Username is required.');
                    return;
                  }
                  if (!editAdminPassword) {
                    setAdminError('Password is required.');
                    return;
                  }
                  try {
                    await updateAdminUser(editingAdminUser.username, editAdminUsername, editAdminPassword);
                    setShowEditAdminModal(false);
                    setEditingAdminUser(null);
                  } catch (err) {
                    setAdminError(err.message);
                  }
                }}
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-primary/10 hover:bg-primary/15 text-primary border border-primary/20 dark:bg-primary/15 dark:hover:bg-primary/25 dark:border-primary-light/20 text-xs font-bold shadow-sm transition-all duration-300 cursor-pointer"
              >
                <Check className="w-4 h-4" />
                Save
              </button>
              <button
                onClick={() => { setShowEditAdminModal(false); setEditingAdminUser(null); }}
                className="px-5 py-3 rounded-xl border border-border text-foreground hover:bg-slate-50 dark:hover:bg-white/5 text-xs font-bold transition-all cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Client Logo Modal */}
      {showAddClientModal && (
        <div className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in" onClick={() => setShowAddClientModal(false)}>
          <div className="bg-surface rounded-2xl border border-border shadow-2xl w-full max-w-sm p-6 animate-fade-up" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-black text-foreground">Add Client Logo</h3>
              <button onClick={() => setShowAddClientModal(false)} className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 text-muted hover:text-foreground transition-all cursor-pointer">
                <X className="w-5 h-5" />
              </button>
            </div>

            {clientError && (
              <div className="p-3 rounded-xl bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 text-[#DC2626] dark:text-red-400 text-xs flex items-center gap-2 mb-4 font-semibold">
                <AlertCircle className="w-4 h-4 shrink-0" />
                {clientError}
              </div>
            )}

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-1.5">Client Name *</label>
                <input
                  type="text"
                  value={newClientName}
                  onChange={(e) => setNewClientName(e.target.value)}
                  placeholder="e.g. Acme Corporation"
                  className="w-full px-4 py-2.5 rounded-xl bg-background border border-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#863BFF]/20 focus:border-[#863BFF] transition-all text-xs"
                  autoFocus
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-1.5">Logo Image *</label>
                <div className="space-y-2">
                  <div
                    onClick={() => clientLogoInputRef.current?.click()}
                    className="border-2 border-dashed border-border/85 hover:border-primary/45 rounded-xl p-6 flex flex-col items-center justify-center gap-2 cursor-pointer bg-slate-50/50 dark:bg-white/[0.01] hover:bg-slate-50 dark:hover:bg-white/[0.03] transition-all text-center"
                  >
                    <Upload className="w-6 h-6 text-muted/60" />
                    <div className="text-xs text-muted">
                      <span className="font-semibold text-primary">Click to select image</span>
                    </div>
                    <span className="text-[9px] text-muted/65">Supports PNG, JPEG, SVG, WebP (max 200KB)</span>
                  </div>
                  <input
                    ref={clientLogoInputRef}
                    type="file"
                    accept="image/png,image/jpeg,image/svg+xml,image/webp"
                    className="hidden"
                    onChange={handleClientLogoUpload}
                  />

                  {newClientLogoPreview && (
                    <div className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-border text-xs animate-fade-in">
                      <div className="w-10 h-10 rounded-lg bg-white border border-border flex items-center justify-center p-1 shrink-0">
                        <img src={newClientLogoPreview} alt="Preview" className="max-w-full max-h-full object-contain" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-foreground text-[11px] truncate">Logo Image Selected</p>
                        <p className="text-[9px] text-emerald-500 font-bold">Ready to publish</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => { setNewClientLogoPreview(null); setNewClientLogoFile(null); }}
                        className="p-1 rounded-md hover:bg-slate-100 dark:hover:bg-white/10 text-muted hover:text-foreground transition-all cursor-pointer"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-6 pt-4 border-t border-border">
              <button
                onClick={handleAddClientLogo}
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-primary/10 hover:bg-primary/15 text-primary border border-primary/20 dark:bg-primary/15 dark:hover:bg-primary/25 dark:border-primary-light/20 text-xs font-bold shadow-sm transition-all duration-300 cursor-pointer"
              >
                <Check className="w-4 h-4" />
                Publish Logo
              </button>
              <button
                onClick={() => setShowAddClientModal(false)}
                className="px-5 py-3 rounded-xl border border-border text-foreground hover:bg-slate-50 dark:hover:bg-white/5 text-xs font-bold transition-all cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Gallery Photo Modal */}
      {showAddPhotoModal && (
        <div className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in" onClick={() => setShowAddPhotoModal(false)}>
          <div className="bg-surface rounded-2xl border border-border shadow-2xl w-full max-w-sm p-6 animate-fade-up" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base font-black text-foreground">Add Gallery Photo</h3>
              <button onClick={() => setShowAddPhotoModal(false)} className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 text-muted hover:text-foreground transition-all cursor-pointer">
                <X className="w-5 h-5" />
              </button>
            </div>

            {photoError && (
              <div className="p-3 rounded-xl bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 text-[#DC2626] dark:text-red-400 text-xs flex items-center gap-2 mb-4 font-semibold">
                <AlertCircle className="w-4 h-4 shrink-0" />
                {photoError}
              </div>
            )}

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-1.5">Photo Title *</label>
                <input
                  type="text"
                  value={newPhotoTitle}
                  onChange={(e) => setNewPhotoTitle(e.target.value)}
                  placeholder="e.g. Annual Award Ceremony 2026"
                  className="w-full px-4 py-2.5 rounded-xl bg-background border border-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#863BFF]/20 focus:border-[#863BFF] transition-all text-xs"
                  autoFocus
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-1.5">Category *</label>
                <select
                  value={newPhotoCategory}
                  onChange={(e) => setNewPhotoCategory(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-background border border-input text-foreground focus:outline-none focus:ring-2 focus:ring-[#863BFF]/20 focus:border-[#863BFF] transition-all text-xs"
                >
                  {galleryCategories.map(cat => (
                    <option key={cat.value} value={cat.value}>{cat.label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-muted uppercase tracking-wider mb-1.5">Image Source</label>
                <div className="flex gap-2 p-1 bg-slate-50 dark:bg-white/5 border border-border rounded-xl mb-3 shadow-inner">
                  <button
                    type="button"
                    onClick={() => { setNewPhotoSourceType('upload'); setPhotoError(''); }}
                    className={cn(
                      "flex-1 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer",
                      newPhotoSourceType === 'upload'
                        ? "bg-primary text-white shadow-sm font-extrabold"
                        : "text-muted hover:text-foreground"
                    )}
                  >
                    Upload File
                  </button>
                  <button
                    type="button"
                    onClick={() => { setNewPhotoSourceType('link'); setPhotoError(''); }}
                    className={cn(
                      "flex-1 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer",
                      newPhotoSourceType === 'link'
                        ? "bg-primary text-white shadow-sm font-extrabold"
                        : "text-muted hover:text-foreground"
                    )}
                  >
                    Image URL Link
                  </button>
                </div>

                {newPhotoSourceType === 'upload' ? (
                  <div className="space-y-2">
                    <div
                      onClick={() => galleryImageInputRef.current?.click()}
                      className="border-2 border-dashed border-border/85 hover:border-primary/45 rounded-xl p-6 flex flex-col items-center justify-center gap-2 cursor-pointer bg-slate-50/50 dark:bg-white/[0.01] hover:bg-slate-50 dark:hover:bg-white/[0.03] transition-all text-center"
                    >
                      <Upload className="w-6 h-6 text-muted/60" />
                      <div className="text-xs text-muted">
                        <span className="font-semibold text-primary">Click to select photo</span>
                      </div>
                      <span className="text-[9px] text-muted/65">Supports PNG, JPEG, WebP (max 5MB)</span>
                    </div>
                    <input
                      ref={galleryImageInputRef}
                      type="file"
                      accept="image/png,image/jpeg,image/webp"
                      className="hidden"
                      onChange={handleGalleryPhotoUpload}
                    />

                    {newPhotoFilePreview && (
                      <div className="flex items-center gap-3 p-2.5 rounded-xl bg-slate-50 dark:bg-white/5 border border-border text-xs animate-fade-in">
                        <div className="w-10 h-10 rounded-lg bg-white border border-border flex items-center justify-center p-1 shrink-0">
                          <img src={newPhotoFilePreview} alt="Preview" className="max-w-full max-h-full object-contain" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-foreground text-[11px] truncate">{newPhotoFile?.name}</p>
                          <p className="text-[9px] text-muted">{formatBytes(newPhotoFile?.size)}</p>
                          <p className="text-[9px] text-emerald-500 font-bold">Ready to upload</p>
                        </div>
                        <button
                          type="button"
                          onClick={() => { setNewPhotoFile(null); setNewPhotoFilePreview(null); }}
                          className="p-1 rounded-md hover:bg-slate-100 dark:hover:bg-white/10 text-muted hover:text-foreground transition-all cursor-pointer"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <input
                    type="url"
                    value={newPhotoUrl}
                    onChange={(e) => setNewPhotoUrl(e.target.value)}
                    placeholder="https://example.com/photo.jpg"
                    className="w-full px-4 py-2.5 rounded-xl bg-background border border-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#863BFF]/20 focus:border-[#863BFF] transition-all text-xs"
                  />
                )}
              </div>
            </div>

            <div className="flex gap-3 mt-6 pt-4 border-t border-border">
              <button
                onClick={handleAddGalleryPhoto}
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-primary/10 hover:bg-primary/15 text-primary border border-primary/20 dark:bg-primary/15 dark:hover:bg-primary/25 dark:border-primary-light/20 text-xs font-bold shadow-sm transition-all duration-300 cursor-pointer"
              >
                <Check className="w-4 h-4" />
                Add Photo
              </button>
              <button
                onClick={() => setShowAddPhotoModal(false)}
                className="px-5 py-3 rounded-xl border border-border text-foreground hover:bg-slate-50 dark:hover:bg-white/5 text-xs font-bold transition-all cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Manage Gallery Categories Modal */}
      {showManageGalleryCatsModal && (
        <div className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in" onClick={() => setShowManageGalleryCatsModal(false)}>
          <div className="bg-surface rounded-2xl border border-border shadow-2xl w-full max-w-sm p-6 animate-fade-up" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-border">
              <h3 className="text-base font-black text-foreground">Manage Gallery Categories</h3>
              <button onClick={() => setShowManageGalleryCatsModal(false)} className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 text-muted hover:text-foreground transition-all cursor-pointer">
                <X className="w-5 h-5" />
              </button>
            </div>

            {galleryCatErrorMsg && (
              <div className="p-3 rounded-xl bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 text-[#DC2626] dark:text-red-400 text-xs flex items-center gap-2 mb-4 font-semibold">
                <AlertCircle className="w-4.5 h-4.5 shrink-0" />
                {galleryCatErrorMsg}
              </div>
            )}

            {/* Add Category Section */}
            <div className="mb-6 space-y-2">
              <label className="block text-xs font-bold text-muted uppercase tracking-wider">Add New Category</label>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newGalleryCatNameInput}
                  onChange={(e) => setNewGalleryCatNameInput(e.target.value)}
                  placeholder="e.g. Office Events"
                  className="flex-1 px-4 py-2.5 rounded-xl bg-background border border-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#863BFF]/20 focus:border-[#863BFF] transition-all text-xs"
                />
                <button
                  onClick={handleAddGalleryCategory}
                  className="inline-flex items-center justify-center p-2.5 rounded-xl bg-primary text-white hover:bg-primary-dark transition-all cursor-pointer w-10 h-10 shadow-sm"
                  title="Add Category"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Categories List */}
            <div className="space-y-2.5">
              <label className="block text-xs font-bold text-muted uppercase tracking-wider">Existing Categories</label>
              <div className="max-h-60 overflow-y-auto pr-1 space-y-2 scrollbar-thin">
                {galleryCategories.map((cat) => {
                  const photoCount = galleryItems.filter(i => i.category === cat.value).length;
                  const isEditing = editingGalleryCatVal === cat.value;

                  return (
                    <div key={cat.value} className="p-3 border border-border bg-slate-50/50 dark:bg-white/[0.01] rounded-xl flex items-center justify-between gap-3 min-h-[52px]">
                      {isEditing ? (
                        <div className="flex items-center gap-2 w-full">
                          <input
                            type="text"
                            value={editingGalleryCatLabel}
                            onChange={(e) => setEditingGalleryCatLabel(e.target.value)}
                            className="flex-1 px-3 py-1 rounded-lg bg-background border border-input text-foreground focus:outline-none text-xs"
                            autoFocus
                          />
                          <button
                            onClick={handleUpdateGalleryCategory}
                            className="p-1 rounded bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500/20 transition-all cursor-pointer"
                            title="Save"
                          >
                            <Check className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => {
                              setEditingGalleryCatVal(null);
                              setEditingGalleryCatLabel('');
                              setGalleryCatErrorMsg('');
                            }}
                            className="p-1 rounded bg-slate-500/10 text-slate-500 hover:bg-slate-500/20 transition-all cursor-pointer"
                            title="Cancel"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ) : (
                        <>
                          <div className="space-y-0.5 min-w-0 flex-1 text-left">
                            <p className="text-xs font-bold truncate text-foreground">
                              {cat.label}
                            </p>
                            <p className="text-[9px] text-muted">{photoCount} photos assigned</p>
                          </div>
                          <div className="flex items-center gap-1.5 shrink-0">
                            <button
                              onClick={() => {
                                setEditingGalleryCatVal(cat.value);
                                setEditingGalleryCatLabel(cat.label);
                                setGalleryCatErrorMsg('');
                              }}
                              className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 text-muted hover:text-foreground transition-all cursor-pointer"
                              title="Edit Category"
                            >
                              <Pencil className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => handleDeleteGalleryCategory(cat.value, cat.label)}
                              className="p-1.5 rounded-lg hover:bg-red-50 text-muted hover:text-red-500 transition-all cursor-pointer"
                              title="Delete Category"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-border flex justify-end">
              <button
                onClick={() => setShowManageGalleryCatsModal(false)}
                className="px-4 py-2 rounded-xl border border-border text-foreground hover:bg-slate-50 dark:hover:bg-white/5 text-xs font-bold transition-all cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Add / Edit Review Modal */}
      {showAddReviewModal && (
        <div className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in" onClick={() => setShowAddReviewModal(false)}>
          <div className="bg-surface rounded-2xl border border-border shadow-2xl w-full max-w-md p-6 animate-fade-up" onClick={e => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-border">
              <h3 className="text-base font-black text-foreground">
                {editingReviewId ? 'Edit Client Review' : 'Add Client Review'}
              </h3>
              <button onClick={() => setShowAddReviewModal(false)} className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 text-muted hover:text-foreground transition-all cursor-pointer">
                <X className="w-5 h-5" />
              </button>
            </div>

            {reviewError && (
              <div className="p-3 rounded-xl bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 text-[#DC2626] dark:text-red-400 text-xs flex items-center gap-2 mb-4 font-semibold">
                <AlertCircle className="w-4 h-4 shrink-0" />
                {reviewError}
              </div>
            )}

            <div className="space-y-4 text-left">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-black text-muted uppercase tracking-wider mb-1.5">Client Name *</label>
                  <input
                    type="text"
                    value={reviewFormData.name}
                    onChange={(e) => setReviewFormData({ ...reviewFormData, name: e.target.value })}
                    placeholder="e.g. Rajesh Kumar"
                    className="w-full px-3.5 py-2 rounded-xl bg-background border border-input text-foreground focus:outline-none focus:ring-2 focus:ring-[#863BFF]/20 focus:border-[#863BFF] transition-all text-xs"
                    autoFocus
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-muted uppercase tracking-wider mb-1.5">Designation/Role *</label>
                  <input
                    type="text"
                    value={reviewFormData.designation}
                    onChange={(e) => setReviewFormData({ ...reviewFormData, designation: e.target.value })}
                    placeholder="e.g. Owner"
                    className="w-full px-3.5 py-2 rounded-xl bg-background border border-input text-foreground focus:outline-none focus:ring-2 focus:ring-[#863BFF]/20 focus:border-[#863BFF] transition-all text-xs"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-black text-muted uppercase tracking-wider mb-1.5">Company/Shop *</label>
                  <input
                    type="text"
                    value={reviewFormData.company}
                    onChange={(e) => setReviewFormData({ ...reviewFormData, company: e.target.value })}
                    placeholder="e.g. Kumar Medical Store"
                    className="w-full px-3.5 py-2 rounded-xl bg-background border border-input text-foreground focus:outline-none focus:ring-2 focus:ring-[#863BFF]/20 focus:border-[#863BFF] transition-all text-xs"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-muted uppercase tracking-wider mb-1.5">Industry *</label>
                  <select
                    value={reviewFormData.industry}
                    onChange={(e) => setReviewFormData({ ...reviewFormData, industry: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-background border border-input text-foreground focus:outline-none focus:ring-2 focus:ring-[#863BFF]/20 focus:border-[#863BFF] transition-all text-xs"
                  >
                    {['Pharmacy', 'Retail', 'Auto Parts', 'Garments', 'Home Appliances', 'FMCG'].map(ind => (
                      <option key={ind} value={ind}>{ind}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-black text-muted uppercase tracking-wider mb-1.5">Rating (1 to 5 Stars)</label>
                <div className="flex items-center gap-1.5">
                  {[1, 2, 3, 4, 5].map((stars) => (
                    <button
                      type="button"
                      key={stars}
                      onClick={() => setReviewFormData({ ...reviewFormData, rating: stars })}
                      className="p-1 rounded text-lg hover:scale-110 transition-transform cursor-pointer"
                    >
                      <span className={reviewFormData.rating >= stars ? "text-warning" : "text-border"}>★</span>
                    </button>
                  ))}
                  <span className="text-xs font-bold text-muted ml-2">{reviewFormData.rating}.0 Stars</span>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-black text-muted uppercase tracking-wider mb-1.5">Quote/Comment *</label>
                <textarea
                  value={reviewFormData.quote}
                  onChange={(e) => setReviewFormData({ ...reviewFormData, quote: e.target.value })}
                  placeholder="What does the client say about Reckon..."
                  rows={4}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-background border border-input text-foreground focus:outline-none focus:ring-2 focus:ring-[#863BFF]/20 focus:border-[#863BFF] transition-all text-xs resize-none"
                />
              </div>
            </div>

            <div className="flex gap-3 mt-6 pt-4 border-t border-border">
              <button
                onClick={handleAddOrEditReview}
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-primary text-white hover:bg-primary-dark text-xs font-bold shadow-sm transition-all duration-300 cursor-pointer"
              >
                <Check className="w-4 h-4" />
                {editingReviewId ? 'Update Review' : 'Add Review'}
              </button>
              <button
                onClick={() => setShowAddReviewModal(false)}
                className="px-5 py-3 rounded-xl border border-border text-foreground hover:bg-slate-50 dark:hover:bg-white/5 text-xs font-bold transition-all cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

    </>
  );
}
