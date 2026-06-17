import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

export default function BillingFeaturesGrid({ data }) {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-primary/10 text-primary mb-4">
            Features
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3">
            Everything You Need to <span className="text-primary">Grow</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto leading-relaxed">
            {data.description}
          </p>
        </div>

        {/* Features grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
        'group relative p-6 rounded-2xl bg-surface border border-border overflow-hidden',
        'hover:border-primary/30 hover:shadow-xl transition-all duration-500',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      )}
      style={{ transitionDelay: `${(index % 6) * 80}ms` }}
    >
      {/* Hover gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] to-accent/[0.03] opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500" />

      <div className="relative">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
          style={{ backgroundColor: `${color}12` }}
        >
          <Icon className="w-6 h-6" style={{ color }} />
        </div>
        <h4 className="font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
          {feature.title}
        </h4>
        <p className="text-sm text-muted leading-relaxed">
          {feature.description}
        </p>
      </div>
    </div>
  );
}
