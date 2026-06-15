// Detailed Features (card grid) and Features at a Glance (accordion) data
// for every software sub-menu page. Sourced from reckonsales.in live pages.

import {
  Receipt, Search, CreditCard, RefreshCw, Share2, Users,
  Truck, Lock, Layers
} from 'lucide-react';

// ─── DEFAULT DETAILED FEATURES (cards) ────────────────────────────
// Sourced exactly from the live reckonsales.in Books & Stationery store page.
export const DEFAULT_DETAILED_FEATURES = [
  {
    title: 'Robust Billing',
    icon: Receipt,
    description: 'By using Reckon POS Software at your counter you can fasten the billing process with the help of smooth, user-friendly interface and easy recording of transaction on the books of accounts. You can also integrate software with Touch Screen, Pole Display, Cash drawer, Bar Code Reader simultaneously.',
  },
  {
    title: 'Search',
    icon: Search,
    description: 'Reckon Software is adept in searching options you can Search and Sell by title, author, publishers, ISBN, Categories etc. and you can also collate, analyze and ensure you’re quick to match consumer preferences and publishing trends in your stores.',
  },
  {
    title: 'Multi-Payments accepted',
    icon: CreditCard,
    description: 'The software accepts multi payments modes; be it Cash, Card, Partial, Netbanking, EMI, UPI, Post dated cheques or any other payment mode.',
  },
  {
    title: 'Integrated Invoicing Inventory Accounting',
    icon: Layers,
    description: 'It works simultaneously with Invoicing, Inventory, and Accounting. As soon as the entry is saved, the software automatically updates all relevant accounts and posts effects of the transaction onto Books of Accounts; this is all done without any prior settings.',
  },
  {
    title: 'Tally Transfer',
    icon: Share2,
    description: 'Tally is one of the leading accounting software used by many accountants and Chartered Accountants; Reckon provides an inbuilt tool that helps data export to Tally for ease of accounting.',
  },
  {
    title: 'Customer Loyalty Module',
    icon: Users,
    description: 'The software can easily keep track of the customer reward or loyalty points and automatically apply them on checkout. Keep track of customer’s birthday, anniversary etc through our customer relationship module.',
  },
  {
    title: 'Data Synchronization',
    icon: RefreshCw,
    description: 'Whether you operate a retail chain or multi-store, you can merge your store, branch and warehouse data as one and easily manage it from your head office without any hassle through our Data Synchronization tool.',
  },
  {
    title: 'Delivery',
    icon: Truck,
    description: 'You can easily maintain delivery status for various options like home delivery, store pickup, time bound delivery etc.',
  },
  {
    title: 'User wise Session Management',
    icon: Lock,
    description: 'Reckon Software is also adept with Till Management tool that helps in managing the sessions, the interconnectivity between the Cash Manager and the POS affords users accurate and reliable management of all cash flowing through each and every till.',
  },
];

