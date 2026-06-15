import { Link } from 'react-router-dom';
import { TOP_BAR_LINKS, CONTACT_INFO } from '@/data/navigation';
import { ExternalLink, Phone, Mail } from 'lucide-react';

export default function TopBar() {
  return (
    <div className="bg-secondary text-secondary-foreground text-sm hidden md:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-9">
          {/* Left: contact info */}
          <div className="flex items-center gap-5">
            <a
              href={`tel:${CONTACT_INFO.phone}`}
              className="flex items-center gap-1.5 text-muted-foreground hover:text-white transition-colors duration-200"
            >
              <Phone className="w-3 h-3" />
              {CONTACT_INFO.phone}
            </a>
            <a
              href={`mailto:${CONTACT_INFO.salesEmail}`}
              className="flex items-center gap-1.5 text-muted-foreground hover:text-white transition-colors duration-200"
            >
              <Mail className="w-3 h-3" />
              {CONTACT_INFO.salesEmail}
            </a>
          </div>

          {/* Right: nav links */}
          <div className="flex items-center gap-6">
            {TOP_BAR_LINKS.map((link) =>
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-muted-foreground hover:text-white transition-colors duration-200"
                >
                  {link.label}
                  <ExternalLink className="w-3 h-3" />
                </a>
              ) : (
                <Link
                  key={link.label}
                  to={link.path}
                  className="text-muted-foreground hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
