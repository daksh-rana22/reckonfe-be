import { useRef, useState, useEffect } from 'react';
import SectionHeading from '@/components/shared/SectionHeading';
import { useAdminStore } from '@/hooks/useAdminStore';

export default function ClientsSection({
  badge = 'Our Clients',
  title = 'Trusted by Industry Leaders',
  subtitle,
}) {
  const { clientLogos } = useAdminStore();
  const trackRef = useRef(null);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const scrollStartLeft = useRef(0);
  const autoScrollRef = useRef(null);
  const [isUserInteracting, setIsUserInteracting] = useState(false);

  /* ── Auto-scroll logic ── */
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    let rafId;
    const speed = 0.6; // px per frame

    const step = () => {
      if (!isDragging.current && !isUserInteracting) {
        el.scrollLeft += speed;
        // Loop back to start when we've scrolled half-way (duplicate content)
        if (el.scrollLeft >= el.scrollWidth / 2) {
          el.scrollLeft = 0;
        }
      }
      rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);
    autoScrollRef.current = rafId;
    return () => cancelAnimationFrame(rafId);
  }, [isUserInteracting]);

  /* ── Drag-to-scroll ── */
  const onMouseDown = (e) => {
    isDragging.current = true;
    dragStartX.current = e.pageX - trackRef.current.offsetLeft;
    scrollStartLeft.current = trackRef.current.scrollLeft;
    trackRef.current.style.cursor = 'grabbing';
    trackRef.current.style.userSelect = 'none';
    setIsUserInteracting(true);
  };

  const onMouseMove = (e) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - dragStartX.current) * 1.5;
    trackRef.current.scrollLeft = scrollStartLeft.current - walk;
  };

  const onMouseUp = () => {
    isDragging.current = false;
    if (trackRef.current) {
      trackRef.current.style.cursor = 'grab';
      trackRef.current.style.userSelect = '';
    }
    // Resume auto-scroll after 2 seconds of no interaction
    setTimeout(() => setIsUserInteracting(false), 2000);
  };

  /* ── Touch support ── */
  const onTouchStart = (e) => {
    isDragging.current = true;
    dragStartX.current = e.touches[0].pageX;
    scrollStartLeft.current = trackRef.current.scrollLeft;
    setIsUserInteracting(true);
  };

  const onTouchMove = (e) => {
    if (!isDragging.current) return;
    const x = e.touches[0].pageX;
    const walk = (x - dragStartX.current) * 1.5;
    trackRef.current.scrollLeft = scrollStartLeft.current - walk;
  };

  const onTouchEnd = () => {
    isDragging.current = false;
    setTimeout(() => setIsUserInteracting(false), 2000);
  };

  if (!clientLogos || clientLogos.length === 0) {
    return null;
  }

  /* Duplicate array so auto-scroll can loop seamlessly */
  const DOUBLED = [...clientLogos, ...clientLogos];

  return (
    <section className="py-16 bg-background relative overflow-hidden">
      {/* Aurora tint */}
      <div className="absolute inset-0 bg-gradient-aurora pointer-events-none" />

      {/* Heading */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeading
          badge={badge}
          title={title}
          subtitle={subtitle ?? `From pharmacies to supermarkets — ${clientLogos.length}+ brands across India grow with Reckon.`}
        />
      </div>

      {/* ── Full-width scrollable track ── */}
      <div className="relative w-full mt-10">
        {/* Edge fades */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Scroll track */}
        <div
          ref={trackRef}
          className="flex gap-6 overflow-x-auto px-12 pb-4 pt-2"
          style={{
            cursor: 'grab',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
          }}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Hide scrollbar */}
          <style>{`div::-webkit-scrollbar { display: none; }`}</style>

          {DOUBLED.map((client, i) => (
            <div
              key={`${client.name}-${i}`}
              className="group flex flex-col items-center shrink-0 w-40"
              draggable={false}
            >
              {/* Logo card — white background to show real logos properly */}
              <div className="w-full h-28 rounded-2xl overflow-hidden bg-white border border-border shadow-sm group-hover:shadow-xl group-hover:-translate-y-2 group-hover:scale-[1.04] transition-all duration-300 relative flex items-center justify-center p-3">
                {/* Subtle inner border highlight */}
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/6 pointer-events-none" />
                <img
                  src={client.img}
                  alt={client.name}
                  draggable={false}
                  className="w-full h-full object-contain select-none"
                  onError={(e) => {
                    // Fallback: show initials if image fails
                    e.target.style.display = 'none';
                    e.target.parentNode.classList.add('fallback-logo');
                  }}
                />
              </div>

              {/* Name */}
              <p className="mt-2.5 text-[11px] font-semibold text-muted text-center leading-tight group-hover:text-foreground transition-colors duration-200 px-1">
                {client.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom trust line */}
      <div className="mt-8 text-center">
        <p className="text-sm text-muted-foreground">
          <span className="font-bold text-foreground">{clientLogos.length}+</span> trusted brands across{' '}
          <span className="font-bold text-foreground">India</span> —{' '}
          <span className="font-bold text-foreground">25,000+</span> active users
        </p>
      </div>
    </section>
  );
}