// ─── DEFAULT FEATURES AT A GLANCE (accordion) ────────────────────
// Sourced exactly from the live reckonsales.in sub-module pages.
export const DEFAULT_FEATURES_AT_GLANCE = [
  {
    title: 'Unique',
    items: [
      'Book wise subject wise and writer wise arrangement in software',
      'Title, Category, ISBN, Author, Publisher wise management',
      'User-defined barcode for Books and other stationery material',
      'User-defined item codes entry to increase fast billing by users',
      'User defined sale offer rates',
      'Customer wait time is minimum – Fastest check out people',
      'Pole and cash drawer integration for smooth billing',
      'Card, Coupon and Vouchers based operation choice',
      'Multi user and single user',
      'Multi companies accounting',
      'Multi godown or warehouse working',
      'Multi Locations',
      'Multi voucher series for each Voucher Type (Receipt-Bank/Cash)',
      'Multi Bank or Cash entry from single entry system',
      'Unlimited Level of Grouping of Accounts',
      'User defined formula based calculation',
      'User wise Report Save Setting',
      'Self Designed Printing Format– Invoice, Challan, Voucher, Cheque and Envelope Printing',
      'Auto Paper setting for Portrait / Landscape in All Report Printing',
      'All Years Report from any Financial Year',
      'Zoom In & Zoom Out from any report up to Entry Level',
      'Data Freezing Date wise – Sale / Purchase Entry / Bank / Ledger',
      'Tough Data security and auto backup system',
      'Hot Keys and Shortcut Bar',
      'Software Password Users Wise',
      'User Profile Creation – Billing / Accounts / Purchase',
      'User Profile wise Power and Boundation',
      'Profile wise Report Settings',
      'User Log Book',
      'Faster than Cash Register',
    ],
  },
  {
    title: 'Sales Module',
    items: [
      'Serial number can be recognized at the time of billing',
      'Multi Firms (work all firm simultaneously during Invoicing)',
      'Multi bill series (Branded and un branded products)',
      'Printout on thermal, Inkjet, laser, dot matrix printers',
      'Multi payment modes Cash, Debit Cards, Credit Cards, Cheque, PDC, EMI',
      'Index wise product search',
      'Various price list options like discount percentage on MRP, Flat Rates, Add margin on landing etc.',
      'Multi billing popup windows',
      'Bill Hold option',
      'Multi Tax Billing in Single Bill',
      'Tax Inclusive or MRP Billing',
      'Salesman Selection',
      'Negative Stock Billing',
      'SKU, Code, OEM, Serial number wise Billing',
      'Item Search – Code, Barcode, Name, MRP, Brand, Category wise',
      'Bill Export in file – CSV / Excel / PDF format/ WhatsApp',
      'Party wise Product wise sale History',
      'Sale Return / Replace / Faulty/ Damage Adjustment in Sale bill',
      'Sale Order to Challan / Sale Bill Auto Load',
      'Loss Indication according to margin',
      'History Party wise item wise (Price, Scheme and Discount)',
      'Self-Designed Price List on formula base',
    ],
  },
  {
    title: 'Customer Relation Management',
    items: [
      'Customer Service Management that ensures repeat business and referrals',
      'Deliver targeted loyalty programs with personalized rewards.',
      'Dynamic pricing',
      'Facilitating multichannel loyalty programs',
      'Capturing customer buying behavior',
      'Redemption of loyalty rewards',
      'Optimized information access to improve telesales, accounts, and sales management',
      'Value added services to fight competition',
    ],
  },
  {
    title: 'Purchase Module',
    items: [
      'Tax Inclusive / Mrp / Excise purchase entry.',
      'Purchase History on Item supplier wise – Price, Scheme and Discount.',
      'Purchase import from file – CSV, Excel, XML format.',
      'Fix Sale Price and Sale Scheme on Purchase entry item wise.',
      'Purchase orders convert into purchase bill.',
      'Pending Credit Note, Debit Note and Replacement note adjustment',
      'Auto Sale Price set as per MRP change.',
      'Purchase Challan Option.',
      'Challan to Purchase Bill',
      'Invoice wise Mark-up and Markdown Report',
      'Supplier Credit Days, Limit, Lock',
      'Godown or Warehouse transfer option at the time of purchase entry',
      'Expense entry option in purchase like cartage, labour, etc. this entry will increase your item landing cost exact ratio wise',
    ],
  },
  {
    title: 'Order Module',
    items: [
      'Generate Sale and Purchase Order',
      'Generate manual Sale and Purchase Order',
      'Auto Generate multi purchase order for different supplier',
      'Purchase Re-Order System – Based on Period Sale / Min Level / Shortage wise',
      'Order and Excess Quantity Help Item wise',
      'Brand or Supplier Filter on Re-Order System',
      'Item wise Best Supplier help on Re-Order System',
      'Marked product as Shortage',
      'Re-Order System as per marked items',
      'Show Best Supplier – marked items',
      'Supplier wise Order',
      'Pending Sale & Purchase Order Salesmen wise, Party wise, Item wise, station wise, category wise, etc',
      'Purchase order approval by authorized person',
      'Order cancellation or rejection report',
    ],
  },
  {
    title: 'Inventory',
    items: [
      'Manage inventory levels and you know the exact location of rack in which the books is placed',
      'Manage the book wise subject wise and writer wise inventory',
      'Manage large volumes and multiple titles, inventory management',
      'Stock Status (Multi-Location) / Multiple Godown wise',
      'Columnar Stock Register (Configurable)',
      'Stock Valuation Report on Multiple Methods',
      'Stock Report Ageing Analysis',
      'Company wise Stock and Sale Report with Valuation',
      'Stock Valuation Report for Bank',
      'Physical Stock taking along with billing in parallel',
      'Damage and breakage (stationery) auto convert into Non-Saleable items',
      'Damage and breakage (stationery) – as on Date Company wise with Supplier detail',
      'Stock Movement Report',
      'Top Selling Inventory Title, Category, ISBN, Author, Publisher',
      'Dump Stock',
      'Stock Valuation',
      'Supplier wise Stock & Sales',
      'Matrix or multiple attributes for each items like Title, Category, ISBN, Author, Publisher etc.',
      'Item wise location wise stock statement',
      'Many other option of stock reports like NP Rate, Sale Rate, MRP, Average, ascending, descending etc.',
    ],
  },
  {
    title: 'Financial Accounting Module',
    items: [
      'Accounts Integrated with all modules and update online',
      'Authorization for entry account users wise',
      'Single or Double Entry Voucher System',
      'All Books of Accounts & Final Reports',
      'Day Books entry',
      'Trail Balance, Trading Account, Profit & Loss Account, Balance Sheet Schedule wise',
      'Date wise / Period wise Summary of Accounts / Accounts Group',
      'Outstanding Report – Bill / Party / Salesman / Station / Area wise',
      'Outstanding Ageing Analysis',
      'Payments Reminder',
      'Voucher Printing / Cheque Printing / Bank Deposit Slips',
      'Interest Calculation (Day wise / Calendar Year Wise)',
      'Bank Re-Conciliation giving details of unmatched entries',
      'Depreciation Chart (As per Company Act / IT Act)',
      'Collection Report – Date / Monthly / Party / Salesman / Area wise',
      'Post Dated Cheque module',
      'Journal, Contra, Credit Notes, Debit Notes, Vouchers to adjust entries in account',
      'Receipt and payment vouchers with online option to adjust excess or less amount',
      'Individual ledger or group ledger',
      'Manual Stock Value adjustment at the time of balance sheet report',
    ],
  },
  {
    title: 'Taxation Reports',
    items: [
      'Unlimited item wise tax classification',
      'Update tax rates any in mid way',
      'Item wise Tax Inclusive, Tax Exclusive, Exempted',
      'GST Summery',
      'GST Purchase Register',
      'GST Sale Register',
      'GST Column Sale Register',
      'GST Column Purchase Register',
      'GST- Eway Bill Json',
      'GST Tax Clubbing',
      'Cancel E-Way Bill',
      'GST No verification',
      'GSTR-1',
      'GSTR 3B',
      'GSTR 3B (offline tool)',
      'GSTR-2',
      'GSTR-2A Reconciliation',
      'GSTR-4',
      'GST Trans 1',
      'GST Trans 2',
      'GSTR9',
    ],
  },
  {
    title: 'Reports',
    items: [
      'Generate and view hundreds of reports',
      'User’s wise reports Save Setting make easy to view desired report each time',
      'Favorite reports setting facilitate to give same format reports each time',
      'Multi financial year link reports view to analyze reports financial year wise',
      'Each & Every Reports can be print & view Screen, MS Excel, MS Word, PDF, WhatsApp, Email',
      'Each & Every Reports can be export MS Excel, MS Word, PDF, WhatsApp, Email',
      'Each & Every Reports can be configured by default email to be send to authorized person',
      'Log Report to check any alteration in entries users wise',
      'MIS Reports like (Bill / Item / Party / Sales Man / Brand / Category wise profit)',
    ],
  },
  {
    title: 'Utilities & Tools',
    items: [
      'Data Freezing',
      'Merge Module (Item/Brand/Category/Ledger/Station/Salesman/Area/Tax)',
      'Multi Editing Module (Item / Ledger / Group / Category)',
      'Export / Import (Format / User Settings)',
      'New Financial Year Transfer',
      'Year wise Backup and Restore',
      'FTP Backup / Restore',
      'Refresh Outstanding',
      'Synchronization Module – Auto Data Sync from Brach / Ware House to Head Office.',
      'Database Tools',
    ],
  },
  {
    title: 'Security',
    items: [
      'Software / User Password',
      'User Profile Creation – Billing / Accounts / Purchase',
      'User Profile wise Power and Boundation',
      'Profile wise Report Settings',
      'User Log Book',
    ],
  },
];

