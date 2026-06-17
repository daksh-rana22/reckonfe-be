import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useTheme } from '@/hooks/useTheme';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import { BILLING_VARIANTS } from '@/data/billingData';
import PageHeader from '@/components/shared/PageHeader';
import {
  ArrowRight, ShoppingCart, Car, Truck, Store, Check,
  Zap, Shield, Globe, MessageCircle, BarChart3, Smartphone,
  Receipt, Users, ChevronRight, Pill,
} from 'lucide-react';

const VARIANT_CARDS = [
  {
    key: 'main',
    icon: Pill,
    path: '/software/pharmacy-healthcare',
    gradient: 'from-teal-500 to-emerald-600',
    glowColor: 'rgba(13, 148, 136, 0.25)',
  },
  {
    key: 'auto-parts',
    icon: Car,
    path: '/software/auto-parts',
    gradient: 'from-red-500 to-orange-500',
    glowColor: 'rgba(239, 68, 68, 0.25)',
  },
  {
    key: 'fmcg',
    icon: Truck,
    path: '/software/fmcg',
    gradient: 'from-sky-500 to-cyan-500',
    glowColor: 'rgba(14, 165, 233, 0.25)',
  },
  {
    key: 'retail',
    icon: Store,
    path: '/software/retail',
    gradient: 'from-amber-500 to-orange-600',
    glowColor: 'rgba(245, 158, 11, 0.25)',
  },
];

const PLATFORM_FEATURES = [
  { icon: Zap, title: 'Lightning Fast', desc: 'Process 500+ bills daily with our high-speed billing engine' },
  { icon: Shield, title: 'GST Compliant', desc: 'Auto-generate GSTR-1, 3B, 9 and e-Way Bills effortlessly' },
  { icon: Globe, title: 'Multi-Language', desc: 'Bill in Hindi, Tamil, Telugu, Kannada and 10+ languages' },
  { icon: MessageCircle, title: 'WhatsApp Invoices', desc: 'Send PDF invoices to customers via WhatsApp instantly' },
  { icon: BarChart3, title: 'Real-Time Analytics', desc: 'Track sales, margins, inventory with live dashboards' },
  { icon: Smartphone, title: 'Mobile Ready', desc: 'Access your business data anywhere from any device' },
  { icon: Receipt, title: 'Smart Inventory', desc: 'Auto reorder, batch tracking, and expiry management' },
  { icon: Users, title: 'Customer CRM', desc: 'Loyalty points, birthday offers, and purchase history' },
];

