import { useState } from 'react';
import { Link } from 'react-router-dom';
import { NAV_ITEMS, SOCIAL_LINKS, CONTACT_INFO } from '@/data/navigation';
import { VERTICALS } from '@/data/softwares';
import { Zap, Mail, MapPin, Globe, ArrowUpRight, Phone } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { useAdminStore } from '@/hooks/useAdminStore';
import { cn } from '@/lib/utils';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const { theme } = useTheme();
  const { logoUrl } = useAdminStore();
  const isDark = theme === 'dark';

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCoords({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <footer
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={cn(
        "relative overflow-hidden select-none transition-colors duration-500 border-t",
        isDark ? "text-white/80 border-white/10" : "text-slate-700 border-[#0B0816]/10"
      )}
      style={{
        background: isDark
          ? 'var(--gradient-section-dark)'
          : 'var(--gradient-section-light)'
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div
          className="absolute top-10 left-10 w-72 h-72 rounded-full blur-[100px] pointer-events-none animate-pulse-soft"
          style={{ backgroundColor: 'var(--section-glow-1)' }}
        />
        <div
          className="absolute bottom-10 right-10 w-80 h-80 rounded-full blur-[120px] pointer-events-none animate-pulse-soft"
          style={{ animationDelay: '1.5s', backgroundColor: 'var(--section-glow-2)' }}
        />

        {/* Animated grid mesh */}
        <div
          className="absolute inset-0 grid-mesh"
          style={{
            maskImage: isHovered
              ? `radial-gradient(circle 350px at ${coords.x}px ${coords.y}px, black 30%, transparent)`
              : 'radial-gradient(circle 400px at center bottom, black 30%, transparent)',
            WebkitMaskImage: isHovered
              ? `radial-gradient(circle 350px at ${coords.x}px ${coords.y}px, black 30%, transparent)`
              : 'radial-gradient(circle 400px at center bottom, black 30%, transparent)',
          }}
        />

        {/* Interactive cursor spotlight */}
        <div
          className="absolute pointer-events-none rounded-full bg-gradient-to-r from-primary/20 to-accent/20 blur-[100px] w-96 h-96 transition-opacity duration-300"
          style={{
            left: coords.x - 192,
            top: coords.y - 192,
            opacity: isHovered ? 1 : 0,
          }}
        />
      </div>

      {/* Main Footer */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-6 md:gap-8">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-3 md:mb-4 group">
              <img
                src={logoUrl}
                alt="Reckon Logo"
                className="w-7 h-7 md:w-8.5 md:h-8.5 object-contain rounded-lg bg-white p-1"
              />
              <div>
                <span className={cn("text-sm md:text-base font-bold transition-colors", isDark ? "text-white" : "text-[#0B0816]")}>
                  Reckon
                </span>
                <p className={cn("text-[8px] md:text-[9px] uppercase tracking-widest leading-none mt-0.5", isDark ? "text-muted-foreground" : "text-slate-600 font-semibold")}>
                  Sales Pvt. Ltd.
                </p>
              </div>
            </Link>
            <p className={cn("text-[12px] md:text-[13px] leading-relaxed mb-3 md:mb-4", isDark ? "text-muted-foreground" : "text-slate-600")}>
              India's leading ERP & billing software solutions provider, serving 1000+ businesses across 16+ industries since 2009.
            </p>
            <div className="space-y-1.5 md:space-y-2">
              <div className={cn("flex items-center gap-2 text-[12px] md:text-[13px]", isDark ? "text-muted-foreground" : "text-slate-600")}>
                <MapPin className="w-3 h-3 md:w-3.5 md:h-3.5 shrink-0" />
                {CONTACT_INFO.address}
              </div>
              <div className={cn("flex items-center gap-2 text-[12px] md:text-[13px]", isDark ? "text-muted-foreground" : "text-slate-600")}>
                <Mail className="w-3 h-3 md:w-3.5 md:h-3.5 shrink-0" />
                {CONTACT_INFO.email}
              </div>
              <div className={cn("flex items-center gap-2 text-[12px] md:text-[13px]", isDark ? "text-muted-foreground" : "text-slate-600")}>
                <Globe className="w-3 h-3 md:w-3.5 md:h-3.5 shrink-0" />
                {CONTACT_INFO.website}
              </div>
              {/* Helpline numbers */}
              <div className={cn("flex items-start gap-2 text-[12px] md:text-[13px]", isDark ? "text-muted-foreground" : "text-slate-600")}>
                <Phone className="w-3 h-3 md:w-3.5 md:h-3.5 shrink-0 mt-0.5" />
                <div className="space-y-0.5">
                  <a href={`tel:${CONTACT_INFO.phone}`} className={cn("block hover:underline", isDark ? "hover:text-white" : "hover:text-[#0B0816]")}>
                    {CONTACT_INFO.phone}
                  </a>
                  {CONTACT_INFO.helpline.map((num) => (
                    <a key={num} href={`tel:${num.replace(/\s/g, '')}`} className={cn("block hover:underline", isDark ? "hover:text-white" : "hover:text-[#0B0816]")}>
                      {num}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Company Links */}
          <div className="col-span-1">
            <h4 className={cn("text-[11px] md:text-xs font-bold uppercase tracking-wider mb-2 md:mb-3.5", isDark ? "text-white" : "text-[#0B0816]")}>
              Company
            </h4>
            <ul className="space-y-1 md:space-y-2">
              {NAV_ITEMS.find(item => item.dropdown)?.subItems.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={cn(
                      "text-[12px] md:text-[13px] transition-colors duration-200",
                      isDark ? "text-muted-foreground hover:text-white" : "text-slate-600 hover:text-[#0B0816]"
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/tutorials"
                  className={cn(
                    "text-[12px] md:text-[13px] transition-colors duration-200",
                    isDark ? "text-muted-foreground hover:text-white" : "text-slate-600 hover:text-[#0B0816]"
                  )}
                >
                  Video Tutorials
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div className="col-span-1">
            <h4 className={cn("text-[11px] md:text-xs font-bold uppercase tracking-wider mb-2 md:mb-3.5", isDark ? "text-white" : "text-[#0B0816]")}>
              Products
            </h4>
            <ul className="space-y-1 md:space-y-2">
              <li>
                <Link
                  to="/softwares/reckon-mart"
                  className={cn(
                    "text-[12px] md:text-[13px] transition-colors duration-200",
                    isDark ? "text-muted-foreground hover:text-white" : "text-slate-600 hover:text-[#0B0816]"
                  )}
                >
                  Reckon-Mart
                </Link>
              </li>
              <li>
                <Link
                  to="/softwares/reckon-suvidha"
                  className={cn(
                    "text-[12px] md:text-[13px] transition-colors duration-200",
                    isDark ? "text-muted-foreground hover:text-white" : "text-slate-600 hover:text-[#0B0816]"
                  )}
                >
                  Reckon-Suvidha
                </Link>
              </li>
              <li>
                <Link
                  to="/softwares/reckon-seller"
                  className={cn(
                    "text-[12px] md:text-[13px] transition-colors duration-200",
                    isDark ? "text-muted-foreground hover:text-white" : "text-slate-600 hover:text-[#0B0816]"
                  )}
                >
                  Reckon-Seller
                </Link>
              </li>
              <li>
                <Link
                  to="/softwares/reckon-bizview"
                  className={cn(
                    "text-[12px] md:text-[13px] transition-colors duration-200",
                    isDark ? "text-muted-foreground hover:text-white" : "text-slate-600 hover:text-[#0B0816]"
                  )}
                >
                  Reckon-BizView
                </Link>
              </li>
              <li>
                <Link to="/softwares" className="inline-flex items-center gap-1 text-[12px] md:text-[13px] text-accent hover:text-accent-light transition-colors duration-200">
                  All Products <ArrowUpRight className="w-3 h-3 md:w-3.5 md:h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Industries */}
          <div className="col-span-2 md:col-span-1">
            <h4 className={cn("text-[11px] md:text-xs font-bold uppercase tracking-wider mb-2 md:mb-3.5", isDark ? "text-white" : "text-[#0B0816]")}>
              Industries
            </h4>
            <ul className="space-y-1 md:space-y-2">
              {VERTICALS.slice(0, 7).map((v) => (
                <li key={v.slug}>
                  <Link
                    to={`/softwares/${v.slug}`}
                    className={cn(
                      "text-[12px] md:text-[13px] transition-colors duration-200",
                      isDark ? "text-muted-foreground hover:text-white" : "text-slate-600 hover:text-[#0B0816]"
                    )}
                  >
                    {v.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/softwares" className="inline-flex items-center gap-1 text-[12px] md:text-[13px] text-accent hover:text-accent-light transition-colors duration-200">
                  All Industries <ArrowUpRight className="w-3 h-3 md:w-3.5 md:h-3.5" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={cn("border-t", isDark ? "border-white/10" : "border-[#0B0816]/10")}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 md:py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 md:gap-3">
            <p className={cn("text-[10px] md:text-[11px]", isDark ? "text-muted-foreground" : "text-slate-500")}>
              © {currentYear} Reckon Sales Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className={cn(
                  "text-[10px] md:text-[11px] transition-colors",
                  isDark ? "text-muted-foreground hover:text-white" : "text-slate-500 hover:text-[#0B0816]"
                )}
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className={cn(
                  "text-[10px] md:text-[11px] transition-colors",
                  isDark ? "text-muted-foreground hover:text-white" : "text-slate-500 hover:text-[#0B0816]"
                )}
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
