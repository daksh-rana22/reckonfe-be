import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import {
  Check, ArrowRight, Zap, Shield, Star, Building2, Smartphone,
  Users, ChevronDown, ChevronUp, Globe, HeartPulse, Package, Sparkles
} from 'lucide-react';
import { cn } from '@/lib/utils';

/* ─── Pricing Data ────────────────────────────────────────────────── */
const PLANS = [
  {
    id: 'basic',
    name: 'Reckon Basic',
    tagline: 'Perfect for small retailers',
    price: 'Contact Us',
    priceNote: 'for pricing',
    badge: null,
    highlight: false,
    color: '#6366F1',
    gradientFrom: 'from-indigo-500/10',
    gradientTo: 'to-purple-500/5',
    borderColor: 'border-indigo-200 dark:border-indigo-900/50',
    icon: Zap,
    description: 'Ideal for small retailers who need fast, reliable billing with essential features.',
    targetUsers: [
      { label: 'Retailers', icon: '🛒' },
      { label: 'Wholesalers', icon: '📦' },
    ],
    features: [
      'Fast POS Billing',
      'GST Invoices & Reports',
      'Barcode / QR Scanning',
      'Stock Management',
      'Customer Ledger',
      'WhatsApp Bill Sharing',
      'Daily Sales Reports',
      'Multi-Language Support',
    ],
    cta: 'Get Started',
    ctaLink: '/contact?plan=basic',
  },
  {
    id: 'standard',
    name: 'Reckon Standard',
    tagline: 'For growing businesses',
    price: 'Contact Us',
    priceNote: 'for pricing',
    badge: 'Most Popular',
    highlight: true,
    color: '#F97316',
    gradientFrom: 'from-orange-500/15',
    gradientTo: 'to-amber-500/8',
    borderColor: 'border-orange-400 dark:border-orange-500/60',
    icon: Star,
    description: 'Recommended for growing businesses that need advanced features and multi-user access.',
    targetUsers: [
      { label: 'Retailers', icon: '🛒' },
      { label: 'Wholesalers', icon: '📦' },
      { label: 'Distributors', icon: '🚚' },
    ],
    features: [
      'All Basic features',
      'Multi-User Access',
      'Salesman / Beat Management',
      'Credit & Outstanding Ledger',
      'Scheme & Discount Mgmt.',
      'Purchase Order Tracking',
      'Detailed MIS Reports',
      'Bank Reconciliation',
      'E-Way Bill Integration',
      'Tally Export',
    ],
    cta: 'Get Started',
    ctaLink: '/contact?plan=standard',
  },
  {
    id: 'premium',
    name: 'Reckon Premium',
    tagline: 'Enterprise-grade power',
    price: 'Contact Us',
    priceNote: 'for pricing',
    badge: 'Enterprise',
    highlight: false,
    color: '#0EA5E9',
    gradientFrom: 'from-sky-500/10',
    gradientTo: 'to-cyan-500/5',
    borderColor: 'border-sky-200 dark:border-sky-900/50',
    icon: Shield,
    description: 'Built for large-scale operations, multi-branch chains, and marketing companies.',
    targetUsers: [
      { label: 'Wholesalers', icon: '📦' },
      { label: 'Distributors', icon: '🚚' },
      { label: 'Multi Branch', icon: '🏢' },
      { label: 'Marketing Companies', icon: '📊' },
    ],
    features: [
      'All Standard features',
      'Multi-Branch Management',
      'Central Inventory & Transfers',
      'Marketing Company Module',
      'MR Tracking & Reporting',
      'Advanced Analytics Dashboard',
      'API & ERP Integrations',
      'Priority Phone Support',
      'Dedicated Account Manager',
      'Custom Report Builder',
    ],
    cta: 'Contact Sales',
    ctaLink: '/contact?plan=premium',
  },
];

const ADDON_PRODUCTS = [
  {
    id: 'hims',
    name: 'Suvidha HIMS',
    tagline: 'Healthcare Information Management',
    icon: HeartPulse,
    color: '#10B981',
    description: 'Complete hospital & clinic management system built for healthcare professionals.',
    variants: [
      { name: 'Clinic', desc: 'OPD management, prescriptions & patient history' },
      { name: 'Nursing Home', desc: 'IPD admissions, ward management & billing' },
      { name: 'Hospital', desc: 'Full-scale hospital with lab, radiology & pharmacy' },
    ],
  },
  {
    id: 'cloud',
    name: 'Reckon Cloud',
    tagline: 'Work From Anywhere',
    icon: Globe,
    color: '#6366F1',
    description: 'Access your billing data anytime, anywhere with our secure cloud platform.',
    variants: [
      { name: 'Reckon On Cloud', desc: 'Full desktop software accessible remotely from any device' },
    ],
  },
  {
    id: 'mobile',
    name: 'Mobile Apps',
    tagline: 'Business on the go',
    icon: Smartphone,
    color: '#F97316',
    description: 'Powerful mobile applications to extend your business reach and productivity.',
    variants: [
      { name: 'Seller', desc: 'A salesman app for beat-wise order booking & tracking' },
      { name: 'Suvidha', desc: 'Retailers app for fast counter billing on mobile' },
      { name: 'Biz360', desc: 'Business analytics & reports at a glance' },
      { name: 'Mart', desc: 'E-commerce platform for online store presence' },
    ],
  },
];

