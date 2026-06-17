import { Link } from 'react-router-dom';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useTheme } from '@/hooks/useTheme';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { BILLING_VARIANTS } from '@/data/billingData';

const VARIANT_CARDS = ['auto-parts', 'fmcg', 'retail'];

export default function BillingSoftwareCards() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-primary/10 text-primary mb-4">
            Industry Solutions
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3">
            Specialized Billing for <span className="text-primary">Every Industry</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto leading-relaxed">
            Choose the billing solution tailored to your specific industry needs. Each variant is optimized with industry-specific features and workflows.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {VARIANT_CARDS.map((key, i) => {
            const variant = BILLING_VARIANTS[key];
            return <VariantCard key={key} variant={variant} slug={key} index={i} />;
          })}
        </div>
      </div>
    </section>
  );
}

function VariantCard({ variant, slug, index }) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={cn(
        'group relative rounded-2xl bg-surface border border-border overflow-hidden transition-all duration-500',
        'hover:border-primary/30 hover:shadow-xl',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      )}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Color bar */}
      <div className="h-1.5" style={{ background: `linear-gradient(90deg, ${variant.color}, ${variant.accentColor})` }} />

      {/* Hover gradient */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `linear-gradient(135deg, ${variant.color}08, ${variant.accentColor}08)` }}
      />

      <div className="relative p-7">
        {/* Icon */}
        <div
          className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300"
          style={{ backgroundColor: `${variant.color}12` }}
        >
          <span className="text-2xl font-extrabold" style={{ color: variant.color }}>
            {variant.title.charAt(0)}
          </span>
        </div>

        <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {variant.title}
        </h3>

        <p className="text-sm text-muted leading-relaxed mb-5">
          {variant.subtitle}
        </p>

        {/* Feature pills */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {variant.heroFeatures.map((feat) => (
            <span
              key={feat}
              className="text-[10px] px-2 py-0.5 rounded-full bg-surface-secondary text-muted border border-border font-medium"
            >
              {feat}
            </span>
          ))}
        </div>

        <Link
          to={`/software/${slug}`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:gap-3 transition-all duration-300"
        >
          Explore <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}
