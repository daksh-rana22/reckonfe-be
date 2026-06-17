import {
  Receipt, Search, CreditCard, RefreshCw, Share2, Users,
  Truck, Lock, Layers, BarChart3, ShoppingCart, Smartphone,
  Globe, MessageCircle, Shield, Zap, Package, Settings,
  FileText, Printer, QrCode, Barcode, Calculator, Clock, Database,
  Car, Apple, Store, Warehouse, Pill, Activity, Building2,
  Leaf, FlaskConical, Network, TrendingUp,
} from 'lucide-react';

// ─── BILLING PAGE VARIANTS ─────────────────────────────────────────

export const BILLING_VARIANTS = {
  // Main/Pharmacy Billing Software page
  main: {
    slug: 'pharmacy-healthcare',
    title: 'Pharmacy & Healthcare Billing Software',
    subtitle: 'Complete Billing & Inventory Solution for Pharmacies, Chemists & Medical Stores',
    description:
      'Streamline your pharmacy management with our GST-compliant POS software. Expiry tracking, batch management, doctor/salt search, rack locations, and wholesale/retail billing built for healthcare businesses.',
    color: '#0D9488',
    accentColor: '#0EA5E9',
    heroFeatures: [
      'Batch & Expiry Management',
      'Salt/Generic Search',
      'Schedule H & Narcotics Logs',
      'GST Billing & E-Way Bills',
    ],
    stats: [
      { value: 4000, suffix: '+', label: 'Pharmacies Served' },
      { value: 100, suffix: 'K+', label: 'Medicines Cataloged' },
      { value: 0, suffix: '%', label: 'Expired Sales Losses' },
      { value: 3, suffix: 'x', label: 'Faster Billing Speed' },
    ],
    features: [
      {
        title: 'Batch & Expiry Date Alerts',
        icon: Clock,
        description:
          'Track batch numbers and receive proactive warnings for near-expiry or expired medicines during billing. Prevent expired sales entirely.',
      },
      {
        title: 'Salt & Generic Name Lookup',
        icon: Search,
        description:
          'Search drugs by brand name or generic salt formula to find direct substitutes instantly. Never lose a sale due to stockouts.',
      },
      {
        title: 'Prescription & Doctor Logs',
        icon: FileText,
        description:
          'Attach doctor names and patient details to invoices. Maintain digitized, compliant logs for Schedule H and Narcotics drugs.',
      },
      {
        title: 'High-Speed POS Checkout',
        icon: Zap,
        description:
          'Process transactions rapidly with barcode scanning. Barcode scanner & weighing scale integration for fast service.',
      },
      {
        title: 'GST-Compliant Invoicing',
        icon: Receipt,
        description:
          'Auto-generate GST invoices with CGST/SGST/IGST breakdown. File GSTR returns and print custom tax invoices.',
      },
      {
        title: 'Reorder Alerts & Auto PO',
        icon: RefreshCw,
        description:
          'Set minimum stock levels for every medicine. Auto-generate purchase orders and import supplier bills in one click.',
      },
      {
        title: 'Rack & Cabinet Locators',
        icon: Warehouse,
        description:
          'Track the exact rack, row, and shelf location of thousands of medicines. Show rack location on the billing screen for instant retrieval.',
      },
      {
        title: 'Patient Loyalty & SMS Refills',
        icon: Users,
        description:
          'Maintain customer profiles, reward points, and send automated SMS alerts for chronic patient medicine refills.',
      },
      {
        title: 'Secure Cloud Sync & Backup',
        icon: Shield,
        description:
          'Keep your data safe with automated cloud backups to Google Drive. Role-based user controls for cashiers and managers.',
      },
    ],
    benefits: [
      {
        title: 'Zero Expired Medicine Sales',
        description: 'Auto-blocking and prompt warnings prevent billing personnel from accidentally selling expired batches.',
      },
      {
        title: 'Smart Salt Substitutions',
        description: 'Instantly suggest alternative brands with the same chemical composition when a requested brand is out of stock.',
      },
      {
        title: 'Strict FDA & Schedule Compliance',
        description: 'Easily track and print required Schedule H1 register logs for regulatory compliance audits.',
      },
      {
        title: 'One-Click Purchase Import',
        description: 'Skip tedious manual entry; import distributor billing files directly to update stock and cost prices.',
      },
    ],
  },

  // Auto-Parts Billing Software
  'auto-parts': {
    slug: 'auto-parts',
    title: 'Auto-Parts Billing Software',
    subtitle: 'Complete Billing & Inventory Solution for Automobile Parts Dealers',
    description:
      'Purpose-built for auto parts shops and distributors. Manage thousands of parts with vehicle compatibility search, OEM cross-referencing, rack-level location tracking, and rapid barcode billing.',
    color: '#EF4444',
    accentColor: '#F97316',
    heroFeatures: [
      'Vehicle Compatibility Search',
      'OEM Part Cross-Reference',
      'Rack & Shelf Tracking',
      'Alphanumeric Part Search',
    ],
    stats: [
      { value: 2500, suffix: '+', label: 'Auto Parts Dealers' },
      { value: 50, suffix: 'K+', label: 'Parts Cataloged' },
      { value: 99, suffix: '%', label: 'Billing Accuracy' },
      { value: 3, suffix: 'x', label: 'Faster Billing' },
    ],
    features: [
      {
        title: 'Vehicle Compatibility Database',
        icon: Car,
        description:
          'Search parts by vehicle make, model, and year. Instantly find compatible parts and suggest alternatives.',
      },
      {
        title: 'OEM Cross-Referencing',
        icon: Search,
        description:
          'Map OEM part numbers to aftermarket equivalents. Offer customers multiple options and maximize sales.',
      },
      {
        title: 'Rack & Shelf Location Tracking',
        icon: Warehouse,
        description:
          'Track the exact rack, row, and shelf location of every spare part for instant retrieval during billing.',
      },
      {
        title: 'Alphanumeric Part Number Search',
        icon: Calculator,
        description:
          'Fast search by part number, SKU, OEM code, or custom code. Supports alphanumeric and special characters.',
      },
      {
        title: 'Bulk Price List Import',
        icon: Database,
        description:
          'Import manufacturer price lists from Excel/CSV. Bulk update rates, MRP, and discount structures in seconds.',
      },
      {
        title: 'GST & e-Way Bill Generation',
        icon: FileText,
        description:
          'Auto-generate GST invoices, e-Way bills, and GSTR returns. Ensure complete compliance with zero effort.',
      },
      {
        title: 'Custom Barcode Labels',
        icon: QrCode,
        description:
          'Print custom barcode labels with part number, price, rack location, and vehicle compatibility info.',
      },
      {
        title: 'Multi-Currency Pricing',
        icon: CreditCard,
        description:
          'Support pricing in multiple currencies for imported auto parts. Automatic currency conversion.',
      },
      {
        title: 'Tally Export & Accounting',
        icon: Share2,
        description:
          'Seamless data export to Tally for CA audits. Integrated invoicing, inventory, and financial accounting.',
      },
    ],
    benefits: [
      {
        title: 'Instant Part Lookup',
        description: 'Find any part in seconds using vehicle model, part number, or OEM code with our smart search engine.',
      },
      {
        title: 'Zero Stock Wastage',
        description: 'Real-time inventory tracking with reorder alerts ensures you never overstock or run out of fast-moving parts.',
      },
      {
        title: 'Faster Customer Service',
        description: 'Rack location tracking and barcode scanning cuts billing time by 3x compared to manual processes.',
      },
      {
        title: 'Multi-Branch Control',
        description: 'Centralized inventory and pricing across multiple outlets with real-time synchronization.',
      },
    ],
  },

  // FMCG Billing Software
  fmcg: {
    slug: 'fmcg',
    title: 'FMCG Billing Software',
    subtitle: 'Distribution & Wholesale Billing for FMCG Businesses',
    description:
      'Built for FMCG distributors and wholesalers. Route-wise beat management, multi-unit billing (box/case/pack), scheme management, salesman tracking, and complete distributor-to-retailer workflow automation.',
    color: '#0EA5E9',
    accentColor: '#06B6D4',
    heroFeatures: [
      'Route & Beat Management',
      'Multi-Unit Billing',
      'Scheme Management',
      'Salesman Tracking',
    ],
    stats: [
      { value: 3000, suffix: '+', label: 'FMCG Distributors' },
      { value: 500, suffix: 'K+', label: 'Daily Invoices' },
      { value: 40, suffix: '%', label: 'Time Saved' },
      { value: 100, suffix: '+', label: 'Brand Partners' },
    ],
    features: [
      {
        title: 'Route & Beat Management',
        icon: Truck,
        description:
          'Plan salesman routes, track beat coverage, manage orders and collections, and analyze beat-wise performance.',
      },
      {
        title: 'Multi-Unit Billing',
        icon: Package,
        description:
          'Bill in boxes, cases, packs, and loose units within a single invoice. Automatic unit conversion and calculation.',
      },
      {
        title: 'Scheme & Offer Management',
        icon: Receipt,
        description:
          'Configure Buy-X-Get-Y, cash discounts, quantity discounts, and seasonal offers. Auto-apply during billing.',
      },
      {
        title: 'Salesman Commission Tracking',
        icon: Users,
        description:
          'Track salesman targets, incentives, beat-wise collections, and calculate commissions automatically.',
      },
      {
        title: 'Multi-Firm Accounting',
        icon: Layers,
        description:
          'Manage multiple distribution firms in a single database with automatic account separation.',
      },
      {
        title: 'Challan Consolidation',
        icon: FileText,
        description:
          'Issue goods on multiple challans and consolidate them into a single invoice during collection.',
      },
      {
        title: 'Credit Limit Control',
        icon: Lock,
        description:
          'Set retailer credit limits and auto-lock billing when limits are breached. Continuous credit monitoring.',
      },
      {
        title: 'Landing Cost Calculator',
        icon: Calculator,
        description:
          'Automatically calculate landed cost including cartage, labor, and other proportional expenses.',
      },
      {
        title: 'Auto Stock Reorder',
        icon: RefreshCw,
        description:
          'Generate purchase orders automatically based on stock levels, lead times, and beat-wise demand patterns.',
      },
    ],
    benefits: [
      {
        title: 'End-to-End Distribution',
        description: 'From purchase import to retailer delivery — manage the complete FMCG distribution chain in one platform.',
      },
      {
        title: 'Beat Efficiency Analytics',
        description: 'Analyze salesman performance, route coverage, and collection efficiency to optimize operations.',
      },
      {
        title: 'Zero Revenue Leakage',
        description: 'Scheme matching, credit control, and claim management ensure every rupee is accounted for.',
      },
      {
        title: 'Manufacturer Compliance',
        description: 'Generate brand-wise sales reports, scheme utilization data, and claim settlement reports for principals.',
      },
    ],
  },

  // Retail Billing Software
  retail: {
    slug: 'retail',
    title: 'Retail Billing Software',
    subtitle: 'High-Speed POS & Retail Chain Management Solution',
    description:
      'The ultimate retail POS solution for supermarkets, department stores, and grocery chains. Touchscreen billing, weighing scale integration, customer loyalty, and multi-store data synchronization.',
    color: '#F59E0B',
    accentColor: '#EA580C',
    heroFeatures: [
      'Touchscreen POS Billing',
      'Weighing Scale Integration',
      'Customer Loyalty Module',
      'Multi-Store Sync',
    ],
    stats: [
      { value: 5000, suffix: '+', label: 'Retail Stores' },
      { value: 1, suffix: 'M+', label: 'Daily Transactions' },
      { value: 50, suffix: '%', label: 'Faster Checkout' },
      { value: 15, suffix: '+', label: 'Payment Modes' },
    ],
    features: [
      {
        title: 'High-Speed POS Checkout',
        icon: Zap,
        description:
          'Ultra-fast touchscreen POS with barcode scanning, pole display, cash drawer integration for peak-hour efficiency.',
      },
      {
        title: 'Weighing Scale Integration',
        icon: Settings,
        description:
          'Connect digital weighing scales directly to POS. Auto-read weight and calculate pricing for loose items.',
      },
      {
        title: 'Customer Loyalty Program',
        icon: Users,
        description:
          'Reward points, birthday offers, membership tiers, and targeted SMS campaigns to increase repeat visits.',
      },
      {
        title: 'Multi-Store Data Sync',
        icon: RefreshCw,
        description:
          'Real-time synchronization across all branches. Centralized pricing, schemes, and inventory control.',
      },
      {
        title: 'Dynamic Sales Promotions',
        icon: Receipt,
        description:
          'Run BOGO, combo packs, time-based discounts, and coupon campaigns. Auto-apply at checkout.',
      },
      {
        title: 'Home Delivery Management',
        icon: Truck,
        description:
          'Track delivery status for home delivery, store pickup, and time-bound orders with rider assignment.',
      },
      {
        title: 'Departmental Control',
        icon: Layers,
        description:
          'Manage Food, Electronics, Garments, and General departments independently with unified billing.',
      },
      {
        title: 'Till & Session Management',
        icon: Lock,
        description:
          'Cashier sign-in/out, till audits, cash-in-till tracking, and shift handover reconciliation.',
      },
      {
        title: 'E-commerce Integration',
        icon: Smartphone,
        description:
          'Connect your store to online ordering apps. Sync products, prices, and inventory in real time.',
      },
    ],
    benefits: [
      {
        title: 'Fastest Checkout Experience',
        description: 'Barcode scanning + touchscreen + hotkeys = minimal customer wait time even during rush hours.',
      },
      {
        title: 'Complete Chain Control',
        description: 'Manage 100+ stores from a single head office with real-time inventory and sales visibility.',
      },
      {
        title: 'Reduce Shrinkage',
        description: 'Physical stock taking while billing continues, damage tracking, and claim management to minimize losses.',
      },
      {
        title: 'Customer Retention',
        description: 'Loyalty programs, personalized offers, and birthday tracking increase repeat business by up to 40%.',
      },
    ],
  },
};

