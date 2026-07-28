import { useRef, useState } from 'react';
import SectionHeading from '@/components/shared/SectionHeading';
import { useAdminStore } from '@/hooks/useAdminStore';
import { cn } from '@/lib/utils';

const HIERARCHY = {
  'pharmacy-healthcare': [
    'retail-pharmacies',
    'hospital-pharmacies',
    'jan-aushadhi-kendra',
    'ayurvedic-generic',
    'homeopathic-shops',
    'pharma-wholesalers',
    'pharma-distributors',
    'pharma-marketing',
    'multi-branch-pharmacy',
    'multi-branch-pharmacy-chain'
  ],
  'auto-parts': [
    'auto-parts-retailers',
    'spare-parts-dealers',
    'car-accessories',
    'multi-branch-auto-parts'
  ],
  'fmcg': [
    'fmcg-distributors',
    'fmcg-wholesalers',
    'fmcg-retailers',
    'fmcg-companies'
  ],
  'retail': [
    'grocery-kirana',
    'departmental-supermarket',
    'garment-footwear',
    'sarees-clothing',
    'pharmacy-ayurvedic',
    'hardware-electrical',
    'books-stationary',
    'school-dresses',
    'gift-novelty',
    'paint-dealers',
    'multi-outlet-chain'
  ]
};

