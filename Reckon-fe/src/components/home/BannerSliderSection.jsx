import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight, X } from 'lucide-react';
import { useAdminStore } from '@/hooks/useAdminStore';
import { useTheme } from '@/hooks/useTheme';

export default function BannerSliderSection() {
  const { banners, slideDuration } = useAdminStore();
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for prev, 1 for next
  const [isVisible, setIsVisible] = useState(true);
  const timerRef = useRef(null);

  // Filter active banners
  const activeBanners = (banners || []).filter(b => b.is_active);

  const resetTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    const durationMs = (slideDuration || 5) * 1000;
    timerRef.current = setInterval(() => {
      handleNext();
    }, durationMs);
  };

  useEffect(() => {
    if (isVisible && activeBanners.length > 1) {
      resetTimer();
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [activeBanners.length, currentIndex, slideDuration, isVisible]);

  const handleNext = () => {
    if (activeBanners.length === 0) return;
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % activeBanners.length);
  };

  const handlePrev = () => {
    if (activeBanners.length === 0) return;
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + activeBanners.length) % activeBanners.length);
  };

  const handleDismiss = () => {
    setIsVisible(false);
  };

  if (!isVisible || activeBanners.length === 0) return null;

  const currentBanner = activeBanners[currentIndex];

  const getBannerImage = (banner) => {
    if (banner.image_url && banner.image_url !== 'placeholder' && banner.image_url !== '') {
      return banner.image_url;
    }
    // Fallbacks
    const path = banner.redirect_path || "";
    const segments = path.split('/').filter(Boolean);

    if (segments.length === 1 && segments[0] === 'software') {
      return '/images/home_pos_showcase.png';
    }

    if (segments.length >= 3) {
      const sub = segments[2];
      switch (sub) {
        case 'retail-pharmacies':
        case 'pharmacy-ayurvedic':
          return '/images/retail_pharmacy_billing.png';
        case 'grocery-kirana':
          return '/images/grocery_kirana_billing.png';
        case 'departmental-supermarket':
          return '/images/departmental_supermarket_billing.png';
        case 'garment-footwear':
          return '/images/garment_footwear_billing.png';
        case 'sarees-clothing':
          return '/images/sarees_clothing_billing.png';
        case 'hardware-electrical':
          return '/images/hardware_electrical_billing.png';
        case 'books-stationary':
          return '/images/books_stationary_billing.png';
        case 'school-dresses':
          return '/images/school_dresses_billing.png';
        case 'gift-novelty':
          return '/images/gift_novelty_billing.png';
        case 'paint-dealers':
          return '/images/paint_dealers_billing.png';
        case 'multi-outlet-chain':
          return '/images/multi_outlet_chain_billing.png';
        case 'fmcg-distributors':
          return '/images/fmcg_distributor_billing.png';
        case 'fmcg-wholesalers':
          return '/images/fmcg_wholesaler_billing.png';
        case 'fmcg-retailers':
          return '/images/fmcg_retailer_billing.png';
        case 'fmcg-companies':
          return '/images/fmcg_company_billing.png';
      }
    }
    return '/images/home_pos_showcase.png';
  };

  const bannerImage = getBannerImage(currentBanner);

  // Smooth cross-fade animation variants
  const fadeVariants = {
    enter: (dir) => ({
      opacity: 0,
    }),
    center: {
      opacity: 1,
      transition: {
        opacity: { duration: 0.6, ease: 'easeInOut' }
      }
    },
    exit: (dir) => ({
      opacity: 0,
      transition: {
        opacity: { duration: 0.4, ease: 'easeInOut' }
      }
    })
  };

  return (
    <div 
      className={`w-full h-[70vh] relative overflow-hidden select-none border-b shadow-inner group/banner ${
        isDark ? 'border-slate-800/80 bg-slate-950' : 'border-slate-200/80 bg-slate-100'
      }`}
    >
      {/* Background Dots Pattern overlay */}
      <div className={`absolute inset-0 pointer-events-none mix-blend-overlay z-10 ${isDark ? 'opacity-[0.05]' : 'opacity-[0.02]'}`}>
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="banner-grid" width="24" height="24" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill={isDark ? 'white' : 'black'} />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#banner-grid)" />
        </svg>
      </div>

      {/* Dismiss/Close Button */}
      <button
        onClick={handleDismiss}
        className={`absolute top-4 right-4 p-2 rounded-full border transition-all cursor-pointer z-30 shadow-md backdrop-blur-sm ${
          isDark 
            ? 'border-white/10 bg-black/50 text-slate-400 hover:text-white hover:bg-black/75 hover:border-white/30' 
            : 'border-slate-200/80 bg-white/70 text-slate-500 hover:text-slate-900 hover:bg-white/95 hover:border-slate-300'
        }`}
        aria-label="Dismiss banner"
      >
        <X className="w-4 h-4" />
      </button>

      {/* Sliding Banner Slides */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentBanner.id}
          custom={direction}
          variants={fadeVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute inset-0 w-full h-full"
        >
          {/* Main Photo Image - direct, bright, not darkened */}
          <img 
            src={bannerImage} 
            alt={currentBanner.title} 
            className="w-full h-full object-cover select-none"
            loading="eager"
          />

          {/* Bottom Right "More" Action Button */}
          <div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-12 z-20 flex items-center gap-4">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.4 }}
            >
              <Link
                to={currentBanner.redirect_path || "/software"}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:hover:bg-slate-100 dark:text-slate-950 font-black text-xs uppercase tracking-wider shadow-xl hover:shadow-2xl transition-all duration-300 active:scale-95 border border-white/10"
              >
                <span>More</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/banner:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Pagination Dot Controls (Bottom Center) - clean semi-transparent container to ensure visibility */}
      {activeBanners.length > 1 && (
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 bg-black/40 backdrop-blur-md px-3.5 py-2 rounded-full border border-white/10">
          <button
            onClick={handlePrev}
            className="text-white/70 hover:text-white transition-colors cursor-pointer mr-1"
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="flex gap-1.5 items-center justify-center">
            {activeBanners.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === index ? 'w-4 bg-white' : 'w-1.5 bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          <button
            onClick={handleNext}
            className="text-white/70 hover:text-white transition-colors cursor-pointer ml-1"
            aria-label="Next Slide"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}