export default function SoftwarePage() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <>
      <Helmet>
        <title>Software Solutions - Reckon Sales</title>
        <meta name="description" content="Explore Reckon's complete suite of billing software solutions for auto-parts, FMCG, retail, and more. GST-compliant, multi-language POS built for Indian businesses." />
      </Helmet>

      {/* Hero */}
      <PageHeader
        title="Our Software Solutions"
        subtitle="India's most trusted billing & POS platform. Choose the solution built for your industry — fast, reliable, and 100% GST-compliant."
        breadcrumbs={[{ label: 'Software' }]}
        gradient
      >
        {/* Floating stat pills on desktop */}
        <div className="hidden lg:block relative w-full lg:max-w-md lg:h-[220px] select-none pointer-events-none">
          <div className="hidden lg:block absolute inset-0 bg-primary/15 rounded-full blur-3xl pointer-events-none -translate-y-4" />
          {[
            { label: 'Billing Solutions', count: '4', color: '#2563EB', bgGlow: 'rgba(37,99,235,0.25)', pos: 'lg:top-0 lg:right-36', delay: '0s' },
            { label: 'Businesses Served', count: '10K+', color: '#EF4444', bgGlow: 'rgba(239,68,68,0.25)', pos: 'lg:top-20 lg:right-0', delay: '2s' },
            { label: 'GST Compliant', count: '100%', color: '#10B981', bgGlow: 'rgba(16,185,129,0.25)', pos: 'lg:top-40 lg:right-24', delay: '4s' },
          ].map((item) => (
            <div
              key={item.label}
              className={cn(
                'px-6 py-3.5 rounded-2xl flex items-center gap-3 transition-all duration-1000',
                'lg:absolute',
                item.pos,
                'bg-white/35 dark:bg-white/15 border-2 border-white/50 dark:border-white/20 text-slate-900 dark:text-white shadow-lg backdrop-blur-lg'
              )}
              style={{
                animation: 'float 6s ease-in-out infinite',
                animationDelay: item.delay,
                boxShadow: `0 12px 35px ${item.bgGlow}, 0 2px 4px rgba(0,0,0,0.06)`,
              }}
            >
              <span className="font-bold text-sm tracking-wide">{item.label}</span>
              <span className="text-xs px-2.5 py-0.5 rounded-full font-extrabold bg-black/15 text-slate-900 dark:bg-white/20 dark:text-white">
                {item.count}
              </span>
            </div>
          ))}
        </div>
      </PageHeader>

      {/* ─── Software Product Cards ──────────────────────────────────── */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-primary/10 text-primary mb-4">
              Choose Your Solution
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3">
              Billing Software for <span className="text-primary">Every Industry</span>
            </h2>
            <p className="text-muted max-w-2xl mx-auto leading-relaxed">
              Each solution is purpose-built with industry-specific features, workflows, and compliance requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {VARIANT_CARDS.map((card, i) => (
              <ProductCard key={card.key} card={card} index={i} isDark={isDark} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Platform Features Grid ──────────────────────────────────── */}
      <section className="py-20 bg-surface-secondary/50 border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-primary/10 text-primary mb-4">
              Platform Features
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3">
              Powerful Features <span className="text-primary">Across All</span> Solutions
            </h2>
            <p className="text-muted max-w-2xl mx-auto leading-relaxed">
              Every Reckon billing solution comes loaded with these core capabilities out of the box.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {PLATFORM_FEATURES.map((feat, i) => (
              <PlatformFeatureCard key={feat.title} feature={feat} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Comparison Table ─────────────────────────────────────────── */}
      <ComparisonSection isDark={isDark} />

      {/* ─── CTA ────────────────────────────────────────────────────── */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={cn(
              'relative rounded-3xl overflow-hidden p-10 md:p-14 text-center',
              isDark
                ? 'bg-gradient-to-br from-primary/20 via-surface to-accent/15'
                : 'bg-gradient-to-br from-primary/10 via-surface to-accent/10'
            )}
            style={{ border: `1px solid ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)'}` }}
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary/15 rounded-full blur-[60px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/15 rounded-full blur-[60px] pointer-events-none" />
            <div className="relative">
              <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-4">
                Not Sure Which Solution Fits You?
              </h2>
              <p className="text-muted mb-8 max-w-2xl mx-auto leading-relaxed">
                Talk to our experts and get a personalized recommendation based on your business type, size, and requirements.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-accent text-white font-semibold shadow-lg hover:shadow-glow hover:scale-[1.02] transition-all duration-300"
                >
                  Talk to an Expert <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/downloads"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-surface-secondary text-foreground font-semibold border border-border hover:border-primary/20 transition-all duration-300"
                >
                  Download Free Trial
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ─── Product Card Component ──────────────────────────────────────── */
function ProductCard({ card, index, isDark }) {
  const { ref, isVisible } = useScrollAnimation();
  const variant = BILLING_VARIANTS[card.key];
  const Icon = card.icon;

  return (
    <Link
      ref={ref}
      to={card.path}
      className={cn(
        'group relative rounded-2xl bg-surface border border-border overflow-hidden',
        'hover:border-primary/30 hover:shadow-2xl transition-all duration-500',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      )}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Top gradient bar */}
      <div className={cn('h-2 bg-gradient-to-r', card.gradient)} />

      {/* Hover glow overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(circle at 50% 0%, ${card.glowColor}, transparent 70%)` }}
      />

      <div className="relative p-7 md:p-8">
        <div className="flex items-start justify-between mb-5">
          {/* Icon */}
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm"
            style={{ backgroundColor: `${variant.color}15` }}
          >
            <Icon className="w-7 h-7" style={{ color: variant.color }} />
          </div>
          {/* Arrow */}
          <div className="w-10 h-10 rounded-full flex items-center justify-center bg-surface-secondary border border-border group-hover:bg-primary group-hover:border-primary group-hover:text-white text-muted transition-all duration-300">
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </div>
        </div>

        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {variant.title}
        </h3>

        <p className="text-sm text-muted leading-relaxed mb-5">
          {variant.subtitle}
        </p>

        {/* Feature pills */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {variant.heroFeatures.map((feat) => (
            <span
              key={feat}
              className="inline-flex items-center gap-1 text-[10px] px-2.5 py-1 rounded-full bg-surface-secondary text-muted border border-border font-medium"
            >
              <Check className="w-2.5 h-2.5 text-primary" />
              {feat}
            </span>
          ))}
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 gap-3 pt-4 border-t border-border">
          {variant.stats.slice(0, 2).map((stat) => (
            <div key={stat.label}>
              <div className="text-lg font-extrabold text-foreground">
                {stat.value.toLocaleString()}<span style={{ color: variant.color }}>{stat.suffix}</span>
              </div>
              <div className="text-[10px] text-muted font-medium uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
}

/* ─── Platform Feature Card ──────────────────────────────────────── */
function PlatformFeatureCard({ feature, index }) {
  const { ref, isVisible } = useScrollAnimation();
  const Icon = feature.icon;

  return (
    <div
      ref={ref}
      className={cn(
        'group p-5 rounded-xl bg-surface border border-border hover:border-primary/20 hover:shadow-lg transition-all duration-500',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      )}
      style={{ transitionDelay: `${(index % 4) * 80}ms` }}
    >
      <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-primary/10 mb-3 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <h4 className="font-semibold text-foreground text-sm mb-1 group-hover:text-primary transition-colors">{feature.title}</h4>
      <p className="text-xs text-muted leading-relaxed">{feature.desc}</p>
    </div>
  );
}

/* ─── Comparison Table Section ────────────────────────────────────── */
function ComparisonSection({ isDark }) {
  const { ref, isVisible } = useScrollAnimation();
  const features = [
    'GST Billing & e-Way Bills',
    'Barcode / QR Scanning',
    'Multi-Payment Modes',
    'WhatsApp Invoicing',
    'Multi-Language Support',
    'Customer Loyalty / CRM',
    'Real-Time Inventory',
    'Multi-Store Sync',
    'Tally Export',
    'Cloud Backup',
  ];

  const solutions = [
    { name: 'Pharmacy', color: '#0D9488', checks: [1,1,1,1,1,1,1,1,1,1] },
    { name: 'Auto-Parts', color: '#EF4444', checks: [1,1,1,1,0,1,1,1,1,1] },
    { name: 'FMCG', color: '#0EA5E9', checks: [1,1,1,1,0,1,1,1,1,1] },
    { name: 'Retail', color: '#F59E0B', checks: [1,1,1,1,1,1,1,1,1,1] },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-primary/10 text-primary mb-4">
            Compare
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3">
            Feature <span className="text-primary">Comparison</span>
          </h2>
          <p className="text-muted max-w-xl mx-auto">
            See how each solution stacks up across key capabilities.
          </p>
        </div>

        <div
          ref={ref}
          className={cn(
            'rounded-2xl border border-border bg-surface overflow-hidden shadow-lg transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          {/* Table header */}
          <div className="grid grid-cols-5 gap-0 border-b border-border bg-surface-secondary/80">
            <div className="p-4 text-xs font-bold text-muted uppercase tracking-wider">Feature</div>
            {solutions.map((sol) => (
              <div key={sol.name} className="p-4 text-center">
                <div className="text-xs font-bold uppercase tracking-wider" style={{ color: sol.color }}>
                  {sol.name}
                </div>
              </div>
            ))}
          </div>

          {/* Table rows */}
          {features.map((feat, i) => (
            <div
              key={feat}
              className={cn(
                'grid grid-cols-5 gap-0 border-b border-border/50 last:border-0',
                i % 2 === 0 ? 'bg-surface' : 'bg-surface-secondary/30'
              )}
            >
              <div className="p-3.5 text-sm text-foreground font-medium flex items-center">
                {feat}
              </div>
              {solutions.map((sol) => (
                <div key={sol.name} className="p-3.5 flex items-center justify-center">
                  {sol.checks[i] ? (
                    <div className="w-5 h-5 rounded-full flex items-center justify-center" style={{ backgroundColor: `${sol.color}15` }}>
                      <Check className="w-3 h-3" style={{ color: sol.color }} />
                    </div>
                  ) : (
                    <div className="w-5 h-5 rounded-full bg-surface-secondary flex items-center justify-center">
                      <span className="text-[10px] text-muted">—</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