export function getBillingVariant(variant = 'main') {
  return BILLING_VARIANTS[variant] || BILLING_VARIANTS.main;
}

export const BILLING_NAV_ITEMS = [
  {
    label: 'Pharmacy & Healthcare',
    path: '/software/pharmacy-healthcare',
    subItems: [
      { label: 'Retail Pharmacies', path: '/software/pharmacy-healthcare/retail-pharmacies' },
      { label: 'Hospital Pharmacies', path: '/software/pharmacy-healthcare/hospital-pharmacies' },
      { label: 'Jan Aushadhi Kendra', path: '/software/pharmacy-healthcare/jan-aushadhi-kendra' },
      { label: 'Ayurvedic & Generic Medicine', path: '/software/pharmacy-healthcare/ayurvedic-generic' },
      { label: 'Homeopathic Shops', path: '/software/pharmacy-healthcare/homeopathic-shops' },
      { label: 'Pharma Wholesalers', path: '/software/pharmacy-healthcare/pharma-wholesalers' },
      { label: 'Pharma Distributors', path: '/software/pharmacy-healthcare/pharma-distributors' },
      { label: 'Pharma Marketing Companies', path: '/software/pharmacy-healthcare/pharma-marketing' },
      { label: 'Multi-branch Pharmacy Chain', path: '/software/pharmacy-healthcare/multi-branch-pharmacy' },
    ]
  },
  {
    label: 'Auto-Parts Billing Software',
    path: '/software/auto-parts',
    subItems: [
      { label: 'Auto Parts Retailers', path: '/software/auto-parts/auto-parts-retailers' },
      { label: 'Spare Parts Dealers', path: '/software/auto-parts/spare-parts-dealers' },
      { label: 'Car Accessories', path: '/software/auto-parts/car-accessories' },
      { label: 'Multi-branch Auto parts Stores', path: '/software/auto-parts/multi-branch-auto-parts' },
    ]
  },
  {
    label: 'FMCG Billing Software',
    path: '/software/fmcg',
    subItems: [
      { label: 'FMCG Distributors', path: '/software/fmcg/fmcg-distributors' },
      { label: 'FMCG Wholesalers', path: '/software/fmcg/fmcg-wholesalers' },
      { label: 'FMCG Retailers', path: '/software/fmcg/fmcg-retailers' },
      { label: 'FMCG Companies', path: '/software/fmcg/fmcg-companies' },
    ]
  },
  {
    label: 'Retail Billing Software',
    path: '/software/retail',
    subItems: [
      { label: 'Grocery & Kirana Store', path: '/software/retail/grocery-kirana' },
      { label: 'Departmental Store & Supermarket', path: '/software/retail/departmental-supermarket' },
      { label: 'Garment & Footwear Shops', path: '/software/retail/garment-footwear' },
      { label: 'Sarees & Clothing Showroom', path: '/software/retail/sarees-clothing' },
      { label: 'Pharmacy & Ayurvedic Stores', path: '/software/retail/pharmacy-ayurvedic' },
      { label: 'Hardware & Electrical Shops', path: '/software/retail/hardware-electrical' },
      { label: 'Books & Stationary Shops', path: '/software/retail/books-stationary' },
      { label: 'School Dresses Shops', path: '/software/retail/school-dresses' },
      { label: 'Gift & Novelty Shops', path: '/software/retail/gift-novelty' },
      { label: 'Paint Dealers & Distribution', path: '/software/retail/paint-dealers' },
      { label: 'Multi Outlet Retail Chain', path: '/software/retail/multi-outlet-chain' },
    ]
  },
];