// ─── PER-PRODUCT OVERRIDES ───────────────────────────────────────
// Customized features mapped exactly to the live reckonsales.in pages.

export const PRODUCT_DETAILED_FEATURES = {
  'chemist-shop': [
    {
      title: 'Prescription Handling',
      icon: Receipt,
      description: 'Record patient prescriptions, generate doctor-wise/patient-wise reports, and manage home delivery notifications smoothly.',
    },
    {
      title: 'Substitute Composition Search',
      icon: Search,
      description: 'Instantly suggest alternative medicines based on salt composition and stock availability, helping you never lose a sale.',
    },
    {
      title: 'Expiry Management',
      icon: RefreshCw,
      description: 'Track expired and near-expiry products batch-wise. Prevent selling expired stock with automated system alerts.',
    },
    {
      title: 'Doctor & Clinic Commission',
      icon: Users,
      description: 'Track and calculate commissions for recommending doctors, clinics, or hospitals dynamically.',
    },
    {
      title: 'Family Ledger Management',
      icon: Layers,
      description: 'Create and manage group ledgers for families, enabling consolidated billing and payment tracking.',
    },
    {
      title: 'Auto-Cloud Backup',
      icon: Share2,
      description: 'Securely upload your data to Google Drive or the cloud automatically for disaster recovery.',
    },
    {
      title: 'Reorder Management',
      icon: Truck,
      description: 'Auto-generate purchase orders based on minimum stock levels, reorder points, and speed indicators.',
    },
    {
      title: 'Fast POS Billing',
      icon: Lock,
      description: 'Ultra-fast billing interface with hotkeys, barcode scanning, and multi-payment options.',
    },
  ],
  'automobiles-parts': [
    {
      title: 'Trade Control',
      icon: Receipt,
      description: 'Manage auto parts by part number, OEM code, category, brand, and vehicle compatibility model.',
    },
    {
      title: 'Price List Import',
      icon: Search,
      description: 'Easily import extensive manufacturer price lists from Excel and update bulk rates based on MRP.',
    },
    {
      title: 'OEM Cross-Referencing',
      icon: RefreshCw,
      description: 'Instant cross-referencing between OEM parts and aftermarket equivalents to offer multiple options.',
    },
    {
      title: 'Label & Barcode Generation',
      icon: Layers,
      description: 'Generate and print part-wise barcode labels with rack location and pricing details.',
    },
    {
      title: 'Rack & Shelf Location',
      icon: Truck,
      description: 'Track the exact rack, row, and shelf location of every spare part for high-speed retrieval.',
    },
    {
      title: 'Multi-Currency Pricing',
      icon: CreditCard,
      description: 'Support pricing in multiple currencies and alphanumeric codes for imported spares.',
    },
    {
      title: 'Tally Data Export',
      icon: Share2,
      description: 'Seamless data export to Tally for Chartered Accountant audits and financial reporting.',
    },
    {
      title: 'User wise Session Management',
      icon: Lock,
      description: 'Till and session management for cash registers with detailed cashier audit trails.',
    },
  ],
  'department-grocery': [
    {
      title: 'High-Speed POS Checkout',
      icon: Receipt,
      description: 'Super-fast point of sale with touchscreen integration, pole displays, cash drawers, and rapid barcode scanners.',
    },
    {
      title: 'Data Synchronization',
      icon: RefreshCw,
      description: 'Real-time synchronization across retail chains, godowns, and head offices for unified control.',
    },
    {
      title: 'Product Matrix Search',
      icon: Search,
      description: 'Adept search by weight, brand, packaging size, or custom category for quick selection.',
    },
    {
      title: 'Dynamic Sales Promotions',
      icon: Layers,
      description: 'Run automated offers like Buy-One-Get-One (BOGO), combo schemes, and dynamic discount percentages.',
    },
    {
      title: 'Weighing Scale Integration',
      icon: Truck,
      description: 'Connect directly with digital weighing scales to automatically read weight and calculate POS billing.',
    },
    {
      title: 'Customer Loyalty & CRM',
      icon: Users,
      description: 'Manage customer reward points, send birthday/anniversary SMS, and apply custom membership rates.',
    },
    {
      title: 'Home Delivery Management',
      icon: Share2,
      description: 'Track delivery status from home delivery, store pickups, to time-bound dispatches.',
    },
    {
      title: 'Till & Cashier Session Control',
      icon: Lock,
      description: 'Granular cash drawer till audits with cashier sign-in, sign-out, and cash-in-till tracking.',
    },
  ],
  'fmcg-distribution': [
    {
      title: 'Flexible Unit Calculation',
      icon: Receipt,
      description: 'Bifurcate pricing and stock by Box, Case, Pack, and Loose Units dynamically in a single invoice.',
    },
    {
      title: 'Route & Beat Management',
      icon: Truck,
      description: 'Plan salesman route schedules, track orders, collect outstanding balances, and analyze beat efficiency.',
    },
    {
      title: 'Multi-Firm Accounting',
      icon: Layers,
      description: 'Manage multiple distribution companies in a single database with automatic account bifurcation.',
    },
    {
      title: 'Challan Consolidation',
      icon: Share2,
      description: 'Issue goods on multiple delivery challans and merge them into a single sale invoice during collection.',
    },
    {
      title: 'Auto Stock Reorder',
      icon: RefreshCw,
      description: 'Automate purchase orders based on beat sales, supplier lead times, and minimum stock requirements.',
    },
    {
      title: 'Claim & Expiry Settlement',
      icon: Search,
      description: 'Seamlessly track and claim product damages, rate differences, schemes, and manufacturer expiries.',
    },
    {
      title: 'Salesman Commission Tracker',
      icon: Users,
      description: 'Configure and compute salesperson beat incentives, volume targets, and collection commissions.',
    },
    {
      title: 'Credit Limit Control',
      icon: Lock,
      description: 'Set supplier credit limits and buyer credit locks to restrict invoices for defaulting retailers.',
    },
  ]
};