export default function ClientsSection({
  badge = 'Our Clients',
  title = 'Trusted by Our Clients',
  subtitle,
  software = 'home',
}) {
  const { clientLogos } = useAdminStore();
  const filteredLogos = software
    ? clientLogos.filter(c => {
        const logoSoftware = c.software;
        const pageSoftware = software;

        if (pageSoftware === 'home') {
          return logoSoftware === 'home';
        }

        if (logoSoftware === 'all' || !logoSoftware) return true;
        if (logoSoftware === pageSoftware) return true;

        // Handle multi-branch pharmacy chain naming variants
        if (
          (logoSoftware === 'multi-branch-pharmacy' && pageSoftware === 'multi-branch-pharmacy-chain') ||
          (logoSoftware === 'multi-branch-pharmacy-chain' && pageSoftware === 'multi-branch-pharmacy')
        ) {
          return true;
        }

        // If logo is a parent category, show it on its sub-pages
        if (HIERARCHY[logoSoftware] && HIERARCHY[logoSoftware].includes(pageSoftware)) {
          return true;
        }

        // If page is a parent category, show child logos
        if (HIERARCHY[pageSoftware] && HIERARCHY[pageSoftware].includes(logoSoftware)) {
          return true;
        }

        return false;
      })
    : clientLogos;

  const trackRef = useRef(null);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const scrollStartLeft = useRef(0);
  const [paused, setPaused] = useState(false);

  /* ── Drag-to-scroll ── */
  const onMouseDown = (e) => {
    isDragging.current = true;
    dragStartX.current = e.pageX - trackRef.current.offsetLeft;
    scrollStartLeft.current = trackRef.current.scrollLeft;
    setPaused(true);
  };

  const onMouseMove = (e) => {
    if (!isDragging.current || !trackRef.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - dragStartX.current) * 1.5;
    trackRef.current.scrollLeft = scrollStartLeft.current - walk;
  };

  const onMouseUp = () => {
    isDragging.current = false;
    // Resume auto-scroll after 2 seconds
    setTimeout(() => setPaused(false), 2000);
  };

  /* ── Touch support ── */
  const onTouchStart = (e) => {
    isDragging.current = true;
    dragStartX.current = e.touches[0].pageX;
    scrollStartLeft.current = trackRef.current.scrollLeft;
    setPaused(true);
  };

  const onTouchMove = (e) => {
    if (!isDragging.current || !trackRef.current) return;
    const x = e.touches[0].pageX;
    const walk = (x - dragStartX.current) * 1.5;
    trackRef.current.scrollLeft = scrollStartLeft.current - walk;
  };

  const onTouchEnd = () => {
    isDragging.current = false;
    setTimeout(() => setPaused(false), 2000);
  };

  if (!filteredLogos || filteredLogos.length === 0) return null;

  /*
   * Repeat logos enough times so the marquee track always overflows the
   * viewport — minimum 12 items ensures seamless looping even with 1–3 logos.
   * We always triple (minimum) and then the keyframe translates -33.333%
   * (one full set) for a perfect seamless loop.
   */
  const REPEAT = Math.max(3, Math.ceil(12 / filteredLogos.length));
  const SINGLE_SET = Array.from({ length: REPEAT }, () => filteredLogos).flat();
  // Triple the already-repeated set so the -33.333% translation is 1 full set
  const ITEMS = [...SINGLE_SET, ...SINGLE_SET, ...SINGLE_SET];

  /* Duration: consistent ~1.8s per logo in one set */
  const DURATION = Math.max(15, SINGLE_SET.length * 1.8);

  /* Mobile 2-Row Split */
  const halfLength = Math.ceil(filteredLogos.length / 2);
  const row1Logos = filteredLogos.slice(0, halfLength);
  const row2Logos = filteredLogos.slice(halfLength).concat(filteredLogos.slice(0, halfLength));

  const REPEAT1 = Math.max(3, Math.ceil(12 / (row1Logos.length || 1)));
  const SINGLE_SET_1 = Array.from({ length: REPEAT1 }, () => row1Logos).flat();
  const ITEMS_ROW1 = [...SINGLE_SET_1, ...SINGLE_SET_1, ...SINGLE_SET_1];

  const REPEAT2 = Math.max(3, Math.ceil(12 / (row2Logos.length || 1)));
  const SINGLE_SET_2 = Array.from({ length: REPEAT2 }, () => row2Logos).flat();
  const ITEMS_ROW2 = [...SINGLE_SET_2, ...SINGLE_SET_2, ...SINGLE_SET_2];

  const renderClientCard = (client, i, isMobile = false) => (
    <div
      key={`${client.name}-${i}`}
      className={cn("group flex flex-col items-center shrink-0", isMobile ? "w-28 sm:w-32" : "w-40")}
      draggable={false}
    >
      <div className={cn(
        "w-full rounded-xl sm:rounded-2xl overflow-hidden bg-white border border-border shadow-sm group-hover:shadow-xl group-hover:-translate-y-1.5 transition-all duration-300 relative flex items-center justify-center p-2.5",
        isMobile ? "h-16 sm:h-20 p-2" : "h-28 p-3"
      )}>
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/6 pointer-events-none" />
        <img
          src={client.img || null}
          alt={client.name}
          draggable={false}
          className="w-full h-full object-contain select-none transition-all duration-300 group-hover:blur-[3px]"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.parentNode.classList.add('fallback-logo');
          }}
        />
        {client.city && (
          <div className="absolute inset-0 bg-slate-950/75 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 p-1.5">
            <svg className="w-4 h-4 text-[#863BFF] dark:text-[#a855f7] mb-1 shrink-0" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            <span className="text-[9px] font-black text-white tracking-widest select-none uppercase text-center w-full px-0.5">
              {client.city}
            </span>
          </div>
        )}
      </div>
      <p className="mt-1.5 text-[10px] sm:text-[11px] font-semibold text-muted text-center leading-tight group-hover:text-foreground transition-colors duration-200 px-1 truncate w-full">
        {client.name}
      </p>
    </div>
  );

  return (
    <section className="py-4 sm:py-6 md:py-8 bg-background relative overflow-hidden">

      {/* ── Inject CSS marquee keyframes ── */}
      <style>{`
        @keyframes clients-marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes clients-marquee-reverse {
          0%   { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }
        .clients-marquee-track {
          display: flex;
          width: max-content;
          will-change: transform;
          animation: clients-marquee ${DURATION}s linear infinite;
        }
        .clients-marquee-track-reverse {
          display: flex;
          width: max-content;
          will-change: transform;
          animation: clients-marquee-reverse ${DURATION}s linear infinite;
        }
        .clients-marquee-track.paused, .clients-marquee-track-reverse.paused {
          animation-play-state: paused;
        }
      `}</style>

      {/* Aurora tint */}
      <div className="absolute inset-0 bg-gradient-aurora pointer-events-none" />

      {/* Heading */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          badge={badge}
          title={title}
          subtitle={subtitle ?? 'Empowering retail networks, pharmacies, and distributors across India to scale and streamline operations.'}
        />
      </div>

      {/* ── Full-width scrollable track ── */}
      <div className="relative w-full mt-4 sm:mt-6 overflow-hidden">
        {/* Edge fades — always visible */}
        <>
          <div className="absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        </>

        <div
          ref={trackRef}
          className="w-full space-y-3"
          style={{ cursor: 'grab' }}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Mobile POV: 2 Rows */}
          <div className="flex md:hidden flex-col gap-3">
            {/* Row 1: Left scroll */}
            <div className={['clients-marquee-track gap-3 px-3', paused ? 'paused' : ''].join(' ')}>
              {ITEMS_ROW1.map((client, i) => renderClientCard(client, i, true))}
            </div>
            {/* Row 2: Right reverse scroll */}
            <div className={['clients-marquee-track-reverse gap-3 px-3', paused ? 'paused' : ''].join(' ')}>
              {ITEMS_ROW2.map((client, i) => renderClientCard(client, `r2-${i}`, true))}
            </div>
          </div>

          {/* Desktop POV: Single full-width row */}
          <div className="hidden md:block">
            <div className={['clients-marquee-track gap-6 px-6 pb-2 pt-1', paused ? 'paused' : ''].join(' ')}>
              {ITEMS.map((client, i) => renderClientCard(client, i, false))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom trust line */}
      <div className="mt-4 text-center">
        <p className="text-sm text-muted-foreground">
          <span className="font-bold text-foreground">{clientLogos.length}+</span> trusted brands across{' '}
          <span className="font-bold text-foreground">India</span> —{' '}
          <span className="font-bold text-foreground">25,000+</span> active users
        </p>
      </div>
    </section>
  );
}
