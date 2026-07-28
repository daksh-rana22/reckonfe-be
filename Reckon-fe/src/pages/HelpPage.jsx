import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import PageHeader from '@/components/shared/PageHeader';
import { cn } from '@/lib/utils';
import { Search, ChevronDown, Book, HelpCircle, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const FAQ_SECTIONS = [
  {
    title: 'Getting Started',
    items: [
      { q: 'How do I install Reckon software?', a: 'Download the installer from our Downloads page and run the setup wizard. Our installation guide walks you through each step. You can also contact our support team for remote installation assistance.' },
      { q: 'What are the system requirements?', a: 'Reckon runs on Windows 7 and above with minimum 4GB RAM and 500MB free disk space. For multi-user setups, we recommend Windows Server with 8GB+ RAM.' },
      { q: 'How do I activate my license?', a: 'After installation, enter the license key provided by your sales representative in the activation window. Internet connection is required for initial activation.' },
    ],
  },
  {
    title: 'Billing & GST',
    items: [
      { q: 'Is Reckon GST compliant?', a: 'Yes! All Reckon products are fully GST compliant with auto-calculation of CGST, SGST, IGST, and e-invoicing support as per latest government regulations.' },
      { q: 'Can I generate e-invoices?', a: 'Yes, Reckon supports e-invoice generation with direct integration to the GST portal. E-invoices are auto-generated for B2B transactions above the threshold.' },
      { q: 'How do I set up multiple tax rates?', a: 'Go to Settings → Tax Configuration to set up GST rates (0%, 5%, 12%, 18%, 28%) and map them to your product categories.' },
    ],
  },
  {
    title: 'Technical Support',
    items: [
      { q: 'How do I contact support?', a: 'You can reach our support team via email, phone, or through the ReckonCare partner portal. We offer 24/7 support for premium plans.' },
      { q: 'How do I backup my data?', a: 'Reckon includes automatic daily backups. You can also take manual backups from Tools → Backup. Cloud users get automatic encrypted backups.' },
      { q: 'Can I use Reckon on multiple computers?', a: 'Yes! Multi-user licenses allow simultaneous use across your network. Contact sales for multi-user pricing.' },
    ],
  },
];

export default function HelpPage() {
  const [search, setSearch] = useState('');
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (key) => {
    setOpenItems(prev => ({ ...prev, [key]: !prev[key] }));
  };

  const filteredSections = FAQ_SECTIONS.map(section => ({
    ...section,
    items: section.items.filter(
      item => item.q.toLowerCase().includes(search.toLowerCase()) || item.a.toLowerCase().includes(search.toLowerCase())
    ),
  })).filter(section => section.items.length > 0);

  return (
    <>
      <Helmet>
        <title>Help Center - Reckon Sales</title>
        <meta name="description" content="Find answers to frequently asked questions about Reckon software products." />
      </Helmet>

      <PageHeader
        title="Help Center"
        subtitle="Find answers, guides, and support resources."
        breadcrumbs={[{ label: 'Help' }]}
        gradient
      >
        <div className="hidden lg:block relative w-full lg:max-w-md lg:h-[220px] select-none pointer-events-none">
          {/* Decorative background glow under the constellation on desktop */}
          <div className="hidden lg:block absolute inset-0 bg-primary/15 rounded-full blur-3xl pointer-events-none -translate-y-4" />
          
          {[
            { label: 'Documentation', icon: Book, color: '#F97316', bgGlow: 'rgba(249,115,22,0.25)', pos: 'lg:top-0 lg:right-36', delay: '0s' },
            { label: 'Contact Support', icon: MessageCircle, color: '#EF4444', bgGlow: 'rgba(239,68,68,0.25)', pos: 'lg:top-20 lg:right-0', delay: '2s' },
            { label: 'Video Tutorials', icon: HelpCircle, color: '#0EA5E9', bgGlow: 'rgba(14,165,233,0.25)', pos: 'lg:top-40 lg:right-24', delay: '4s' },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className={cn(
                  "px-6 py-3.5 rounded-full lg:rounded-2xl flex items-center gap-3 transition-all duration-1000",
                  "lg:absolute",
                  item.pos,
                  "bg-white/35 dark:bg-white/15 border-2 border-white/50 dark:border-white/20 text-slate-900 dark:text-white shadow-lg backdrop-blur-lg"
                )}
                style={{
                  animation: 'float 6s ease-in-out infinite',
                  animationDelay: item.delay,
                  boxShadow: `0 12px 35px ${item.bgGlow}, 0 2px 4px rgba(0,0,0,0.06)`,
                }}
              >
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
                  style={{ backgroundColor: `${item.color}15` }}
                >
                  <Icon className="w-4 h-4" style={{ color: item.color }} />
                </div>
                <span className="font-bold text-sm sm:text-base tracking-wide">{item.label}</span>
              </div>
            );
          })}
        </div>
      </PageHeader>

      <section className="py-8 sm:py-16 bg-background">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 2xl:px-10">
          {/* Search Bar */}
          <div className="relative mb-10 sm:mb-14 max-w-xl mx-auto">
            <Search className="absolute left-4.5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search for help topics, questions, or guides..."
              className="w-full pl-12 pr-4 py-3.5 sm:py-4 rounded-xl sm:rounded-2xl bg-surface border border-input text-foreground text-sm sm:text-base placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary shadow-sm transition-all"
            />
          </div>

          {/* Quick Links Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 mb-12 sm:mb-16">
            {[
              { icon: Book, title: 'Documentation', desc: 'User guides, manuals & downloads', link: '/downloads', color: '#F97316' },
              { icon: MessageCircle, title: 'Contact Support', desc: 'Get direct help from our team', link: '/contact', color: '#EF4444' },
              { icon: HelpCircle, title: 'Video Tutorials', desc: 'Step-by-step video walkthroughs', link: '/tutorials', color: '#0EA5E9' },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.title}
                  to={item.link}
                  className="group relative p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-surface border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center overflow-hidden"
                >
                  <div
                    className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                    style={{ backgroundColor: `${item.color}15` }}
                  >
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7" style={{ color: item.color }} />
                  </div>
                  <h3 className="font-bold text-foreground text-base sm:text-lg mb-1 group-hover:text-primary transition-colors">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-muted">{item.desc}</p>
                </Link>
              );
            })}
          </div>

          {/* FAQ Sections Stacked List matching layout design */}
          {filteredSections.length > 0 ? (
            <div className="space-y-10 sm:space-y-12">
              {filteredSections.map((section) => (
                <div key={section.title} className="space-y-3 sm:space-y-4">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-foreground tracking-tight text-center">
                    {section.title}
                  </h2>
                  <div className="space-y-2.5 sm:space-y-3">
                    {section.items.map((item) => {
                      const key = `${section.title}-${item.q}`;
                      const isOpen = openItems[key];
                      return (
                        <div
                          key={key}
                          className="rounded-xl sm:rounded-2xl border border-border/80 bg-surface shadow-sm overflow-hidden transition-all duration-300 hover:border-primary/30"
                        >
                          <button
                            onClick={() => toggleItem(key)}
                            className="w-full flex items-center justify-between p-4 sm:p-5 text-left text-sm sm:text-base font-semibold text-foreground hover:bg-surface-hover/60 transition-colors gap-4"
                          >
                            <span>{item.q}</span>
                            <ChevronDown
                              className={cn(
                                'w-4 h-4 sm:w-5 sm:h-5 text-muted shrink-0 transition-transform duration-300',
                                isOpen && 'rotate-180 text-primary'
                              )}
                            />
                          </button>
                          <div
                            className={cn(
                              'overflow-hidden transition-all duration-300 ease-in-out',
                              isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                            )}
                          >
                            <div className="px-4 pb-4 sm:px-5 sm:pb-5 text-xs sm:text-sm text-muted leading-relaxed border-t border-border/40 pt-3">
                              {item.a}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 px-4 bg-surface rounded-2xl border border-border max-w-md mx-auto">
              <HelpCircle className="w-10 h-10 text-muted mx-auto mb-3 opacity-50" />
              <p className="text-base font-bold text-foreground mb-1">No matching help topics</p>
              <p className="text-xs text-muted mb-4">Try searching for keywords like "GST", "install", or "backup".</p>
              <button
                onClick={() => setSearch('')}
                className="px-4 py-2 rounded-xl bg-primary text-white text-xs font-bold shadow-md hover:bg-primary-dark transition-colors"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
