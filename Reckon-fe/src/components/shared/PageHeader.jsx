import { useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { useTheme } from '@/hooks/useTheme';
import { ChevronRight, Home } from 'lucide-react';

export default function PageHeader({ title, subtitle, breadcrumbs = [], gradient = false, children = null }) {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        'relative overflow-hidden py-20 md:py-28 select-none transition-colors duration-500',
        gradient
          ? (isDark ? 'text-white' : 'text-[#0B0816]')
          : 'bg-surface-secondary text-foreground'
      )}
      style={gradient ? {
        background: isDark
          ? 'var(--gradient-section-dark)'
          : 'var(--gradient-section-light)'
      } : undefined}
    >
      {/* Animated grid mesh */}
      {gradient && (
        <div
          className="absolute inset-0 grid-mesh"
          style={{
            maskImage: isHovered
              ? `radial-gradient(circle 350px at ${coords.x}px ${coords.y}px, black 30%, transparent)`
              : 'radial-gradient(circle 500px at 70% 50%, black 40%, transparent)',
            WebkitMaskImage: isHovered
              ? `radial-gradient(circle 350px at ${coords.x}px ${coords.y}px, black 30%, transparent)`
              : 'radial-gradient(circle 500px at 70% 50%, black 40%, transparent)',
          }}
        />
      )}

      {/* Background blobs */}
      <div className={cn(
        'absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none animate-pulse-soft',
        gradient ? (isDark ? 'bg-red-600/20' : 'bg-primary/10') : 'bg-primary/8'
      )} />
      <div className={cn(
        'absolute bottom-0 left-0 w-64 h-64 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/4 pointer-events-none',
        gradient ? (isDark ? 'bg-blue-600/12' : 'bg-accent/10') : 'bg-accent/6'
      )} />

      {/* Floating geometric shapes (gradient pages only) */}
      {gradient && (
        <>
          <div className="absolute top-12 right-12 w-20 h-20 border border-primary/20 rounded-2xl rotate-12 opacity-30 animate-float pointer-events-none" />
          <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-primary/40 rounded-full animate-float-slow pointer-events-none" />
          <div className="absolute bottom-16 left-16 w-12 h-12 border border-accent/20 rounded-xl -rotate-6 opacity-25 animate-float pointer-events-none" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 left-1/3 w-2 h-2 bg-accent/40 rounded-full animate-pulse-soft pointer-events-none" />
        </>
      )}

      {/* Dot pattern */}
      {!gradient && (
        <div
          className="absolute inset-0 bg-dot-pattern opacity-[0.06]"
          style={{
            maskImage: isHovered
              ? `radial-gradient(circle 300px at ${coords.x}px ${coords.y}px, black 20%, transparent)`
              : 'radial-gradient(circle 300px at right top, black 20%, transparent)',
            WebkitMaskImage: isHovered
              ? `radial-gradient(circle 300px at ${coords.x}px ${coords.y}px, black 20%, transparent)`
              : 'radial-gradient(circle 300px at right top, black 20%, transparent)',
          }}
        />
      )}

      {/* Interactive cursor spotlight */}
      <div
        className="absolute pointer-events-none rounded-full blur-[80px] w-80 h-80 transition-opacity duration-300"
        style={{
          background: gradient
            ? (isDark
              ? 'radial-gradient(circle, rgba(220,38,38,0.18), rgba(37,99,235,0.10))'
              : 'radial-gradient(circle, rgba(249,115,22,0.12), rgba(59,130,246,0.12))')
            : 'radial-gradient(circle, rgba(249,115,22,0.12), transparent)',
          left: coords.x - 160,
          top: coords.y - 160,
          opacity: isHovered ? 1 : 0,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={cn(children ? "grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center" : "")}>
          <div className={cn(children ? "lg:col-span-7" : "")}>
            {/* Breadcrumbs */}
            {breadcrumbs.length > 0 && (
              <nav className="flex items-center gap-1.5 text-sm mb-7">
                <Link
                  to="/"
                  className={cn(
                    'flex items-center gap-1 transition-colors',
                    gradient
                      ? (isDark ? 'text-white/50 hover:text-white' : 'text-slate-600 hover:text-[#0B0816]')
                      : 'text-muted hover:text-foreground'
                  )}
                >
                  <Home className="w-3.5 h-3.5" />
                  <span>Home</span>
                </Link>
                {breadcrumbs.map((crumb, i) => (
                  <span key={i} className="flex items-center gap-1.5">
                    <ChevronRight className={cn('w-3.5 h-3.5', gradient ? (isDark ? 'text-white/25' : 'text-slate-400') : 'text-muted-foreground')} />
                    {crumb.path ? (
                      <Link
                        to={crumb.path}
                        className={cn(
                          'transition-colors',
                          gradient
                            ? (isDark ? 'text-white/50 hover:text-white' : 'text-slate-600 hover:text-[#0B0816]')
                            : 'text-muted hover:text-foreground'
                        )}
                      >
                        {crumb.label}
                      </Link>
                    ) : (
                      <span className={cn('font-semibold', gradient ? (isDark ? 'text-primary-light' : 'text-primary') : 'text-primary')}>
                        {crumb.label}
                      </span>
                    )}
                  </span>
                ))}
              </nav>
            )}

            {/* Title */}
            <h1 className={cn(
              'text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]',
              gradient
                ? (isDark ? 'text-white' : 'text-[#0B0816]')
                : 'text-foreground'
            )}>
              {title}
            </h1>

            {subtitle && (
              <p className={cn(
                'mt-5 text-lg max-w-2xl leading-relaxed',
                gradient
                  ? (isDark ? 'text-white/60' : 'text-[#0B0816]/70')
                  : 'text-muted'
              )}>
                {subtitle}
              </p>
            )}

            {/* Decorative underline */}
            <div className="flex items-center gap-1.5 mt-7">
              <div className={cn('h-1 rounded-full w-6', gradient ? (isDark ? 'bg-white/25' : 'bg-[#0B0816]/15') : 'bg-primary/25')} />
              <div className={cn('h-1 rounded-full w-14', gradient ? 'bg-primary' : 'bg-gradient-accent')} />
              <div className={cn('h-1 rounded-full w-6', gradient ? (isDark ? 'bg-white/25' : 'bg-[#0B0816]/15') : 'bg-primary/25')} />
            </div>
          </div>

          {children && (
            <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
