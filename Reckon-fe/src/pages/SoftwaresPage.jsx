import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import PageHeader from '@/components/shared/PageHeader';
import { BUSINESS_APPS, VERTICALS, ERP_SOLUTIONS } from '@/data/softwares';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

const TABS = [
  { id: 'apps', label: 'Business Apps', data: BUSINESS_APPS },
  { id: 'verticals', label: 'Industry Verticals', data: VERTICALS },
  { id: 'erp', label: 'ERP Solutions', data: ERP_SOLUTIONS },
];

export default function SoftwaresPage() {
  const [activeTab, setActiveTab] = useState('apps');
  const currentTab = TABS.find(t => t.id === activeTab);

  return (
    <>
      <Helmet>
        <title>Our Software Solutions - Reckon Sales</title>
        <meta name="description" content="Explore Reckon's complete suite of ERP and billing software solutions for 16+ industries including pharmacy, retail, FMCG, auto parts, and more." />
      </Helmet>

      <PageHeader
        title="Our Software Solutions"
        subtitle="Complete suite of business management tools built for Indian enterprises. Choose the solution that fits your industry."
        breadcrumbs={[{ label: 'Softwares' }]}
        gradient
      >
        <div className="hidden lg:block relative w-full lg:max-w-md lg:h-[220px] select-none pointer-events-none">
          {/* Decorative background glow under the constellation on desktop */}
          <div className="hidden lg:block absolute inset-0 bg-primary/15 rounded-full blur-3xl pointer-events-none -translate-y-4" />

          {[
            { label: 'Business Apps', count: BUSINESS_APPS.length, color: '#F97316', bgGlow: 'rgba(249,115,22,0.25)', pos: 'lg:top-0 lg:right-36', delay: '0s' },
            { label: 'Industry Verticals', count: VERTICALS.length, color: '#EF4444', bgGlow: 'rgba(239,68,68,0.25)', pos: 'lg:top-20 lg:right-0', delay: '2s' },
            { label: 'ERP Solutions', count: ERP_SOLUTIONS.length, color: '#0EA5E9', bgGlow: 'rgba(14,165,233,0.25)', pos: 'lg:top-40 lg:right-24', delay: '4s' },
          ].map((item, idx) => (
            <div
              key={item.label}
              className={cn(
                "px-6 py-3.5 rounded-full lg:rounded-2xl flex items-center gap-3 transition-all duration-1000",
                "lg:absolute",
                item.pos,
                "bg-white/35 dark:bg-white/15 border-2 border-white/50 dark:border-white/20 text-slate-900 dark:text-white shadow-lg backdrop-blur-lg"
              )}
              style={{
                animation: 'float 6s ease-in-out infinite',
                animationDelay: item.delay,
                boxShadow: `0 12px 35px ${item.bgGlow}, 0 2px 4px rgba(0,0,0,0.06)`,
              }}
            >
              <span className="font-bold text-sm sm:text-base tracking-wide">{item.label}</span>
              <span className={cn(
                "text-xs px-2.5 py-0.5 rounded-full font-extrabold transition-all",
                "bg-black/15 text-slate-900 dark:bg-white/20 dark:text-white"
              )}>
                {item.count}
              </span>
            </div>
          ))}
        </div>
      </PageHeader>

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Switcher */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={cn(
                  'px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer',
                  activeTab === tab.id
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-surface-secondary text-muted hover:text-foreground hover:bg-surface'
                )}
              >
                {tab.label}
                <span className="ml-1.5 text-xs opacity-60">({tab.data.length})</span>
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <div className={cn(
            'grid gap-6',
            activeTab === 'apps' ? 'sm:grid-cols-2' : 'sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
          )}>
            {currentTab.data.map((product, i) => (
              <ProductCard key={product.slug} product={product} index={i} large={activeTab === 'apps'} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ProductCard({ product, index, large }) {
  const { ref, isVisible } = useScrollAnimation();
  const Icon = product.icon;

  return (
    <Link
      ref={ref}
      to={`/softwares/${product.slug}`}
      className={cn(
        'group relative rounded-xl bg-surface border border-border overflow-hidden',
        'hover:border-primary/20 hover:shadow-xl transition-all duration-500',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
        large ? 'p-8' : 'p-6'
      )}
      style={{ transitionDelay: `${(index % 6) * 80}ms` }}
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative">
        <div
          className={cn(
            'rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110',
            large ? 'w-14 h-14' : 'w-11 h-11'
          )}
          style={{ backgroundColor: `${product.color}15` }}
        >
          <Icon className={cn(large ? 'w-7 h-7' : 'w-5 h-5')} style={{ color: product.color }} />
        </div>

        <h3 className={cn(
          'font-semibold text-foreground group-hover:text-primary transition-colors',
          large ? 'text-xl mb-1' : 'text-base'
        )}>
          {product.name}
        </h3>

        {product.tagline && (
          <p className="text-sm text-primary/80 font-medium mb-2">{product.tagline}</p>
        )}

        <p className={cn('text-muted leading-relaxed', large ? 'text-sm' : 'text-xs mt-1 line-clamp-2')}>
          {product.description}
        </p>

        {large && product.features && (
          <div className="mt-4 flex flex-wrap gap-2">
            {product.features.slice(0, 4).map((f) => (
              <span key={f} className="text-xs px-2.5 py-1 rounded-full bg-surface-secondary text-muted border border-border">
                {f}
              </span>
            ))}
          </div>
        )}

        <div className="mt-4 flex items-center gap-1 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-0 group-hover:translate-x-1">
          Learn more <ArrowRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </Link>
  );
}
