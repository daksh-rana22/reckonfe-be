import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_ITEMS } from '@/data/navigation';
import { useTheme } from '@/hooks/useTheme';
import { useAdminStore } from '@/hooks/useAdminStore';
import { Menu, X, ChevronDown, Sun, Moon, Store, Building2, Cpu, Layers } from 'lucide-react';
import { cn } from '@/lib/utils';
import MobileNav from './MobileNav';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const [companyDropdownOpen, setCompanyDropdownOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { logoUrl } = useAdminStore();
  const location = useLocation();
  const megaMenuRef = useRef(null);
  const megaMenuTimeout = useRef(null);
  const companyRef = useRef(null);
  const companyTimeout = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMegaMenuOpen(false);
    setCompanyDropdownOpen(false);
  }, [location.pathname]);

  const handleMegaMouseEnter = () => {
    clearTimeout(megaMenuTimeout.current);
    setMegaMenuOpen(true);
  };
  const handleMegaMouseLeave = () => {
    megaMenuTimeout.current = setTimeout(() => setMegaMenuOpen(false), 200);
  };

  const handleCompanyMouseEnter = () => {
    clearTimeout(companyTimeout.current);
    setCompanyDropdownOpen(true);
  };
  const handleCompanyMouseLeave = () => {
    companyTimeout.current = setTimeout(() => setCompanyDropdownOpen(false), 200);
  };

  const softwaresItem = NAV_ITEMS.find(item => item.megaMenu);
  const companyItem = NAV_ITEMS.find(item => item.dropdown);

  const companyPaths = companyItem?.subItems?.map(s => s.path) ?? [];
  const isCompanyActive = companyPaths.some(p => location.pathname === p);

  return (
    <>
      <nav
        className={cn(
          'sticky top-0 z-50 transition-all duration-300',
          scrolled
            ? 'bg-navbar-theme-grey-scrolled shadow-md'
            : 'bg-navbar-theme-grey shadow-sm'
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={cn(
              'flex items-center justify-between transition-all duration-300',
              scrolled ? 'h-14 lg:h-16' : 'h-16 lg:h-20'
            )}
          >
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 shrink-0 group">
              <img
                src={logoUrl}
                alt="Reckon Logo"
                className="w-10 h-10 object-contain rounded-lg shadow-sm border border-border/50 group-hover:scale-105 group-hover:rotate-2 transition-all duration-300 bg-white p-1"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold text-foreground leading-tight tracking-tight group-hover:text-primary transition-colors duration-300">
                  Reckon
                </span>
                <span className="text-[10px] font-semibold text-muted uppercase tracking-widest leading-none group-hover:text-foreground/80 transition-colors duration-300">
                  Sales Pvt. Ltd.
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1.5">
              {NAV_ITEMS.map((item) => {
                /* ── Company Dropdown ── */
                if (item.dropdown) {
                  return (
                    <div
                      key={item.label}
                      className="relative"
                      ref={companyRef}
                      onMouseEnter={handleCompanyMouseEnter}
                      onMouseLeave={handleCompanyMouseLeave}
                    >
                      <button
                        className={cn(
                          'flex items-center gap-1.5 px-3.5 py-2 rounded-[12px] text-sm transition-all duration-200',
                          isCompanyActive
                            ? 'bg-primary/15 text-primary font-semibold'
                            : 'text-foreground/80 hover:text-primary hover:bg-primary/5 font-medium'
                        )}
                      >
                        {item.label}
                        <ChevronDown
                          className={cn(
                            'w-3.5 h-3.5 transition-transform duration-200',
                            companyDropdownOpen && 'rotate-180'
                          )}
                        />
                      </button>

                      {/* Dropdown Panel */}
                      <div
                        className={cn(
                          'absolute top-full left-0 w-64 pt-3 transition-all duration-200',
                          companyDropdownOpen
                            ? 'opacity-100 visible translate-y-0'
                            : 'opacity-0 invisible -translate-y-2'
                        )}
                      >
                        <div className="bg-surface/95 backdrop-blur-xl rounded-2xl shadow-xl border border-border p-2 overflow-hidden">
                          {item.subItems.map((sub, idx) => (
                            <Link
                              key={sub.path}
                              to={sub.path}
                              className={cn(
                                'flex flex-col px-4 py-3 rounded-xl transition-all duration-150 group/item',
                                location.pathname === sub.path
                                  ? 'bg-primary/10 text-primary'
                                  : 'hover:bg-primary/5 text-foreground'
                              )}
                              style={{ animationDelay: `${idx * 30}ms` }}
                            >
                              <span className="text-sm font-medium group-hover/item:text-primary transition-colors">
                                {sub.label}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                }

                /* ── Softwares Mega Menu ── */
                if (item.megaMenu) {
                  return (
                    <div
                      key={item.label}
                      className="relative"
                      ref={megaMenuRef}
                      onMouseEnter={handleMegaMouseEnter}
                      onMouseLeave={handleMegaMouseLeave}
                    >
                      <Link
                        to={item.path}
                        className={cn(
                          'flex items-center gap-1.5 px-3.5 py-2 rounded-[12px] text-sm transition-all duration-200',
                          location.pathname.startsWith('/softwares')
                            ? 'bg-primary/15 text-primary font-semibold'
                            : 'text-foreground/80 hover:text-primary hover:bg-primary/5 font-medium'
                        )}
                      >
                        {item.label}
                        <ChevronDown
                          className={cn(
                            'w-3.5 h-3.5 transition-transform duration-200',
                            megaMenuOpen && 'rotate-180'
                          )}
                        />
                      </Link>

                      {/* Mega Menu */}
                      <div
                        className={cn(
                          'absolute top-full left-1/2 -translate-x-1/2 w-[800px] pt-3 transition-all duration-200',
                          megaMenuOpen
                            ? 'opacity-100 visible translate-y-0'
                            : 'opacity-0 invisible -translate-y-2'
                        )}
                      >
                        <div className="bg-surface/95 backdrop-blur-xl rounded-2xl shadow-xl border border-border p-6">
                          <div className="grid grid-cols-4 gap-6">
                            {softwaresItem?.sections.map((section) => {
                              let SectionIcon = Layers;
                              if (section.title === 'Business Applications') SectionIcon = Store;
                              if (section.title === 'Industry Verticals' || section.title === 'More Verticals') SectionIcon = Building2;
                              if (section.title === 'ERP Solutions') SectionIcon = Cpu;

                              return (
                                <div key={section.title}>
                                  <h4 className="text-xs font-bold text-muted uppercase tracking-wider mb-3 flex items-center gap-1.5">
                                    <SectionIcon className="w-3.5 h-3.5 text-primary shrink-0" />
                                    {section.title}
                                  </h4>
                                  <ul className="space-y-1">
                                    {section.items.map((sub) => (
                                      <li key={sub.slug}>
                                        <Link
                                          to={`/softwares/${sub.slug}`}
                                          className="block px-2.5 py-1.5 rounded-md text-sm text-foreground hover:text-primary hover:bg-primary/5 transition-colors duration-150"
                                        >
                                          {sub.label}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              );
                            })}
                          </div>
                          <div className="mt-5 pt-4 border-t border-border">
                            <Link
                              to="/softwares"
                              className="text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
                            >
                              View All Products →
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }

                /* ── Regular Link ── */
                return (
                  <Link
                    key={item.label}
                    to={item.path}
                    className={cn(
                      'px-3.5 py-2 rounded-[12px] text-sm transition-all duration-200',
                      location.pathname === item.path
                        ? 'bg-primary/15 text-primary font-semibold'
                        : 'text-foreground/80 hover:text-primary hover:bg-primary/5 font-medium'
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg text-muted hover:text-foreground hover:bg-primary/5 transition-all duration-200"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-4.5 h-4.5" />
                ) : (
                  <Moon className="w-4.5 h-4.5" />
                )}
              </button>

              <Link
                to="/contact"
                className="hidden sm:inline-flex items-center px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-semibold shadow-lg hover:shadow-glow hover:bg-primary-dark transition-all duration-300 hover:scale-105 active:scale-95"
              >
                Schedule Demo
              </Link>

              {/* Mobile menu button */}
              <button
                onClick={() => setMobileOpen(!mobileOpen)}
                className="lg:hidden p-2 rounded-lg text-foreground hover:bg-primary/5 transition-colors"
                aria-label="Toggle mobile menu"
              >
                {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
