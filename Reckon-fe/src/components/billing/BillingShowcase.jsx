import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useTheme } from '@/hooks/useTheme';
import { cn } from '@/lib/utils';
import { Check } from 'lucide-react';

export default function BillingShowcase({ data }) {
  const { ref, isVisible } = useScrollAnimation();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <section className="py-20 bg-surface-secondary/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={cn(
            'grid lg:grid-cols-2 gap-12 items-center transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          {/* Left: Showcase mockup */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl blur-xl opacity-50 pointer-events-none" />
            <div className="relative bg-surface rounded-2xl border border-border overflow-hidden shadow-lg">
              <ShowcaseMockup isDark={isDark} color={data.color} />
            </div>
          </div>

          {/* Right: Benefits */}
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-primary/10 text-primary mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3">
              Built for <span className="text-primary">Indian Businesses</span>
            </h2>
            <p className="text-muted leading-relaxed mb-8">
              Designed specifically to handle the unique requirements of Indian retail, distribution, and wholesale businesses with full GST compliance.
            </p>

            <div className="space-y-5">
              {data.benefits.map((benefit, i) => (
                <div key={i} className="flex gap-4">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                    style={{ backgroundColor: `${data.color}15` }}
                  >
                    <Check className="w-4 h-4" style={{ color: data.color }} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{benefit.title}</h4>
                    <p className="text-sm text-muted leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>


          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Showcase Mockup ─────────────────────────────────────────────── */
function ShowcaseMockup({ isDark, color }) {
  const bgCard = isDark ? '#1E293B' : '#FFFFFF';
  const borderColor = isDark ? '#334155' : '#E2E8F0';
  const textMuted = isDark ? '#94A3B8' : '#64748B';
  const textMain = isDark ? '#F1F5F9' : '#0F172A';
  const barBg = isDark ? '#0F172A' : '#F1F5F9';

  return (
    <div className="p-4">
      {/* Dashboard header */}
      <div className="flex items-center justify-between mb-4 pb-3 border-b" style={{ borderColor }}>
        <div>
          <div className="text-sm font-bold" style={{ color: textMain }}>📊 Dashboard</div>
          <div className="text-[10px] mt-0.5" style={{ color: textMuted }}>Today's Performance</div>
        </div>
        <div className="flex gap-2">
          <div className="px-2 py-1 rounded text-[9px] font-semibold text-white" style={{ background: color }}>Today</div>
          <div className="px-2 py-1 rounded text-[9px]" style={{ background: barBg, color: textMuted }}>Week</div>
          <div className="px-2 py-1 rounded text-[9px]" style={{ background: barBg, color: textMuted }}>Month</div>
        </div>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-4 gap-3 mb-4">
        {[
          { label: 'Total Sales', value: '₹2,45,890', change: '+12%', up: true },
          { label: 'Invoices', value: '184', change: '+8%', up: true },
          { label: 'Items Sold', value: '2,340', change: '+15%', up: true },
          { label: 'Profit Margin', value: '18.5%', change: '+2%', up: true },
        ].map((stat, i) => (
          <div key={i} className="rounded-lg p-2.5" style={{ background: barBg, border: `1px solid ${borderColor}` }}>
            <div className="text-[8px]" style={{ color: textMuted }}>{stat.label}</div>
            <div className="text-[11px] font-bold mt-0.5" style={{ color: textMain }}>{stat.value}</div>
            <div className="text-[7px] font-semibold mt-0.5" style={{ color: stat.up ? '#10B981' : '#EF4444' }}>
              {stat.change}
            </div>
          </div>
        ))}
      </div>

      {/* Chart area */}
      <div className="rounded-lg p-3 mb-3" style={{ background: barBg, border: `1px solid ${borderColor}` }}>
        <div className="text-[9px] font-bold mb-2" style={{ color: textMain }}>Sales Trend (Last 7 Days)</div>
        <svg viewBox="0 0 300 60" className="w-full" fill="none">
          {/* Grid lines */}
          {[0, 20, 40, 60].map(y => (
            <line key={y} x1="0" y1={y} x2="300" y2={y} stroke={borderColor} strokeWidth="0.5" strokeDasharray="4 4" />
          ))}
          {/* Gradient area */}
          <defs>
            <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={color} stopOpacity="0.3" />
              <stop offset="100%" stopColor={color} stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M0 50 L50 35 L100 42 L150 20 L200 28 L250 12 L300 18 L300 60 L0 60 Z" fill="url(#chartGrad)" />
          <path d="M0 50 L50 35 L100 42 L150 20 L200 28 L250 12 L300 18" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          {/* Data points */}
          {[[0,50],[50,35],[100,42],[150,20],[200,28],[250,12],[300,18]].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="3" fill={color} stroke={bgCard} strokeWidth="1.5" />
          ))}
        </svg>
      </div>

      {/* Recent transactions */}
      <div className="rounded-lg p-2.5" style={{ background: barBg, border: `1px solid ${borderColor}` }}>
        <div className="text-[9px] font-bold mb-2" style={{ color: textMain }}>Recent Transactions</div>
        {[
          { id: 'INV-1245', customer: 'Rajesh Kumar', amount: '₹3,450', status: 'Paid' },
          { id: 'INV-1244', customer: 'Priya Sharma', amount: '₹1,890', status: 'Paid' },
          { id: 'INV-1243', customer: 'Amit Verma', amount: '₹5,670', status: 'Pending' },
        ].map((tx, i) => (
          <div key={i} className="flex items-center justify-between py-1.5 border-b last:border-0" style={{ borderColor }}>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded flex items-center justify-center text-[7px] font-bold text-white" style={{ background: color }}>
                {tx.customer[0]}
              </div>
              <div>
                <div className="text-[8px] font-semibold" style={{ color: textMain }}>{tx.customer}</div>
                <div className="text-[6px]" style={{ color: textMuted }}>{tx.id}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="text-[8px] font-bold" style={{ color: textMain }}>{tx.amount}</div>
              <div
                className="text-[6px] font-semibold"
                style={{ color: tx.status === 'Paid' ? '#10B981' : '#F59E0B' }}
              >
                {tx.status}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
