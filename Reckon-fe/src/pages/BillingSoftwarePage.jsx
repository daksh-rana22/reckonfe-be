import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getBillingVariant, PHARMACY_SUB_VARIANTS, AUTOPARTS_SUB_VARIANTS, FMCG_SUB_VARIANTS, RETAIL_SUB_VARIANTS, PHARMACY_FEATURES_AT_GLANCE, AUTOPARTS_FEATURES_AT_GLANCE, FMCG_FEATURES_AT_GLANCE, RETAIL_FEATURES_AT_GLANCE } from '@/data/billingData';
import BillingHeroSection from '@/components/billing/BillingHeroSection';
import BillingFeaturesGrid from '@/components/billing/BillingFeaturesGrid';
import BillingShowcase from '@/components/billing/BillingShowcase';
import BillingCTA from '@/components/billing/BillingCTA';
import BillingSoftwareCards from '@/components/billing/BillingSoftwareCards';
import ClientsSection from '@/components/home/ClientsSection';
import { ArrowRight, ChevronDown, Menu, Search, QrCode, RefreshCw, Pill, Activity, Leaf, FlaskConical, Package, BookOpen, Barcode, Settings, Smartphone, Network, FileText, Printer, Users, Database } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

export default function BillingSoftwarePage({ variant: propVariant = 'main' }) {
  const { subVariant } = useParams();

  // Resolve the active variant (checking subVariant first, then propVariant)
  const activeVariant = subVariant || propVariant;

  // Resolve active data (if subVariant, find in PHARMACY_SUB_VARIANTS, AUTOPARTS_SUB_VARIANTS, FMCG_SUB_VARIANTS, or RETAIL_SUB_VARIANTS; else get billing variant)
  const data = subVariant && subVariant in PHARMACY_SUB_VARIANTS
    ? PHARMACY_SUB_VARIANTS[subVariant]
    : subVariant && subVariant in AUTOPARTS_SUB_VARIANTS
      ? AUTOPARTS_SUB_VARIANTS[subVariant]
      : subVariant && subVariant in FMCG_SUB_VARIANTS
        ? FMCG_SUB_VARIANTS[subVariant]
        : subVariant && subVariant in RETAIL_SUB_VARIANTS
          ? RETAIL_SUB_VARIANTS[subVariant]
          : getBillingVariant(activeVariant);

  // Scroll to top on variant change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeVariant]);

  const isMainPage = activeVariant === 'main' || activeVariant === 'auto-parts' || activeVariant === 'fmcg' || activeVariant === 'retail';

  return (
    <>
      <Helmet>
        <title>{data.title} - Reckon Sales</title>
        <meta name="description" content={data.description} />
      </Helmet>

      <BillingHeroSection data={data} variant={activeVariant} />

      {/* Show the specialized Pharmacy sub-variants grid on the main Pharmacy page (ABOVE Features Grid) */}
      {activeVariant === 'main' && <PharmacySubVariantsGrid />}

      {/* Show the specialized Auto Parts sub-variants grid on the main Auto Parts page (ABOVE Features Grid) */}
      {activeVariant === 'auto-parts' && <AutoPartsSubVariantsGrid />}

      {/* Show the specialized FMCG sub-variants grid on the main FMCG page (ABOVE Features Grid) */}
      {activeVariant === 'fmcg' && <FmcgSubVariantsGrid />}

      {/* Show the specialized Retail sub-variants grid on the main Retail page (ABOVE Features Grid) */}
      {activeVariant === 'retail' && <RetailSubVariantsGrid />}

      <BillingFeaturesGrid data={data} />

      {/* Show the comprehensive accordion section on specialized sub-pages followed by Clients */}
      {!isMainPage && (
        <>
          <FeaturesAtGlanceSection color={data.color} variant={activeVariant} />
          <ClientsSection software={data.slug} />
        </>
      )}

      {/* Show other software variant cards only on the main Pharmacy page */}
      {activeVariant === 'main' && <BillingSoftwareCards />}

      {isMainPage && (
        <>
          <BillingShowcase data={data} />
          {activeVariant !== 'main' && <ClientsSection software={data.slug} />}
        </>
      )}

      <BillingCTA data={data} />
    </>
  );
}

