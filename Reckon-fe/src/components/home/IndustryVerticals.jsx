import { Link } from 'react-router-dom';
import { VERTICALS } from '@/data/softwares';
import SectionHeading from '@/components/shared/SectionHeading';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

export default function IndustryVerticals() {
  return (
    <section className="py-20 md:py-28 bg-surface-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="16+ Industry Solutions"
          subtitle="Purpose-built software for every type of business. Choose the vertical that matches your industry."
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {VERTICALS.slice(0, 8).map((vertical, i) => (
            <VerticalCard key={vertical.slug} vertical={vertical} index={i} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/softwares"
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

function VerticalCard({ vertical, index }) {
  const { ref, isVisible } = useScrollAnimation();
  const Icon = vertical.icon;

  return (
    <Link
      ref={ref}
      to={`/softwares/${vertical.slug}`}
      className={cn(
        'group relative p-5 rounded-xl bg-surface border border-border',
        'hover:border-primary/20 hover:shadow-lg transition-all duration-500',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      )}
      style={{ transitionDelay: `${(index % 8) * 60}ms` }}
    >
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110"
        style={{ backgroundColor: `${vertical.color}15` }}
      >
        <Icon className="w-5 h-5" style={{ color: vertical.color }} />
      </div>
      <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors leading-snug">
        {vertical.name}
      </h3>
      <p className="mt-1 text-xs text-muted line-clamp-2 leading-relaxed">
        {vertical.description}
      </p>
    </Link>
  );
}