export const FMCG_SUB_VARIANTS = {
  'fmcg-distributors': {
    slug: 'fmcg-distributors',
    title: 'FMCG Distributors Software',
    subtitle: 'Complete route planning, salesman orders, and distribution billing ERP',
    description: 'Optimize your FMCG distribution with route-wise beat planning, salesman tracking, bulk schemes, and invoice dispatch controls.',
    icon: Truck,
    color: '#0EA5E9',
    accentColor: '#06B6D4',
    heroFeatures: ['Route & Beat Management', 'Salesman Order App', 'Bulk Scheme Controls', 'GST Dispatch Bills'],
    stats: [
      { value: 2000, suffix: '+', label: 'Active Distributors' },
      { value: 10, suffix: 'M+', label: 'Sales Invoiced' },
      { value: 99.9, suffix: '%', label: 'Logistics Control' }
    ],
    features: [
      { title: 'Route Beat Planner', icon: Truck, description: 'Assign salesmen to specific geographical route beats and schedule delivery schedules.' },
      { title: 'Salesman Mobile App', icon: Smartphone, description: 'Salesmen can log orders, check live stock, and record collection details directly in the field.' },
      { title: 'Scheme Configuration', icon: Receipt, description: 'Run complex volume-based offers, free item margins (e.g. 12+1), and trade discounts automatically.' },
      { title: 'Credit Limit Control', icon: Lock, description: 'Set customized outstanding credit values and invoice ageing locks for every retailer outlet.' },
      { title: 'Route-wise Dispatch lists', icon: Database, description: 'Consolidate deliveries by route and print pick lists and dispatch challans for van drivers.' },
      { title: 'One-Click Invoice Import', icon: RefreshCw, description: 'Import product orders and stock receipts from Excel files and supplier sheets directly.' }
    ],
    benefits: [
      { title: 'Prevent Bad Debts', description: 'Automatic payment reminders and credit blocks on retailers with outstanding collection invoices.' },
      { title: 'Increase Beat Efficiency', description: 'Monitor route sales and salesman targets to optimize distribution coverage by up to 35%.' }
    ]
  },
  'fmcg-wholesalers': {
    slug: 'fmcg-wholesalers',
    title: 'FMCG Wholesalers Software',
    subtitle: 'High-volume wholesale billing with multi-unit packaging and trade pricing',
    description: 'Streamline high-speed counter billing for wholesale groceries and consumer goods. Seamless box/case/pack multi-unit conversions.',
    icon: Warehouse,
    color: '#0EA5E9',
    accentColor: '#06B6D4',
    heroFeatures: ['Multi-Unit Billing', 'Bulk Trade Pricing', 'Supplier Outstanding Ageing', 'High-Speed Barcode POS'],
    stats: [
      { value: 1200, suffix: '+', label: 'Wholesale Outlets' },
      { value: 100, suffix: 'K+', label: 'Daily Box Conversions' },
      { value: 99.5, suffix: '%', label: 'Checkout Speed' }
    ],
    features: [
      { title: 'Box/Case Multi-Unit POS', icon: Package, description: 'Instantly swap units between boxes, cases, strips, and loose pieces inside the billing row.' },
      { title: 'Bulk Customer Pricing', icon: Receipt, description: 'Create dynamic discount groups based on dealer volume purchases and trade agreements.' },
      { title: 'Fast POS Checkout', icon: Zap, description: 'High-volume checkout support with barcode scanning, cashier shifts, and hotkeys for billing.' },
      { title: 'Supplier Credit Tracker', icon: Clock, description: 'Track outstanding balances, credit notes, and payment ageing lists for manufacturer suppliers.' },
      { title: 'Tally Accounting Sync', icon: Share2, description: 'Seamless B2B ledger and GST transaction details export for immediate chartered accountant reconciliation.' },
      { title: 'Physical Stock Audits', icon: Settings, description: 'Verify inventory stock levels without stopping billing counters using stock sheets.' }
    ],
    benefits: [
      { title: 'Zero Packaging Discrepancies', description: 'System handles automatic calculations between bulk boxes and loose units to ensure accurate pricing.' },
      { title: 'Accelerated Desk Speed', description: 'Saves up to 10 seconds per item using optimized keyboard hotkey workflows.' }
    ]
  },
  'fmcg-retailers': {
    slug: 'fmcg-retailers',
    title: 'FMCG Retailers Software',
    subtitle: 'Fast touch-screen POS, weighing scale sync, and loyalty for supermarkets',
    description: 'Supercharge your grocery retail counter with weighing scale integrations, dynamic buy-one-get-one promotions, and member loyalty card syncing.',
    icon: ShoppingCart,
    color: '#0EA5E9',
    accentColor: '#06B6D4',
    heroFeatures: ['Weighing Scale Sync', 'Touchscreen Quick POS', 'Supermarket BOGO Offers', 'Customer Loyalty Cards'],
    stats: [
      { value: 3500, suffix: '+', label: 'Supermarkets Running' },
      { value: 50, suffix: '%', label: 'Faster Checkout Time' },
      { value: 40, suffix: '%', label: 'Loyalty Sign-up Rise' }
    ],
    features: [
      { title: 'Touchscreen Quick POS', icon: Zap, description: 'User-friendly billing screen optimized for high-speed touch input and item selection grids.' },
      { title: 'Weighing Scale Integration', icon: Settings, description: 'Connect digital weighing scales to automatically read item weight and calculate net rates.' },
      { title: 'BOGO Promo engine', icon: Receipt, description: 'Configure Buy-One-Get-One, combo deals, discount coupons, and credit point deductions.' },
      { title: 'Loyalty Card Syncing', icon: Users, description: 'Maintain customer registers, award cashback points, and push personalized offers via WhatsApp.' },
      { title: 'Multi-Payment Checkout', icon: CreditCard, description: 'Process payments via credit card, UPI (BharatPe/PhonePe), cash, and store wallets simultaneously.' },
      { title: 'Dynamic QR Invoice Generation', icon: QrCode, description: 'Print custom dynamic UPI payment QR codes directly onto the cash invoice for immediate scan-and-pay.' }
    ],
    benefits: [
      { title: 'Minimize Customer Queues', description: 'High-speed touch select combined with scale reading keeps counter checkout lines moving rapidly.' },
      { title: 'Drive Customer Loyalty', description: 'Loyalty program integration increases customer purchase frequency and retention by up to 25%.' }
    ]
  },
  'fmcg-companies': {
    slug: 'fmcg-companies',
    title: 'FMCG Companies Software',
    subtitle: 'Central supply chain, manufacturer margin registers, and depot manager ERP',
    description: 'Centralized depot inventory management, production scheduling sync, stockist pricing list controllers, and PCD marketing support for corporate FMCG manufacturers.',
    icon: Building2,
    color: '#0EA5E9',
    accentColor: '#06B6D4',
    heroFeatures: ['Depot & Stockist Sync', 'Manufacturer Margins Registry', 'Central Purchase Orders', 'Consolidated Corporate Audits'],
    stats: [
      { value: 150, suffix: '+', label: 'FMCG Brands Connected' },
      { value: 100, suffix: '%', label: 'Supply Chain Visibility' },
      { value: 30, suffix: '%', label: 'Stockout Reduction' }
    ],
    features: [
      { title: 'Depot & Branch Syncing', icon: Network, description: 'Coordinate inventories across regional offices, manufacturing plants, and supply locations.' },
      { title: 'Stockist Pricing List Control', icon: Database, description: 'Set global trade price lists, stockist margins, tax layers, and purchase locks from headquarters.' },
      { title: 'Central Purchase Allocator', icon: Warehouse, description: 'Consolidate stock requirements across depots and allocate production runs based on demand.' },
      { title: 'Scheme Claim Settlement', icon: RefreshCw, description: 'Verify and settle margin claims from distributors and stockists for running regional promotional offers.' },
      { title: 'GSTR Consolidated Audits', icon: FileText, description: 'Auto-compile group-wide invoices and tax reports to satisfy national audits and compliances.' },
      { title: 'Global Margin Analytics', icon: BarChart3, description: 'Monitor product-wise margins, production costs, and sales volumes through corporate dashboards.' }
    ],
    benefits: [
      { title: 'Supply Chain Clarity', description: 'Real-time visibility into branch stock levels helps optimize production scheduling and lowers holding costs.' },
      { title: 'HQ Price Policy Enforcement', description: 'Maintain complete price policy control over distributors and franchise networks with locked price files.' }
    ]
  }
};

