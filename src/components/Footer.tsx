import { Instagram, Facebook, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoWhite from '../assets/HighQ_BisonTallow_White_Transparent_(1).png';

interface FooterLink {
  label: string;
  href?: string;
  to?: string;
}

const NAVIGATE_LINKS: FooterLink[] = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Products', to: '/products' },
  { label: 'Where to Buy', to: '/where-to-buy' },
  { label: 'Contact Us', to: '/contact' },
];

const RETAILER_LINKS: FooterLink[] = [
  { label: 'Sell Our Products', to: '/contact' },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-midnight pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-12 border-b border-white/10">
          <div>
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <img
                src={logoWhite}
                alt="High Q Bison Tallow"
                className="h-14 w-auto mb-5"
              />
            </Link>
            <p className="font-body text-sm text-white/40 leading-relaxed">
              Luxurious. Natural. Traditional.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://www.instagram.com/highqtallow/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-[10px] bg-white/8 hover:bg-lavender/20 flex items-center justify-center transition-all duration-300 group"
                aria-label="Instagram"
              >
                <Instagram size={16} className="text-white/50 group-hover:text-lavender" />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-[10px] bg-white/8 hover:bg-lavender/20 flex items-center justify-center transition-all duration-300 group"
                aria-label="Facebook"
              >
                <Facebook size={16} className="text-white/50 group-hover:text-lavender" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-white/60 mb-5">
              Navigate
            </h4>
            <ul className="space-y-3">
              {NAVIGATE_LINKS.map((link) => (
                <li key={link.label}>
                  {link.to ? (
                    <Link
                      to={link.to}
                      onClick={() => window.scrollTo(0, 0)}
                      className="font-body text-sm text-white/40 hover:text-white transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className="font-body text-sm text-white/40 hover:text-white transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-white/60 mb-5">
              For Retailers
            </h4>
            <ul className="space-y-3">
              {RETAILER_LINKS.map((link) => (
                <li key={link.label}>
                  {link.to ? (
                    <Link
                      to={link.to}
                      onClick={() => window.scrollTo(0, 0)}
                      className={`font-body text-sm transition-colors duration-300 ${
                        link.label === 'Sell Our Products'
                          ? 'text-lavender/80 hover:text-lavender font-medium'
                          : 'text-white/40 hover:text-white'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className={`font-body text-sm transition-colors duration-300 ${
                        link.label === 'Sell Our Products'
                          ? 'text-lavender/80 hover:text-lavender font-medium'
                          : 'text-white/40 hover:text-white'
                      }`}
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-white/60 mb-5">
              Get in Touch
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:8558399099"
                  className="flex items-center gap-3 font-body text-sm text-white/40 hover:text-white transition-colors duration-300"
                >
                  <Phone size={14} className="text-white/30 flex-shrink-0" />
                  855-839-9099
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@highqtallow.com"
                  className="flex items-center gap-3 font-body text-sm text-white/40 hover:text-white transition-colors duration-300"
                >
                  <Mail size={14} className="text-white/30 flex-shrink-0" />
                  info@highqtallow.com
                </a>
              </li>
              <li className="flex items-start gap-3 font-body text-sm text-white/40">
                <MapPin size={14} className="text-white/30 flex-shrink-0 mt-0.5" />
                Lethbridge, Alberta, Canada
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col items-center gap-3">
          <div className="flex items-center gap-4">
            <Link
              to="/privacy-policy"
              onClick={() => window.scrollTo(0, 0)}
              className="font-body text-xs text-white/35 hover:text-white/60 transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <span className="text-white/15">|</span>
            <Link
              to="/terms-and-conditions"
              onClick={() => window.scrollTo(0, 0)}
              className="font-body text-xs text-white/35 hover:text-white/60 transition-colors duration-300"
            >
              Terms & Conditions
            </Link>
          </div>
          <p className="font-body text-xs text-white/25">
            &copy; {new Date().getFullYear()} High Q Bison Tallow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
