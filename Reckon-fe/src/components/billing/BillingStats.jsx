import { useState, useEffect, useRef } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useTheme } from '@/hooks/useTheme';
import { cn } from '@/lib/utils';

export default function BillingStats({ data }) {
  const { ref, isVisible } = useScrollAnimation();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section
      className={cn(
        'relative py-20 overflow-hidden transition-colors duration-500',
        isDark ? 'bg-stats-dark' : 'bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'
      )}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 pointer-events-none" />
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-white/10 text-white/80 mb-4">
            Trusted Nationwide
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">
            Numbers That <span className="text-primary-light">Speak</span>
          </h2>
          <p className="text-white/50 max-w-xl mx-auto">
            Powering thousands of businesses across India with reliable billing solutions.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {data.stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} isVisible={isVisible} color={data.color} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({ stat, index, isVisible, color }) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (isVisible && !hasAnimated.current) {
      hasAnimated.current = true;
      const duration = 2000;
      const steps = 60;
      const increment = stat.value / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.value) {
          setCount(stat.value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current * 10) / 10);
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [isVisible, stat.value]);

  const displayValue = Number.isInteger(stat.value) ? Math.floor(count) : count.toFixed(1);

  return (
    <div
      className={cn(
        'text-center p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-all duration-700',
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-95'
      )}
      style={{
        transitionDelay: `${index * 150}ms`,
        boxShadow: `0 0 40px ${color}10`,
      }}
    >
      <div className="text-3xl md:text-4xl font-extrabold text-white mb-1">
        {displayValue}
        <span style={{ color }}>{stat.suffix}</span>
      </div>
      <div className="text-sm text-white/50 font-medium">{stat.label}</div>
    </div>
  );
}