export const RETAIL_SUB_VARIANTS = {
  'grocery-kirana': {
    slug: 'grocery-kirana',
    title: 'Grocery & Kirana Store Software',
    subtitle: 'High-speed counter billing with barcode scanning & weighing scale integration',
    description: 'Perfect for local kirana shops and grocery stores. Manage thousands of grocery items with fast billing, weighing scale integration, and barcode scanning.',
    icon: Apple,
    color: '#F59E0B',
    accentColor: '#EA580C',
    heroFeatures: ['Weighing Scale Sync', 'Quick Barcode Scan', 'Loose Item Management', 'Daily Profit Tracking'],
    stats: [
      { value: 12000, suffix: '+', label: 'Kirana Stores' },
      { value: 50, suffix: '%', label: 'Checkout Speedup' },
      { value: 99.9, suffix: '%', label: 'Weight Sync Accuracy' }
    ],
    features: [
      { title: 'Weighing Scale Sync', icon: Settings, description: 'Connect digital weighing scales directly to POS. Auto-reads weight for grains, vegetables, and loose items.' },
      { title: 'Fast Barcode Checkout', icon: Zap, description: 'Process items rapidly using keyboard shortcuts and handheld barcode scanners.' },
      { title: 'Multi-Payment POS', icon: CreditCard, description: 'Accept cash, cards, UPI/QR code, and digital wallets. Unified payment reconciliation.' },
      { title: 'Reorder Alerts', icon: RefreshCw, description: 'Set minimum stock levels and get automated reorder alerts for fast-moving groceries.' },
      { title: 'Customer Credit Ledger', icon: Users, description: 'Maintain digital Udhaar/credit books for regular neighborhood customers with auto-reminders.' },
      { title: 'Loose Item Weighing', icon: Calculator, description: 'Quickly calculate prices for custom weights with pre-configured unit mappings.' }
    ],
    benefits: [
      { title: 'Zero Weight Inaccuracies', description: 'Direct API integration with weighing scales ensures accurate billing for loose commodities.' },
      { title: 'Udhaar Book Digitization', description: 'Replace paper khata books with digital credit ledgers and automated WhatsApp payment links.' }
    ]
  },
  'departmental-supermarket': {
    slug: 'departmental-supermarket',
    title: 'Departmental Store & Supermarket Software',
    subtitle: 'Multi-counter billing, supermarket schemes, and barcode printing ERP',
    description: 'Manage departmental supermarkets with multiple cashier counters, customized barcode printing, promotional BOGO offers, and shelf-wise inventory audits.',
    icon: Store,
    color: '#F59E0B',
    accentColor: '#EA580C',
    heroFeatures: ['Multi-counter Billing', 'BOGO Promo Engine', 'Shelf Inventory Audit', 'Custom Barcode Printing'],
    stats: [
      { value: 4500, suffix: '+', label: 'Supermarkets Running' },
      { value: 1, suffix: 'M+', label: 'Monthly Invoices' },
      { value: 3, suffix: 'x', label: 'Faster Inventory Audits' }
    ],
    features: [
      { title: 'Multi-Counter Data Sync', icon: Network, description: 'Sync sales, stocks, and cash drawers across multiple billing desks in real time.' },
      { title: 'BOGO Promo Engine', icon: Receipt, description: 'Easily set up buy-one-get-one schemes, combo packs, festival discounts, and loyalty coupons.' },
      { title: 'Custom Barcode Labeler', icon: QrCode, description: 'Generate and print custom barcodes with details like item name, price, size, and shelf section.' },
      { title: 'Shelf Stock Auditing', icon: Warehouse, description: 'Conduct stock audits department-wise without shutting down checkout counters.' },
      { title: 'Till Drawer Control', icon: Lock, description: 'Track cashier shifts, session cash reconciliations, and prevent till discrepancies.' },
      { title: 'Customer Loyalty Module', icon: Users, description: 'Run point-based reward systems to increase customer repeat rate by 40%.' }
    ],
    benefits: [
      { title: 'Peak Rush Management', description: 'Sleek touchscreen interface paired with multi-counter sync keeps billing queues moving fast.' },
      { title: 'Leakage Control', description: 'Role-based access controls and strict till audits ensure cash and inventory safety.' }
    ]
  },
  'garment-footwear': {
    slug: 'garment-footwear',
    title: 'Garment & Footwear Shops Software',
    subtitle: 'Matrix inventory for article, size, and color-wise clothing tracking',
    description: 'Perfect for retail clothing and shoe stores. Track products using a matrix system of article numbers, sizes, colors, and brands.',
    icon: Layers,
    color: '#F59E0B',
    accentColor: '#EA580C',
    heroFeatures: ['Size-Color-Article Matrix', 'Barcode tag printing', 'Brand-wise margins tracking', 'Exchange & Refund POS'],
    stats: [
      { value: 6800, suffix: '+', label: 'Apparel Stores' },
      { value: 30, suffix: '%', label: 'Inventory Holding Cuts' },
      { value: 100, suffix: '%', label: 'Size Exchange Accuracy' }
    ],
    features: [
      { title: 'Size & Color Matrix', icon: Layers, description: 'Maintain inventory variations for every shirt, shoe, or dress by color, size, and article code.' },
      { title: 'Barcode Tag Printing', icon: Printer, description: 'Design and print garment tags with brand, size, price, and barcode labels.' },
      { title: 'Exchange & Refund POS', icon: RefreshCw, description: 'Process easy product size exchanges and manage store credits or refund receipts.' },
      { title: 'Brand Sales Analytics', icon: BarChart3, description: 'Analyze brand-wise sales and margin performance to identify high-profit garments.' },
      { title: 'Season-wise Cataloging', icon: Package, description: 'Categorize apparel by seasons (Summer, Winter, Festive) and run clearance discounts.' },
      { title: 'Sales Commission Ledger', icon: Users, description: 'Calculate sales staff commissions automatically based on their billing counts.' }
    ],
    benefits: [
      { title: 'Smart Variation Mapping', description: 'Lookup article codes to see available sizes and colors instantly across racks.' },
      { title: 'Hassle-free Exchanges', description: 'Process customer returns and exchange invoices under 30 seconds with credit notes.' }
    ]
  },
  'sarees-clothing': {
    slug: 'sarees-clothing',
    title: 'Sarees & Clothing Showroom Software',
    subtitle: 'Fabric meters billing, custom tailors sync, and loyalty campaigns',
    description: 'Sarees, ethnic wear showrooms, and designer boutiques. Track items by meters or units, manage custom tailoring job orders, and run VIP loyalty programs.',
    icon: Store,
    color: '#F59E0B',
    accentColor: '#EA580C',
    heroFeatures: ['Meters / Cut Billing', 'Tailoring Order Tracker', 'VIP Loyalty Points', 'Gift Voucher Registry'],
    stats: [
      { value: 3200, suffix: '+', label: 'Ethnic Showrooms' },
      { value: 20, suffix: '%', label: 'Average Ticket Size Rise' },
      { value: 99.5, suffix: '%', label: 'Tailoring Sync accuracy' }
    ],
    features: [
      { title: 'Meters / Cut Billing', icon: Calculator, description: 'Bill fabrics by fractional meter measurements with automatic roll inventory calculation.' },
      { title: 'Tailoring Job Book', icon: FileText, description: 'Register customer measurements, trial dates, delivery dates, and tailor job commissions.' },
      { title: 'VIP Loyalty Program', icon: Users, description: 'Segment VIP showroom clients and send personalized WhatsApp updates for new saree stock.' },
      { title: 'Combo Package Deals', icon: Layers, description: 'Bundle wedding ensembles or designer items with tailoring charges in a single billing row.' },
      { title: 'Gift Voucher Registry', icon: CreditCard, description: 'Issue, track, and redeem custom branded physical and digital gift cards.' },
      { title: 'Showroom Stock Relocation', icon: Warehouse, description: 'Track stock across displays, trial rooms, alteration tables, and back-godowns.' }
    ],
    benefits: [
      { title: 'Integrated Alterations', description: 'Seamlessly link alterations/custom measurements with bills so no customer requests are lost.' },
      { title: 'Boost Premium Repeat Sales', description: 'Automated VIP alerts when high-demand designer wear or new collections arrive.' }
    ]
  },
  'pharmacy-ayurvedic': {
    slug: 'pharmacy-ayurvedic',
    title: 'Pharmacy & Ayurvedic Stores Software',
    subtitle: 'Medical billing, chemical salt lookup, and loose herbs weighing sync',
    description: 'A hybrid medical software for pharmacy and herbal retail. Batch expiry tracking, generic salt search, and loose herb weighing integration in a unified POS.',
    icon: Pill,
    color: '#F59E0B',
    accentColor: '#EA580C',
    heroFeatures: ['Expiry Date Alerting', 'Chemical Salt Search', 'Loose Herb Weight POS', 'Schedule Drug Logging'],
    stats: [
      { value: 5400, suffix: '+', label: 'Hybrid Chemist Stores' },
      { value: 100, suffix: '%', label: 'Expiry Prevention' },
      { value: 30, suffix: 'K+', label: 'Medicines cataloged' }
    ],
    features: [
      { title: 'Batch Expiry Warnings', icon: Clock, description: 'Block billing of expired medicine batches and flag items approaching near-expiry.' },
      { title: 'Chemical Salt Substitutes', icon: Search, description: 'Enter brand name to instantly view direct substitutes with identical chemical salts.' },
      { title: 'Schedule Drug Registers', icon: FileText, description: 'Auto-compile narcotics and Schedule H registers to satisfy government regulations.' },
      { title: 'Loose Herbs Invoicing', icon: Settings, description: 'Weighing scale sync for herbal roots, powders, and customized ayurvedic formulations.' },
      { title: 'Prescription Attacher', icon: Database, description: 'Scan and digitize doctor prescriptions, linking them directly to B2C tax invoices.' },
      { title: 'Supplier Bill Import', icon: RefreshCw, description: 'Directly import Excel/CSV files from suppliers to update inventory without manual entering.' }
    ],
    benefits: [
      { title: 'Avoid Expired Sales Loss', description: 'Expiry warnings block expired batches, saving money and protecting health.' },
      { title: 'Comply with FDA Regs', description: 'Digitized logs for drug licensing and Schedule drug regulations are compiled automatically.' }
    ]
  },
  'hardware-electrical': {
    slug: 'hardware-electrical',
    title: 'Hardware & Electrical Shops Software',
    subtitle: 'Multipack pricing, manufacturer part search, and B2B/B2C billing',
    description: 'Hardware, sanitary, paint, and electrical shops. Manage items by boxes, coils, bags, or pieces. Manufacturer part numbers search and trade builder profiles.',
    icon: Settings,
    color: '#F59E0B',
    accentColor: '#EA580C',
    heroFeatures: ['Coil/Piece Multi-unit', 'Contractor Pricing Tiers', 'Part Number Indexing', 'B2B/B2C Tax Billing'],
    stats: [
      { value: 7800, suffix: '+', label: 'Hardware Stores' },
      { value: 100, suffix: 'K+', label: 'Product SKU Index' },
      { value: 99.8, suffix: '%', label: 'Coil Calculator Accuracy' }
    ],
    features: [
      { title: 'Coil / Cable Calculator', icon: Calculator, description: 'Calculate billing for cut wire/cable lengths in meters or feet while deducting rolls.' },
      { title: 'Contractor Pricing Matrix', icon: Receipt, description: 'Set discount levels and bulk pricing structures for regular plumbers, electricians, and builders.' },
      { title: 'Manufacturer Part Lookup', icon: Search, description: 'Search items using original factory part numbers, SKU codes, and local descriptions.' },
      { title: 'Dual Tax Invoice POS', icon: FileText, description: 'Switch between B2C simple bills and detailed B2B GST tax invoices in a single click.' },
      { title: 'Multi-Store Godown Sync', icon: Warehouse, description: 'Check stock levels at offsite yards or warehouse locations directly from the front counter.' },
      { title: 'Outstanding Credit Control', icon: Lock, description: 'Set payment credit limits for contractor accounts with invoice ageing locks.' }
    ],
    benefits: [
      { title: 'Fractional Unit Control', description: 'Bill items sold by weight (screws), length (cables), or box (tiles) easily.' },
      { title: 'Retain Trade Builders', description: 'Contractor pricing matrices ensure loyal tradesmen always get correct custom rates.' }
    ]
  },
  'books-stationary': {
    slug: 'books-stationary',
    title: 'Books & Stationary Shops Software',
    subtitle: 'ISBN barcode lookup, publishers catalog, and school book bundling',
    description: 'Retail bookstore and stationary outlets. Register items using ISBN numbers, manage publisher price files, and bundle school class booksets.',
    icon: FileText,
    color: '#F59E0B',
    accentColor: '#EA580C',
    heroFeatures: ['ISBN Barcode Scanning', 'Publisher Margin logs', 'School Booksets Bundling', 'High-Speed POS counter'],
    stats: [
      { value: 2900, suffix: '+', label: 'Stationers' },
      { value: 15, suffix: 'K+', label: 'ISBN Codes Indexed' },
      { value: 40, suffix: '%', label: 'School Rush Time Saved' }
    ],
    features: [
      { title: 'ISBN Scan Lookup', icon: Barcode, description: 'Scan any book ISBN code to autofill details, author, publisher, and standard pricing.' },
      { title: 'School Bookset Combo', icon: Layers, description: 'Bundle grade books (e.g. 5th Standard Set) with stationary, notebooks, and school covers.' },
      { title: 'Publisher Margin Track', icon: Database, description: 'Maintain catalog pricing matrices based on different publisher distributions.' },
      { title: 'Quick Stationers POS', icon: Zap, description: 'High-speed search for low-value stationary items (pencils, files, calculators) at POS.' },
      { title: 'Return to Publisher Log', icon: RefreshCw, description: 'Log unsold books and magazines returned to publishing agencies with credit note logs.' },
      { title: 'Seasonal Sales Planner', icon: Clock, description: 'Plan discounts and reorders ahead of seasonal school openings and exam months.' }
    ],
    benefits: [
      { title: 'Rapid Seasonal Checkouts', description: 'School bookset combos prevent line bottlenecks during the school re-opening season.' },
      { title: 'Efficient Agency Returns', description: 'Track consignment stocks and simplify publisher returns process.' }
    ]
  },
  'school-dresses': {
    slug: 'school-dresses',
    title: 'School Dresses Shops Software',
    subtitle: 'School-wise uniform sizing matrix and tailoring alteration tracker',
    description: 'Uniform, badge, and tie stores. Size variations linked by school name, house color combinations, and alterations status registers.',
    icon: Users,
    color: '#F59E0B',
    accentColor: '#EA580C',
    heroFeatures: ['School-wise Size Grid', 'House Colors Cataloging', 'Alteration Tailor Sync', 'Batch Inventory Booking'],
    stats: [
      { value: 1800, suffix: '+', label: 'Uniform Studios' },
      { value: 100, suffix: '%', label: 'Uniform Search Accuracy' },
      { value: 25, suffix: '%', label: 'Production Plan Rise' }
    ],
    features: [
      { title: 'School-wise Size Matrix', icon: Layers, description: 'Filter and lookup uniform shirts and trousers by school name, gender, and sizing code.' },
      { title: 'Alteration Tailor Book', icon: FileText, description: 'Attach alteration instructions to invoices and assign tailor tasks with deadline tracking.' },
      { title: 'House Colors Mappings', icon: Store, description: 'Track house-wise T-shirt inventory (Red, Blue, Green, Yellow) for sports uniforms.' },
      { title: 'Uniform Set Combos', icon: Package, description: 'Bundle uniforms with belts, ties, socks, badges, and school shoes for easy checkouts.' },
      { title: 'Advance Booking Registry', icon: Clock, description: 'Book advance deposits for custom blazer batches and track altered fittings.' },
      { title: 'Wholesale Uniform Deals', icon: Receipt, description: 'Generate wholesale supply bills directly for schools buying in bulk sizes.' }
    ],
    benefits: [
      { title: 'Fittings Alteration Control', description: 'Alteration tracking eliminates pickup errors and keeps tailors on schedule.' },
      { title: 'Simplify Uniform Bundling', description: 'Single-click uniform set checkout cuts invoice entry lines and speeds customer flows.' }
    ]
  },
  'gift-novelty': {
    slug: 'gift-novelty',
    title: 'Gift & Novelty Shops Software',
    subtitle: 'Custom barcode tag printing, gift wrapping charges, and festival stock logs',
    description: 'Gift, toys, cosmetics, and novelty shops. Custom barcode generation for non-labeled imports, gift wrapping calculations, and festival inventory planners.',
    icon: Package,
    color: '#F59E0B',
    accentColor: '#EA580C',
    heroFeatures: ['Custom Barcode tagger', 'Gift Wrapping Charges', 'Festival Stock Planner', 'Combo Offer Configurator'],
    stats: [
      { value: 4100, suffix: '+', label: 'Gift Galleries' },
      { value: 10, suffix: '%', label: 'Wrapping Revenue Up' },
      { value: 99.7, suffix: '%', label: 'Non-labeled Items Tagged' }
    ],
    features: [
      { title: 'Custom Barcode Printing', icon: QrCode, description: 'Generate custom barcode tags for unbranded gift items, toys, and imports.' },
      { title: 'Gift Wrap Integration', icon: Settings, description: 'Add optional wrapping or gift message charges directly during product checkout.' },
      { title: 'Combo Custom Packs', icon: Layers, description: 'Create and sell customizable gift hampers (chocolates + flowers + toys) on the fly.' },
      { title: 'Festival Stock Tracking', icon: Warehouse, description: 'Manage inventory fluctuations for seasonal holidays (Diwali, Christmas, Valentine\'s Day).' },
      { title: 'Dynamic QR UPI checkout', icon: Barcode, description: 'Generate a payment UPI QR with exact hampering total on the POS screen.' },
      { title: 'Expiry Gift Tracking', icon: Clock, description: 'Track expiries for chocolates, cosmetics, and gourmet items in gift baskets.' }
    ],
    benefits: [
      { title: 'Tag Unbranded Imports', description: 'Print custom labels in seconds to handle non-barcoded novelties and imports.' },
      { title: 'Hamper Customization', description: 'Configure hampers at the POS while automatically updating individual product inventories.' }
    ]
  },
  'paint-dealers': {
    slug: 'paint-dealers',
    title: 'Paint Dealers & Distribution Software',
    subtitle: 'Base-shade color tinting pricing, batch tinting sync, and distributor margin ERP',
    description: 'Paint showrooms and distributors. Shade pricing calculations based on base paint volumes and color tinting costs. Distributor sales route planning.',
    icon: Database,
    color: '#F59E0B',
    accentColor: '#EA580C',
    heroFeatures: ['Base-Shade pricing sync', 'Color Tinting Costing', 'Batch-wise tint registry', 'Distributor route planning'],
    stats: [
      { value: 2500, suffix: '+', label: 'Paint Showrooms' },
      { value: 100, suffix: '%', label: 'Shade Price Accuracy' },
      { value: 30, suffix: '%', label: 'Tinting Margin Boost' }
    ],
    features: [
      { title: 'Base-Shade Formula Costing', icon: Calculator, description: 'Calculate retail rates dynamically based on base paint size plus colorant tinted weights.' },
      { title: 'Color Tint Tinting Sync', icon: Settings, description: 'Track inventory ml consumption of separate tinters used in mixing machines.' },
      { title: 'Batch Tint Registry', icon: Database, description: 'Log customer shade formula names for future color-matching room orders.' },
      { title: 'Dealer Discount Matrices', icon: Receipt, description: 'Manage pricing, volume discounts, and company claims for sub-dealers.' },
      { title: 'Multi-Godown Stock Transfer', icon: Warehouse, description: 'Manage bulky paint cans across front store display and back warehouses.' },
      { title: 'Route Dispatch Challan', icon: Truck, description: 'Organize deliveries to construction projects with vehicle route lists.' }
    ],
    benefits: [
      { title: 'Tint Mixing Precision', description: 'Automated shade calculators ensure paint tinters are priced correctly without losses.' },
      { title: 'Recall Customer Colors', description: 'Register color mix history by customer mobile number for instant repeat shades.' }
    ]
  },
  'multi-outlet-chain': {
    slug: 'multi-outlet-chain',
    title: 'Multi Outlet Retail Chain Software',
    subtitle: 'Cloud-synced multi-store inventory, global loyalty, and central HQ dashboard',
    description: 'Enterprise ERP for retail chains. Sync branch inventories, manage inter-branch transfers (IBT), centralized head-office pricing, and global customer loyalty.',
    icon: Network,
    color: '#F59E0B',
    accentColor: '#EA580C',
    heroFeatures: ['Centralized HQ control', 'Inter-Branch Stock Transfer', 'Global Loyalty syncing', 'Consolidated Analytics'],
    stats: [
      { value: 350, suffix: '+', label: 'Retail Chains' },
      { value: 2500, suffix: '+', label: 'Branches Connected' },
      { value: 100, suffix: '%', label: 'Real-time stock visibility' }
    ],
    features: [
      { title: 'HQ Price Master Control', icon: Lock, description: 'Lock in product pricing, GST layers, and promotions at head-office and sync to branches.' },
      { title: 'Inter-Branch Transfer (IBT)', icon: RefreshCw, description: 'Initiate, approve, and track stock transfers from slow-moving branches to high-demand areas.' },
      { title: 'HQ Purchase Allocation', icon: Warehouse, description: 'Consolidate supplier purchasing at HQ and automatically allocate goods to branch outlets.' },
      { title: 'Global Loyalty Points', icon: Users, description: 'Customers can earn loyalty points at store A and redeem them at outlet B nationwide.' },
      { title: 'Real-time Stock Search', icon: Search, description: 'Search item availability in neighboring stores directly from any branch checkout register.' },
      { title: 'Group Audits & tax lists', icon: FileText, description: 'Auto-compile branch sales, margins, and GST filings into corporate tax audit reports.' }
    ],
    benefits: [
      { title: 'HQ Control over Pricing', description: 'Avoid pricing discrepancies across branches by locking pricing authorities to head-office.' },
      { title: 'Optimize Chain Stock', description: 'Prevent store out-of-stocks by transferring slow items from other branches.' }
    ]
  }
};

