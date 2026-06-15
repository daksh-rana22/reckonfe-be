import StatCard from '@/components/shared/StatCard';
import { STATS } from '@/data/testimonials';
import { useTheme } from '@/hooks/useTheme';
import { cn } from '@/lib/utils';
import { Users, Layers, Clock, Headphones } from 'lucide-react';

const ICONS = [Users, Layers, Clock, Headphones];

export default function StatsCounter() {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    /* Outer section uses page background — no colour clash */
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Contained card ── */}
        <div
          className="relative overflow-hidden rounded-3xl px-8 py-16 shadow-2xl"
          style={{
            background: isDark
              ? 'var(--gradient-section-dark)'
              : 'var(--gradient-section-light)',
          }}
        >
          {/* Ambient glow blobs */}
          <div
            className="absolute top-0 left-1/4 w-80 h-80 rounded-full blur-[100px] pointer-events-none animate-pulse-soft"
            style={{ backgroundColor: 'var(--section-glow-1)' }}
          />
          <div
            className="absolute bottom-0 right-1/4 w-72 h-72 rounded-full blur-[90px] pointer-events-none animate-pulse-soft"
            style={{ animationDelay: '2s', backgroundColor: 'var(--section-glow-2)' }}
          />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] rounded-full blur-[80px] pointer-events-none"
            style={{ backgroundColor: 'var(--section-glow-3)' }}
          />

          {/* Grid overlay */}
          <div className="absolute inset-0 grid-mesh opacity-50 pointer-events-none rounded-3xl" />

          {/* Subtle top border shine */}
          <div className={cn(
            "absolute top-0 left-0 right-0 h-px bg-gradient-to-r pointer-events-none",
            isDark ? "from-transparent via-primary/40 to-transparent" : "from-transparent via-white/50 to-transparent"
          )} />
          <div className={cn(
            "absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r pointer-events-none",
            isDark ? "from-transparent via-white/8 to-transparent" : "from-transparent via-white/20 to-transparent"
          )} />

          {/* Corner decorations */}
          <div className="absolute top-6 right-6 w-14 h-14 border border-primary/15 rounded-xl rotate-12 opacity-40 pointer-events-none" />
          <div className="absolute bottom-6 left-6 w-10 h-10 border border-primary/15 rounded-lg -rotate-6 opacity-30 pointer-events-none" />

          <div className="relative">
            {/* Section header */}
            <div className="text-center mb-14">
              <span className={cn(
                "inline-flex items-center gap-2 px-4 py-1.5 rounded-full border text-xs font-bold uppercase tracking-widest mb-5",
                isDark ? "bg-white/6 border-white/10 text-white/55" : "bg-white/40 border-white/50 text-slate-700 shadow-sm"
              )}>
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                By the Numbers
              </span>
              <h2 className={cn(
                "text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight",
                isDark ? "text-white" : "text-[#0B0816]"
              )}>
                Trusted Across{' '}
                <span className="text-gradient">India</span>
              </h2>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
              {STATS.map((stat, i) => (
                <StatCard
                  key={stat.label}
                  label={stat.label}
                  value={stat.value}
                  suffix={stat.suffix}
                  icon={ICONS[i]}
                  delay={i * 120}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
