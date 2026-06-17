import { Link } from 'react-router-dom';
import { BILLING_VARIANTS } from '@/data/billingData';
import SectionHeading from '@/components/shared/SectionHeading';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import { ArrowRight, ShoppingCart, Car, Truck, Store, Pill } from 'lucide-react';

const INDUSTRY_CARDS = [
  { key: 'main', icon: Pill, path: '/software/pharmacy-healthcare' },
  { key: 'auto-parts', icon: Car, path: '/software/auto-parts' },
  { key: 'fmcg', icon: Truck, path: '/software/fmcg' },
  { key: 'retail', icon: Store, path: '/software/retail' },
];

export default function IndustryVerticals() {
  return (
    <section className="py-20 md:py-28 bg-surface-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Billing Solutions for Every Industry"
          subtitle="Purpose-built billing software tailored to your specific business needs. Fast, reliable, and GST-compliant."
        />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {INDUSTRY_CARDS.map((card, i) => {
            const variant = BILLING_VARIANTS[card.key];
            return (
              <VerticalCard
                key={card.key}
                variant={variant}
                icon={card.icon}
                path={card.path}
                index={i}
              />
            );
          })}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/software"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300"
          >
            Explore All Solutions
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function VerticalCard({ variant, icon: Icon, path, index }) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <Link
      ref={ref}
      to={path}
      className={cn(
        'group relative p-5 md:p-6 rounded-xl bg-surface border border-border',
        'hover:border-primary/20 hover:shadow-lg transition-all duration-500',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      )}
      style={{ transitionDelay: `${(index % 8) * 60}ms` }}
    >
      <div
        className="w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: `${variant.color}15` }}
      >
        <Icon className="w-5 h-5 md:w-6 md:h-6" style={{ color: variant.color }} />
      </div>
      <h3 className="text-sm md:text-base font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
        {variant.title}
      </h3>
      <p className="mt-1 text-xs text-muted line-clamp-2 leading-relaxed">
        {variant.subtitle}
      </p>
    </Link>
  );
}
