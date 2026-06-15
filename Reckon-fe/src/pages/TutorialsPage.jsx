import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import PageHeader from '@/components/shared/PageHeader';
import { cn } from '@/lib/utils';
import { Play, Search, X, ChevronDown } from 'lucide-react';

function YoutubeIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}

const TUTORIALS = [
  // Getting Started
  { id: 1,  title: 'Getting Started: Software Installation, Import Setting & Formats', category: 'Getting Started', duration: '33:52', youtubeId: 'QsGOKDv-FK8' },
  { id: 2,  title: 'Reckon Demo Software Installation', category: 'Getting Started', duration: '5:31',  youtubeId: '2p-1frttuDI' },
  { id: 3,  title: 'Update Reckon New Version', category: 'Getting Started', duration: '2:37',  youtubeId: 'oFnDirEJPGo' },
  { id: 4,  title: 'How to Create New Financial Year 2026-27 (English)', category: 'Getting Started', duration: '9:34',  youtubeId: 'OhGZfc211SE' },
  { id: 5,  title: 'How to Create New Financial Year 2026-27 (Tamil)', category: 'Getting Started', duration: '9:51',  youtubeId: 'ddKfPUvtBE4' },
  { id: 6,  title: 'How to Create New Financial Year | Reckon Software', category: 'Getting Started', duration: '9:39',  youtubeId: 'BdBUFemO1s0' },
  { id: 7,  title: 'Transfer to Next Year in Reckon Software', category: 'Getting Started', duration: '5:32',  youtubeId: 'gZRXAEyLb9I' },
  { id: 8,  title: 'Update Account and Inventory Balances into Next FY', category: 'Getting Started', duration: '2:59',  youtubeId: 'bOCp79AJBQA' },

  // Item & Account Master
  { id: 9,  title: 'How to Create Item Master in Reckon Software', category: 'Item & Account Master', duration: '13:44', youtubeId: 'y-n5ufWEuXE' },
  { id: 10, title: 'How to Create Ledger in Reckon Software', category: 'Item & Account Master', duration: '15:33', youtubeId: 'ZRhGihjaf4A' },
  { id: 11, title: 'Ledger Opening Balance in Reckon Software', category: 'Item & Account Master', duration: '3:05',  youtubeId: '__lcFT8F8yE' },
  { id: 12, title: 'Godown Creation in ReckonERP', category: 'Item & Account Master', duration: '3:11',  youtubeId: 'ncURkwLfsPg' },
  { id: 13, title: 'Import Item List From Excel to Reckon Software', category: 'Item & Account Master', duration: '4:22',  youtubeId: 'jR50yc0WurY' },
  { id: 14, title: 'Import Price List in Reckon Software', category: 'Item & Account Master', duration: '12:42', youtubeId: 'L-Xlhfz5fKc' },
  { id: 15, title: 'Reckon Class Day-1: Item Creation, Scheme Master, Loyalty Program', category: 'Item & Account Master', duration: '47:51', youtubeId: 'bookb-ZR2LI' },
  { id: 16, title: 'Reckon Class Day-14: Account Master, Group, Vch Master, Opening Balance', category: 'Item & Account Master', duration: '44:53', youtubeId: '4t_l6cI-Vc8' },

  // Billing & Sales
  { id: 17, title: 'Sale Invoice Entry in Reckon Software', category: 'Billing & Sales', duration: '15:31', youtubeId: 'jTcDB15l180' },
  { id: 18, title: 'Sale Voucher Entry in Reckon Software', category: 'Billing & Sales', duration: '2:32',  youtubeId: 'TwHItJegntI' },
  { id: 19, title: 'Sale Return Entry in Reckon Software', category: 'Billing & Sales', duration: '4:46',  youtubeId: 'yFwio59PpQw' },
  { id: 20, title: 'Cashier Entry in Reckon Software', category: 'Billing & Sales', duration: '7:15',  youtubeId: '-8gnbnX7fjI' },
  { id: 21, title: 'Till Management in Reckon Software', category: 'Billing & Sales', duration: '13:27', youtubeId: 'tgnHkx309DE' },
  { id: 22, title: 'Credit Bill Limit in Reckon Software', category: 'Billing & Sales', duration: '2:52',  youtubeId: 'H7aBNWI0ShM' },
  { id: 23, title: 'Reckon Class Day-6: Sale Entry, Credit Bill Limit, Costing and Margin', category: 'Billing & Sales', duration: '34:39', youtubeId: 'ng5ndraobOc' },
  { id: 24, title: 'Reckon Class Day-7: Sale Invoice, Party Wise Discount and Rate', category: 'Billing & Sales', duration: '19:50', youtubeId: 'Ie5zse5HCK8' },
  { id: 25, title: 'Reckon Class Day-8: Counter Sale, Sample Issue, Bill History, All Invoice Types', category: 'Billing & Sales', duration: '1:03:41', youtubeId: 'kCCGjZtc-1o' },

  // Purchase & Inventory
  { id: 26, title: 'Purchase Entry in Reckon Software', category: 'Purchase & Inventory', duration: '15:25', youtubeId: 'blIcQp8WvPM' },
  { id: 27, title: 'Purchase Voucher Entry in Reckon Software', category: 'Purchase & Inventory', duration: '3:16',  youtubeId: 'lDoAb2aVCzY' },
  { id: 28, title: 'Purchase Return Entry in Reckon Software', category: 'Purchase & Inventory', duration: '4:54',  youtubeId: 'BrSECzEyA-M' },
  { id: 29, title: 'Physical Stock Entry (Stock Adjustment) in Reckon Software', category: 'Purchase & Inventory', duration: '4:31',  youtubeId: 'POEjsZI0J48' },
  { id: 30, title: 'Barcode Wise Stock Take Entry in Reckon Software', category: 'Purchase & Inventory', duration: '6:14',  youtubeId: '2uYRJyFOKZU' },
  { id: 31, title: 'Manage Expiry and Breakage in Reckon Software', category: 'Purchase & Inventory', duration: '8:57',  youtubeId: 'oLFkyam24Ag' },
  { id: 32, title: 'Manage Bill of Materials in Reckon Software', category: 'Purchase & Inventory', duration: '12:50', youtubeId: 'NaYLlObmKTU' },
  { id: 33, title: 'Repacking System in Reckon Software', category: 'Purchase & Inventory', duration: '5:25',  youtubeId: '2Wr579-YUQY' },
  { id: 34, title: 'Reckon Class Day-4: Purchase Entry With Item and Ledger Master Creation', category: 'Purchase & Inventory', duration: '1:13:26', youtubeId: '0YoXIQ7VTj0' },
  { id: 35, title: 'Reckon Class Day-5: Purchase Import Through File and Import Method', category: 'Purchase & Inventory', duration: '33:25', youtubeId: '2sofngvHJ_U' },
  { id: 36, title: 'Reckon Class Day-9: Expiry Stock Management and Stock Audit', category: 'Purchase & Inventory', duration: '41:44', youtubeId: 'RF5ediivT6w' },
  { id: 37, title: 'Reckon Class Day-11: Multi Godown Management', category: 'Purchase & Inventory', duration: '15:50', youtubeId: '8WVb5zmchU4' },
  { id: 38, title: 'Reckon Class Day-12: ReOrder System, Purchase Order, Sale Order', category: 'Purchase & Inventory', duration: '39:04', youtubeId: 'Ic1uPO8IRJ4' },

  // Accounts & Finance
  { id: 39, title: 'Payment Voucher Entry in Reckon Software', category: 'Accounts & Finance', duration: '4:21',  youtubeId: 'HyGXrQbSEAo' },
  { id: 40, title: 'Receipt Voucher Entry in Reckon Software', category: 'Accounts & Finance', duration: '3:59',  youtubeId: 'DSE-WxAs5Kg' },
  { id: 41, title: 'Contra Voucher Entry in Reckon Software', category: 'Accounts & Finance', duration: '4:53',  youtubeId: 'ofa9N5VEQRM' },
  { id: 42, title: 'Journal Voucher Entry in Reckon Software', category: 'Accounts & Finance', duration: '6:00',  youtubeId: 's27Iw6ouw6g' },
  { id: 43, title: 'Multi Voucher Entry in Reckon Software', category: 'Accounts & Finance', duration: '4:21',  youtubeId: '1ZHeKuZ1KcU' },
  { id: 44, title: 'Cheque Book Management Entry in ReckonERP', category: 'Accounts & Finance', duration: '7:02',  youtubeId: 'EY6XiG040F4' },
  { id: 45, title: 'Post Dated Cheque: Ultimate Guide — Payment Register', category: 'Accounts & Finance', duration: '9:55',  youtubeId: 'CNU9qBWbAXM' },
  { id: 46, title: 'No Missed Payments — Smart Payment Tracking in Reckon', category: 'Accounts & Finance', duration: '6:34',  youtubeId: 'xHfCy0_ChII' },
  { id: 47, title: 'Easy Expense Voucher Posting – Step-by-Step', category: 'Accounts & Finance', duration: '5:42',  youtubeId: 'f4ssa49fmDc' },
  { id: 48, title: 'Expense Bills Input GST in Reckon Software', category: 'Accounts & Finance', duration: '6:14',  youtubeId: 'xgffhaZ6Co0' },
  { id: 49, title: 'Reckon Class Day-15: Single Entry System, Multiple Voucher Entry', category: 'Accounts & Finance', duration: '40:03', youtubeId: 'U1iYFYOCXy8' },
  { id: 50, title: 'Reckon Class Day-16: Bill Tagging, Bank PaySlip, Cheque Return, Multi Payment', category: 'Accounts & Finance', duration: '24:53', youtubeId: '2cnFjzVHh7k' },
  { id: 51, title: 'Reckon Class Day-17: Post Dated Cheque Entry', category: 'Accounts & Finance', duration: '23:41', youtubeId: '5UrvdF3Qb3A' },
  { id: 52, title: 'Reckon Class Day-18: Collection Report', category: 'Accounts & Finance', duration: '16:36', youtubeId: '2r53IdaXle8' },
  { id: 53, title: 'Reckon Class Day-19: Bank Reconciliation Entry', category: 'Accounts & Finance', duration: '17:10', youtubeId: 'CV-4RpvSFek' },
  { id: 54, title: 'Reckon Class Day-20: Depreciation Entry', category: 'Accounts & Finance', duration: '8:26',  youtubeId: 'yQJBt6KPE5g' },

  // GST & Reports
  { id: 55, title: 'GST 2.0 is Here! Full Guide for Reckon Users', category: 'GST & Reports', duration: '14:30', youtubeId: 'hxtrF6Q4gYI' },
  { id: 56, title: 'Next-Gen GST Reforms (GST 2.0) — How to Update in Reckon', category: 'GST & Reports', duration: '3:58',  youtubeId: 'HlDpyh4M9t4' },
  { id: 57, title: 'Generate GSTR1 and GSTR3B in Reckon Software', category: 'GST & Reports', duration: '3:55',  youtubeId: 'shnPMcV9K_0' },
  { id: 58, title: 'GSTR 3B Filing in Reckon Sales', category: 'GST & Reports', duration: '4:55',  youtubeId: 'zRd26gWpunA' },
  { id: 59, title: 'GSTR 4 Filing in Reckon Sales', category: 'GST & Reports', duration: '2:27',  youtubeId: '_A1sgTnxz5U' },
  { id: 60, title: 'EWay Bill Upload in Reckon Software', category: 'GST & Reports', duration: '8:44',  youtubeId: 'YE5_DtaPNYo' },
  { id: 61, title: 'Auto Generate E-way Bill in Reckon Software', category: 'GST & Reports', duration: '8:04',  youtubeId: 'Xy0FPpbEPQs' },
  { id: 62, title: 'Reckon to Tally Data Transfer', category: 'GST & Reports', duration: '8:31',  youtubeId: '0e7Yda_Pi7Q' },
  { id: 63, title: 'Reckon Class Day-13: RCM Voucher, GST Reports, GSTR3B, GSTR1, GSTR4', category: 'GST & Reports', duration: '1:09:32', youtubeId: 'DZzctZD8ydQ' },
  { id: 64, title: 'ALERT: GSTR-3B New Dates Notified — When to File', category: 'GST & Reports', duration: '6:21',  youtubeId: 'RHSVwG0IJ2c' },
  { id: 65, title: 'Reckon Class Day-10: Auto Email Stock & Sales Report', category: 'GST & Reports', duration: '40:14', youtubeId: 'kHjNUEo5xIs' },

  // Configuration & Admin
  { id: 66, title: 'Scheme Master Entry in ReckonERP', category: 'Configuration & Admin', duration: '13:22', youtubeId: 'zH9AV44d-Fg' },
  { id: 67, title: 'Reckon Admin Panel — समझो 5 मिनट में!', category: 'Configuration & Admin', duration: '6:04',  youtubeId: 'fFonwGHSfgk' },
  { id: 68, title: 'Reckon Class Day-2: User Module', category: 'Configuration & Admin', duration: '41:09', youtubeId: 'CelszsLCbuY' },
  { id: 69, title: 'SMS Setting Through API in Reckon Software', category: 'Configuration & Admin', duration: '4:38',  youtubeId: 'T6rYzzw67qQ' },
  { id: 70, title: 'Email Setting in Reckon Software', category: 'Configuration & Admin', duration: '4:03',  youtubeId: 'p-2tpzm_3ow' },
  { id: 71, title: 'Set Password on Bill Deletion in Reckon Software', category: 'Configuration & Admin', duration: '1:45',  youtubeId: 'qqAxnHg5j7E' },
  { id: 72, title: 'How to Set Password on Delete or Cancel Button', category: 'Configuration & Admin', duration: '1:43',  youtubeId: 'v98VRSbn5wA' },
  { id: 73, title: 'How to Recover Your Last Unsaved Transaction', category: 'Configuration & Admin', duration: '1:56',  youtubeId: 'vQkXiyzOxN8' },
  { id: 74, title: 'Stock & Account Balance Update — Now Easy!', category: 'Configuration & Admin', duration: '2:42',  youtubeId: 'Eblz1PilA24' },
  { id: 75, title: 'Remove Non-Working Items and Accounts Easily', category: 'Configuration & Admin', duration: '3:38',  youtubeId: 'pah_QRB-cWA' },
  { id: 76, title: 'Reckon Cloud Auto Backup', category: 'Configuration & Admin', duration: '7:14',  youtubeId: '5B5qRRD51cY' },
  { id: 77, title: 'How to Take Backup and Restore in Reckon Software', category: 'Configuration & Admin', duration: '2:30',  youtubeId: 'a7k0IUF9ey8' },

  // Software Demos
  { id: 78, title: 'Reckon Pharmacy Billing Software Demo', category: 'Software Demos', duration: '17:19', youtubeId: 'rAAu-OyHX1E' },
  { id: 79, title: 'Reckon Pharma Software Short Overview', category: 'Software Demos', duration: '0:37',  youtubeId: 'OmE1JWAWBos' },
  { id: 80, title: 'Best Pharma Software — Full Demo', category: 'Software Demos', duration: '46:47', youtubeId: 'rGQ79MrZUQw' },
  { id: 81, title: 'Reckon Departmental Store Software', category: 'Software Demos', duration: '20:44', youtubeId: '_lOC-lQgZzs' },
  { id: 82, title: 'Reckon Departmental Store Software Demonstration', category: 'Software Demos', duration: '14:11', youtubeId: 'kBcetAkkf4I' },
  { id: 83, title: 'Reckon Garments & Footwear Software', category: 'Software Demos', duration: '22:58', youtubeId: '0mW8BzBoJgQ' },
  { id: 84, title: 'Reckon Mobile Shop & Electronics Showroom Software', category: 'Software Demos', duration: '18:08', youtubeId: '9KWbw_uoinI' },
  { id: 85, title: 'Reckon Restaurant & Bar Software Demo Part 1', category: 'Software Demos', duration: '16:43', youtubeId: 'TN61FJD2YcU' },
  { id: 86, title: 'Reckon Restaurant & Bar ERP Demo Part 2', category: 'Software Demos', duration: '21:59', youtubeId: 'DPlHypXlZiU' },
  { id: 87, title: 'Reckon Restaurant & Bar ERP Demo Part 3', category: 'Software Demos', duration: '7:29',  youtubeId: 'm-qs0xue690' },
  { id: 88, title: 'Reckon Mart — Online Ordering App', category: 'Software Demos', duration: '11:58', youtubeId: '53AqeNGavS8' },
  { id: 89, title: 'Reckon Mart — Admin Panel', category: 'Software Demos', duration: '15:12', youtubeId: 'B5-aIscKdnA' },
  { id: 90, title: 'Reckon Seller App — Sales Champion', category: 'Software Demos', duration: '15:32', youtubeId: '3H3m0rmLt9k' },
  { id: 91, title: 'Reckon — Best Pharmacy Wholesale Software', category: 'Software Demos', duration: '41:31', youtubeId: '9CvD7ibpcaI' },
  { id: 92, title: 'About Us — Reckon ERP', category: 'Software Demos', duration: '1:26',  youtubeId: 'CSoOE9W0_Zw' },
];

