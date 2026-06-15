import { Link } from 'react-router-dom';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useTheme } from '@/hooks/useTheme';
import { cn } from '@/lib/utils';
import { ArrowRight, Sparkles, Users, Star } from 'lucide-react';

export default function CTASection() {
  const { ref, isVisible } = useScrollAnimation();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={cn(
            'relative overflow-hidden rounded-3xl p-10 md:p-16 lg:p-20 text-center transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          )}
          style={{
            background: isDark
              ? 'var(--gradient-section-dark)'
              : 'var(--gradient-section-light)'
          }}
        >
          {/* Grid overlay */}
          <div className="absolute inset-0 grid-mesh opacity-50 pointer-events-none rounded-3xl" />

          {/* Glowing orbs */}
          <div
            className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none animate-pulse-soft"
            style={{ backgroundColor: 'var(--section-glow-1)' }}
          />
          <div
            className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 pointer-events-none animate-pulse-soft"
            style={{ animationDelay: '2s', backgroundColor: 'var(--section-glow-2)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/3 to-transparent pointer-events-none" />

          {/* Floating decorative shapes */}
          <div className="absolute top-8 left-8 w-16 h-16 border border-primary/20 rounded-2xl rotate-12 opacity-40 pointer-events-none" />
          <div className="absolute bottom-8 right-8 w-10 h-10 border border-primary/25 rounded-xl -rotate-6 opacity-40 pointer-events-none" />
          <div className="absolute top-1/2 left-6 w-6 h-6 bg-primary/20 rounded-full blur-sm pointer-events-none" />
          <div className="absolute top-1/4 right-12 w-4 h-4 bg-primary/20 rounded-full blur-sm pointer-events-none" />

          <div className="relative">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/15 border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest mb-8">
              <Sparkles className="w-3.5 h-3.5" />
              Start Today — Free Demo
            </div>

            {/* Headline */}
            <h2 className={cn(
              "text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-6 tracking-tight",
              isDark ? "text-white" : "text-[#0B0816]"
            )}>
              Ready to Transform{' '}
              <span className="text-gradient-warm">Your Business?</span>
            </h2>

            <p className={cn(
              "mt-2 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed",
              isDark ? "text-white/55" : "text-[#0B0816]/70"
            )}>
              Join thousands of businesses across India who trust Reckon for their ERP and billing needs.
              Get started with a free demo — no commitment required.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl bg-gradient-to-r from-primary to-primary-dark text-white font-bold shadow-lg hover:shadow-glow hover:scale-[1.03] transition-all duration-300 active:scale-95"
              >
                Schedule Free Demo
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/softwares"
                className={cn(
                  "inline-flex items-center gap-2.5 px-8 py-4 rounded-2xl font-semibold border transition-all duration-300 backdrop-blur-sm",
                  isDark
                    ? "bg-white/8 text-white border-white/15 hover:bg-white/14 hover:border-white/25"
                    : "bg-white/40 text-blue-600 border-blue-500/30 hover:bg-white/60 hover:border-blue-500/50"
                )}
              >
                Explore Products
              </Link>
            </div>

            {/* Trust indicators */}
            <div className={cn(
              "mt-10 flex flex-wrap items-center justify-center gap-6 text-sm",
              isDark ? "text-white/40" : "text-slate-600 font-medium"
            )}>
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-primary/70" />
                <span>25,000+ businesses trust us</span>
              </div>
              <div className={cn("w-1 h-1 rounded-full hidden sm:block", isDark ? "bg-white/20" : "bg-slate-300")} />
              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-warning text-warning" />
                ))}
                <span className="ml-1">4.9/5 average rating</span>
              </div>
              <div className={cn("w-1 h-1 rounded-full hidden sm:block", isDark ? "bg-white/20" : "bg-slate-300")} />
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-success animate-pulse" />
                <span>16+ industries served</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
