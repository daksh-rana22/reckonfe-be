import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import PageHeader from '@/components/shared/PageHeader';
import SoftwareIllustration from '@/components/software/SoftwareIllustration';
import SoftwareOverviewMockup from '@/components/software/SoftwareOverviewMockup';
import { useTheme } from '@/hooks/useTheme';
import { getSoftwareBySlug } from '@/data/softwares';
import { getDetailedFeatures, getFeaturesAtGlance } from '@/data/softwareFeatures';
import { cn } from '@/lib/utils';
import { Check, ArrowRight, ChevronDown, Home, ChevronRight } from 'lucide-react';

export default function SoftwareDetailPage() {
  const { slug } = useParams();
  const software = getSoftwareBySlug(slug);
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  if (!software) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Product Not Found</h1>
          <Link to="/softwares" className="text-primary hover:underline">← Back to Products</Link>
        </div>
      </div>
    );
  }

  const Icon = software.icon;
  const detailedFeatures = getDetailedFeatures(slug);
  const featuresAtGlance = getFeaturesAtGlance(slug);

  return (
    <>
      <Helmet>
        <title>{software.name} - Reckon Sales</title>
        <meta name="description" content={software.description} />
      </Helmet>

      {/* Dynamic Software Premium Header Banner matching user mockup style */}
      <section
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={cn(
          "relative overflow-hidden py-16 select-none transition-colors duration-500 border-b",
          isDark ? "text-white border-sky-950/20" : "text-[#0B0816] border-sky-100/50"
        )}
        style={{
          background: isDark
            ? 'var(--gradient-section-dark)'
            : 'var(--gradient-section-light)'
        }}
      >
        {/* Animated glow blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute top-16 left-8 w-80 h-80 rounded-full blur-[120px] animate-pulse-soft"
            style={{ backgroundColor: 'var(--section-glow-1)' }}
          />
          <div
            className="absolute bottom-16 right-8 w-96 h-96 rounded-full blur-[140px] animate-pulse-soft"
            style={{ animationDelay: '2s', backgroundColor: 'var(--section-glow-2)' }}
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full blur-[160px]"
            style={{ backgroundColor: 'var(--section-glow-3)' }}
          />
        </div>

        {/* Grid mesh */}
        <div
          className="absolute inset-0 grid-mesh pointer-events-none"
          style={{
            maskImage: isHovered
              ? `radial-gradient(circle 350px at ${coords.x}px ${coords.y}px, black 30%, transparent)`
              : 'radial-gradient(circle 600px at center, black 40%, transparent)',
            WebkitMaskImage: isHovered
              ? `radial-gradient(circle 350px at ${coords.x}px ${coords.y}px, black 30%, transparent)`
              : 'radial-gradient(circle 600px at center, black 40%, transparent)',
          }}
        />

        {/* Cursor spotlight */}
        <div
          className="absolute pointer-events-none rounded-full blur-[120px] w-[500px] h-[500px] transition-opacity duration-400"
          style={{
            background: isDark
              ? 'radial-gradient(circle, rgba(220,38,38,0.18), rgba(37,99,235,0.10), transparent)'
              : 'radial-gradient(circle, rgba(249,115,22,0.12), rgba(59,130,246,0.12), transparent)',
            left: coords.x - 250,
            top: coords.y - 250,
            opacity: isHovered ? 1 : 0,
          }}
        />

        {/* Floating geometric decorations */}
        <div className="absolute top-24 right-16 w-24 h-24 border border-primary/15 rounded-3xl rotate-12 opacity-30 animate-float pointer-events-none" />
        <div className="absolute bottom-32 left-12 w-16 h-16 border border-primary/20 rounded-2xl -rotate-6 opacity-20 animate-float pointer-events-none" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-primary/50 rounded-full animate-pulse-soft pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-primary/40 rounded-full animate-float-slow pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            {/* Left side: Breadcrumb & Title & Subtitle & Underline */}
            <div className="lg:col-span-7 text-left space-y-4">

              {/* Breadcrumbs matching PageHeader layout exactly */}
              <nav className={cn(
                "flex items-center gap-1.5 text-xs font-medium mb-6",
                isDark ? "text-white/50" : "text-slate-600"
              )}>
                <Link
                  to="/"
                  className="flex items-center gap-1 transition-colors hover:text-foreground"
                >
                  <Home className="w-3 h-3" />
                  <span>Home</span>
                </Link>
                <ChevronRight className={cn('w-3 h-3', isDark ? 'text-white/25' : 'text-slate-400')} />
                <Link
                  to="/softwares"
                  className="transition-colors hover:text-foreground"
                >
                  Softwares
                </Link>
                <ChevronRight className={cn('w-3 h-3', isDark ? 'text-white/25' : 'text-slate-400')} />
                <span className={cn('font-semibold', isDark ? 'text-primary-light' : 'text-primary')}>
                  {software.name}
                </span>
              </nav>

              {/* Title: Matching PageHeader typography */}
              <h1 className={cn(
                'text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]',
                isDark ? 'text-white' : 'text-[#0B0816]'
              )}>
                {software.name}
              </h1>

              {/* Subtitle */}
              {software.tagline && (
                <p className={cn(
                  'mt-5 text-lg leading-relaxed max-w-2xl capitalize',
                  isDark ? 'text-white/60' : 'text-[#0B0816]/70'
                )}>
                  {software.tagline}
                </p>
              )}

              {/* Decorative underline */}
              <div className="flex items-center gap-1.5 pt-3">
                <div className={cn('h-1 rounded-full w-6', isDark ? 'bg-white/25' : 'bg-[#0B0816]/15')} />
                <div className={cn('h-1 rounded-full w-14', isDark ? 'bg-primary-light' : 'bg-primary')} />
                <div className={cn('h-1 rounded-full w-6', isDark ? 'bg-white/25' : 'bg-[#0B0816]/15')} />
              </div>
            </div>

            {/* Right side: Premium custom vector illustration */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
              <div className="w-full max-w-[360px] md:max-w-[400px]">
                <SoftwareIllustration slug={software.slug} />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left - Description */}
            <div>
              <div
                className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-sm border border-border/50"
                style={{ backgroundColor: `${software.color}15` }}
              >
                <Icon className="w-8 h-8" style={{ color: software.color }} />
              </div>
              <h2 className="text-3xl font-extrabold text-foreground mb-4">Overview</h2>
              <p className="text-muted leading-relaxed mb-6">{software.description}</p>
              <p className="text-muted leading-relaxed">
                Designed specifically to streamline operations, this solution handles everything from billing and compliance to real-time tracking. It scales seamlessly with your business needs, helping you reduce overhead, improve efficiency, and make data-driven decisions.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to={`/contact?software=${encodeURIComponent(software.name)}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-semibold shadow-md hover:shadow-glow hover:scale-[1.02] transition-all duration-300"
                >
                  Request Demo <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/downloads"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-surface-secondary text-foreground font-semibold border border-border hover:border-primary/20 transition-all duration-300"
                >
                  Download Setup
                </Link>
              </div>
            </div>

            {/* Right - Product Illustration / Mockup */}
            <div className="relative w-full">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl blur-xl opacity-50 pointer-events-none" />
              <div className="relative bg-surface rounded-2xl border border-border overflow-hidden shadow-lg p-1.5 w-full aspect-[4/3] flex items-center justify-center">
                <SoftwareOverviewMockup slug={software.slug} color={software.color} />
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* ─── Detailed Features Card Grid ──────────────────────────── */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-foreground text-center mb-2">Features</h2>
          <p className="text-muted text-center mb-12 max-w-2xl mx-auto">
            Everything you need to run your {software.name.replace('Reckon-', '').replace('Specialized ', '')} business efficiently
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {detailedFeatures.map((feat, i) => {
              const FeatIcon = feat.icon;
              return (
                <div
                  key={feat.title}
                  className="group relative p-6 rounded-2xl bg-surface border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-accent/[0.03] opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500" />
                  <div className="relative">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: `${software.color}12` }}
                    >
                      <FeatIcon className="w-6 h-6" style={{ color: software.color }} />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
                      {feat.title}
                    </h4>
                    <p className="text-sm text-muted leading-relaxed">
                      {feat.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── Features at a Glance Accordion ───────────────────────── */}
      <section className="py-16 bg-surface-secondary/50 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-foreground text-center mb-2">
            Features at <span className="text-primary">a Glance</span>
          </h2>
          <p className="text-muted text-center mb-12 max-w-2xl mx-auto">
            Comprehensive module-wise breakdown of all capabilities
          </p>

          <div className="grid lg:grid-cols-[1fr_auto] gap-10 items-start">
            {/* Accordion */}
            <div className="space-y-3">
              {featuresAtGlance.map((section, idx) => (
                <AccordionItem
                  key={`${section.title}-${idx}`}
                  title={section.title}
                  items={section.items}
                  color={software.color}
                  defaultOpen={false}
                />
              ))}
            </div>

            {/* Side illustration */}
            <div className="hidden lg:block sticky top-28 w-64 shrink-0">
              <div className="rounded-2xl bg-surface border border-border p-6 shadow-md">
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4"
                  style={{ backgroundColor: `${software.color}12` }}
                >
                  <Icon className="w-8 h-8" style={{ color: software.color }} />
                </div>
                <h4 className="font-bold text-foreground text-center text-sm mb-1">{software.name}</h4>
                <p className="text-xs text-muted text-center mb-4">{software.tagline || software.description}</p>
                <div className="text-xs text-muted space-y-1.5">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-success shrink-0" />
                    <span>{featuresAtGlance.length} Modules</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-success shrink-0" />
                    <span>{featuresAtGlance.reduce((sum, s) => sum + s.items.length, 0)}+ Features</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-success shrink-0" />
                    <span>GST Compliant</span>
                  </div>
                </div>
                <Link
                  to={`/contact?software=${encodeURIComponent(software.name)}`}
                  className="mt-5 block text-center px-4 py-2.5 rounded-xl bg-primary text-white text-xs font-semibold hover:shadow-glow hover:scale-[1.02] transition-all duration-300"
                >
                  Book Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-background">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Ready to Get Started with {software.name}?
          </h2>
          <p className="text-muted mb-6">
            Schedule a personalized demo and see how {software.name} can transform your business operations.
          </p>
          <Link
            to={`/contact?software=${encodeURIComponent(software.name)}`}
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-accent text-white font-semibold shadow-lg hover:shadow-glow hover:scale-[1.02] transition-all duration-300"
          >
            Schedule Free Demo <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}

// ─── Accordion Item Component ────────────────────────────────────
function AccordionItem({ title, items, color, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="rounded-xl border border-border bg-surface overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-4 py-3 sm:px-5 sm:py-4 text-left group cursor-pointer"
      >
        <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
          <div
            className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg flex items-center justify-center shrink-0"
            style={{ backgroundColor: `${color}12` }}
          >
            <span className="text-xs font-bold" style={{ color }}>{title.charAt(0)}</span>
          </div>
          <span className="font-bold text-xs sm:text-sm text-foreground group-hover:text-primary transition-colors duration-200 uppercase tracking-wide truncate">
            {title}
          </span>
        </div>
        <ChevronDown
          className={cn(
            'w-4 h-4 text-muted transition-transform duration-300 shrink-0 ml-2',
            open && 'rotate-180'
          )}
        />
      </button>
      <div
        className={cn(
          'overflow-hidden transition-all duration-300 ease-in-out',
          open ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="px-4 pb-4 sm:px-5 sm:pb-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 sm:gap-y-2 pt-3 border-t border-border/50">
            {items.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 py-1.5">
                <div
                  className="w-1.5 h-1.5 rounded-full shrink-0 mt-2"
                  style={{ backgroundColor: color }}
                />
                <span className="text-xs sm:text-sm text-muted leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