export const FMCG_FEATURES_AT_GLANCE = [
  {
    title: 'Billing & Dispatch',
    items: [
      'GST Invoicing & e-Way Bills',
      'Multi-Unit Billing (Box / Case / Pack / Piece)',
      'Salesman Beat Order Sync',
      'Consolidated Challan to Invoice',
      'High-Speed Barcode Checkout POS',
      'Scheme & Volume Offer Auto-application',
      'Customer Credit Limit Warnings',
      'Invoice Delivery & Route Challans'
    ]
  },
  {
    title: 'Accounting',
    items: [
      'Single/Double Entry System',
      'Outstanding Invoice Ageing Reports',
      'Salesman Collection Registry',
      'PDC & Cheque Management Ledger',
      'Bank Reconciliation (Bank Statement Import)',
      'Multi-Firm Accounting Consolidation',
      'Profitability & Margin Reports'
    ]
  },
  {
    title: 'Inventory & Supply Chain',
    items: [
      'Depot, Godown & Rack Location Indexing',
      'Stock Valuation (FIFO / Weighted Average)',
      'Inter-Depot Stock Transfers',
      'Slow-moving & Near-expiry Stock Alerts',
      'Automated Stock Reordering Planner',
      'Bulk Manufacturer Price List Excel Import'
    ]
  },
  {
    title: 'Loyalty & Promotions',
    items: [
      'BOGO (Buy-One-Get-One) Schemes',
      'Customer Loyalty Point Ledgers',
      'Birthday & Festive SMS Promotions',
      'Gift Voucher/Coupon Code Systems'
    ]
  },
  {
    title: 'Integrations',
    items: [
      'Tally Data Export Tool',
      'PhonePe / PhonePe SmartSpeaker Sync',
      'BharatPe POS Integrations',
      'ICICI / HDFC API Banking Linkage'
    ]
  }
];

