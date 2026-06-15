import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import PageHeader from '@/components/shared/PageHeader';
import { cn } from '@/lib/utils';
import { X, ZoomIn, ChevronLeft, ChevronRight, Download } from 'lucide-react';
import { useAdminStore } from '@/hooks/useAdminStore';
import { getFile } from '@/lib/db';

// Custom sub-component to resolve database stored blobs
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

const PAGE_SIZE = 24;

export default function GalleryPage() {
  const { galleryCategories, galleryItems } = useAdminStore();
  const [activeFilter, setActiveFilter] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  // Filter logic
  const filterCategories = ['All', ...galleryCategories.map(c => c.label)];
  const activeCategoryObject = galleryCategories.find(c => c.label === activeFilter);
  const activeValue = activeCategoryObject ? activeCategoryObject.value : 'All';

  const filtered = activeValue === 'All'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeValue);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  const handleFilter = (cat) => {
    setActiveFilter(cat);
    setVisibleCount(PAGE_SIZE);
    setLightboxIndex(null);
  };

  const openLightbox = (item) => {
    const idx = filtered.findIndex(i => i.id === item.id);
    setLightboxIndex(idx);
  };

  const goPrev = (e) => {
    e.stopPropagation();
    setLightboxIndex(i => (i > 0 ? i - 1 : filtered.length - 1));
  };

  const goNext = (e) => {
    e.stopPropagation();
    setLightboxIndex(i => (i < filtered.length - 1 ? i + 1 : 0));
  };

  const handleDownloadImage = async (item) => {
    try {
      if (item.src.startsWith('db://')) {
        const fileId = item.src.replace('db://', '');
        const blob = await getFile(fileId);
        if (!blob) {
          alert('Image not found in local browser storage.');
          return;
        }
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${item.title || 'photo'}.jpg`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      } else {
        // Fetch external image as blob to bypass cross-origin restrictions on download attribute
        const res = await fetch(item.src);
        const blob = await res.blob();
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${item.title || 'photo'}.jpg`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      }
    } catch (err) {
      console.error('Direct download failed, opening in new tab instead:', err);
      window.open(item.src, '_blank');
    }
  };

  const getCategoryCount = (label) => {
    if (label === 'All') return galleryItems.length;
    const cat = galleryCategories.find(c => c.label === label);
    if (!cat) return 0;
    return galleryItems.filter(item => item.category === cat.value).length;
  };

  const lightboxItem = lightboxIndex !== null ? filtered[lightboxIndex] : null;

  return (
    <>
      <Helmet>
        <title>Gallery - Reckon Sales</title>
        <meta name="description" content="Browse photos from Reckon Sales award functions, gift distributions, and product presentations. See our events and team in action." />
      </Helmet>

      <PageHeader
        title="Gallery"
        subtitle="A glimpse into our events, award functions, and presentations across India."
        breadcrumbs={[{ label: 'Gallery' }]}
        gradient
      />

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {filterCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleFilter(cat)}
                className={cn(
                  'px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border',
                  activeFilter === cat
                    ? 'bg-primary text-white shadow-md border-transparent'
                    : 'bg-surface-secondary text-muted hover:text-foreground hover:bg-surface border-border/50'
                )}
              >
                {cat}
                <span className={cn(
                  'ml-2 text-xs px-1.5 py-0.5 rounded-full font-bold',
                  activeFilter === cat ? 'bg-white/20 text-white' : 'bg-border/60 text-muted'
                )}>
                  {getCategoryCount(cat)}
                </span>
              </button>
            ))}
          </div>

          {/* Count indicator */}
          <div className="flex items-center justify-between gap-4 mb-8 max-w-5xl mx-auto border-b border-border pb-4">
            <p className="text-sm text-muted">
              Showing <span className="font-semibold text-foreground">{Math.min(visibleCount, filtered.length)}</span> of{' '}
              <span className="font-semibold text-foreground">{filtered.length}</span> photos
            </p>
          </div>

          {/* Masonry-style Grid */}
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-0">
            {visible.map((item) => (
              <div
                key={item.id}
                onClick={() => openLightbox(item)}
                className="group relative w-full mb-4 block rounded-xl overflow-hidden bg-surface border border-border hover:border-primary/25 hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <GalleryImage
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/55 transition-colors duration-300 flex flex-col items-center justify-center">
                  <div className="flex gap-2.5 opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                    <div className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white backdrop-blur-sm shadow-md transition-all">
                      <ZoomIn className="w-5 h-5" />
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDownloadImage(item);
                      }}
                      className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white backdrop-blur-sm shadow-md transition-all cursor-pointer"
                      title="Download Image"
                    >
                      <Download className="w-5 h-5" />
                    </button>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-[10px] uppercase font-bold text-white/70 tracking-wider">
                      {galleryCategories.find(c => c.value === item.category)?.label || item.category}
                    </p>
                    <p className="text-xs font-semibold text-white leading-tight">{item.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          {hasMore && (
            <div className="mt-10 text-center">
              <button
                onClick={() => setVisibleCount(c => c + PAGE_SIZE)}
                className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-surface border border-border hover:border-primary/30 hover:bg-surface-secondary text-sm font-semibold text-foreground transition-all duration-200 shadow-sm cursor-pointer"
              >
                Load More ({filtered.length - visibleCount} remaining)
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxItem && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Prev */}
          <button
            onClick={goPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all z-10 cursor-pointer"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Image container */}
          <div
            className="relative max-w-5xl w-full mx-16"
            onClick={e => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute -top-12 right-0 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <GalleryImage
              src={lightboxItem.src}
              alt={lightboxItem.title}
              className="w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
            />

            {/* Caption */}
            <div className="mt-3 flex items-center justify-between px-1">
              <div>
                <p className="text-[11px] text-primary font-bold uppercase tracking-wider">
                  {galleryCategories.find(c => c.value === lightboxItem.category)?.label || lightboxItem.category}
                </p>
                <p className="text-white font-semibold text-sm">{lightboxItem.title}</p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => handleDownloadImage(lightboxItem)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" />
                  Download
                </button>
                <span className="text-white/40 text-xs font-mono">
                  {lightboxIndex + 1} / {filtered.length}
                </span>
              </div>
            </div>
          </div>

          {/* Next */}
          <button
            onClick={goNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all z-10 cursor-pointer"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      )}
    </>
  );
}
