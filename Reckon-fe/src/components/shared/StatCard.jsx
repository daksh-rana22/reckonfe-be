import { useEffect, useState, useRef } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useTheme } from '@/hooks/useTheme';
import { cn } from '@/lib/utils';

export default function StatCard({ label, value, suffix = '', icon: Icon, delay = 0 }) {
  const { ref, isVisible } = useScrollAnimation();
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    if (isVisible && !hasAnimated.current) {
      hasAnimated.current = true;
      const duration = 2200;
      const steps = 70;
      let current = 0;
      const timer = setInterval(() => {
        current += 1;
        // Ease-out: fast at start, slow at end
        const progress = 1 - Math.pow(1 - current / steps, 3);
        const val = Math.floor(progress * value);
        setCount(val);
        if (current >= steps) {
          setCount(value);
          clearInterval(timer);
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [isVisible, value]);

  const displayValue = value >= 1000
    ? (count >= 1000 ? `${(count / 1000).toFixed(count % 1000 === 0 ? 0 : 1)}K` : count)
    : count;

  return (
    <div
      ref={ref}
      className={cn(
        'relative group text-center transition-all duration-700',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Watermark number behind */}
      <span className={cn(
        "absolute inset-0 flex items-center justify-center text-[7rem] font-black select-none pointer-events-none leading-none",
        isDark ? "text-white/3" : "text-[#0B0816]/3"
      )}>
        {value >= 1000 ? `${Math.round(value / 1000)}K` : value}
      </span>

      {/* Icon */}
      {Icon && (
        <div className={cn(
          "w-14 h-14 mx-auto mb-4 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300 backdrop-blur-sm",
          isDark ? "bg-white/10 border-white/15" : "bg-white/40 border-white/60 shadow-sm"
        )}>
          <Icon className="w-7 h-7 text-primary" />
        </div>
      )}

      {/* Value */}
      <div className={cn(
        "relative text-5xl sm:text-6xl font-black leading-none mb-3 tracking-tight",
        isDark ? "text-white" : "text-[#0B0816]"
      )}>
        {value >= 1000 ? displayValue : count}
        <span className="text-primary">{suffix}</span>
      </div>

      {/* Label */}
      <p className={cn(
        "text-sm font-semibold uppercase tracking-widest",
        isDark ? "text-white/50" : "text-slate-600"
      )}>{label}</p>

      {/* Bottom glow line on hover */}
      <div className="mx-auto mt-4 h-0.5 w-0 group-hover:w-12 bg-primary rounded-full transition-all duration-500" />
    </div>
  );
}