const FAQS = [
  {
    q: 'What is included in the free demo?',
    a: 'Our free demo gives you a hands-on walkthrough of all features in the plan you choose. A dedicated representative will guide you through the software tailored to your business type.',
  },
  {
    q: 'Can I upgrade my plan later?',
    a: 'Absolutely! You can upgrade from Basic to Standard or Premium at any time. Your existing data will be seamlessly migrated and all new features will be instantly available.',
  },
  {
    q: 'Is there a difference in data security across plans?',
    a: 'All plans come with enterprise-grade data security, local encrypted backups, and optional cloud sync. Premium plans additionally get dedicated server options.',
  },
  {
    q: 'Do you offer custom pricing for large chains?',
    a: 'Yes. For multi-outlet chains or large enterprise deployments, we offer custom negotiated pricing. Please contact our sales team for a tailored quote.',
  },
  {
    q: 'What kind of support is included?',
    a: 'Basic and Standard plans include email + chat support with standard SLA. Premium plans get priority phone support, a dedicated account manager, and on-site training sessions.',
  },
];

/* ─── Component ────────────────────────────────────────────────────── */
export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <>
      <Helmet>
        <title>Pricing – Reckon Sales</title>
        <meta
          name="description"
          content="Explore Reckon's flexible pricing plans — Basic, Standard, and Premium — designed for retailers, wholesalers, distributors, and enterprise chains."
        />
      </Helmet>

      {/* ── Hero Section ── */}
      <section className="relative overflow-hidden py-20 lg:py-28 border-b border-border/60">
        {/* Background decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
          <div className="absolute top-1/3 left-0 w-64 h-64 bg-indigo-500/6 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-sky-500/6 rounded-full blur-[100px]" />
          <div className="absolute inset-0 grid-mesh opacity-20" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-primary/10 text-primary mb-6 border border-primary/20 shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            Transparent Pricing
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground tracking-tight leading-[1.08] mb-6">
            Simple Plans for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-400 to-accent">
              Every Business
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto leading-relaxed mb-8">
            From small retailers to large enterprise chains — Reckon has a plan tailored to your scale, with the right features at every level.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted">
            {['30-Day Free Trial', 'No Hidden Charges', 'Lifetime Updates', 'Dedicated Support'].map((item) => (
              <span key={item} className="flex items-center gap-1.5 font-medium">
                <Check className="w-4 h-4 text-primary shrink-0" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing Cards ── */}
      <section className="relative py-20 lg:py-28">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/3 rounded-full blur-[160px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Trial Badge */}
          <div className="flex justify-center mb-14">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-foreground text-background rounded-full text-sm font-bold shadow-lg">
              <Zap className="w-4 h-4 text-primary fill-primary" />
              30 days free trial on all plans
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {PLANS.map((plan, index) => (
              <PlanCard key={plan.id} plan={plan} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Feature Comparison Table ── */}
      <section className="py-20 bg-surface-secondary border-t border-b border-border/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-primary/10 text-primary mb-4 border border-primary/20">
              Compare Plans
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3">
              What's included in <span className="text-primary">each plan?</span>
            </h2>
            <p className="text-muted max-w-xl mx-auto">A detailed breakdown of features across all three tiers.</p>
          </div>

          <ComparisonTable />
        </div>
      </section>

      {/* ── Add-On Products ── */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-primary/10 text-primary mb-4 border border-primary/20">
              Extend Your Power
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3">
              Add-On <span className="text-primary">Products</span>
            </h2>
            <p className="text-muted max-w-xl mx-auto leading-relaxed">
              Supercharge your Reckon experience with our ecosystem of specialized tools and mobile apps.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {ADDON_PRODUCTS.map((product, index) => (
              <AddonCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 bg-surface-secondary border-t border-border/60">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-primary/10 text-primary mb-4 border border-primary/20">
              FAQs
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-3">
              Frequently Asked <span className="text-primary">Questions</span>
            </h2>
          </div>

          <div className="space-y-3">
            {FAQS.map((faq, index) => (
              <FaqItem
                key={index}
                faq={faq}
                isOpen={openFaq === index}
                onToggle={() => setOpenFaq(openFaq === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/8 via-transparent to-accent/6" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/8 rounded-full blur-[100px]" />
          <div className="absolute inset-0 grid-mesh opacity-15" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-6 leading-tight">
            Ready to transform your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
              business billing?
            </span>
          </h2>
          <p className="text-muted text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Join thousands of businesses across India who trust Reckon for their billing, inventory, and business management needs.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-bold shadow-lg hover:shadow-glow hover:scale-[1.03] transition-all duration-300 text-base"
            >
              Schedule a Free Demo
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/downloads"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-border bg-surface text-foreground font-semibold hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 text-base"
            >
              Download & Try Free
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

/* ─── Plan Card ───────────────────────────────────────────────────── */
function PlanCard({ plan, index }) {
  const Icon = plan.icon;

  return (
    <div
      className={cn(
        'relative flex flex-col rounded-3xl border-2 overflow-hidden transition-all duration-500 hover:-translate-y-2 group',
        plan.highlight
          ? 'border-orange-400 dark:border-orange-500/70 shadow-2xl shadow-orange-500/10'
          : plan.borderColor + ' shadow-lg',
        'bg-surface'
      )}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Top color bar */}
      <div
        className="h-1.5 w-full"
        style={{ background: `linear-gradient(90deg, ${plan.color}, ${plan.color}88)` }}
      />

      {/* Popular badge */}
      {plan.badge && (
        <div className="absolute top-6 right-6">
          <span
            className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider text-white shadow-md"
            style={{ background: plan.color }}
          >
            {plan.badge}
          </span>
        </div>
      )}

      {/* Background gradient */}
      <div
        className={cn('absolute inset-0 bg-gradient-to-br pointer-events-none opacity-60', plan.gradientFrom, plan.gradientTo)}
      />

      <div className="relative flex flex-col flex-1 p-8">
        {/* Icon + Name */}
        <div className="flex items-center gap-3 mb-4">
          <div
            className="w-11 h-11 rounded-2xl flex items-center justify-center shadow-sm"
            style={{ background: `${plan.color}18` }}
          >
            <Icon className="w-5 h-5" style={{ color: plan.color }} />
          </div>
          <div>
            <h3 className="text-xl font-extrabold text-foreground leading-tight">{plan.name}</h3>
            <p className="text-xs text-muted font-medium">{plan.tagline}</p>
          </div>
        </div>

        {/* Pricing */}
        <div className="mb-4">
          <p className="text-xs text-muted font-semibold uppercase tracking-wider mb-1">Starts at</p>
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-extrabold text-foreground">{plan.price}</span>
            <span className="text-sm text-muted">{plan.priceNote}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-muted leading-relaxed mb-6 border-b border-border pb-6">{plan.description}</p>

        {/* Target Users */}
        <div className="mb-6">
          <p className="text-xs font-bold uppercase tracking-wider text-muted mb-3">Best for</p>
          <div className="flex flex-wrap gap-2">
            {plan.targetUsers.map((u) => (
              <span
                key={u.label}
                className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border"
                style={{
                  background: `${plan.color}12`,
                  borderColor: `${plan.color}30`,
                  color: plan.color,
                }}
              >
                <span>{u.icon}</span>
                {u.label}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <Link
          to={plan.ctaLink}
          className={cn(
            'flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl font-bold text-sm transition-all duration-300 mb-8',
            plan.highlight
              ? 'bg-primary text-white shadow-lg hover:shadow-glow hover:scale-[1.02]'
              : 'bg-surface-secondary border border-border text-foreground hover:bg-primary/5 hover:border-primary/30'
          )}
        >
          {plan.cta}
          <ArrowRight className="w-4 h-4" />
        </Link>

        {/* Features */}
        <div className="space-y-2.5 flex-1">
          <p className="text-xs font-bold uppercase tracking-wider text-muted mb-3">
            {index === 0 ? 'Included features' : index === 1 ? 'Basic features, plus:' : 'Standard features, plus:'}
          </p>
          {plan.features.map((feat) => (
            <div key={feat} className="flex items-start gap-2.5">
              <div
                className="w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                style={{ background: `${plan.color}18` }}
              >
                <Check className="w-2.5 h-2.5" style={{ color: plan.color }} />
              </div>
              <span className="text-sm text-foreground/80 leading-snug">{feat}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ─── Comparison Table ─────────────────────────────────────────────── */
const TABLE_FEATURES = [
  { feature: 'GST Billing & Invoices', basic: true, standard: true, premium: true },
  { feature: 'Barcode / QR Scanning', basic: true, standard: true, premium: true },
  { feature: 'Stock Management', basic: true, standard: true, premium: true },
  { feature: 'WhatsApp Bill Sharing', basic: true, standard: true, premium: true },
  { feature: 'Multi-User Access', basic: false, standard: true, premium: true },
  { feature: 'Beat & Salesman Management', basic: false, standard: true, premium: true },
  { feature: 'Credit & Outstanding Ledger', basic: false, standard: true, premium: true },
  { feature: 'E-Way Bill Integration', basic: false, standard: true, premium: true },
  { feature: 'Tally Export', basic: false, standard: true, premium: true },
  { feature: 'Multi-Branch Management', basic: false, standard: false, premium: true },
  { feature: 'Marketing Company Module', basic: false, standard: false, premium: true },
  { feature: 'MR Tracking & Reporting', basic: false, standard: false, premium: true },
  { feature: 'Dedicated Account Manager', basic: false, standard: false, premium: true },
  { feature: 'Priority Phone Support', basic: false, standard: false, premium: true },
];

function ComparisonTable() {
  const cols = [
    { key: 'basic', label: 'Basic', color: '#6366F1' },
    { key: 'standard', label: 'Standard', color: '#F97316' },
    { key: 'premium', label: 'Premium', color: '#0EA5E9' },
  ];

  return (
    <div className="overflow-x-auto rounded-2xl border border-border shadow-sm">
      <table className="w-full">
        <thead>
          <tr className="border-b border-border">
            <th className="text-left px-6 py-4 text-sm font-bold text-foreground bg-surface w-1/2">Feature</th>
            {cols.map((col) => (
              <th key={col.key} className="px-4 py-4 text-center bg-surface">
                <span
                  className="inline-block px-3 py-1 rounded-full text-xs font-bold text-white"
                  style={{ background: col.color }}
                >
                  {col.label}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_FEATURES.map((row, i) => (
            <tr
              key={row.feature}
              className={cn(
                'border-b border-border/60 transition-colors duration-150',
                i % 2 === 0 ? 'bg-surface' : 'bg-surface-secondary'
              )}
            >
              <td className="px-6 py-3.5 text-sm text-foreground/80 font-medium">{row.feature}</td>
              {cols.map((col) => (
                <td key={col.key} className="px-4 py-3.5 text-center">
                  {row[col.key] ? (
                    <div className="flex justify-center">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center"
                        style={{ background: `${col.color}18` }}
                      >
                        <Check className="w-3 h-3" style={{ color: col.color }} />
                      </div>
                    </div>
                  ) : (
                    <span className="text-muted-foreground text-lg font-light">—</span>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/* ─── Addon Card ───────────────────────────────────────────────────── */
function AddonCard({ product, index }) {
  const Icon = product.icon;
  return (
    <div
      className="group relative p-8 rounded-3xl bg-surface border border-border hover:border-primary/30 hover:-translate-y-1.5 transition-all duration-500 shadow-sm hover:shadow-lg overflow-hidden"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(circle at 10% 10%, ${product.color}08, transparent 60%)` }}
      />
      <div className="absolute top-0 left-0 right-0 h-1" style={{ background: product.color }} />

      <div className="relative">
        <div
          className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 shadow-sm"
          style={{ background: `${product.color}15` }}
        >
          <Icon className="w-6 h-6" style={{ color: product.color }} />
        </div>

        <h3 className="text-xl font-extrabold text-foreground mb-1">{product.name}</h3>
        <p className="text-xs font-semibold text-muted uppercase tracking-wider mb-3">{product.tagline}</p>
        <p className="text-sm text-muted leading-relaxed mb-6">{product.description}</p>

        <div className="space-y-2.5">
          {product.variants.map((v) => (
            <div key={v.name} className="flex items-start gap-3">
              <div
                className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                style={{ background: `${product.color}15` }}
              >
                <Check className="w-3 h-3" style={{ color: product.color }} />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{v.name}</p>
                <p className="text-xs text-muted leading-snug">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <Link
          to="/contact"
          className="mt-7 flex items-center gap-1.5 text-sm font-bold group-hover:gap-2.5 transition-all duration-300"
          style={{ color: product.color }}
        >
          Learn More <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}

/* ─── FAQ Item ─────────────────────────────────────────────────────── */
function FaqItem({ faq, isOpen, onToggle }) {
  return (
    <div
      className={cn(
        'rounded-2xl border transition-all duration-300 overflow-hidden',
        isOpen ? 'border-primary/30 bg-primary/3 shadow-sm' : 'border-border bg-surface hover:border-primary/20'
      )}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-5 text-left gap-4"
        id={`faq-toggle-${faq.q.slice(0, 20).replace(/\s+/g, '-')}`}
      >
        <span className="text-sm font-semibold text-foreground leading-snug">{faq.q}</span>
        <div className={cn('shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300', isOpen ? 'bg-primary text-white' : 'bg-surface-secondary text-muted')}>
          {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </div>
      </button>
      <div
        className={cn(
          'overflow-hidden transition-all duration-300',
          isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <p className="px-6 pb-5 text-sm text-muted leading-relaxed">{faq.a}</p>
      </div>
    </div>
  );
}
