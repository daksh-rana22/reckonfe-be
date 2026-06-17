import { useRef, useState } from 'react';
import SectionHeading from '@/components/shared/SectionHeading';
import { useAdminStore } from '@/hooks/useAdminStore';

export default function ClientsSection({
  badge = 'Our Clients',
  title = 'Trusted by Our Clients',
  subtitle,
  software,
}) {
  const { clientLogos } = useAdminStore();
  const filteredLogos = software
    ? clientLogos.filter(c => c.software === software || c.software === 'all' || !c.software)
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

  return (
    <section className="py-16 bg-background relative overflow-hidden">

      {/* ── Inject CSS marquee keyframe ── */}
      <style>{`
        @keyframes clients-marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        .clients-marquee-track {
          display: flex;
          width: max-content;
          will-change: transform;
          animation: clients-marquee ${DURATION}s linear infinite;
        }
        .clients-marquee-track.paused {
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
      <div className="relative w-full mt-10 overflow-hidden">
        {/* Edge fades — always visible */}
        <>
          <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        </>

        <div
          ref={trackRef}
          className="w-full"
          style={{ cursor: 'grab' }}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {/* Inner animating strip — always plays */}
          <div
            className={[
              'clients-marquee-track gap-6 px-6 pb-4 pt-2',
              paused ? 'paused' : '',
            ].join(' ')}
          >
            {ITEMS.map((client, i) => (
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
                    className="w-full h-full object-contain select-none transition-all duration-300 group-hover:blur-[3px]"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentNode.classList.add('fallback-logo');
                    }}
                  />

                  {/* City overlay badge on hover */}
                  {client.city && (
                    <div className="absolute inset-0 bg-slate-950/75 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 p-2">
                      <svg className="w-5 h-5 text-[#863BFF] dark:text-[#a855f7] mb-1.5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                      <span className="text-[10px] font-black text-white tracking-widest select-none uppercase text-center w-full px-1">
                        {client.city}
                      </span>
                    </div>
                  )}
                </div>

                {/* Name */}
                <p className="mt-2.5 text-[11px] font-semibold text-muted text-center leading-tight group-hover:text-foreground transition-colors duration-200 px-1">
                  {client.name}
                </p>
              </div>
            ))}
          </div>
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
