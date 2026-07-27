import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import PageHeader from '@/components/shared/PageHeader';
import { cn } from '@/lib/utils';
import { Download, Search } from 'lucide-react';
import { useAdminStore } from '@/hooks/useAdminStore';

export default function DownloadsPage() {
  const { downloads, categories, downloadFile, getIconComponent } = useAdminStore();
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter out inactive categories and files
  const activeCategories = categories.filter(c => c.is_active !== false);
  const activeCategoryValues = new Set(activeCategories.map(c => c.value));

  const activeDownloads = downloads.filter(
    d => d.isActive !== false && activeCategoryValues.has(d.type)
  );

  const countByType = (type) => activeDownloads.filter(d => d.type === type).length;

  const filteredDownloads = activeDownloads.filter(
    (item) =>
      (activeTab === 'all' || item.type === activeTab) &&
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Helmet>
        <title>Downloads - Reckon Sales</title>
        <meta name="description" content="Download Reckon ERP setup files, system utilities, invoice templates, and cloud patches." />
      </Helmet>

      <PageHeader
        title="Downloads"
        subtitle="Get the latest Reckon installers, tools, formats, and cloud utilities."
        breadcrumbs={[{ label: 'Downloads' }]}
        gradient
      />

      <section className="py-8 sm:py-16 bg-background">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          {/* Controls Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6 mb-6 sm:mb-10 pb-4 sm:pb-6 border-b border-border">
            {/* Category tabs */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              <button
                onClick={() => setActiveTab('all')}
                className={cn(
                  'px-2.5 py-1 sm:px-4 sm:py-2 rounded-full text-[11px] sm:text-xs font-semibold transition-all duration-300 cursor-pointer border',
                  activeTab === 'all'
                    ? 'bg-primary text-white shadow-md border-transparent'
                    : 'bg-surface-secondary text-muted hover:text-foreground hover:bg-surface border-border/50'
                )}
              >
                All ({activeDownloads.length})
              </button>
              {activeCategories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setActiveTab(cat.value)}
                  className={cn(
                    'px-2.5 py-1 sm:px-4 sm:py-2 rounded-full text-[11px] sm:text-xs font-semibold transition-all duration-300 cursor-pointer border',
                    activeTab === cat.value
                      ? 'bg-primary text-white shadow-md border-transparent'
                      : 'bg-surface-secondary text-muted hover:text-foreground hover:bg-surface border border-border/50'
                  )}
                >
                  {cat.label} ({countByType(cat.value)})
                </button>
              ))}
            </div>

            {/* Search input */}
            <div className="relative max-w-sm w-full">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" />
              <input
                type="text"
                placeholder="Search download files..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 sm:py-2.5 rounded-xl bg-surface border border-border focus:border-primary/50 outline-none text-xs sm:text-sm text-foreground placeholder:text-muted/65 transition-all"
              />
            </div>
          </div>

          {/* Files List */}
          {filteredDownloads.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6">
              {filteredDownloads.map((item) => {
                const Icon = getIconComponent(item.icon);
                const categoryLabel = activeCategories.find(c => c.value === item.type)?.label || item.type;
                return (
                  <div key={item.id} className="group p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-surface border border-border hover:border-primary/20 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-3 sm:mb-4">
                        <div className="w-8 h-8 sm:w-11 sm:h-11 rounded-lg sm:rounded-xl bg-primary/10 flex items-center justify-center">
                          <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                        </div>
                        <span className="text-[9px] sm:text-[10px] px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-surface-secondary text-muted border border-border uppercase font-semibold tracking-wider">
                          {categoryLabel}
                        </span>
                      </div>
                      <h3 className="font-bold text-foreground text-xs sm:text-base mb-1 sm:mb-2 group-hover:text-primary transition-colors">{item.name}</h3>
                      <p className="text-[11px] sm:text-xs text-muted leading-snug sm:leading-relaxed mb-3 sm:mb-4">{item.desc}</p>
                    </div>
                    <button
                      onClick={() => downloadFile(item)}
                      className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 sm:px-4 sm:py-3 rounded-lg sm:rounded-xl bg-primary/5 hover:bg-primary text-primary hover:text-white text-xs sm:text-sm font-semibold transition-all duration-300 border border-primary/20 hover:border-transparent group-hover:shadow-glow cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      Download File
                    </button>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-20 bg-surface rounded-2xl border border-border flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-surface-secondary border border-border flex items-center justify-center">
                <Search className="w-7 h-7 text-muted" />
              </div>
              <div>
                <p className="font-semibold text-foreground mb-1">No files found</p>
                <p className="text-sm text-muted">No downloads match <span className="font-medium text-primary">"{searchQuery}"</span></p>
              </div>
              <button
                onClick={() => setSearchQuery('')}
                className="px-5 py-2 rounded-xl bg-primary/10 hover:bg-primary text-primary hover:text-white text-sm font-semibold border border-primary/20 hover:border-transparent transition-all duration-200"
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
