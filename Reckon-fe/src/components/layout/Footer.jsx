import { useState } from 'react';
import { Link } from 'react-router-dom';
import { NAV_ITEMS, SOCIAL_LINKS, CONTACT_INFO } from '@/data/navigation';
import { BILLING_NAV_ITEMS } from '@/data/billingData';
import {
  Mail,
  MapPin,
  Globe,
  Phone,
  Clock
} from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { useAdminStore } from '@/hooks/useAdminStore';
import { cn } from '@/lib/utils';

// Brand icons are not provided by lucide-react v1+
const FacebookIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const GoogleIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M20.28 10.3c.08.56.12 1.13.12 1.7 0 5.12-3.44 8.78-8.6 8.78A8.8 8.8 0 0 1 3 12c0-4.86 3.94-8.8 8.8-8.8 2.38 0 4.38.87 5.93 2.32l-2.4 2.4c-.66-.63-1.81-1.37-3.53-1.37-3.03 0-5.5 2.51-5.5 5.6 0 3.09 2.47 5.6 5.5 5.6 3.51 0 4.82-2.52 5.03-3.83H11.8v-3.67h8.48z" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const YoutubeIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17z" />
    <polygon points="10 15 15 12 10 9" />
  </svg>
);

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

  const socialIconClass = cn(
    "p-2 rounded-full border transition-all duration-300 hover:scale-110 active:scale-95",
    isDark
      ? "border-white/10 bg-white/5 text-white/70 hover:bg-primary hover:text-white hover:border-primary"
      : "border-slate-200 bg-slate-50 text-slate-600 hover:bg-primary hover:text-white hover:border-primary"
  );

  const linkClass = cn(
    "text-[13px] transition-all duration-200 hover:translate-x-1 inline-block",
    isDark ? "text-muted-foreground hover:text-white" : "text-slate-600 hover:text-[#0B0816]"
  );

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
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Brand Column */}
          <div className="flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-2.5 group">
              <img
                src={logoUrl}
                alt="Reckon Logo"
                className="w-9 h-9 object-contain rounded-xl bg-white p-1.5 shadow-sm border border-black/5"
              />
              <div>
                <span className={cn("text-base font-bold transition-colors", isDark ? "text-white" : "text-[#0B0816]")}>
                  Reckon
                </span>
                <p className={cn("text-[9px] uppercase tracking-widest leading-none mt-0.5 font-bold", isDark ? "text-white/50" : "text-slate-500")}>
                  Sales Pvt. Ltd.
                </p>
              </div>
            </Link>
            <p className={cn("text-[13px] leading-relaxed", isDark ? "text-muted-foreground" : "text-slate-600")}>
              India's leading ERP & billing software solutions provider, serving 1000+ businesses across 16+ industries since 2009.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-2 mt-2">
              <a href={SOCIAL_LINKS.facebook} className={socialIconClass} aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a href={SOCIAL_LINKS.google} className={socialIconClass} aria-label="Google" target="_blank" rel="noopener noreferrer">
                <GoogleIcon className="w-4 h-4" />
              </a>
              <a href={SOCIAL_LINKS.linkedin} className={socialIconClass} aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a href={SOCIAL_LINKS.instagram} className={socialIconClass} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a href={SOCIAL_LINKS.youtube} className={socialIconClass} aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                <YoutubeIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className={cn("text-xs font-bold uppercase tracking-wider mb-4", isDark ? "text-white" : "text-[#0B0816]")}>
              Company
            </h4>
            <ul className="space-y-2.5">
              {NAV_ITEMS.find(item => item.label === 'Company')?.subItems.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/tutorials" className={linkClass}>
                  Video Tutorials
                </Link>
              </li>
            </ul>
          </div>

          {/* Software Solutions */}
          <div>
            <h4 className={cn("text-xs font-bold uppercase tracking-wider mb-4", isDark ? "text-white" : "text-[#0B0816]")}>
              Solutions
            </h4>
            <ul className="space-y-2.5">
              {BILLING_NAV_ITEMS.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className={cn("text-xs font-bold uppercase tracking-wider mb-4", isDark ? "text-white" : "text-[#0B0816]")}>
              Contact Us
            </h4>
            <ul className="space-y-3.5 text-[13px]">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-primary" />
                <span className={isDark ? "text-muted-foreground" : "text-slate-700 font-medium"}>{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 shrink-0 mt-0.5 text-primary" />
                <div className="flex flex-col">
                  <span className={cn("text-[10px] uppercase tracking-wider font-bold mb-0.5", isDark ? "text-white/60" : "text-slate-500")}>Sales Enquiry</span>
                  <a href={`mailto:${CONTACT_INFO.salesEmail}`} className={cn("transition-colors font-medium", isDark ? "text-muted-foreground hover:text-white" : "text-slate-700 hover:text-[#0B0816]")}>
                    {CONTACT_INFO.salesEmail}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 shrink-0 mt-0.5 text-primary" />
                <div className="flex flex-col">
                  <span className={cn("text-[10px] uppercase tracking-wider font-bold mb-0.5", isDark ? "text-white/60" : "text-slate-500")}>Support Enquiry</span>
                  <a href={`mailto:${CONTACT_INFO.supportEmail}`} className={cn("transition-colors font-medium", isDark ? "text-muted-foreground hover:text-white" : "text-slate-700 hover:text-[#0B0816]")}>
                    {CONTACT_INFO.supportEmail}
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Support & Helpline */}
          <div>
            <h4 className={cn("text-xs font-bold uppercase tracking-wider mb-4", isDark ? "text-white" : "text-[#0B0816]")}>
              Support & Helpline
            </h4>
            <ul className="space-y-3.5 text-[13px]">
              <li className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 shrink-0 mt-1 text-primary" />
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col">
                    <span className={cn("text-[10px] uppercase tracking-wider font-bold mb-0.5", isDark ? "text-white/60" : "text-slate-500")}>Landline</span>
                    <a href={`tel:${CONTACT_INFO.phone}`} className={cn("font-semibold text-sm transition-colors", isDark ? "text-white hover:text-primary" : "text-[#0B0816] hover:text-primary")}>
                      {CONTACT_INFO.phone}
                    </a>
                  </div>
                  <div className="flex flex-col">
                    <span className={cn("text-[10px] uppercase tracking-wider font-bold mb-0.5", isDark ? "text-white/60" : "text-slate-500")}>Helplines</span>
                    <div className="grid grid-cols-1 gap-1">
                      {CONTACT_INFO.helpline.map((num) => (
                        <a key={num} href={`tel:${num.replace(/\s/g, '')}`} className={cn("font-medium transition-colors", isDark ? "text-muted-foreground hover:text-white" : "text-slate-700 hover:text-[#0B0816]")}>
                          {num}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-2.5 pt-2.5 border-t border-border/40">
                <Clock className="w-4 h-4 shrink-0 mt-0.5 text-primary" />
                <div className="flex flex-col space-y-0.5">
                  <span className={cn("text-[10px] uppercase tracking-wider font-bold mb-0.5", isDark ? "text-white/60" : "text-slate-500")}>Business Hours</span>
                  <span className={cn("text-xs font-medium", isDark ? "text-muted-foreground" : "text-slate-700")}>{CONTACT_INFO.timings.weekdays}</span>
                  <span className={cn("text-xs font-medium", isDark ? "text-muted-foreground" : "text-slate-700")}>{CONTACT_INFO.timings.sunday}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className={cn("border-t", isDark ? "border-white/10" : "border-[#0B0816]/10")}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className={cn("text-[11px]", isDark ? "text-muted-foreground" : "text-slate-500")}>
              © {currentYear} Reckon Sales Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className={cn(
                  "text-[11px] transition-colors",
                  isDark ? "text-muted-foreground hover:text-white" : "text-slate-500 hover:text-[#0B0816]"
                )}
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className={cn(
                  "text-[11px] transition-colors",
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
