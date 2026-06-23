import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '@/hooks/useTheme';
import { cn } from '@/lib/utils';
import { ArrowRight, Check, ChevronRight, Home, Pill, Settings, Package, ShoppingBag } from 'lucide-react';

const getHeroImage = (variant) => {
  switch (variant) {
    case 'retail-pharmacies':
      return '/images/retail_pharmacy_billing.png';
    case 'hospital-pharmacies':
      return '/images/hospital_pharmacy_billing.png';
    case 'jan-aushadhi-kendra':
      return '/images/jan_aushadhi_kendra_billing.png';
    case 'ayurvedic-generic':
      return '/images/ayurvedic_generic_billing.png';
    case 'homeopathic-shops':
      return '/images/homeopathic_shop_billing.png';
    case 'pharma-wholesalers':
      return '/images/pharma_wholesaler_billing.png';
    case 'pharma-distributors':
      return '/images/pharma_distributor_billing.png';
    case 'pharma-marketing':
      return '/images/pharma_marketing_billing.png';
    case 'multi-branch-pharmacy':
      return '/images/multi_branch_pharmacy_billing.png';
    case 'auto-parts-retailers':
      return '/images/auto_parts_retailer_billing.png';
    case 'spare-parts-dealers':
      return '/images/spare_parts_dealer_billing.png';
    case 'car-accessories':
      return '/images/car_accessories_billing.png';
    case 'multi-branch-auto-parts':
      return '/images/multi_branch_autoparts_billing.png';
    case 'fmcg-distributors':
      return '/images/fmcg_distributor_billing.png';
    case 'fmcg-wholesalers':
      return '/images/fmcg_wholesaler_billing.png';
    case 'fmcg-retailers':
      return '/images/fmcg_retailer_billing.png';
    case 'fmcg-companies':
      return '/images/fmcg_company_billing.png';
    case 'grocery-kirana':
      return '/images/grocery_kirana_billing.png';
    case 'departmental-supermarket':
      return '/images/departmental_supermarket_billing.png';
    case 'garment-footwear':
      return '/images/garment_footwear_billing.png';
    case 'sarees-clothing':
      return '/images/sarees_clothing_billing.png';
    case 'pharmacy-ayurvedic':
      return '/images/pharmacy_ayurvedic_billing.png';
    case 'hardware-electrical':
      return '/images/hardware_electrical_billing.png';
    case 'books-stationary':
      return '/images/books_stationary_billing.png';
    case 'school-dresses':
      return '/images/school_dresses_billing.png';
    case 'gift-novelty':
      return '/images/gift_novelty_billing.png';
    case 'paint-dealers':
      return '/images/paint_dealers_billing.png';
    case 'multi-outlet-chain':
      return '/images/multi_outlet_chain_billing.png';
    case 'main':
    default:
      return '/images/retail_pharmacy_billing.png';
  }
};