/* ─── Specialized Pharmacy Sub-variants Grid ────────────────────────── */
function PharmacySubVariantsGrid() {
  return (
    <section className="relative py-24 bg-background overflow-hidden border-b border-border/60">
      {/* Visual background accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-primary/10 text-primary mb-4 border border-primary/20 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Specialized Solutions
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight">
            Pharmacy & Healthcare <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Software</span>
          </h2>
          <p className="text-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            We offer custom-tailored billing & ERP software for every segment of the pharmaceutical and healthcare industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(PHARMACY_SUB_VARIANTS).map(([key, item], index) => (
            <SubVariantCard key={key} item={item} slug={key} index={index} baseRoute="pharmacy-healthcare" />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Specialized Auto Parts Sub-variants Grid ────────────────────────── */
function AutoPartsSubVariantsGrid() {
  return (
    <section className="relative py-24 bg-background overflow-hidden border-b border-border/60">
      {/* Visual background accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-primary/10 text-primary mb-4 border border-primary/20 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Specialized Solutions
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight">
            Auto-Parts Billing <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Software</span>
          </h2>
          <p className="text-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            We offer custom-tailored billing & ERP software for every segment of the auto-parts and automotive industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(AUTOPARTS_SUB_VARIANTS).map(([key, item], index) => (
            <SubVariantCard key={key} item={item} slug={key} index={index} baseRoute="auto-parts" />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Specialized FMCG Sub-variants Grid ────────────────────────── */
function FmcgSubVariantsGrid() {
  return (
    <section className="relative py-24 bg-background overflow-hidden border-b border-border/60">
      {/* Visual background accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-primary/10 text-primary mb-4 border border-primary/20 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Specialized Solutions
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight">
            FMCG Billing <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Software</span>
          </h2>
          <p className="text-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            We offer custom-tailored billing & ERP software for every segment of the FMCG and consumer goods industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(FMCG_SUB_VARIANTS).map(([key, item], index) => (
            <SubVariantCard key={key} item={item} slug={key} index={index} baseRoute="fmcg" />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Specialized Retail Sub-variants Grid ────────────────────────── */
function RetailSubVariantsGrid() {
  return (
    <section className="relative py-24 bg-background overflow-hidden border-b border-border/60">
      {/* Visual background accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-primary/5 rounded-full blur-[140px] pointer-events-none" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-primary/10 text-primary mb-4 border border-primary/20 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Specialized Solutions
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight">
            Retail Billing <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Software</span>
          </h2>
          <p className="text-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            We offer custom-tailored billing & ERP software for every segment of the retail and consumer shop industry.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(RETAIL_SUB_VARIANTS).map(([key, item], index) => (
            <SubVariantCard key={key} item={item} slug={key} index={index} baseRoute="retail" />
          ))}
        </div>
      </div>
    </section>
  );
}

function SubVariantCard({ item, slug, index, baseRoute = 'pharmacy-healthcare' }) {
  const { ref, isVisible } = useScrollAnimation();
  const Icon = item.icon;

  // Custom badges for specific key products to make the interface premium
  const getBadge = () => {
    switch (slug) {
      case 'retail-pharmacies':
      case 'auto-parts-retailers':
      case 'fmcg-retailers':
      case 'grocery-kirana':
      case 'departmental-supermarket':
      case 'garment-footwear':
        return { text: 'Most Popular', bg: 'bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/20' };
      case 'multi-branch-pharmacy':
      case 'multi-branch-auto-parts':
      case 'fmcg-companies':
      case 'multi-outlet-chain':
        return { text: 'Enterprise', bg: 'bg-primary/10 text-primary dark:text-primary-light border-primary/20' };
      case 'hospital-pharmacies':
      case 'spare-parts-dealers':
      case 'fmcg-distributors':
        return { text: 'Premium Grade', bg: 'bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20' };
      default:
        return null;
    }
  };

  const badge = getBadge();

  return (
    <Link
      ref={ref}
      to={`/software/${baseRoute}/${slug}`}
      className={cn(
        'group relative p-8 rounded-3xl bg-surface border border-border overflow-hidden transition-all duration-500',
        'hover:border-primary/40 hover:-translate-y-1.5',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      )}
      style={{
        transitionDelay: `${(index % 3) * 100}ms`,
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.02)',
      }}
    >
      {/* Top indicator bar */}
      <div className="absolute top-0 left-0 right-0 h-1.5 transition-all duration-500 group-hover:h-2" style={{ background: `linear-gradient(90deg, ${item.color}, ${item.accentColor})` }} />

      {/* Hover background glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: `radial-gradient(circle at 10% 10%, ${item.color}0a, transparent 60%)`,
        }}
      />

      <div className="flex items-start justify-between mb-6">
        {/* Double-layered Icon container */}
        <div className="relative">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 shadow-sm"
            style={{ backgroundColor: `${item.color}15` }}
          >
            <Icon className="w-7 h-7 transition-all duration-300 group-hover:rotate-6" style={{ color: item.color }} />
          </div>
          {/* Subtle outer pulse effect */}
          <div
            className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10 border border-primary/20 scale-105"
            style={{ borderColor: `${item.color}30` }}
          />
        </div>

        {badge ? (
          <span className={cn('text-[10px] font-bold px-3 py-1 rounded-full border shadow-sm', badge.bg)}>
            {badge.text}
          </span>
        ) : (
          <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-surface-secondary text-muted border border-border group-hover:text-primary group-hover:border-primary/20 transition-all duration-300">
            {baseRoute === 'pharmacy-healthcare' ? 'Chemist Suite' : baseRoute === 'auto-parts' ? 'Spares Suite' : baseRoute === 'fmcg' ? 'FMCG Suite' : 'Retail Suite'}
          </span>
        )}
      </div>

      <h3 className="text-xl font-extrabold text-foreground mb-2.5 group-hover:text-primary transition-colors leading-snug">
        {item.title}
      </h3>

      <p className="text-sm text-muted leading-relaxed mb-6 line-clamp-2">
        {item.subtitle}
      </p>

      <div className="flex items-center gap-1.5 text-sm font-bold text-primary group-hover:gap-2.5 transition-all duration-300">
        <span>Learn More</span>
        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
      </div>
    </Link>
  );
}

/* ─── Features At A Glance Accordion Section ───────────────────────── */
function FeaturesAtGlanceSection({ color, variant }) {
  const featuresList = (variant === 'retail')
    ? RETAIL_FEATURES_AT_GLANCE
    : PHARMACY_FEATURES_AT_GLANCE;

  // Returns custom tabs and items for each page variant, styled exactly like the Reckon app reference image
  const getReckonAppData = (v) => {
    switch (v) {
      case 'fmcg-distributors':
        return {
          title: 'Reckon - Distributor POS',
          tabs: ['All Items', 'Beverages', 'Snacks', 'Personal Care', 'Home Care'],
          items: [
            { name: 'Coca Cola 500ml', price: 'Rs. 40.00', icon: Package, color: '#EF4444' },
            { name: 'Lays Chips (Pack 10)', price: 'Rs. 200.00', icon: Package, color: '#F59E0B' },
            { name: 'Dettol Soap (x6)', price: 'Rs. 180.00', icon: Package, color: '#10B981' },
            { name: 'Surf Excel 1kg', price: 'Rs. 140.00', icon: Package, color: '#6366F1' },
            { name: 'Marie Biscuit (Box)', price: 'Rs. 360.00', icon: Package, color: '#D97706' },
            { name: 'Tata Salt 1 Kg', price: 'Rs. 28.00', icon: Package, color: '#3B82F6' },
          ]
        };
      case 'fmcg-wholesalers':
        return {
          title: 'Reckon - Wholesale POS',
          tabs: ['All Items', 'Bulk Cases', 'Groceries', 'Soaps', 'Packaged Food'],
          items: [
            { name: 'Tata Salt (Case)', price: 'Rs. 560.00', icon: Package, color: '#3B82F6' },
            { name: 'Maggi Noodles (Box)', price: 'Rs. 336.00', icon: Package, color: '#EF4444' },
            { name: 'Amul Butter (Pack 12)', price: 'Rs. 696.00', icon: Package, color: '#FBBF24' },
            { name: 'Dettol Soap Case', price: 'Rs. 1440.00', icon: Package, color: '#10B981' },
            { name: 'Surf Excel Case', price: 'Rs. 2800.00', icon: Package, color: '#6366F1' },
            { name: 'Marie Biscuit Case', price: 'Rs. 1800.00', icon: Package, color: '#D97706' },
          ]
        };
      case 'fmcg-retailers':
        return {
          title: 'Reckon - Supermarket POS',
          tabs: ['All Items', 'Packaged Food', 'Dairy', 'Snacks', 'Beverages'],
          items: [
            { name: 'Maggi Noodles 12-Pack', price: 'Rs. 168.00', icon: Package, color: '#EF4444' },
            { name: 'Amul Butter 100g', price: 'Rs. 58.00', icon: Package, color: '#FBBF24' },
            { name: 'Lays Chips 50g', price: 'Rs. 20.00', icon: Package, color: '#F59E0B' },
            { name: 'Coca Cola 2L', price: 'Rs. 95.00', icon: Package, color: '#EF4444' },
            { name: 'Dettol Soap 75g', price: 'Rs. 34.00', icon: Package, color: '#10B981' },
            { name: 'Tata Salt 1 Kg', price: 'Rs. 28.00', icon: Package, color: '#3B82F6' },
          ]
        };
      case 'fmcg-companies':
        return {
          title: 'Reckon - Depot Management',
          tabs: ['All Depot Stock', 'Depot A', 'Depot B', 'Central Warehouse', 'Depot C'],
          items: [
            { name: 'Tata Salt (HQ)', price: 'Rs. 24.00', icon: Package, color: '#3B82F6' },
            { name: 'Maggi (Central)', price: 'Rs. 12.00', icon: Package, color: '#EF4444' },
            { name: 'Amul Butter (Depot A)', price: 'Rs. 50.00', icon: Package, color: '#FBBF24' },
            { name: 'Dettol Soap (Depot B)', price: 'Rs. 30.00', icon: Package, color: '#10B981' },
            { name: 'Surf Excel (Depot C)', price: 'Rs. 120.00', icon: Package, color: '#6366F1' },
            { name: 'Marie Biscuit (HQ)', price: 'Rs. 25.00', icon: Package, color: '#D97706' },
          ]
        };
      case 'auto-parts-retailers':
        return {
          title: 'Reckon - Spares Retail',
          tabs: ['All Spares', 'Engine Parts', 'Brakes', 'Filters', 'Electrical'],
          items: [
            { name: 'Spark Plug', price: 'Rs. 180.00', icon: Settings, color: '#EF4444' },
            { name: 'Brake Pads Set', price: 'Rs. 1250.00', icon: Settings, color: '#3B82F6' },
            { name: 'Mobil 1 Oil 4L', price: 'Rs. 1850.00', icon: Package, color: '#F59E0B' },
            { name: 'Air Filter', price: 'Rs. 420.00', icon: Settings, color: '#10B981' },
            { name: 'Wiper Blades', price: 'Rs. 650.00', icon: Settings, color: '#0EA5E9' },
            { name: 'Oil Filter', price: 'Rs. 350.00', icon: Settings, color: '#64748b' },
          ]
        };
      case 'spare-parts-dealers':
        return {
          title: 'Reckon - Dealer B2B',
          tabs: ['All Parts', 'Bulk Boxes', 'OEM Spares', 'Body Parts', 'Lubricants'],
          items: [
            { name: 'Spark Plugs (Box 20)', price: 'Rs. 3600.00', icon: Package, color: '#EF4444' },
            { name: 'Oil Filters (Box 10)', price: 'Rs. 3200.00', icon: Package, color: '#64748b' },
            { name: 'Brake Discs (Pair)', price: 'Rs. 4200.00', icon: Settings, color: '#e11d48' },
            { name: 'Wiper Blades (x10)', price: 'Rs. 5800.00', icon: Package, color: '#0EA5E9' },
            { name: 'Mobil Oil Case (x4)', price: 'Rs. 7200.00', icon: Package, color: '#F59E0B' },
            { name: 'Engine Belts (Bulk)', price: 'Rs. 4500.00', icon: Package, color: '#6366F1' },
          ]
        };
      case 'car-accessories':
        return {
          title: 'Reckon - Decors POS',
          tabs: ['All Decors', 'Seat Covers', 'Perfumes', 'LED Lights', 'Fitment'],
          items: [
            { name: 'Leather Seat Cover', price: 'Rs. 4500.00', icon: Package, color: '#B45309' },
            { name: 'Car Perfume Gel', price: 'Rs. 250.00', icon: FlaskConical, color: '#EC4899' },
            { name: 'LED Headlight Kit', price: 'Rs. 3200.00', icon: Settings, color: '#FBBF24' },
            { name: 'Android Touch Screen', price: 'Rs. 8500.00', icon: Smartphone, color: '#3B82F6' },
            { name: 'Steering Wheel Wrap', price: 'Rs. 450.00', icon: Settings, color: '#64748b' },
            { name: 'Neck Rest Cushion', price: 'Rs. 600.00', icon: Package, color: '#10B981' },
          ]
        };
      case 'multi-branch-auto-parts':
        return {
          title: 'Reckon - HQ Central',
          tabs: ['All Stock', 'HQ Depot', 'North Branch', 'South Branch', 'West Branch'],
          items: [
            { name: 'Brake Pads (HQ)', price: 'Rs. 1200.00', icon: Settings, color: '#EF4444' },
            { name: 'Mobil Oil (North)', price: 'Rs. 1850.00', icon: Package, color: '#F59E0B' },
            { name: 'Spark Plug (South)', price: 'Rs. 180.00', icon: Settings, color: '#3B82F6' },
            { name: 'Wiper Blade (West)', price: 'Rs. 650.00', icon: Settings, color: '#0EA5E9' },
            { name: 'Air Filter (North)', price: 'Rs. 420.00', icon: Settings, color: '#10B981' },
            { name: 'Clutch Plate (HQ)', price: 'Rs. 3200.00', icon: Settings, color: '#8B5CF6' },
          ]
        };
      case 'retail-pharmacies':
        return {
          title: 'Reckon - Retail POS',
          tabs: ['All Items', 'OTC Drugs', 'Antibiotics', 'Wellness', 'Baby Care'],
          items: [
            { name: 'Paracetamol 650mg', price: 'Rs. 15.00', icon: Pill, color: '#0d9488' },
            { name: 'Amoxicillin 500mg', price: 'Rs. 65.00', icon: Pill, color: '#0284c7' },
            { name: 'Cough Syrup 60ml', price: 'Rs. 45.00', icon: FlaskConical, color: '#e11d48' },
            { name: 'Volini Gel 15g', price: 'Rs. 95.00', icon: Activity, color: '#d97706' },
            { name: 'B-Complex Capsules', price: 'Rs. 50.00', icon: Pill, color: '#059669' },
            { name: 'Digital Thermometer', price: 'Rs. 220.00', icon: Activity, color: '#0891b2' },
          ]
        };
      case 'hospital-pharmacies':
        return {
          title: 'Reckon - Hospital POS',
          tabs: ['All Items', 'Injectables', 'IV Fluids', 'ICU Meds', 'Surgicals'],
          items: [
            { name: 'Pantoprazole Inj', price: 'Rs. 48.00', icon: FlaskConical, color: '#0891b2' },
            { name: 'NS IV Fluid 500ml', price: 'Rs. 35.00', icon: FlaskConical, color: '#0284c7' },
            { name: 'Heparin Injection 5ml', price: 'Rs. 240.00', icon: Activity, color: '#e11d48' },
            { name: 'Surgical Gloves Pair', price: 'Rs. 25.00', icon: Package, color: '#4f46e5' },
            { name: 'IV Cannula 20G', price: 'Rs. 45.00', icon: Activity, color: '#0d9488' },
            { name: 'Adrenaline Injection', price: 'Rs. 15.00', icon: FlaskConical, color: '#ea580c' },
          ]
        };
      case 'jan-aushadhi-kendra':
        return {
          title: 'Reckon - PMBJP POS',
          tabs: ['All Items', 'PMBJP Generics', 'Cardio', 'Gastro', 'Vitamins'],
          items: [
            { name: 'PMBJP Paracetamol', price: 'Rs. 4.50', icon: Pill, color: '#059669' },
            { name: 'PMBJP Metformin 500', price: 'Rs. 9.00', icon: Pill, color: '#0d9488' },
            { name: 'PMBJP Atorvastatin', price: 'Rs. 12.00', icon: Activity, color: '#e11d48' },
            { name: 'PMBJP B-Complex', price: 'Rs. 8.50', icon: Pill, color: '#ca8a04' },
            { name: 'PMBJP Ibuprofen 400', price: 'Rs. 6.00', icon: Pill, color: '#2563eb' },
            { name: 'PMBJP ORS Sachet', price: 'Rs. 3.50', icon: Package, color: '#ea580c' },
          ]
        };
      case 'ayurvedic-generic':
        return {
          title: 'Reckon - Ayurvedic POS',
          tabs: ['All Items', 'Chyawanprash', 'Churna', 'Herbal Oils', 'Asava'],
          items: [
            { name: 'Ashwagandha Powder', price: 'Rs. 125.00', icon: Leaf, color: '#059669' },
            { name: 'Liv.52 Syrup 100ml', price: 'Rs. 150.00', icon: FlaskConical, color: '#16a34a' },
            { name: 'Chyawanprash 500g', price: 'Rs. 260.00', icon: Package, color: '#d97706' },
            { name: 'Mahabhringraj Oil', price: 'Rs. 195.00', icon: Leaf, color: '#0d9488' },
            { name: 'Tulsi Drops 30ml', price: 'Rs. 90.00', icon: Leaf, color: '#15803d' },
            { name: 'Triphala Tablets', price: 'Rs. 110.00', icon: Pill, color: '#84cc16' },
          ]
        };
      case 'homeopathic-shops':
        return {
          title: 'Reckon - Homeopathy POS',
          tabs: ['All Items', 'Dilutions', 'Tinctures', 'Globules', 'Ointments'],
          items: [
            { name: 'Arnica Montana 30C', price: 'Rs. 45.00', icon: FlaskConical, color: '#06b6d4' },
            { name: 'Nux Vomica 200C', price: 'Rs. 50.00', icon: FlaskConical, color: '#2563eb' },
            { name: 'Calendula Ointment', price: 'Rs. 65.00', icon: Package, color: '#ea580c' },
            { name: 'Cineraria Eye Drops', price: 'Rs. 120.00', icon: FlaskConical, color: '#4f46e5' },
            { name: 'Five Phos Tablets', price: 'Rs. 180.00', icon: Pill, color: '#0d9488' },
            { name: 'Sugar Globules 100g', price: 'Rs. 30.00', icon: Package, color: '#64748b' },
          ]
        };
      case 'pharma-wholesalers':
        return {
          title: 'Reckon - Wholesale B2B',
          tabs: ['All Items', 'Bulk Boxes', 'Strips', 'Vaccines', 'Liquids'],
          items: [
            { name: 'Dolo 650 (Box 100)', price: 'Rs. 240.00', icon: Package, color: '#2563eb' },
            { name: 'Augmentin (Box 50)', price: 'Rs. 980.00', icon: Package, color: '#4f46e5' },
            { name: 'Betadine 100ml (x10)', price: 'Rs. 850.00', icon: FlaskConical, color: '#d97706' },
            { name: 'Insulin Vials (Pack 5)', price: 'Rs. 1200.00', icon: FlaskConical, color: '#e11d48' },
            { name: 'Calcium Tabs (Box 200)', price: 'Rs. 360.00', icon: Package, color: '#0d9488' },
            { name: 'Sanitizer 5L Canister', price: 'Rs. 450.00', icon: Package, color: '#0ea5e9' },
          ]
        };
      case 'pharma-distributors':
        return {
          title: 'Reckon - Distributor ERP',
          tabs: ['All Items', 'Bulk Cases', 'First-Aid', 'Syringes', 'Apparatus'],
          items: [
            { name: 'Paracetamol Bulk', price: 'Rs. 1200.00', icon: Package, color: '#0d9488' },
            { name: 'Amoxycillin Bulk Case', price: 'Rs. 4500.00', icon: Package, color: '#4f46e5' },
            { name: 'Cough Syrup (x50)', price: 'Rs. 2400.00', icon: FlaskConical, color: '#d97706' },
            { name: 'First Aid Kit (Pack 10)', price: 'Rs. 1500.00', icon: Activity, color: '#e11d48' },
            { name: 'Syringes (Pack 1000)', price: 'Rs. 800.00', icon: Package, color: '#2563eb' },
            { name: 'Bandages (Bulk Roll)', price: 'Rs. 600.00', icon: Package, color: '#059669' },
          ]
        };
      case 'pharma-marketing':
        return {
          title: 'Reckon - Marketing POS',
          tabs: ['All Items', 'MR Samples', 'Visual Aids', 'Literature', 'Gifts'],
          items: [
            { name: 'Sample Vitamin Drops', price: 'Rs. 0.00', icon: FlaskConical, color: '#06b6d4' },
            { name: 'Sample Antibiotic Gel', price: 'Rs. 0.00', icon: Pill, color: '#2563eb' },
            { name: 'MR Visual Aid Kit v2', price: 'Rs. 250.00', icon: BookOpen, color: '#9333ea' },
            { name: 'Physician Detailing Folder', price: 'Rs. 120.00', icon: BookOpen, color: '#e11d48' },
            { name: 'Product Brochure (x100)', price: 'Rs. 15.00', icon: BookOpen, color: '#4f46e5' },
            { name: 'MR Medical Diary 2026', price: 'Rs. 85.00', icon: BookOpen, color: '#d97706' },
          ]
        };
      case 'multi-branch-pharmacy':
        return {
          title: 'Reckon - Central HQ',
          tabs: ['All Items', 'HQ Stock', 'Branch A', 'Branch B', 'Branch C'],
          items: [
            { name: 'Paracetamol 650 (HQ)', price: 'Rs. 12.00', icon: Pill, color: '#0d9488' },
            { name: 'Amoxycillin (Branch A)', price: 'Rs. 65.00', icon: Pill, color: '#2563eb' },
            { name: 'Cough Syrup (Branch B)', price: 'Rs. 45.00', icon: FlaskConical, color: '#e11d48' },
            { name: 'Vitamin C (Branch C)', price: 'Rs. 30.00', icon: Pill, color: '#059669' },
            { name: 'Inhaler (Branch A)', price: 'Rs. 180.00', icon: Activity, color: '#06b6d4' },
            { name: 'Antacid Gel (HQ)', price: 'Rs. 75.00', icon: FlaskConical, color: '#d97706' },
          ]
        };
      case 'grocery-kirana':
        return {
          title: 'Reckon - Kirana POS',
          tabs: ['All Groceries', 'Flour & Rice', 'Spices & Oils', 'Packaged Food', 'Dairy'],
          items: [
            { name: 'Aashirvaad Atta 5kg', price: 'Rs. 260.00', icon: Package, color: '#FBBF24' },
            { name: 'Fortune Mustard Oil', price: 'Rs. 175.00', icon: FlaskConical, color: '#D97706' },
            { name: 'Amul Gold Milk 1L', price: 'Rs. 66.00', icon: Package, color: '#3B82F6' },
            { name: 'Maggi Family Pack', price: 'Rs. 96.00', icon: Package, color: '#EF4444' },
            { name: 'Tata Tea Premium', price: 'Rs. 140.00', icon: Package, color: '#10B981' },
            { name: 'Surf Excel Easy Wash', price: 'Rs. 130.00', icon: Package, color: '#6366F1' },
          ]
        };
      case 'departmental-supermarket':
        return {
          title: 'Reckon - Supermarket POS',
          tabs: ['All Items', 'Grocery & Staples', 'Households', 'Personal Care', 'Snacks'],
          items: [
            { name: 'Kelloggs Corn Flakes', price: 'Rs. 185.00', icon: Package, color: '#EF4444' },
            { name: 'Dettol Liquid Handwash', price: 'Rs. 99.00', icon: FlaskConical, color: '#10B981' },
            { name: 'Catch Coriander Powder', price: 'Rs. 58.00', icon: Package, color: '#F59E0B' },
            { name: 'Vim Dishwash Gel 500ml', price: 'Rs. 115.00', icon: FlaskConical, color: '#0EA5E9' },
            { name: 'Haldirams Bhujia 400g', price: 'Rs. 110.00', icon: Package, color: '#D97706' },
            { name: 'Cadbury Dairy Milk Silk', price: 'Rs. 80.00', icon: Package, color: '#8B5CF6' },
          ]
        };
      case 'garment-footwear':
        return {
          title: 'Reckon - Fashion Retail',
          tabs: ['All Collection', 'Mens Wear', 'Womens Wear', 'Kids Wear', 'Footwear'],
          items: [
            { name: 'Casual Denim Shirt', price: 'Rs. 1299.00', icon: Package, color: '#3B82F6' },
            { name: 'Printed Cotton Kurti', price: 'Rs. 899.00', icon: Package, color: '#EC4899' },
            { name: 'Kids Denim dungaree', price: 'Rs. 699.00', icon: Package, color: '#10B981' },
            { name: 'Running Sports Shoes', price: 'Rs. 2499.00', icon: Package, color: '#EF4444' },
            { name: 'Leather Formal Shoes', price: 'Rs. 1899.00', icon: Package, color: '#B45309' },
            { name: 'Casual Summer T-Shirt', price: 'Rs. 499.00', icon: Package, color: '#0EA5E9' },
          ]
        };
      case 'sarees-clothing':
        return {
          title: 'Reckon - Saree Showroom',
          tabs: ['All Sarees', 'Silk Sarees', 'Designer Suits', 'Lehengas', 'Dress Material'],
          items: [
            { name: 'Kanjeevaram Silk Saree', price: 'Rs. 8500.00', icon: Package, color: '#B45309' },
            { name: 'Banarasi Brocade Saree', price: 'Rs. 6500.00', icon: Package, color: '#EC4899' },
            { name: 'Georgette Designer Suit', price: 'Rs. 3200.00', icon: Package, color: '#8B5CF6' },
            { name: 'Bridal Lehenga Choli', price: 'Rs. 18500.00', icon: Package, color: '#EF4444' },
            { name: 'Unstitched Cotton Suit', price: 'Rs. 1200.00', icon: Package, color: '#0ea5e9' },
            { name: 'Chanderi Saree Block', price: 'Rs. 2200.00', icon: Package, color: '#10B981' },
          ]
        };
      case 'pharmacy-ayurvedic':
        return {
          title: 'Reckon - Ayurvedic Pharma',
          tabs: ['All Products', 'Allopathic OTC', 'Ayurvedic Syrups', 'Herbs', 'Vitamins'],
          items: [
            { name: 'Dolo 650mg Table', price: 'Rs. 30.00', icon: Pill, color: '#0D9488' },
            { name: 'Himalaya Liv.52 Syrup', price: 'Rs. 150.00', icon: FlaskConical, color: '#10B981' },
            { name: 'Ashwagandha Churna', price: 'Rs. 120.00', icon: Leaf, color: '#059669' },
            { name: 'Dabur Chyawanprash 1kg', price: 'Rs. 420.00', icon: Package, color: '#D97706' },
            { name: 'Organic Honey 500g', price: 'Rs. 240.00', icon: Leaf, color: '#F59E0B' },
            { name: 'Triphala Tablets 60s', price: 'Rs. 140.00', icon: Pill, color: '#84CC16' },
          ]
        };
      case 'hardware-electrical':
        return {
          title: 'Reckon - Hardware POS',
          tabs: ['All Hardware', 'Hand Tools', 'Electricals', 'Fasteners', 'Pipes'],
          items: [
            { name: 'Screwdriver Set (6pcs)', price: 'Rs. 350.00', icon: Settings, color: '#64748b' },
            { name: 'Havells LED Bulb 9W', price: 'Rs. 110.00', icon: Settings, color: '#FBBF24' },
            { name: 'Finolex Wire 1.5 Sqmm', price: 'Rs. 1850.00', icon: Settings, color: '#EF4444' },
            { name: 'Stainless Steel Screws', price: 'Rs. 120.00', icon: Settings, color: '#3B82F6' },
            { name: 'Astral PVC Pipe 3 Inch', price: 'Rs. 450.00', icon: Settings, color: '#0EA5E9' },
            { name: 'Anchor Modular Switch', price: 'Rs. 45.00', icon: Settings, color: '#10B981' },
          ]
        };
      case 'books-stationary':
        return {
          title: 'Reckon - Bookstore POS',
          tabs: ['All Items', 'School Textbooks', 'Notebooks', 'Pens & Pencils', 'Office Files'],
          items: [
            { name: 'NCERT Math Class 10', price: 'Rs. 165.00', icon: FileText, color: '#3B82F6' },
            { name: 'Classmate Notebook (x6)', price: 'Rs. 240.00', icon: FileText, color: '#6366F1' },
            { name: 'Parker Vector Ball Pen', price: 'Rs. 300.00', icon: Printer, color: '#B45309' },
            { name: 'Apsara Pencil Box (10s)', price: 'Rs. 50.00', icon: FileText, color: '#10B981' },
            { name: 'Lever Arch Office File', price: 'Rs. 95.00', icon: FileText, color: '#64748b' },
            { name: 'Cello Gel Pen (Blue 10s)', price: 'Rs. 100.00', icon: Printer, color: '#EF4444' },
          ]
        };
      case 'school-dresses':
        return {
          title: 'Reckon - Uniform Studio',
          tabs: ['All Uniforms', 'School A Shirts', 'School A Pants', 'Ties & Belts', 'Socks'],
          items: [
            { name: 'Uniform Shirt Size 32', price: 'Rs. 450.00', icon: Users, color: '#3B82F6' },
            { name: 'Uniform Trouser Size 30', price: 'Rs. 650.00', icon: Users, color: '#1E3A8A' },
            { name: 'School Tie & Belt Set', price: 'Rs. 180.00', icon: Package, color: '#B45309' },
            { name: 'White Sports Socks (Pr)', price: 'Rs. 60.00', icon: Package, color: '#64748B' },
            { name: 'School Blazer Size 34', price: 'Rs. 1800.00', icon: Users, color: '#4F46E5' },
            { name: 'Sports House T-Shirt Red', price: 'Rs. 250.00', icon: Users, color: '#EF4444' },
          ]
        };
      case 'gift-novelty':
        return {
          title: 'Reckon - Gift Gallery',
          tabs: ['All Gifts', 'Soft Toys', 'Hamper Items', 'Cosmetics', 'Watches'],
          items: [
            { name: 'Teddy Bear 3 Feet', price: 'Rs. 890.00', icon: Package, color: '#EC4899' },
            { name: 'Ferrero Rocher Box', price: 'Rs. 450.00', icon: Package, color: '#D97706' },
            { name: 'Lakme Eyeconic Kajal', price: 'Rs. 185.00', icon: Package, color: '#EC4899' },
            { name: 'Fastrack Quartz Watch', price: 'Rs. 1599.00', icon: Package, color: '#111827' },
            { name: 'Photo Frame 5x7 Inch', price: 'Rs. 220.00', icon: Package, color: '#64748B' },
            { name: 'Scented Candle Gift Pack', price: 'Rs. 350.00', icon: Package, color: '#06B6D4' },
          ]
        };
      case 'paint-dealers':
        return {
          title: 'Reckon - Paint Manager',
          tabs: ['All Paints', 'Wall Emulsions', 'Enamels', 'Primers', 'Colorants'],
          items: [
            { name: 'Apex Weatherproof 20L', price: 'Rs. 4200.00', icon: Database, color: '#3B82F6' },
            { name: 'Tractor Emulsion White 10L', price: 'Rs. 1850.00', icon: Database, color: '#64748b' },
            { name: 'Apcolite Gloss Enamel 4L', price: 'Rs. 1100.00', icon: Database, color: '#D97706' },
            { name: 'Wall Primer Water 20L', price: 'Rs. 2400.00', icon: Database, color: '#0EA5E9' },
            { name: 'Tinting Colorant Yellow 1L', price: 'Rs. 650.00', icon: Database, color: '#FBBF24' },
            { name: 'Wood Finish Varnish 1L', price: 'Rs. 380.00', icon: Database, color: '#8B5CF6' },
          ]
        };
      case 'multi-outlet-chain':
        return {
          title: 'Reckon - HQ Central',
          tabs: ['All Outlets', 'Central Godown', 'Outlets North', 'Outlets South', 'Outlets West'],
          items: [
            { name: 'Polo Shirt Stock (HQ)', price: 'Rs. 600.00', icon: Network, color: '#3B82F6' },
            { name: 'Denim Jeans (North)', price: 'Rs. 1100.00', icon: Network, color: '#1E3A8A' },
            { name: 'Sneakers Stock (South)', price: 'Rs. 1400.00', icon: Network, color: '#EC4899' },
            { name: 'LED Lamp (West)', price: 'Rs. 550.00', icon: Network, color: '#F59E0B' },
            { name: 'Wireless Mouse (North)', price: 'Rs. 450.00', icon: Network, color: '#10B981' },
            { name: 'Leather Wallet (HQ)', price: 'Rs. 320.00', icon: Network, color: '#B45309' },
          ]
        };
      case 'main':
      default:
        return {
          title: 'Reckon POS',
          tabs: ['All Items', 'OTCs', 'Prescriptions', 'Generics', 'Devices'],
          items: [
            { name: 'Paracetamol 650mg', price: 'Rs. 15.00', icon: Pill, color: '#0d9488' },
            { name: 'Crocin Advance', price: 'Rs. 18.00', icon: Pill, color: '#0284c7' },
            { name: 'Dolo 650mg Tablet', price: 'Rs. 30.00', icon: Pill, color: '#4f46e5' },
            { name: 'Ibuprofen 400mg', price: 'Rs. 12.00', icon: Pill, color: '#e11d48' },
            { name: 'Cetirizine 10mg', price: 'Rs. 20.00', icon: Pill, color: '#d97706' },
            { name: 'B-Complex Capsules', price: 'Rs. 25.00', icon: Pill, color: '#059669' },
          ]
        };
    }
  };

  const pageData = getReckonAppData(variant);

  return (
    <section id="features-at-glance-section" className="relative py-24 bg-surface-secondary border-t border-b border-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-primary/10 text-primary mb-4 border border-primary/20">
            Capabilities
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-foreground mb-4">
            Features at <span className="text-primary">a Glance</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto leading-relaxed">
            Comprehensive module-wise breakdown of all capabilities pre-loaded in our software.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_380px] gap-10">
          {/* Accordion List */}
          <div className="space-y-3">
            {featuresList.map((section, idx) => (
              <AccordionItem
                key={`${section.title}-${idx}`}
                title={section.title}
                items={section.items}
                color={color}
                defaultOpen={idx === 0}
              />
            ))}
          </div>

          {/* Sticky Side Phone Mockup with HTML/CSS Reckon Screen */}
          <div className="hidden lg:block relative h-full">
            <div className="sticky top-28 flex justify-center w-full">
              <div className="relative rounded-[2.5rem] overflow-hidden border-8 border-slate-900 dark:border-slate-800 bg-[#0F172A] shadow-2xl transition-transform duration-500 hover:scale-[1.02] max-w-[280px] w-full aspect-[9/19] p-0 flex flex-col justify-between">

                {/* Phone speaker notch (iPhone Style) */}
                <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-20 h-4 rounded-full bg-black flex items-center justify-center z-30 pointer-events-none">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-900 mr-2" />
                  <div className="w-8 h-1 rounded-full bg-slate-800" />
                </div>

                {/* Status Bar */}
                <div className="bg-slate-950 pt-7 pb-1.5 px-3 flex justify-between items-center text-[7px] text-slate-300 font-semibold select-none z-20">
                  <span>12:30</span>
                  <div className="flex items-center gap-1">
                    <span>📶</span>
                    <span>🔋</span>
                  </div>
                </div>

                {/* Reckon Navigation Bar */}
                <div className="bg-slate-900 border-b border-slate-800 py-2.5 px-3.5 text-slate-100 z-20 flex justify-between items-center select-none">
                  <div className="flex items-center gap-1.5">
                    <Menu className="w-3.5 h-3.5 text-slate-300 hover:text-white cursor-pointer" />
                    <span className="text-[11px] font-black tracking-tight text-white">Reckon</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-300">
                    <Search className="w-3.5 h-3.5 hover:text-white cursor-pointer" />
                    {/* RFID / Wireless Scanner gun icon */}
                    <div className="flex items-center justify-center w-4 h-4 hover:text-white cursor-pointer">
                      <svg className="w-3.5 h-3.5 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7.5 7.5 0 01-10 0m7.5-3a4.5 4.5 0 01-5 0M12 12v3" />
                      </svg>
                    </div>
                    <Barcode className="w-3.5 h-3.5 hover:text-white cursor-pointer" />
                    <RefreshCw className="w-3 h-3 hover:text-white cursor-pointer" />
                  </div>
                </div>

                {/* Category Tabs (Horizontal Scrollable) */}
                <div className="bg-white border-b border-slate-100 py-2 px-3 overflow-x-auto scrollbar-none flex gap-4 whitespace-nowrap z-20 select-none">
                  {pageData.tabs.map((tab, idx) => (
                    <span
                      key={idx}
                      className={cn(
                        "text-[8px] font-extrabold pb-0.5 px-0.5 transition-all duration-300 cursor-pointer relative",
                        idx === 0
                          ? "text-blue-600 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-blue-600"
                          : "text-slate-400 hover:text-slate-600"
                      )}
                    >
                      {tab}
                    </span>
                  ))}
                </div>

                {/* Main Product Grid Container */}
                <div className="flex-1 bg-slate-50 p-2 overflow-y-auto scrollbar-none z-10">
                  <div className="grid grid-cols-3 gap-1.5">
                    {pageData.items.map((item, idx) => {
                      const ProductIcon = item.icon;
                      return (
                        <div
                          key={idx}
                          className="bg-white rounded-lg border border-slate-200/55 shadow-[0_1px_2px_rgba(0,0,0,0.02)] flex flex-col justify-between overflow-hidden transition-all duration-300 hover:shadow-md hover:border-slate-300/80 h-[76px]"
                        >
                          {/* Icon Container */}
                          <div className="flex-1 flex items-center justify-center p-1.5">
                            <div className="w-7 h-7 rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-105" style={{ backgroundColor: `${item.color}15` }}>
                              <ProductIcon className="w-4 h-4" style={{ color: item.color }} />
                            </div>
                          </div>
                          {/* Product Title */}
                          <span className="text-[6.5px] font-bold text-slate-800 text-center px-1 mb-1 line-clamp-2 leading-tight h-5 flex items-center justify-center">
                            {item.name}
                          </span>
                          {/* Price Banner */}
                          <div className="bg-[#6b7c96]/95 text-white text-[6.5px] font-bold text-center py-1 select-none leading-none">
                            {item.price}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Bottom Footer "Go to Cart" Button */}
                <div className="bg-white border-t border-slate-100 p-2 z-20">
                  <div className="bg-[#eef2ff] hover:bg-[#e0e7ff] active:bg-[#c7d2fe] transition-colors border border-[#e0e7ff] rounded-md py-1.5 text-center text-[8.5px] font-black text-indigo-600 cursor-pointer shadow-sm">
                    Go to Cart
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AccordionItem({ title, items, color, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="rounded-2xl border border-border bg-surface overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-5 py-4 sm:px-6 sm:py-5 text-left group cursor-pointer"
      >
        <div className="flex items-center gap-3 min-w-0">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105"
            style={{ backgroundColor: `${color}12` }}
          >
            <span className="text-xs font-bold" style={{ color }}>{title.charAt(0)}</span>
          </div>
          <span className="font-extrabold text-xs sm:text-sm text-foreground group-hover:text-primary transition-colors duration-200 uppercase tracking-wide truncate">
            {title}
          </span>
        </div>
        <ChevronDown
          className={cn(
            'w-4 h-4 text-muted transition-transform duration-300 shrink-0 ml-2 group-hover:text-foreground',
            open && 'rotate-180'
          )}
        />
      </button>
      <div
        className={cn(
          'overflow-hidden transition-all duration-300 ease-in-out',
          open ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="px-5 pb-5 sm:px-6 sm:pb-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1 sm:gap-y-2 pt-4 border-t border-border/50">
            {items.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 py-1.5 transition-transform hover:translate-x-0.5">
                <div
                  className="w-1.5 h-1.5 rounded-full shrink-0 mt-2"
                  style={{ backgroundColor: color }}
                />
                <span className="text-xs sm:text-sm text-muted leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
