import { Link } from 'react-router-dom';
import { useTheme } from '@/hooks/useTheme';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

export default function BillingCTA({ data }) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={cn(
            'relative rounded-3xl overflow-hidden p-10 md:p-14 text-center',
            isDark ? 'bg-gradient-to-br from-primary/20 via-surface to-accent/15' : 'bg-gradient-to-br from-primary/10 via-surface to-accent/10'
          )}
          style={{
            border: `1px solid ${isDark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)'}`,
          }}
        >
          {/* Decorative glow */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-primary/15 rounded-full blur-[60px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/15 rounded-full blur-[60px] pointer-events-none" />

          <div className="relative">
            <h2 className="text-2xl md:text-3xl font-extrabold text-foreground mb-4">
              Ready to Get Started with {data.title}?
            </h2>
            <p className="text-muted mb-8 max-w-2xl mx-auto leading-relaxed">
              Schedule a personalized demo and see how our {data.title.toLowerCase()} can transform your business operations. Free setup assistance included.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to={`/contact?software=${encodeURIComponent(data.title)}`}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-accent text-white font-semibold shadow-lg hover:shadow-glow hover:scale-[1.02] transition-all duration-300"
              >
                Schedule Free Demo <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/downloads"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-surface-secondary text-foreground font-semibold border border-border hover:border-primary/20 transition-all duration-300"
              >
                Download Setup
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