export const PRODUCT_FEATURES_AT_GLANCE = {
  'chemist-shop': [
    {
      title: 'Unique',
      items: [
        'Medicine arrangement by rack, shelf, and category',
        'Salt composition mapping and substitute search',
        'Expiry tracking and batch-wise stock control',
        'Doctor and clinic commission tracking',
        'Family ledger and group accounts',
        'Schedule H and Narcotic drug alerts',
        'Auto Google Drive backup support',
        'Reorder level alerts and fast-moving indicator',
        'Multi user and single user',
        'Multi companies accounting',
        'Tough Data security and auto backup system',
        'User Profile Creation with role-based controls',
      ],
    },
    {
      title: 'Sales Module',
      items: [
        'Multi payment modes - Cash, Card, UPI, Wallet, Cheque',
        'Index-wise medicine search',
        'Discount schemes, free item margin calculations',
        'Multi billing windows and bill hold option',
        'Tax-inclusive and MRP billing',
        'Bill export to PDF, Excel, and WhatsApp',
        'Patient-wise and product-wise sale history',
        'Sale return / replace / damage adjustment in POS',
      ],
    },
    {
      title: 'Inventory',
      items: [
        'Stock status (batch-wise, expiry-wise)',
        'Columnar Stock Register',
        'Stock Valuation Report on Multiple Methods',
        'Expiry ageing analysis reports',
        'Physical stock taking parallel with billing',
        'Damage and breakage stock tracking',
      ],
    },
    ...DEFAULT_FEATURES_AT_GLANCE.slice(2) // Inherits CRM, Purchase, Order, Financial, GST, Reports, Utilities, Security
  ],
  'automobiles-parts': [
    {
      title: 'Unique',
      items: [
        'Auto parts organized by brand, model, category, and part number',
        'OEM to aftermarket cross-reference directory',
        'Barcode labeling and custom tag printing',
        'Rack, row, and shelf location tracking',
        'Bulk price import and update from Excel',
        'Alphanumeric parts number and SKU search',
        'Multi-currency support for imported parts',
        'Duplicate serial number restriction',
        'Multi-user access control and user profile logs',
      ],
    },
    {
      title: 'Sales Module',
      items: [
        'Part number, OEM code, or SKU-wise fast billing',
        'Multi-payment modes (Cash, Card, UPI, Credit)',
        'Bulk rate changes and flat discounts',
        'Party-wise and product-wise sales history',
        'Sale return/replacement/damage adjustment',
        'Negative stock billing lock option',
      ],
    },
    {
      title: 'Inventory',
      items: [
        'Stock status by godown, warehouse, and rack',
        'Slow-moving and dead stock ageing analysis',
        'Stock valuation (FIFO, LIFO, Weighted Average)',
        'Physical stock taking parallel with billing',
      ],
    },
    ...DEFAULT_FEATURES_AT_GLANCE.slice(2) // Inherits CRM, Purchase, Order, Financial, GST, Reports, Utilities, Security
  ],
  'department-grocery': [
    {
      title: 'Unique',
      items: [
        'Touchscreen POS billing with high-speed barcode scanning',
        'Digital weighing scale integration',
        'Loose vs packed item management',
        'Customer loyalty reward points tracker',
        'SMS marketing campaigns for loyalty members',
        'Till management and cashier session audits',
        'Multi-firm and multi-godown stock management',
        'Auto backup and database security tools',
      ],
    },
    {
      title: 'Sales Module',
      items: [
        'BOGO, combo packs, and coupon discount modules',
        'Index-wise product matrix search',
        'Multi-payment modes (Cash, Card, UPI, Vouchers)',
        'Salesman-wise sales incentive tracking',
        'Bill hold and multiple tab checkout',
        'WhatsApp and Email invoice delivery',
      ],
    },
    {
      title: 'Inventory',
      items: [
        'Batch tracking and perishable items expiry alerts',
        'Stock valuation reports (Bank/IT format)',
        'Physical stock taking parallel with POS counter',
        'Breakage and damage stock tracking',
      ],
    },
    ...DEFAULT_FEATURES_AT_GLANCE.slice(2) // Inherits CRM, Purchase, Order, Financial, GST, Reports, Utilities, Security
  ],
  'fmcg-distribution': [
    {
      title: 'Unique',
      items: [
        'Box, Pack, Unit, and Weight multi-unit billing',
        'Salesman Beat and Route scheduling',
        'Multi-firm single database ledger accounting',
        'Challan to single billing consolidation',
        'Bulk purchase import from manufacturer CSV/Excel',
        'Automatic backup on local server and Google Drive',
        'Supplier credit days and lock control',
      ],
    },
    {
      title: 'Sales Module',
      items: [
        'Beat-wise order bookings and collection entries',
        'Scheme matching (Buy 10 Get 1 free, cash discount)',
        'Multi-payment receipt ledger',
        'Salesman commission and target achievements',
        'Outstanding reports party-wise, area-wise, beat-wise',
      ],
    },
    {
      title: 'Inventory',
      items: [
        'Godown-wise and batch-wise inventory tracking',
        'Stock valuation on multiple methods',
        'Physical stock verification parallel to warehouse dispatch',
        'Expiry and short-expiry returns monitoring',
      ],
    },
    ...DEFAULT_FEATURES_AT_GLANCE.slice(2) // Inherits CRM, Purchase, Order, Financial, GST, Reports, Utilities, Security
  ]
};

// ─── HELPER FUNCTIONS ─────────────────────────────────────────────
export function getDetailedFeatures(slug) {
  return PRODUCT_DETAILED_FEATURES[slug] || DEFAULT_DETAILED_FEATURES;
}

export function getFeaturesAtGlance(slug) {
  return PRODUCT_FEATURES_AT_GLANCE[slug] || DEFAULT_FEATURES_AT_GLANCE;
}