export const AUTOPARTS_SUB_VARIANTS = {
  'auto-parts-retailers': {
    slug: 'auto-parts-retailers',
    title: 'Auto Parts Retailers Billing Software',
    subtitle: 'High-speed billing & inventory software for retail auto parts & spare shops',
    description: 'Optimize your counter sales with vehicle compatibility search, quick part number lookup, and instant GST invoicing. Designed to handle busy retail auto parts stores.',
    icon: Store,
    color: '#EF4444',
    accentColor: '#F97316',
    heroFeatures: ['Vehicle Compatibility Filter', 'OEM Part Cross-Reference', 'Custom Barcode Printing', 'GST Billing & e-Way Bills'],
    stats: [
      { value: 1500, suffix: '+', label: 'Retail Stores' },
      { value: 30, suffix: 'K+', label: 'OEM Parts Cataloged' },
      { value: 99.9, suffix: '%', label: 'Billing Accuracy' }
    ],
    features: [
      { title: 'Vehicle Model Search', icon: Search, description: 'Search parts by vehicle make, model, year, or engine type to find the exact match.' },
      { title: 'Alphanumeric Part Search', icon: Calculator, description: 'Instantly find items using custom SKU codes, manufacturer part numbers, or descriptions.' },
      { title: 'OEM Cross-Reference', icon: Layers, description: 'Suggest aftermarket equivalents or alternative brands when the OEM brand is out of stock.' },
      { title: 'Rack & Shelf Locator', icon: Warehouse, description: 'Display the exact cabinet, row, and bin number on the POS screen to find parts instantly.' },
      { title: 'Custom Barcode Labels', icon: QrCode, description: 'Generate and print custom barcodes with part details, price, and rack location.' },
      { title: 'Customer Credit Register', icon: FileText, description: 'Maintain account books, calculate outstanding balances, and track history for regular mechanics.' }
    ],
    benefits: [
      { title: 'Never Lose a Spare Sale', description: 'Offer cross-referenced aftermarket brands instantly when the original parts are out of stock.' },
      { title: 'Fast Counter Service', description: 'Reduce customer waiting times by up to 70% with barcode scanning and rack indexing.' }
    ]
  },
  'spare-parts-dealers': {
    slug: 'spare-parts-dealers',
    title: 'Spare Parts Dealers Software',
    subtitle: 'Robust ERP & inventory for automobile spare parts distributors & wholesalers',
    description: 'Manage extensive spare parts inventories with multi-brand catalogs, distributor pricing matrices, salesman order apps, and Tally integration.',
    icon: Settings,
    color: '#EF4444',
    accentColor: '#F97316',
    heroFeatures: ['Multi-brand Cataloging', 'Distributor Price Tiers', 'Salesman Order App', 'Seamless Tally Export'],
    stats: [
      { value: 800, suffix: '+', label: 'Spare Parts Dealers' },
      { value: 100, suffix: 'K+', label: 'Part Numbers Indexed' },
      { value: 100, suffix: '%', label: 'Tally Reconciliation' }
    ],
    features: [
      { title: 'Bulk Excel Price Import', icon: Database, description: 'Import distributor sheets with thousands of items, MRP changes, and discount groups in one click.' },
      { title: 'Multi-Tier Pricing Matrix', icon: Receipt, description: 'Configure custom trade discount structures and wholesale margins for different retailer groups.' },
      { title: 'Salesman Mobile Orders', icon: Smartphone, description: 'Enable field salesmen to collect orders, check live stock availability, and view retailer outstandings.' },
      { title: 'Inventory Ageing Analysis', icon: Clock, description: 'Identify slow-moving or dead stock to optimize inventory cash flow and prevent obsolescence.' },
      { title: 'Automatic Reorder Planner', icon: RefreshCw, description: 'Track minimum-maximum stock limits and auto-generate purchase orders based on sales history.' },
      { title: 'Outstanding Credit Controls', icon: Lock, description: 'Enforce credit limits and auto-lock billing for retail dealers with long-overdue invoices.' }
    ],
    benefits: [
      { title: 'Control Trade Credits', description: 'Enforce credit limits and invoice ageing alerts to minimize bad debts in wholesale distributions.' },
      { title: 'Automate Order Bookings', description: 'Real-time sync between salesman mobile bookings and backend warehouse dispatch systems.' }
    ]
  },
  'car-accessories': {
    slug: 'car-accessories',
    title: 'Car Accessories Billing Software',
    subtitle: 'Integrated billing & job card system for car decors, styling & accessory shops',
    description: 'Combine accessory retail sales with installation services. Track mechanic job cards, bundle fitment packages, manage service commissions, and handle walk-ins.',
    icon: Car,
    color: '#EF4444',
    accentColor: '#F97316',
    heroFeatures: ['Fitment Job Cards', 'Service Package Combos', 'Mechanic Commission Log', 'Walk-in & Fitment POS'],
    stats: [
      { value: 1200, suffix: '+', label: 'Accessory Studios' },
      { value: 20, suffix: '%', label: 'Average Ticket Size Boost' },
      { value: 40, suffix: '%', label: 'Labor Efficiency Gain' }
    ],
    features: [
      { title: 'Fitment Job Cards', icon: FileText, description: 'Create and track status of vehicle job cards from arrival, fitment to final gatepass.' },
      { title: 'Combo Package Bundling', icon: Layers, description: 'Bundle items (e.g. seat covers + mats + steering wrap) with service labor as a single package.' },
      { title: 'Mechanic Payout Tracker', icon: Users, description: 'Track work details of fitters/mechanics and calculate profit shares or commissions automatically.' },
      { title: 'Touchscreen Service POS', icon: Zap, description: 'High-speed checkout interface optimized for billing products and fitment charges simultaneously.' },
      { title: 'Vehicle History Tracking', icon: Database, description: 'Maintain complete history of accessory installations and warrantee services by vehicle number plate.' },
      { title: 'WhatsApp Invoicing & Alerts', icon: MessageCircle, description: 'Send digital PDF invoices, warranty cards, and feedback links directly to the customer\'s WhatsApp.' }
    ],
    benefits: [
      { title: 'Streamline Service Desk', description: 'Track which mechanic is assigned to which vehicle to ensure organized and timely fitment services.' },
      { title: 'Increase Profit Margins', description: 'Boost sales by packaging high-margin services (like ceramic coating) with accessory products.' }
    ]
  },
  'multi-branch-auto-parts': {
    slug: 'multi-branch-auto-parts',
    title: 'Multi-branch Auto parts Stores Software',
    subtitle: 'Multi-store inventory synchronization, IBT, and centralized head-office control',
    description: 'Perfect for retail chains and distribution networks. Sync inventories, manage branch-to-branch part requests, lock pricing centrally, and access group audits.',
    icon: Network,
    color: '#EF4444',
    accentColor: '#F97316',
    heroFeatures: ['Global Inventory Search', 'Inter-Branch Stock Transfer', 'HQ Pricing Control', 'Consolidated Group Audit'],
    stats: [
      { value: 150, suffix: '+', label: 'Chain Retailers' },
      { value: 800, suffix: '+', label: 'Stores Connected' },
      { value: 100, suffix: '%', label: 'HQ Pricing Sync' }
    ],
    features: [
      { title: 'Global Inventory Lookup', icon: Search, description: 'Search and locate part stock across other branches in real-time right from the POS terminal.' },
      { title: 'Inter-Branch Transfer (IBT)', icon: RefreshCw, description: 'Initiate and track stock transfers from slow-moving stores to high-demand locations.' },
      { title: 'Centralized HQ Control', icon: Lock, description: 'Define master part catalogs, prices, tax profiles, and discounts from HQ, locking local changes.' },
      { title: 'HQ Purchase Management', icon: Warehouse, description: 'Consolidate supplier purchasing at HQ and auto-allocate shipments to branches based on demand.' },
      { title: 'Consolidated Tax Filings', icon: FileText, description: 'Auto-compile branch sales and GST collections to generate group-level compliance filings.' },
      { title: 'Group Sales Analytics', icon: BarChart3, description: 'Monitor branch-wise performance, top-selling parts, margins, and cash flows from a unified dashboard.' }
    ],
    benefits: [
      { title: 'Eliminate Local Overstock', description: 'Move slow-moving spares to stores with higher demand instead of buying fresh inventory.' },
      { title: 'Unified Customer Database', description: 'Enable customers to claim warranties or redeem loyalty points at any outlet nationwide.' }
    ]
  }
};

export const AUTOPARTS_FEATURES_AT_GLANCE = [
  {
    title: 'Billing',
    items: [
      'GST Billing & e-Way Bills',
      'Sale and Purchase Challan / Quotation',
      'Barcode & Part No Wise Billing',
      'Vehicle Compatibility Search Filter',
      'Alphanumeric Part Code Search',
      'OEM part cross-referencing',
      'Fitment Job Card & Labor Invoicing',
      'Customer Purchase History Log',
      'Multi-payment Options & QR Generation',
      'Digital Invoices via WhatsApp/SMS',
      'Multi-firm & Multi-branch Billing',
      'Exchange Invoice to RECKON Users.'
    ]
  },
  {
    title: 'Accounting',
    items: [
      'Single Entry System',
      'PDC & Cheque Management',
      'Books of Account (Day Book, Ledger)',
      'Final Reports - Trial Balance, Balance Sheet',
      'Outstanding Ageing & Overdue Alerts',
      'Salesman Collection Reports',
      'Bank Reconciliation & Excel Import',
      'Customer Credit Limit Controls',
      'Voucher Approval System',
      'Till Cashier Shift Reconciliation'
    ]
  },
  {
    title: 'Inventory',
    items: [
      'Rack, Row & Shelf Location Indexing',
      'Barcode Enabled Inventory Checks',
      'Article, Color and size wise accessories',
      'Stock Ageing & Slow/Dead Stock Reports',
      'Auto Stock Valuation (FIFO/LIFO/Average)',
      'Inter-branch Stock Requests & Transfers',
      'Bulk Excel Manufacturer Price Lists Import',
      'Automated Reorder Alerts (Min/Max Stock)',
      'Physical Stock Audit Sheet Generator'
    ]
  },
  {
    title: 'GST Solutions',
    items: [
      'Validate GSTIN Instantly',
      'Validate HSN & SAC Codes Instantly',
      'Auto E-way Bill Generation',
      'Auto E-Invoice Upload',
      'GST Return Files - JSON, CSV, Excel',
      'GSTR-2A/2B Reconciliation Tool',
      'Bulk E-way Bill / E-Invoice upload',
      'View GST Ledgers.'
    ]
  },
  {
    title: 'MIS Reports',
    items: [
      'Sales & Purchase Analysis',
      'Gross Profit & Item-wise Margins',
      'Party-wise & Manufacturer Sales Analysis',
      'Item-wise & Part-number Sales Tracking',
      'Salesman Target vs Achievement Analysis',
      'Salesman Commission Calculations',
      'Pending Challan Reports'
    ]
  },
  {
    title: 'Integration',
    items: [
      'Tally Data Export',
      'PhonePe / BharatPe POS Integration',
      'ICICI / HDFC / YES Bank API Banking',
      'Excel Bank Statement Import',
      'BillFree Digital Receipts'
    ]
  }
];

