import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_ITEMS } from '@/data/navigation';
import { useTheme } from '@/hooks/useTheme';
import { useAdminStore } from '@/hooks/useAdminStore';
import { Menu, X, ChevronDown, ChevronRight, Sun, Moon, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
import MobileNav from './MobileNav';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { logoUrl } = useAdminStore();
  const location = useLocation();
  const dropdownRefs = useRef({});
  const dropdownTimeouts = useRef({});

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  const handleDropdownMouseEnter = (label) => {
    clearTimeout(dropdownTimeouts.current[label]);
    setOpenDropdown(label);
  };

  const handleDropdownMouseLeave = (label) => {
    dropdownTimeouts.current[label] = setTimeout(() => {
      setOpenDropdown((prev) => (prev === label ? null : prev));
    }, 200);
  };

  const isDropdownActive = (item) => {
    if (!item.subItems) return false;
    return item.subItems.some((s) => location.pathname === s.path);
  };

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
                className="w-10 h-10 object-contain rounded-lg shadow-sm border border-border/50 group-hover:scale-105 group-hover:rotate-2 transition-all duration-1000 bg-white p-1"
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
                /* ── Dropdown Items (Software & Company) ── */
                if (item.dropdown) {
                  const isActive = isDropdownActive(item) || location.pathname === item.path;
                  const isOpen = openDropdown === item.label;

                  return (
                    <div
                      key={item.label}
                      className="relative"
                      ref={(el) => (dropdownRefs.current[item.label] = el)}
                      onMouseEnter={() => handleDropdownMouseEnter(item.label)}
                      onMouseLeave={() => handleDropdownMouseLeave(item.label)}
                    >
                      <Link
                        to={item.path}
                        className={cn(
                          'flex items-center gap-1.5 px-3.5 py-2 rounded-[12px] text-base transition-all duration-200',
                          isActive
                            ? 'bg-primary/15 text-primary font-bold'
                            : 'text-foreground/80 hover:text-primary hover:bg-primary/5 font-semibold'
                        )}
                      >
                        {item.label}
                        <ChevronDown
                          className={cn(
                            'w-3.5 h-3.5 transition-transform duration-200',
                            isOpen && 'rotate-180'
                          )}
                        />
                      </Link>

                      {/* Dropdown Panel */}
                      <div
                        className={cn(
                          'absolute top-full left-0 w-72 pt-3 transition-all duration-200',
                          isOpen
                            ? 'opacity-100 visible translate-y-0'
                            : 'opacity-0 invisible -translate-y-2'
                        )}
                      >
                        <div className="bg-surface/95 backdrop-blur-xl rounded-2xl shadow-xl border border-border p-2">
                          {item.subItems.map((sub, idx) => {
                            const hasSubItems = !!sub.subItems;
                            return (
                              <div
                                key={sub.path}
                                className="group/subitem relative"
                              >
                                <Link
                                  to={sub.path}
                                  className={cn(
                                    'flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-150',
                                    location.pathname === sub.path || (hasSubItems && location.pathname.startsWith(sub.path))
                                      ? 'bg-primary/10 text-primary font-semibold'
                                      : 'text-foreground/80 hover:bg-primary/5 hover:text-primary font-medium'
                                  )}
                                  style={{ animationDelay: `${idx * 30}ms` }}
                                >
                                  <span className="text-sm group-hover/subitem:text-primary transition-colors">
                                    {sub.label}
                                  </span>
                                  {hasSubItems && (
                                    <ChevronRight className="w-3.5 h-3.5 text-muted transition-transform duration-200 group-hover/subitem:translate-x-0.5 group-hover/subitem:text-primary" />
                                  )}
                                </Link>

                                {hasSubItems && (
                                  <div className="absolute left-full top-0 ml-1 w-72 opacity-0 invisible group-hover/subitem:opacity-100 group-hover/subitem:visible translate-x-1 group-hover/subitem:translate-x-0 transition-all duration-200 z-50">
                                    <div className="bg-surface/95 backdrop-blur-xl rounded-2xl shadow-xl border border-border p-2">
                                      {sub.subItems.map((child) => (
                                        <Link
                                          key={child.path}
                                          to={child.path}
                                          className={cn(
                                            'flex px-4 py-2.5 rounded-xl transition-all duration-150 text-foreground hover:bg-primary/5 hover:text-primary font-medium'
                                          )}
                                        >
                                          <span className="text-xs">
                                            {child.label}
                                          </span>
                                        </Link>
                                      ))}
                                    </div>
                                  </div>
                                )}
                              </div>
                            );
                          })}
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
                      'px-3.5 py-2 rounded-[12px] text-base transition-all duration-200',
                      location.pathname === item.path
                        ? 'bg-primary/15 text-primary font-bold'
                        : 'text-foreground/80 hover:text-primary hover:bg-primary/5 font-semibold'
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

              {/* Login Button with Dropdown (Hover/Click) */}
              <div
                className="relative"
                onMouseEnter={() => setLoginOpen(true)}
                onMouseLeave={() => setLoginOpen(false)}
              >
                <button
                  onClick={() => setLoginOpen(!loginOpen)}
                  className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-border text-foreground hover:bg-primary/5 hover:border-primary/20 hover:scale-105 active:scale-95 transition-all duration-300 font-semibold text-sm cursor-pointer shadow-sm"
                >
                  <span>Login</span>
                  <ChevronDown className={cn("w-3.5 h-3.5 transition-transform duration-200", loginOpen && "rotate-180")} />
                </button>

                <div
                  className={cn(
                    "absolute right-0 top-full pt-2 w-48 transition-all duration-200 z-50",
                    loginOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-2"
                  )}
                >
                  <div className="bg-surface/95 backdrop-blur-xl rounded-2xl shadow-xl border border-border p-2">
                    <a
                      href="https://reckoncare.reckonsales.com/Account/Login"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between px-4 py-2.5 rounded-xl text-sm text-foreground/80 hover:bg-primary/5 hover:text-primary font-medium transition-all duration-150"
                    >
                      <span>Partner Login</span>
                      <ExternalLink className="w-3.5 h-3.5 opacity-50" />
                    </a>
                    <Link
                      to="/admin"
                      className="flex items-center px-4 py-2.5 rounded-xl text-sm text-foreground/80 hover:bg-primary/5 hover:text-primary font-medium transition-all duration-150"
                    >
                      Admin Login
                    </Link>
                  </div>
                </div>
              </div>

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
