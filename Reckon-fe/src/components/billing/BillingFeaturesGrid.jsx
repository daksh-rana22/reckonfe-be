import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

export default function BillingFeaturesGrid({ data }) {
  return (
    <section className="py-10 sm:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-8 sm:mb-14">
          <span className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-widest bg-primary/10 text-primary mb-3 sm:mb-4">
            Features
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-foreground mb-2 sm:mb-3">
            Everything You Need to <span className="text-primary">Grow</span>
          </h2>
          <p className="text-muted text-xs sm:text-base max-w-2xl mx-auto leading-relaxed">
            {data.description}
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6">
          {data.features.map((feat, i) => (
            <FeatureCard key={feat.title} feature={feat} index={i} color={data.color} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature, index, color }) {
  const { ref, isVisible } = useScrollAnimation();
  const Icon = feature.icon;

  return (
    <div
      ref={ref}
      className={cn(
        'group relative p-3.5 sm:p-6 rounded-xl sm:rounded-2xl bg-surface border border-border overflow-hidden',
        'hover:border-primary/30 hover:shadow-xl transition-all duration-500',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      )}
      style={{ transitionDelay: `${(index % 6) * 80}ms` }}
    >
      {/* Hover gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-accent/[0.03] opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500" />

      <div className="relative">
        <div
          className="w-9 h-9 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center mb-2.5 sm:mb-4 group-hover:scale-110 transition-transform duration-300"
          style={{ backgroundColor: `${color}12` }}
        >
          <Icon className="w-4.5 h-4.5 sm:w-6 sm:h-6" style={{ color }} />
        </div>
        <h4 className="font-semibold text-foreground text-xs sm:text-base mb-1 sm:mb-2 group-hover:text-primary transition-colors duration-200">
          {feature.title}
        </h4>
        <p className="text-[11px] sm:text-sm text-muted leading-snug sm:leading-relaxed">
          {feature.description}
        </p>
      </div>
    </div>
  );
}