export const PHARMACY_SUB_VARIANTS = {
  'retail-pharmacies': {
    slug: 'retail-pharmacies',
    title: 'Retail Pharmacy Billing Software',
    subtitle: 'High-speed billing & inventory software for chemist shops and retail pharmacies',
    description: 'Optimize your counter sales with barcode scanning, batch expiry tracking, and instant GST invoicing. Designed to handle peak hour rushes at retail medical stores.',
    icon: Pill,
    color: '#0D9488',
    accentColor: '#14B8A6',
    heroFeatures: ['Instant Barcode Billing', 'Batch-wise Stock Management', 'Patient Refill Reminders', 'GST Invoice & GSTR Reports'],
    stats: [
      { value: 2500, suffix: '+', label: 'Retail Chemists' },
      { value: 50, suffix: 'K+', label: 'Medicines Pre-loaded' },
      { value: 99.9, suffix: '%', label: 'Billing Accuracy' }
    ],
    features: [
      { title: 'High-Speed POS Checkout', icon: Zap, description: 'Barcode lookup and quick keys make counter billing extremely fast during rush hours.' },
      { title: 'Batch & Expiry Controls', icon: Clock, description: 'Automatically alerts cashiers about expired or near-expiry medicines during billing.' },
      { title: 'Salt & Formula Search', icon: Search, description: 'Find equivalent substitute brands instantly with our deep salt composition database.' },
      { title: 'Patient Refill Reminders', icon: MessageCircle, description: 'Auto-schedule SMS/WhatsApp reminders for chronic patients to boost repeat sales by 30%.' },
      { title: 'Rack & Cabinets Locator', icon: Warehouse, description: 'Map items to exact shelves and cabinets. Locate any medicine on the billing screen in seconds.' },
      { title: 'Doctor & Patient Registry', icon: FileText, description: 'Log prescribing doctor details and patient histories to ensure 100% compliance with Schedule H logs.' }
    ],
    benefits: [
      { title: 'Increase Sales by 25%', description: 'Never turn away a customer; suggest alternative brands with identical compositions instantly.' },
      { title: '100% Tax Compliant', description: 'Auto-calculate CGST, SGST, and IGST for medicine batches and file GSTR returns effortlessly.' }
    ]
  },
  'hospital-pharmacies': {
    slug: 'hospital-pharmacies',
    title: 'Hospital Pharmacy Software',
    subtitle: 'Integrated pharmacy billing & inventory for hospital panels and clinics',
    description: 'Connect your hospital pharmacy with IPD/OPD prescriptions, ward-wise stock transfers, patient credit tracking, and doctor commission logs.',
    icon: Activity,
    color: '#06B6D4',
    accentColor: '#0891B2',
    heroFeatures: ['IPD/OPD Sync', 'Ward Stock Transfers', 'Doctor Commission Tracker', 'Panel Billing Support'],
    stats: [
      { value: 500, suffix: '+', label: 'Hospitals Connected' },
      { value: 12, suffix: '+', label: 'Hospital Panels' },
      { value: 100, suffix: '%', label: 'IPD/OPD Integration' }
    ],
    features: [
      { title: 'Prescription Sync', icon: RefreshCw, description: 'Auto-sync OPD/IPD doctor prescriptions directly to the pharmacy billing counter.' },
      { title: 'Ward Inventory Sync', icon: Warehouse, description: 'Manage stock across multiple hospital wards, ICU, and surgical departments.' },
      { title: 'Panel Billing Controls', icon: Shield, description: 'Track credit limits and panels for CGHS, ECHS, insurance, and corporate schemes.' },
      { title: 'Doctor Commission Tracker', icon: Calculator, description: 'Track referral details and calculate doctor/consultant commissions automatically.' },
      { title: 'Discharge Summary Sync', icon: FileText, description: 'Instantly pull patient discharge summaries to bill take-home medications accurately.' },
      { title: 'Multi-Store Pharmacy Sync', icon: Network, description: 'Manage main store and satellite dispensaries across hospital floors with real-time stock sync.' }
    ],
    benefits: [
      { title: 'Zero Leakage Invoicing', description: 'Direct doctor-to-pharmacy routing prevents prescription leakages and unauthorized sales.' },
      { title: 'Detailed Ward Audits', description: 'Real-time tracking of medicine issues and returns from different hospital wards.' }
    ]
  },
  'jan-aushadhi-kendra': {
    slug: 'jan-aushadhi-kendra',
    title: 'Jan Aushadhi Kendra Software',
    subtitle: 'Govt compliant billing software built for PMBJP drug centers',
    description: 'Tailored specifically for Pradhan Mantri Bhartiya Janaushadhi Pariyojana (PMBJP). Pre-loaded Jan Aushadhi product codes, margins, and direct govt portal reports.',
    icon: Building2,
    color: '#10B981',
    accentColor: '#059669',
    heroFeatures: ['Pre-loaded PMBJP Catalog', 'Govt Commission Rules', 'One-click Portal Export', 'Generic-to-Brand Mapper'],
    stats: [
      { value: 800, suffix: '+', label: 'PMBJP Kendras' },
      { value: 1800, suffix: '+', label: 'Generic Items Pre-loaded' },
      { value: 100, suffix: '%', label: 'Govt Margin Rules' }
    ],
    features: [
      { title: 'Govt Catalog Integration', icon: Database, description: 'Pre-loaded catalog containing PMBJP medicine codes, MRPs, and manufacturer margins.' },
      { title: 'Portal-Ready Reports', icon: FileText, description: 'Export sales reports in formats compatible with the official Jan Aushadhi portal.' },
      { title: 'Generic Substitution', icon: Search, description: 'Enter brand names to instantly display the equivalent PMBJP generic medicine and its price.' },
      { title: 'Auto-Margin Enforcement', icon: Receipt, description: 'Lock in government-mandated retail margins (up to 20%) on PMBJP drug sales with zero manual entry.' },
      { title: 'Expired Stock Claims', icon: RefreshCw, description: 'Track near-expiry PMBJP stock and auto-generate return invoices to claiming agencies.' },
      { title: 'Fast Barcode Checkout', icon: Zap, description: 'High-speed billing with official PMBJP barcode scanning support for busy centers.' }
    ],
    benefits: [
      { title: 'Quick Center Setup', description: 'Go live in under 2 hours with our pre-configured PMBJP master catalog.' },
      { title: 'Perfect Margin Audits', description: 'Automatically calculate and lock retailer commissions according to official rules.' }
    ]
  },
  'ayurvedic-generic': {
    slug: 'ayurvedic-generic',
    title: 'Ayurvedic & Generic Medicine Software',
    subtitle: 'Specialized POS for herbal, homeopathic, and generic drug stores',
    description: 'Optimize inventory and sales for Ayurvedic and generic medicine counters. Track loose herbs, generic salt groups, and doctor prescriptions.',
    icon: Leaf,
    color: '#059669',
    accentColor: '#10B981',
    heroFeatures: ['Salt-group Cataloging', 'Loose Herb Weight Billing', 'Expiry-date Warning', 'Alternative Brand Suggestor'],
    stats: [
      { value: 1200, suffix: '+', label: 'Generic Stores' },
      { value: 30, suffix: 'K+', label: 'Generic Medicines' },
      { value: 35, suffix: '%', label: 'Inventory Cost Cut' }
    ],
    features: [
      { title: 'Composition Search', icon: Search, description: 'Find medications by active salt ingredients and suggest alternative herbal brands.' },
      { title: 'Weight-based Invoicing', icon: Settings, description: 'Weighing scale integration for selling loose Ayurvedic powders and raw herbs.' },
      { title: 'Auto Stock Reordering', icon: RefreshCw, description: 'Get notifications when high-demand generic medicines reach minimum stock levels.' },
      { title: 'Loose Herbs Weighing Sync', icon: Calculator, description: 'Connect digital weighing scales directly to invoice loose raw materials and roots.' },
      { title: 'Doctor Prescription Logs', icon: FileText, description: 'Maintain digital records of Ayurvedic practitioner prescriptions for regulatory filings.' },
      { title: 'Substitute Brand Alert', icon: Layers, description: 'Instantly suggest alternative generic brands with identical salt compositions if primary stock is missing.' }
    ],
    benefits: [
      { title: 'Cheaper Medicine Lookup', description: 'Instantly offer customers generic options that are up to 80% cheaper than brand names.' },
      { title: 'Expiry Prevention', description: 'Promote batch-wise clearing of stock based on FIFO (First In, First Out) rules.' }
    ]
  },
  'homeopathic-shops': {
    slug: 'homeopathic-shops',
    title: 'Homeopathic Billing Software',
    subtitle: 'POS & dilution tracking software for homeopathic chemists',
    description: 'Designed for homeopathic clinics and pharmacies. Manage dilution stocks, custom dosage mix formulations, and dilution potency inventory.',
    icon: FlaskConical,
    color: '#0891B2',
    accentColor: '#0EA5E9',
    heroFeatures: ['Dilution Potency Tracking', 'Dosage Formulation Mixes', 'Doctor Prescription Logs', 'Custom Label Printing'],
    stats: [
      { value: 600, suffix: '+', label: 'Homeopathic Clinics' },
      { value: 15, suffix: 'K+', label: 'Dilutions Configured' },
      { value: 0, suffix: '%', label: 'Stock Discrepancy' }
    ],
    features: [
      { title: 'Potency Management', icon: Layers, description: 'Track stock of dilutions across different potencies (6C, 30C, 200C, 1M, etc.).' },
      { title: 'Custom Mix Formulation', icon: Settings, description: 'Combine base dilutions and sugar globules into a single billable custom formula.' },
      { title: 'Dosage Label Printing', icon: Printer, description: 'Print custom labels with patient name, prescription, and specific dosage instructions.' },
      { title: 'Patient Dosage Cards', icon: FileText, description: 'Maintain structured patient treatment records and recall past custom dilution mixes for single-click refills.' },
      { title: 'Dilution Potency Tracking', icon: Database, description: 'Monitor exact liquid ml and drop counts across potencies (6C, 30C, 200C, etc.) to ensure zero stock loss.' },
      { title: 'Multi-Language Labels', icon: Globe, description: 'Print dosage directions and label cards in regional Indian languages for patient clarity.' }
    ],
    benefits: [
      { title: 'Precise Inventory Control', description: 'Track dilution consumption by ml or drops to maintain exact stock levels.' },
      { title: 'Patient History Cards', description: 'Quickly access past dosage compositions for patient refills in one click.' }
    ]
  },
  'pharma-wholesalers': {
    slug: 'pharma-wholesalers',
    title: 'Pharma Wholesalers Billing Software',
    subtitle: 'High-volume wholesaling with scheme and strip-level billing',
    description: 'Built for pharmaceutical wholesalers. Manage strip/tablet breakups, bulk customer discounts, manufacturer schemes (e.g. 10+1), and GSTR reporting.',
    icon: Warehouse,
    color: '#2563EB',
    accentColor: '#3B82F6',
    heroFeatures: ['Tablet/Strip Split Billing', 'Dynamic Scheme Rules', 'B2B GST Invoicing', 'Supplier Credit Management'],
    stats: [
      { value: 1500, suffix: '+', label: 'Wholesalers' },
      { value: 10, suffix: 'M+', label: 'Monthly Invoices' },
      { value: 50, suffix: '%', label: 'Scheme Entry Time Saved' }
    ],
    features: [
      { title: 'Fractional Billing (Split)', icon: Layers, description: 'Sell loose tablets or half strips while automatically updating total box stock.' },
      { title: 'Auto Scheme Calculator', icon: Receipt, description: 'Calculates complex volume schemes, discounts, and free goods (e.g., 10+1 free) on-the-fly.' },
      { title: 'Tally & CA Export Tool', icon: Share2, description: 'Export B2B ledger data to Tally formats for quick tax audits and filings.' },
      { title: 'Expiry Return Settlement', icon: RefreshCw, description: 'Streamline return of expired items from retailers and issue credit notes in seconds.' },
      { title: 'Credit Lock & Limits', icon: Lock, description: 'Prevent billing to chemists who exceed outstanding payment days or credit limits.' },
      { title: 'High-Volume Keyboard Hotkeys', icon: Zap, description: 'Ultra-fast keyboard-only workflows to bill a 50-item invoice in under 60 seconds.' }
    ],
    benefits: [
      { title: 'Zero Margin Errors', description: 'System pre-locks schemes and retailer discount groups to avoid cash loss.' },
      { title: 'High-Volume Billing Speed', description: 'Optimized keyboard hotkeys allow billing a 50-item wholesaler invoice in under 60 seconds.' }
    ]
  },
  'pharma-distributors': {
    slug: 'pharma-distributors',
    title: 'Pharma Distributors Software',
    subtitle: 'Beat tracking, purchase importing, and credit control for distributors',
    description: 'Automate distribution workflows. Track salesman beats, import manufacturer invoice files, log expiry returns, and enforce credit locks.',
    icon: Truck,
    color: '#4F46E5',
    accentColor: '#6366F1',
    heroFeatures: ['Salesman Beat Tracking', 'Manufacturer Bill Import', 'Expiry Return Logs', 'Credit limit Locking'],
    stats: [
      { value: 1800, suffix: '+', label: 'Pharma Distributors' },
      { value: 120, suffix: '+', label: 'Pharma Companies' },
      { value: 99.5, suffix: '%', label: 'Delivery Efficiency' }
    ],
    features: [
      { title: 'One-click Invoice Import', icon: Database, description: 'Import distributor purchases from excel files to automatically update stock and batch pricing.' },
      { title: 'Salesman Mobile Beat App', icon: Smartphone, description: 'Enables salesmen to collect retail orders and ledger payments on their phones.' },
      { title: 'Expiry Return Tracking', icon: RefreshCw, description: 'Logs expired stock returned by retailers and manages company credit note claims.' },
      { title: 'Salesman Target & Incentives', icon: TrendingUp, description: 'Monitor route-wise collections, salesman sales targets, and calculate payouts automatically.' },
      { title: 'Route-wise Dispatch Control', icon: Truck, description: 'Consolidate deliveries by beats and print route-wise delivery challans for drivers.' },
      { title: 'Outstanding Ageing Reports', icon: FileText, description: 'Track invoice ageing (15/30/45+ days) and send automatic payment reminders to retailers.' }
    ],
    benefits: [
      { title: 'Prevent Bad Debts', description: 'Enforce automatic credit locks when a chemist has overdue bills or has exceeded credit limits.' },
      { title: 'Automated Stock Matching', description: 'Instantly matches stock and batch numbers during deliveries to avoid sorting errors.' }
    ]
  },
  'pharma-marketing': {
    slug: 'pharma-marketing',
    title: 'Pharma Marketing Invoicing Software',
    subtitle: 'Track stockist sales, MR samples, and product marketing margins',
    description: 'Ideal for Third-party manufacturing and PCD pharma marketing. Manage MR commission, sample distributions, stockist pricing, and marketing invoices.',
    icon: TrendingUp,
    color: '#0891B2',
    accentColor: '#06B6D4',
    heroFeatures: ['MR Sample & Gift Tracker', 'Stockist Price List Manager', 'PCD Marketing Analytics', 'Commission Calculator'],
    stats: [
      { value: 400, suffix: '+', label: 'PCD Marketing Firms' },
      { value: 5000, suffix: '+', label: 'Medical Reps (MR)' },
      { value: 100, suffix: '%', label: 'Sample Transparency' }
    ],
    features: [
      { title: 'MR Sample Ledger', icon: Layers, description: 'Track medicine samples, brochures, and promotional gifts distributed to each MR.' },
      { title: 'Stockist Pricing Tiers', icon: Receipt, description: 'Maintain distinct price lists and discount matrices for Super Stockists, Stockists, and Sub-stockists.' },
      { title: 'PCD Commission Audits', icon: Calculator, description: 'Calculate MR sales commissions and PCD franchisee payouts automatically.' },
      { title: 'Target vs Achievement Tracker', icon: TrendingUp, description: 'Evaluate MR and franchise territory performance using visual sales charts.' },
      { title: 'Sample/Promo Material Ledger', icon: Warehouse, description: 'Track physician samples, detailing bags, and visual aids issued to Medical Representatives.' },
      { title: 'Doctor Visit Log Sync', icon: MessageCircle, description: 'Track physician interactions, feedback, and sample distributions for precise ROI.' }
    ],
    benefits: [
      { title: 'Complete Sample Accountability', description: 'Know exactly which MR distributed what sample to which doctor, preventing wastage.' },
      { title: 'Real-time Marketing ROI', description: 'Track territory-wise sales performance against MR visits to evaluate ROI.' }
    ]
  },
  'multi-branch-pharmacy': {
    slug: 'multi-branch-pharmacy',
    title: 'Multi-Branch Pharmacy Chain Software',
    subtitle: 'Centralized inventory, inter-branch transfer, and consolidated reports',
    description: 'Cloud-synced ERP for chain pharmacies. Centralized purchase management, branch-to-branch medicine transfers, and unified loyalty cards.',
    icon: Network,
    color: '#0D9488',
    accentColor: '#14B8A6',
    heroFeatures: ['Centralized Inventory Sync', 'Inter-Branch Stock Transfer', 'HQ Purchase Control', 'Consolidated Analytics'],
    stats: [
      { value: 150, suffix: '+', label: 'Pharmacy Chains' },
      { value: 1200, suffix: '+', label: 'Active Outlets' },
      { value: 100, suffix: '%', label: 'HQ Purchase Control' }
    ],
    features: [
      { title: 'HQ Purchase Allocation', icon: Warehouse, description: 'Centralized purchasing at headquarters with automated distribution to branch outlets.' },
      { title: 'Inter-Branch Transfer (IBT)', icon: RefreshCw, description: 'Transfer slow-moving stock from one branch to a high-demand outlet in just a few clicks.' },
      { title: 'Global Loyalty Cards', icon: Users, description: 'Loyalty points earned by patients can be redeemed at any branch outlet nationwide.' },
      { title: 'HQ Price & Scheme Locking', icon: Lock, description: 'Define pricing, taxes, and promotional offers at HQ and sync them instantly across all stores.' },
      { title: 'Consolidated Chain Tax Reports', icon: FileText, description: 'Auto-compile branch-wise sales, GST, and profit margins to submit consolidated audits.' },
      { title: 'Real-Time Stock Locator', icon: Search, description: 'Check medicine availability in other branches directly from any POS terminal during a stockout.' }
    ],
    benefits: [
      { title: '80% Lower Warehouse Costs', description: 'Avoid local overstocking by coordinating branch inventories from headquarters.' },
      { title: 'Consolidated Chain Reports', description: 'Access branch-wise sales, margins, cash flow, and tax reports from a single HQ dashboard.' }
    ]
  }
};

