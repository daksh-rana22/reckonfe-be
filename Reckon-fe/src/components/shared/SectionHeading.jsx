import { cn } from '@/lib/utils';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function SectionHeading({ title, subtitle, badge, center = true, className, light = false }) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={cn(
        'mb-14 transition-all duration-700',
        center && 'text-center',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
        className
      )}
    >
      {badge && (
        <div className={cn(
          'inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-5 border',
          light
            ? 'bg-white/10 border-white/20 text-white/80'
            : 'bg-primary/8 border-primary/20 text-primary'
        )}>
          <span className={cn(
            'w-1.5 h-1.5 rounded-full',
            light ? 'bg-white/70' : 'bg-primary'
          )} />
          {badge}
        </div>
      )}

      <h2 className={cn(
        'text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.1]',
        light ? 'text-white' : 'text-foreground'
      )}>
        {title}
      </h2>

      {subtitle && (
        <p className={cn(
          'mt-4 text-base sm:text-lg leading-relaxed max-w-2xl',
          center && 'mx-auto',
          light ? 'text-white/65' : 'text-muted'
        )}>
          {subtitle}
        </p>
      )}

      {center && (
        <div className="mt-5 flex items-center justify-center gap-1.5">
          <div className={cn(
            'h-1 rounded-full w-8',
            light ? 'bg-white/30' : 'bg-primary/30'
          )} />
          <div className={cn(
            'h-1 rounded-full w-16',
            light ? 'bg-white' : 'bg-gradient-accent'
          )} />
          <div className={cn(
            'h-1 rounded-full w-8',
            light ? 'bg-white/30' : 'bg-primary/30'
          )} />
        </div>
      )}
    </div>
  );
}
