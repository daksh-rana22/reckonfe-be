import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_ITEMS, TOP_BAR_LINKS } from '@/data/navigation';
import { ChevronDown, ExternalLink } from 'lucide-react';
import { useAdminStore } from '@/hooks/useAdminStore';
import { cn } from '@/lib/utils';

export default function MobileNav({ open, onClose }) {
  const [expandedMenu, setExpandedMenu] = useState(null);
  const [expandedSubMenu, setExpandedSubMenu] = useState(null);
  const [mobileLoginOpen, setMobileLoginOpen] = useState(false);
  const location = useLocation();
  const { logoUrl } = useAdminStore();

  const toggleExpand = (label) => {
    setExpandedMenu(prev => (prev === label ? null : label));
  };

  const toggleExpandSub = (label) => {
    setExpandedSubMenu(prev => (prev === label ? null : label));
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity duration-300 lg:hidden',
          open ? 'opacity-100 visible' : 'opacity-0 invisible'
        )}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={cn(
          'fixed top-0 right-0 z-50 h-full w-80 max-w-[85vw] bg-surface shadow-2xl transition-transform duration-300 ease-out lg:hidden overflow-y-auto',
          open ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          <Link to="/" onClick={onClose} className="flex items-center gap-2.5">
            <img
              src={logoUrl}
              alt="Reckon Logo"
              className="w-8 h-8 object-contain rounded-md"
            />
            <span className="font-bold text-foreground">Reckon</span>
          </Link>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-surface-secondary transition-colors text-muted"
          >
            ✕
          </button>
        </div>

        {/* Navigation Items */}
        <div className="p-4 space-y-1">
          {NAV_ITEMS.map((item) => {
            /* ── Dropdown Items (Software & Company) ── */
            if (item.dropdown) {
              const isActive = item.subItems?.some(s => location.pathname === s.path);
              return (
                <div key={item.label}>
                  <button
                    onClick={() => toggleExpand(item.label)}
                    className={cn(
                      'w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-colors',
                      isActive
                        ? 'text-primary bg-primary/5'
                        : 'text-foreground hover:bg-surface-secondary'
                    )}
                  >
                    {item.label}
                    <ChevronDown
                      className={cn(
                        'w-4 h-4 transition-transform duration-200',
                        expandedMenu === item.label && 'rotate-180'
                      )}
                    />
                  </button>

                  {/* Expanded sub-items */}
                  <div
                    className={cn(
                      'overflow-hidden transition-all duration-300',
                      expandedMenu === item.label ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
                    )}
                  >
                    <div className="pl-3 py-1 space-y-0.5">
                      {item.subItems.map((sub) => {
                        const hasChildren = !!sub.subItems;
                        return (
                          <div key={sub.path} className="space-y-0.5">
                            {hasChildren ? (
                              <>
                                <button
                                  onClick={() => toggleExpandSub(sub.label)}
                                  className={cn(
                                    'w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                                    location.pathname.startsWith(sub.path)
                                      ? 'text-primary bg-primary/5'
                                      : 'text-foreground/80 hover:text-primary hover:bg-primary/5'
                                  )}
                                >
                                  <span>{sub.label}</span>
                                  <ChevronDown
                                    className={cn(
                                      'w-3.5 h-3.5 transition-transform duration-200',
                                      expandedSubMenu === sub.label && 'rotate-180'
                                    )}
                                  />
                                </button>
                                <div
                                  className={cn(
                                    'overflow-hidden transition-all duration-300 pl-4 space-y-0.5',
                                    expandedSubMenu === sub.label ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
                                  )}
                                >
                                  {sub.subItems.map((child) => (
                                    <Link
                                      key={child.path}
                                      to={child.path}
                                      onClick={onClose}
                                      className={cn(
                                        'block px-3 py-2 rounded-lg text-xs font-semibold transition-colors',
                                        location.pathname === child.path
                                          ? 'text-primary bg-primary/5'
                                          : 'text-muted hover:text-primary'
                                      )}
                                    >
                                      {child.label}
                                    </Link>
                                  ))}
                                </div>
                              </>
                            ) : (
                              <Link
                                to={sub.path}
                                onClick={onClose}
                                className={cn(
                                  'flex flex-col px-3 py-2.5 rounded-lg transition-colors',
                                  location.pathname === sub.path
                                    ? 'text-primary bg-primary/5'
                                    : 'text-foreground/80 hover:text-primary hover:bg-primary/5'
                                )}
                              >
                                <span className="text-sm font-medium">{sub.label}</span>
                              </Link>
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
                onClick={onClose}
                className={cn(
                  'block px-3 py-2.5 rounded-lg text-sm font-medium transition-colors',
                  location.pathname === item.path
                    ? 'text-primary bg-primary/5'
                    : 'text-foreground hover:bg-surface-secondary'
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Bottom Links */}
        <div className="p-4 border-t border-border space-y-1">
          {TOP_BAR_LINKS.map((link) =>
            link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3 py-2 text-sm text-muted hover:text-foreground transition-colors"
              >
                {link.label}
                <ExternalLink className="w-3 h-3" />
              </a>
            ) : (
              <Link
                key={link.label}
                to={link.path}
                onClick={onClose}
                className="block px-3 py-2 text-sm text-muted hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            )
          )}
          {/* Mobile Login Dropdown */}
          <div className="space-y-1 pt-2">
            <button
              onClick={() => setMobileLoginOpen(!mobileLoginOpen)}
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium text-foreground hover:bg-surface-secondary transition-colors"
            >
              <span>Login</span>
              <ChevronDown className={cn("w-4 h-4 transition-transform duration-200", mobileLoginOpen && "rotate-180")} />
            </button>
            <div
              className={cn(
                "overflow-hidden transition-all duration-300 pl-3 space-y-0.5",
                mobileLoginOpen ? "max-h-[100px] opacity-100" : "max-h-0 opacity-0"
              )}
            >
              <a
                href="https://reckoncare.reckonsales.com/Account/Login"
                target="_blank"
                rel="noopener noreferrer"
                onClick={onClose}
                className="flex items-center gap-2 px-3 py-2 text-sm text-muted hover:text-foreground transition-colors"
              >
                <span>Partner Login</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-50" />
              </a>
              <Link
                to="/admin"
                onClick={onClose}
                className="block px-3 py-2 text-sm text-muted hover:text-foreground transition-colors"
              >
                Admin Login
              </Link>
            </div>
          </div>

          <Link
            to="/contact"
            onClick={onClose}
            className="block w-full text-center px-5 py-2.5 mt-3 rounded-full bg-primary text-primary-foreground text-sm font-semibold shadow-lg hover:shadow-glow hover:bg-primary-dark transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Schedule Demo
          </Link>
        </div>
      </div>
    </>
  );
}