export const PHARMACY_FEATURES_AT_GLANCE = [
  {
    title: 'Billing',
    items: [
      'GST Billing',
      'Sale and purchase Challan / Quotation',
      'Barcode wise billing',
      'Part No wise billing',
      'Customer history',
      'Multi payment option',
      'Digital bill via whatsapp/SMS',
      'Multi firm billing',
      'Multiple Unit - PCS, Box',
      'Multiple Price & discounts',
      'Branch Transfer & Delivery Challan',
      'Multiple Remark',
      'Auto Scheme & Offer',
      'Send CSV to Other Users',
      'Exchange Invoice to RECKON Users.'
    ]
  },
  {
    title: 'Accounting',
    items: [
      'Single Entry System',
      'PDC management',
      'Books of account',
      'Final Report - Trail, Balance Sheet',
      'Outstanding - Ageing',
      'Outstanding - Overdues',
      'Collection Reports',
      'Bank Reconciliation',
      'Depreciation',
      'Advance Cheque Management',
      'Credit Limits',
      'Voucher Approval System',
      'Cashier entries',
      'Home Delivery'
    ]
  },
  {
    title: 'Inventory',
    items: [
      'Batch wise inventory',
      'Barcode enable',
      'Article, Color and size wise',
      'Stock Ageing',
      'Dump Stock',
      'Fast Moving',
      'Near expiry Stock',
      'Expired Goods management',
      'Expiry Settlement',
      'Stock Audit',
      'Stock Report - Company, HSN',
      'Auto Email - Stock and Sales'
    ]
  },
  {
    title: 'Purchase',
    items: [
      'Import purchase via Scan bills',
      'Import purchase via CSV or Excel',
      'Sales Orders',
      'Seller - salesman app',
      'Suvidha - retailer app',
      'Pharmarack',
      'Retailio',
      'TATA 1mg'
    ]
  },
  {
    title: 'Purchase Orders',
    items: [
      'Auto generate PO to all best suppliers',
      'Email PO to Supplier',
      'Email PO to companies representative'
    ]
  },
  {
    title: 'GST Solutions',
    items: [
      'Validate GSTIN Instantly',
      'Validate HSN Instantly',
      'Auto E-way bill',
      'Auto E-Invoice',
      'GST Return - JSON, CSV, Excel',
      'GSTR - 2A/2B Reconcialation',
      'Bulk Eway bill upload',
      'Bulk E-Invoice upload',
      'GSTR-1, GSR-2, GSTR-4,GSTR-9',
      'View GST Ledgers.'
    ]
  },
  {
    title: 'Banking Solutions',
    items: [
      'Inside Banking ICICI Bank, HDFC Bank, YES Bank',
      'Auto Bank Reconciliation',
      'Initiate NEFT/RTGS',
      'Import payment Directory-ICICI e-colleciton.',
      'Bank Reconciliation via Excel',
      'Download Statement.',
      'Generate QR code on Invoice.'
    ]
  },
  {
    title: 'POS machine integration',
    items: [
      'Bharat Pe, PhonePe and PayTM',
      'Payment Settlement Report.'
    ]
  },
  {
    title: 'Digital Bills via Whatsapp / SMS',
    items: [
      'META registered whatsapp',
      'DLT registered SMS'
    ]
  },
  {
    title: 'Dispatch Management',
    items: [
      'Picking, Packing, Shipping and Delivered Status',
      'Delivery marked through Delivery App'
    ]
  },
  {
    title: 'Data Security & User Control',
    items: [
      'Cloud Backup',
      'Role base user access',
      'Scheduled Auto backup',
      'Multi layer data protection'
    ]
  },
  {
    title: 'Loyalty Module',
    items: [
      'Scheme & Offer',
      'Bill of Material',
      'Reckon-To-Reckon Invoice Exchange'
    ]
  },
  {
    title: 'MIS Report',
    items: [
      'Sales Analysis',
      'Purchase Analysis',
      'Gross Profit Analysis',
      'Claim Reports',
      'Party wise sales',
      'Item wise Sales',
      'Company wise sales',
      'Salesman wise sales',
      'Salesman Commission',
      'Pending Expiry Settlements',
      'Pending Challans'
    ]
  },
  {
    title: 'Integration',
    items: [
      'Tally Transfer',
      'Pharmarack',
      'AIOCD',
      'IMS-IQVIA',
      'TATA 1mg warehouse',
      'PhonePe',
      'BharatPe',
      'ICICI Bank',
      'HDFC Bank',
      'YES Bank',
      'Pathfinder',
      'HIMS',
      'BillFree',
      'RIL - Clothing Store'
    ]
  }
];

export const RETAIL_FEATURES_AT_GLANCE = [
  {
    title: 'Billing & Checkout',
    items: [
      'GST Invoicing & Estimates',
      'Touchscreen POS Interface',
      'Weighing Scale Integration',
      'Barcode / QR Code Scanner Input',
      'Split & Multi-Payment Modes',
      'Custom Receipt & Invoice Printing',
      'Home Delivery & Order Status Tracking'
    ]
  },
  {
    title: 'Inventory Control',
    items: [
      'Multi-Store & Warehouse Sync',
      'Reorder Alerts & Auto Purchase Orders',
      'Stock Valuation (FIFO / Weighted Average)',
      'Damage, Waste & Expiry Logs',
      'Physical Stock Audit Sheet Generator',
      'Bulk Price & Stock Excel Imports'
    ]
  },
  {
    title: 'Loyalty & Promotions',
    items: [
      'Customer Loyalty Point System',
      'BOGO (Buy-One-Get-One) & Combo Offers',
      'Discount Coupons & Store Gift Vouchers',
      'Targeted WhatsApp/SMS Festive Campaigns'
    ]
  },
  {
    title: 'Accounting & GST',
    items: [
      'Day Book & Ledgers Integration',
      'Auto E-Way Bill & E-Invoice Generation',
      'Consolidated GSTR-1 & GSTR-3B Excel/JSON',
      'GSTR-2A/2B Reconciliation Tool',
      'Expense & Payment Tracker'
    ]
  },
  {
    title: 'Integrations',
    items: [
      'Tally Data Export Sync',
      'UPI dynamic QR Code displays',
      'Paytm / PhonePe SmartSpeaker Sync',
      'E-commerce API Sync (Shopify/WooCommerce)'
    ]
  }
];