export default function BillingHeroSection({ data, variant = 'main' }) {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        'relative overflow-hidden py-16 lg:py-24 select-none transition-colors duration-500 border-b',
        isDark ? 'text-white border-white/5' : 'text-[#0B0816] border-slate-100'
      )}
      style={{
        background: isDark
          ? 'var(--gradient-section-dark)'
          : 'var(--gradient-section-light)',
      }}
    >
      {/* Animated glow blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-16 left-8 w-80 h-80 rounded-full blur-[120px] animate-pulse-soft"
          style={{ backgroundColor: 'var(--section-glow-1)' }}
        />
        <div
          className="absolute bottom-16 right-8 w-96 h-96 rounded-full blur-[140px] animate-pulse-soft"
          style={{ animationDelay: '2s', backgroundColor: 'var(--section-glow-2)' }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full blur-[160px]"
          style={{ backgroundColor: 'var(--section-glow-3)' }}
        />
      </div>

      {/* Grid mesh */}
      <div
        className="absolute inset-0 grid-mesh pointer-events-none"
        style={{
          maskImage: isHovered
            ? `radial-gradient(circle 350px at ${coords.x}px ${coords.y}px, black 30%, transparent)`
            : 'radial-gradient(circle 600px at center, black 40%, transparent)',
          WebkitMaskImage: isHovered
            ? `radial-gradient(circle 350px at ${coords.x}px ${coords.y}px, black 30%, transparent)`
            : 'radial-gradient(circle 600px at center, black 40%, transparent)',
        }}
      />

      {/* Cursor spotlight */}
      <div
        className="absolute pointer-events-none rounded-full blur-[120px] w-[500px] h-[500px] transition-opacity duration-400"
        style={{
          background: isDark
            ? 'radial-gradient(circle, rgba(220,38,38,0.18), rgba(37,99,235,0.10), transparent)'
            : 'radial-gradient(circle, rgba(249,115,22,0.12), rgba(59,130,246,0.12), transparent)',
          left: coords.x - 250,
          top: coords.y - 250,
          opacity: isHovered ? 1 : 0,
        }}
      />

      {/* Floating geometric decorations */}
      <div className="absolute top-24 right-16 w-24 h-24 border border-primary/15 rounded-3xl rotate-12 opacity-30 animate-float pointer-events-none" />
      <div className="absolute bottom-32 left-12 w-16 h-16 border border-primary/20 rounded-2xl -rotate-6 opacity-20 animate-float pointer-events-none" style={{ animationDelay: '3s' }} />
      <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-primary/50 rounded-full animate-pulse-soft pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-primary/40 rounded-full animate-float-slow pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left: Text content */}
          <div className="lg:col-span-5 space-y-6">
            {/* Breadcrumbs */}
            <nav className={cn(
              'flex items-center gap-1.5 text-sm font-medium',
              isDark ? 'text-white/50' : 'text-slate-600'
            )}>
              <Link to="/" className="flex items-center gap-1 transition-colors hover:text-foreground">
                <Home className="w-3.5 h-3.5" />
                <span>Home</span>
              </Link>
              <ChevronRight className={cn('w-3.5 h-3.5', isDark ? 'text-white/25' : 'text-slate-400')} />
              <Link to="/software" className="transition-colors hover:text-foreground">Software</Link>
              <ChevronRight className={cn('w-3.5 h-3.5', isDark ? 'text-white/25' : 'text-slate-400')} />
              {variant !== 'main' && variant !== 'auto-parts' && variant !== 'fmcg' && variant !== 'retail' && (
                <>
                  {variant === 'auto-parts-retailers' || variant === 'spare-parts-dealers' || variant === 'car-accessories' || variant === 'multi-branch-auto-parts' ? (
                    <Link to="/software/auto-parts" className="transition-colors hover:text-foreground">Auto-Parts Billing Software</Link>
                  ) : variant === 'fmcg-distributors' || variant === 'fmcg-wholesalers' || variant === 'fmcg-retailers' || variant === 'fmcg-companies' ? (
                    <Link to="/software/fmcg" className="transition-colors hover:text-foreground">FMCG Billing Software</Link>
                  ) : variant === 'grocery-kirana' || variant === 'departmental-supermarket' || variant === 'garment-footwear' || variant === 'sarees-clothing' || variant === 'pharmacy-ayurvedic' || variant === 'hardware-electrical' || variant === 'books-stationary' || variant === 'school-dresses' || variant === 'gift-novelty' || variant === 'paint-dealers' || variant === 'multi-outlet-chain' ? (
                    <Link to="/software/retail" className="transition-colors hover:text-foreground">Retail Billing Software</Link>
                  ) : (
                    <Link to="/software/pharmacy-healthcare" className="transition-colors hover:text-foreground">Pharmacy & Healthcare</Link>
                  )}
                  <ChevronRight className={cn('w-3.5 h-3.5', isDark ? 'text-white/25' : 'text-slate-400')} />
                </>
              )}
              <span className={cn('font-semibold', isDark ? 'text-primary-light' : 'text-primary')}>
                {data.title}
              </span>
            </nav>

            {/* Title */}
            <h1 className={cn(
              'text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight leading-[1.1]',
              isDark ? 'text-white' : 'text-[#0B0816]'
            )}>
              {data.title}
            </h1>

            {/* Subtitle */}
            <p className={cn(
              'text-lg leading-relaxed max-w-xl capitalize',
              isDark ? 'text-white/60' : 'text-[#0B0816]/70'
            )}>
              {data.subtitle}
            </p>

            {/* Hero feature pills */}
            <div className="flex flex-wrap gap-2">
              {data.heroFeatures.map((feat) => (
                <span
                  key={feat}
                  className={cn(
                    'inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all',
                    isDark
                      ? 'bg-white/8 border-white/15 text-white/80'
                      : 'bg-white/60 border-white/80 text-[#0B0816]/80 shadow-sm'
                  )}
                >
                  <Check className="w-3 h-3 text-primary shrink-0" />
                  {feat}
                </span>
              ))}
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                to={`/contact?software=${encodeURIComponent(data.title)}`}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-primary text-white font-semibold shadow-lg hover:shadow-glow hover:scale-[1.02] transition-all duration-300"
              >
                Request Demo <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/downloads"
                className={cn(
                  'inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold border transition-all duration-300',
                  isDark
                    ? 'bg-white/5 border-white/15 text-white hover:bg-white/10'
                    : 'bg-white/70 border-white/90 text-[#0B0816] hover:bg-white shadow-sm'
                )}
              >
                Download Setup
              </Link>
            </div>

            {/* Decorative underline */}
            <div className="flex items-center gap-1.5 pt-2">
              <div className={cn('h-1 rounded-full w-6', isDark ? 'bg-white/25' : 'bg-[#0B0816]/15')} />
              <div className={cn('h-1 rounded-full w-14', isDark ? 'bg-primary-light' : 'bg-primary')} />
              <div className={cn('h-1 rounded-full w-6', isDark ? 'bg-white/25' : 'bg-[#0B0816]/15')} />
            </div>
          </div>

          {/* Right: Multi-device mockup or Uploaded Image */}
          <div className="lg:col-span-7 relative flex justify-center lg:justify-end w-full">
            {variant !== 'main' && variant !== 'auto-parts' && variant !== 'fmcg' && variant !== 'retail' ? (
              <div className="relative w-full max-w-[720px] lg:translate-x-12 xl:translate-x-16">
                {/* Outer glow ring */}
                <div className={cn(
                  "absolute -inset-3 bg-gradient-to-r rounded-3xl blur-2xl opacity-60",
                  isDark
                    ? "from-teal-600/30 via-teal-500/15 to-sky-600/20"
                    : "from-teal-500/25 via-teal-500/10 to-sky-600/20"
                )} />
                <div className={cn(
                  "absolute -inset-1 bg-gradient-to-r rounded-2xl blur-sm opacity-50",
                  isDark
                    ? "from-teal-600/15 to-sky-600/10"
                    : "from-teal-500/10 to-sky-500/5"
                )} />

                {/* Showcase Image */}
                <div className={cn(
                  "relative rounded-3xl border shadow-2xl p-2 overflow-hidden transition-all duration-500",
                  isDark
                    ? "bg-[#161228]/40 border-white/8"
                    : "bg-white/45 border-white/60 backdrop-blur"
                )}>
                  <img
                    src={getHeroImage(variant)}
                    alt={`Reckon ${data.title} Dashboard`}
                    className="rounded-2xl w-full object-contain hover:scale-[1.01] transition-transform duration-700 shadow-md"
                  />
                </div>
              </div>
            ) : (
              <DeviceMockup isDark={isDark} color={data.color} variant={variant} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Multi-Device POS Mockup ────────────────────────────────────── */
function DeviceMockup({ isDark, color, variant = 'main' }) {
  const bgCard = isDark ? '#1E293B' : '#FFFFFF';
  const borderColor = isDark ? '#334155' : '#E2E8F0';
  const textMuted = isDark ? '#94A3B8' : '#64748B';
  const textMain = isDark ? '#F1F5F9' : '#0F172A';
  const barBg = isDark ? '#0F172A' : '#F8FAFC';

  // Specific mock data for each software variant
  const mockData = {
    main: {
      storeName: 'Care Pharmacy',
      whatsappSender: 'Care Pharmacy',
      whatsappText: 'Dear Customer, your prescription bill of ₹135 from Care Pharmacy is ready. Get well soon!',
      multiLanguage: {
        en: 'Paracetamol 650mg',
        hi: 'पैरासिटामोल ६५०',
        ta: 'பாரசிட்டமால் 650',
      },
      products: [
        { name: 'Paracetamol', price: 15, icon: Pill, color: '#0D9488' },
        { name: 'Amoxicillin', price: 65, icon: Pill, color: '#3B82F6' },
        { name: 'Vitamin C', price: 40, icon: Pill, color: '#F59E0B' },
        { name: 'Crocin Adv', price: 18, icon: Pill, color: '#EF4444' },
        { name: 'Metformin', price: 25, icon: Pill, color: '#8B5CF6' },
        { name: 'Ibuprofen', price: 22, icon: Pill, color: '#EC4899' },
        { name: 'Atorvastatin', price: 75, icon: Pill, color: '#6366F1' },
        { name: 'Cough Syrup', price: 95, icon: Pill, color: '#14B8A6' },
      ],
      cart: [
        { name: 'Paracetamol 650mg', qty: 2, price: 30 },
        { name: 'Amoxicillin 500mg', qty: 1, price: 65 },
        { name: 'Vitamin C Chew', qty: 1, price: 40 },
      ],
      total: 135,
    },
    'auto-parts': {
      storeName: 'Reckon Auto Spares',
      whatsappSender: 'Reckon Spares',
      whatsappText: 'Dear Customer, thanks for purchasing from Reckon Auto Spares. Your total bill is ₹2,920. PDF attached.',
      multiLanguage: {
        en: 'Engine Oil 4L',
        hi: 'इंजन ऑयल ४ लीटर',
        ta: 'இயந்திர எண்ணெய் 4L',
      },
      products: [
        { name: 'Brake Pads Set', price: 1250, icon: Settings, color: '#EF4444' },
        { name: 'Mobil 1 Oil', price: 1850, icon: Settings, color: '#F59E0B' },
        { name: 'Spark Plug', price: 180, icon: Settings, color: '#3B82F6' },
        { name: 'Oil Filter', price: 350, icon: Settings, color: '#6B7280' },
        { name: 'Air Filter', price: 420, icon: Settings, color: '#10B981' },
        { name: 'Wiper Blades', price: 650, icon: Settings, color: '#0EA5E9' },
        { name: 'Headlight Bulb', price: 280, icon: Settings, color: '#FBBF24' },
        { name: 'Brake Disc', price: 2100, icon: Settings, color: '#DC2626' },
      ],
      cart: [
        { name: 'Mobil Engine Oil', qty: 1, price: 1850 },
        { name: 'Oil Filter', qty: 1, price: 350 },
        { name: 'Spark Plug (4pcs)', qty: 1, price: 720 },
      ],
      total: 2920,
    },
    fmcg: {
      storeName: 'Reckon Wholesale',
      whatsappSender: 'Reckon Wholesalers',
      whatsappText: 'Dear Retailer, beat delivery for Beat-A is dispatched. Total invoice amount is ₹1,592. PDF attached.',
      multiLanguage: {
        en: 'Tata Sugar 5 Kg',
        hi: 'टाटा चीनी ५ किलो',
        ta: 'டாடா சர்க்கரை 5 கிலோ',
      },
      products: [
        { name: 'Maggi Noodles', price: 14, icon: Package, color: '#EF4444' },
        { name: 'Coca Cola 500ml', price: 40, icon: Package, color: '#EF4444' },
        { name: 'Lays Chips', price: 20, icon: Package, color: '#F59E0B' },
        { name: 'Dettol Soap', price: 99, icon: Package, color: '#10B981' },
        { name: 'Tata Salt 1 Kg', price: 28, icon: Package, color: '#3B82F6' },
        { name: 'Marie Biscuit', price: 30, icon: Package, color: '#D97706' },
        { name: 'Amul Butter', price: 58, icon: Package, color: '#FBBF24' },
        { name: 'Surf Excel 1kg', price: 140, icon: Package, color: '#6366F1' },
      ],
      cart: [
        { name: 'Tata Salt (Case)', qty: 2, price: 560 },
        { name: 'Maggi Noodles (Box)', qty: 1, price: 336 },
        { name: 'Amul Butter (Pack)', qty: 12, price: 696 },
      ],
      total: 1592,
    },
    retail: {
      storeName: 'Mega Mart POS',
      whatsappSender: 'Mega Mart POS',
      whatsappText: 'Dear Customer, thank you for shopping at Mega Mart! Your invoice of ₹3,148 is ready. Loyalty points: +157.',
      multiLanguage: {
        en: 'Polo T-Shirt',
        hi: 'पोलो टी-शर्ट',
        ta: 'போலோ டி-சர்ட்',
      },
      products: [
        { name: 'Polo T-Shirt', price: 799, icon: ShoppingBag, color: '#3B82F6' },
        { name: 'Jeans Slim Fit', price: 1499, icon: ShoppingBag, color: '#1E3A8A' },
        { name: 'Wireless Mouse', price: 599, icon: ShoppingBag, color: '#10B981' },
        { name: 'Sneakers Sport', price: 1899, icon: ShoppingBag, color: '#EC4899' },
        { name: 'Leather Wallet', price: 450, icon: ShoppingBag, color: '#B45309' },
        { name: 'Sunglasses', price: 899, icon: ShoppingBag, color: '#111827' },
        { name: 'Smart Band v5', price: 1999, icon: ShoppingBag, color: '#06B6D4' },
        { name: 'LED Desk Lamp', price: 750, icon: ShoppingBag, color: '#F59E0B' },
      ],
      cart: [
        { name: 'Polo T-Shirt', qty: 1, price: 799 },
        { name: 'Sneakers Sport', qty: 1, price: 1899 },
        { name: 'Leather Wallet', qty: 1, price: 450 },
      ],
      total: 3148,
    },
  };

  const activeData = mockData[variant] || mockData.main;

  // Industry-specific tabs for the mock POS screen
  const getTabs = () => {
    switch (variant) {
      case 'main':
        return ['All Meds', 'Antibiotics', 'Vitamins', 'Pain Relief', 'Cardiac'];
      case 'auto-parts':
        return ['All Spares', 'Engine Parts', 'Brakes', 'Filters', 'Electrical'];
      case 'fmcg':
        return ['All Items', 'Beverages', 'Snacks', 'Personal Care', 'Home Care'];
      case 'retail':
        return ['All Products', 'Apparel', 'Grocery', 'Electronics', 'Footwear'];
      default:
        return ['All Items', 'Category 1', 'Category 2', 'Category 3', 'Category 4'];
    }
  };

  return (
    <div className="relative w-full max-w-[520px]">
      {/* Desktop Frame */}
      <div
        className="relative rounded-xl overflow-hidden shadow-2xl border-2"
        style={{ borderColor, background: bgCard }}
      >
        {/* Desktop header bar */}
        <div className="flex items-center gap-2 px-4 py-2.5" style={{ background: barBg, borderBottom: `1px solid ${borderColor}` }}>
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 mx-4">
            <div className="h-5 rounded-md px-3 flex items-center text-[9px] font-mono" style={{ background: isDark ? '#1E293B' : '#E2E8F0', color: textMuted }}>
              reckon-billing.com • {activeData.storeName}
            </div>
          </div>
        </div>

        {/* Desktop content - POS interface */}
        <div className="p-3">
          {/* Nav tabs */}
          <div className="flex gap-1 mb-3 overflow-hidden">
            {getTabs().map((tab, i) => (
              <div
                key={tab}
                className="px-2 py-1 rounded text-[7px] font-medium whitespace-nowrap"
                style={{
                  background: i === 0 ? color : 'transparent',
                  color: i === 0 ? '#FFF' : textMuted,
                  border: i !== 0 ? `1px solid ${borderColor}` : 'none',
                }}
              >
                {tab}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-12 gap-2">
            {/* Product grid */}
            <div className="col-span-8 grid grid-cols-4 gap-1.5">
              {activeData.products.map((item, i) => {
                const ItemIcon = item.icon;
                return (
                  <div
                    key={i}
                    className="rounded-lg p-1.5 flex flex-col items-center justify-between text-center transition-all hover:scale-[1.03]"
                    style={{ background: isDark ? '#1E293B' : '#F8FAFC', border: `1px solid ${borderColor}` }}
                  >
                    <div className="w-full aspect-square rounded mb-1 flex items-center justify-center" style={{ backgroundColor: `${item.color}15` }}>
                      <ItemIcon className="w-4 h-4" style={{ color: item.color }} />
                    </div>
                    <div className="text-[6px] font-bold truncate w-full" style={{ color: textMain }}>
                      {item.name}
                    </div>
                    <div className="text-[5.5px] font-bold mt-0.5" style={{ color }}>
                      ₹{item.price.toLocaleString()}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Cart sidebar */}
            <div className="col-span-4 rounded-lg p-2 flex flex-col justify-between" style={{ background: barBg, border: `1px solid ${borderColor}` }}>
              <div>
                <div className="text-[8px] font-bold mb-2 flex justify-between" style={{ color: textMain }}>
                  <span>Cart</span>
                  <span className="text-[5.5px] font-semibold" style={{ color }}>{activeData.cart.length} items</span>
                </div>
                <div className="space-y-1.5 max-h-[120px] overflow-y-auto">
                  {activeData.cart.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-start pb-1 border-b" style={{ borderColor }}>
                      <div className="min-w-0 flex-1">
                        <div className="text-[6px] font-bold truncate" style={{ color: textMain }}>{item.name}</div>
                        <div className="text-[5px]" style={{ color: textMuted }}>Qty: {item.qty}</div>
                      </div>
                      <div className="text-[6.5px] font-bold" style={{ color }}>₹{item.price}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-2 rounded-md py-1 text-center text-[7px] font-bold text-white shadow-sm cursor-pointer" style={{ background: color }}>
                Checkout • ₹{activeData.total.toLocaleString()}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Phone Frame - WhatsApp notification */}
      <div
        className="absolute -bottom-4 -left-6 w-[140px] rounded-2xl shadow-2xl border-2 overflow-hidden animate-float z-10"
        style={{ borderColor, background: bgCard, animationDelay: '1s' }}
      >
        {/* Phone notch */}
        <div className="flex justify-center py-1" style={{ background: barBg }}>
          <div className="w-12 h-1.5 rounded-full" style={{ background: borderColor }} />
        </div>
        {/* WhatsApp chat */}
        <div className="p-2" style={{ background: isDark ? '#0B4F3A' : '#DCF8C6' }}>
          <div className="text-[7px] font-bold flex items-center gap-1" style={{ color: isDark ? '#25D366' : '#128C7E' }}>
            <span>📱 {activeData.whatsappSender}</span>
          </div>
          <div className="mt-1 rounded-lg p-1.5" style={{ background: isDark ? '#1E293B' : '#FFFFFF' }}>
            <div className="flex items-center gap-1">
              <div className="w-4 h-5 rounded-sm flex items-center justify-center bg-red-500">
                <span className="text-[5px] text-white font-extrabold font-mono">PDF</span>
              </div>
              <div>
                <div className="text-[6px] font-bold" style={{ color: textMain }}>INV_#3382.pdf</div>
                <div className="text-[5px]" style={{ color: textMuted }}>Invoice ({activeData.total})</div>
              </div>
            </div>
          </div>
          <div className="mt-1 text-[5.5px] leading-tight" style={{ color: isDark ? '#D1FAE5' : '#065F46' }}>
            {activeData.whatsappText}
          </div>
        </div>
        {/* Bottom bar */}
        <div className="flex justify-around py-1.5" style={{ background: barBg }}>
          {[1, 2, 3].map((i) => (
            <div key={i} className="w-3 h-3 rounded-full" style={{ background: borderColor }} />
          ))}
        </div>
      </div>

      {/* Tablet Frame - Multi-language card */}
      <div
        className="absolute -top-3 -right-4 w-[160px] rounded-xl shadow-2xl border-2 overflow-hidden animate-float z-10"
        style={{ borderColor, background: bgCard, animationDelay: '2.5s' }}
      >
        <div className="px-2 py-1.5" style={{ background: barBg, borderBottom: `1px solid ${borderColor}` }}>
          <div className="text-[7px] font-bold" style={{ color: textMain }}>Multi-Language</div>
        </div>
        <div className="p-2 space-y-1.5">
          {[
            { name: activeData.multiLanguage.en, lang: 'English', price: `₹${activeData.products[0].price}` },
            { name: activeData.multiLanguage.hi, lang: 'हिंदी', price: `₹${activeData.products[0].price}` },
            { name: activeData.multiLanguage.ta, lang: 'தமிழ்', price: `₹${activeData.products[0].price}` },
          ].map((item, i) => (
            <div key={i} className="flex justify-between items-center pb-1 border-b last:border-0" style={{ borderColor }}>
              <div className="min-w-0 flex-1">
                <div className="text-[6px] font-bold leading-tight truncate" style={{ color }}>
                  {item.name}
                </div>
                <div className="text-[5px] mt-0.5" style={{ color: textMuted }}>
                  GST 18% • {item.lang}
                </div>
              </div>
              <div className="text-[6.5px] font-extrabold shrink-0 pl-1" style={{ color: textMain }}>{item.price}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