const CATEGORIES = ['All', ...new Set(TUTORIALS.map(t => t.category))];
const PAGE_SIZE = 12;

export default function TutorialsPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [search, setSearch] = useState('');
  const [playing, setPlaying] = useState(null);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const filtered = TUTORIALS.filter(t => {
    const matchesCategory = activeCategory === 'All' || t.category === activeCategory;
    const matchesSearch =
      t.title.toLowerCase().includes(search.toLowerCase()) ||
      t.category.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  const handleCategoryChange = (cat) => {
    setActiveCategory(cat);
    setVisibleCount(PAGE_SIZE);
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setVisibleCount(PAGE_SIZE);
  };

  return (
    <>
      <Helmet>
        <title>Video Tutorials - Reckon Sales</title>
        <meta name="description" content="Watch 90+ official Reckon ERP video tutorials covering billing, GST, inventory, pharma, accounts, and more. Learn directly from the official Reckon YouTube channel." />
      </Helmet>

      <PageHeader
        title="Video Tutorials"
        subtitle="90+ official step-by-step video guides to help you master every feature of Reckon ERP."
        breadcrumbs={[{ label: 'Tutorials' }]}
        gradient
      />

      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* YouTube Subscribe Banner */}
          <a
            href="https://www.youtube.com/@reckonsalesprivatelimitedindia/videos"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 mb-10 p-4 rounded-2xl bg-red-500/8 border border-red-500/20 hover:bg-red-500/12 hover:border-red-500/35 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-red-600 flex items-center justify-center shrink-0 shadow-lg group-hover:scale-105 transition-transform duration-300">
              <YoutubeIcon className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="font-bold text-foreground text-sm">Reckon Sales Private Limited — Official YouTube Channel</p>
              <p className="text-xs text-muted mt-0.5">Subscribe for the latest tutorials, product demos, and feature updates</p>
            </div>
            <span className="shrink-0 text-xs font-bold text-red-600 border border-red-500/30 px-3 py-1.5 rounded-full group-hover:bg-red-600 group-hover:text-white transition-all duration-200 whitespace-nowrap">
              Subscribe →
            </span>
          </a>

          {/* Controls Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            {/* Search */}
            <div className="relative max-w-sm w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
              <input
                type="text"
                value={search}
                onChange={handleSearchChange}
                placeholder="Search tutorials..."
                className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-surface border border-input text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all"
              />
              {search && (
                <button
                  onClick={() => { setSearch(''); setVisibleCount(PAGE_SIZE); }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-foreground transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
            <span className="text-sm text-muted shrink-0">
              Showing <span className="font-semibold text-foreground">{Math.min(visibleCount, filtered.length)}</span> of <span className="font-semibold text-foreground">{filtered.length}</span> videos
            </span>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-2 mb-10 pb-6 border-b border-border">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={cn(
                  'px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200',
                  activeCategory === cat
                    ? 'bg-primary text-white shadow-md'
                    : 'bg-surface-secondary text-muted hover:text-foreground hover:bg-surface border border-border/50'
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Video Grid */}
          {filtered.length > 0 ? (
            <>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {visible.map((tutorial) => (
                  <button
                    key={tutorial.id}
                    onClick={() => setPlaying(tutorial)}
                    className="group text-left rounded-xl bg-surface border border-border overflow-hidden hover:border-primary/25 hover:shadow-xl transition-all duration-300"
                  >
                    {/* Thumbnail */}
                    <div className="aspect-video relative overflow-hidden">
                      <img
                        src={`https://img.youtube.com/vi/${tutorial.youtubeId}/mqdefault.jpg`}
                        alt={tutorial.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          e.currentTarget.nextSibling.style.display = 'flex';
                        }}
                      />
                      {/* Fallback */}
                      <div
                        className="w-full h-full bg-gradient-to-br from-slate-800 to-slate-900 absolute inset-0 hidden items-center justify-center"
                        style={{ display: 'none' }}
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-black/25 group-hover:bg-black/15 transition-colors duration-300 flex items-center justify-center">
                        <div className="w-12 h-12 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 flex items-center justify-center group-hover:bg-red-600 group-hover:scale-110 transition-all duration-300 shadow-xl">
                          <Play className="w-5 h-5 text-white ml-0.5" />
                        </div>
                      </div>
                      {/* Duration badge */}
                      <span className="absolute bottom-2 right-2 text-[11px] bg-black/75 text-white px-1.5 py-0.5 rounded font-mono">
                        {tutorial.duration}
                      </span>
                    </div>

                    {/* Info */}
                    <div className="p-3.5">
                      <span className="text-[10px] text-primary font-bold uppercase tracking-wider">{tutorial.category}</span>
                      <h3 className="font-semibold text-foreground text-sm mt-1 leading-snug line-clamp-2 group-hover:text-primary transition-colors">
                        {tutorial.title}
                      </h3>
                    </div>
                  </button>
                ))}
              </div>

              {/* Load More */}
              {hasMore && (
                <div className="mt-10 text-center">
                  <button
                    onClick={() => setVisibleCount(c => c + PAGE_SIZE)}
                    className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-surface border border-border hover:border-primary/30 hover:bg-surface-secondary text-sm font-semibold text-foreground transition-all duration-200 shadow-sm"
                  >
                    <ChevronDown className="w-4 h-4" />
                    Load More ({filtered.length - visibleCount} remaining)
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-20 bg-surface rounded-2xl border border-border flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-surface-secondary border border-border flex items-center justify-center">
                <Search className="w-7 h-7 text-muted" />
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">No tutorials found</p>
                <p className="text-sm text-muted">
                  No results match <span className="font-medium text-primary">"{search}"</span>
                </p>
              </div>
              <button
                onClick={() => { setSearch(''); setActiveCategory('All'); setVisibleCount(PAGE_SIZE); }}
                className="px-5 py-2 rounded-xl bg-primary/10 hover:bg-primary text-primary hover:text-white text-sm font-semibold border border-primary/20 hover:border-transparent transition-all duration-200"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Video Modal */}
      {playing && (
        <div
          className="fixed inset-0 z-50 bg-black/92 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setPlaying(null)}
        >
          <div className="relative max-w-4xl w-full" onClick={e => e.stopPropagation()}>
            {/* Modal header */}
            <div className="flex items-start justify-between mb-3 gap-4">
              <div className="min-w-0">
                <p className="text-[11px] text-primary font-bold uppercase tracking-wider mb-1">{playing.category}</p>
                <h3 className="text-white font-bold text-base leading-snug">{playing.title}</h3>
              </div>
              <button
                onClick={() => setPlaying(null)}
                className="shrink-0 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-all mt-0.5"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Iframe */}
            <div className="aspect-video bg-slate-950 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <iframe
                src={`https://www.youtube.com/embed/${playing.youtubeId}?autoplay=1&rel=0`}
                title={playing.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>

            {/* Modal footer */}
            <div className="mt-3 flex items-center justify-between">
              <span className="text-white/40 text-xs font-mono">{playing.duration}</span>
              <a
                href={`https://www.youtube.com/watch?v=${playing.youtubeId}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-red-400 hover:text-red-300 font-semibold transition-colors"
              >
                <YoutubeIcon className="w-3.5 h-3.5" />
                Watch on YouTube
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
