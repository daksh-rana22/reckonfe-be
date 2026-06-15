import { cn } from '@/lib/utils';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export default function FeatureCard({ icon: Icon, title, description, color, delay = 0, index = 0 }) {
  const { ref, isVisible } = useScrollAnimation();
  const num = String(index + 1).padStart(2, '0');

  return (
    <div
      ref={ref}
      className={cn(
        'group relative flex flex-col p-5 rounded-xl bg-card border border-border',
        'hover:shadow-lg transition-all duration-400 cursor-default overflow-hidden',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Colored top-bar accent */}
      <div
        className="absolute top-0 left-0 right-0 h-[2.5px] rounded-t-xl"
        style={{ background: `linear-gradient(90deg, ${color}, ${color}33)` }}
      />

      {/* Subtle ambient glow on hover */}
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
        style={{ background: `radial-gradient(ellipse 100% 70% at 50% 0%, ${color}06, transparent 65%)` }}
      />

      {/* Faded watermark number — top right, small */}
      <span
        className="absolute top-3 right-4 text-5xl font-black leading-none select-none pointer-events-none"
        style={{ color: `${color}0D` }}
      >
        {num}
      </span>

      <div className="relative flex items-start gap-3.5">
        {/* Icon */}
        <div
          className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 mt-0.5"
          style={{ background: `${color}14`, boxShadow: `0 0 0 1px ${color}1A` }}
        >
          {Icon && <Icon className="w-4.5 h-4.5" style={{ color }} />}
        </div>

        <div className="flex-1 min-w-0">
          {/* Number + title row */}
          <div className="flex items-center gap-2 mb-1.5">
            <span className="text-[10px] font-black uppercase tracking-widest" style={{ color: `${color}80` }}>
              {num}
            </span>
          </div>
          <h3 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors duration-300 leading-snug">
            {title}
          </h3>
          <p className="mt-1.5 text-xs text-muted leading-relaxed">{description}</p>
        </div>
      </div>

      {/* Bottom accent reveal line */}
      <div
        className="absolute bottom-0 left-5 h-px w-0 group-hover:w-[calc(100%-2.5rem)] transition-all duration-500 rounded-full"
        style={{ background: `linear-gradient(90deg, ${color}50, transparent)` }}
      />
    </div>
  );
}
