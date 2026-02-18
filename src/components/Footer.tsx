import { Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoWhite from '../assets/HighQ_BisonTallow_White_Transparent_(1).png';

const NAVIGATE_LINKS = [
  { label: 'About Us', to: '/about' },
  { label: 'Products', to: '/products' },
  { label: 'Where to Buy', to: '/where-to-buy' },
];

function MapleLeaf() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="#940f18"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M12 2L14.5 8H21L15.5 12L18 20L12 15.5L6 20L8.5 12L3 8H9.5L12 2Z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer id="contact" className="bg-midnight pt-10 pb-6 relative">
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-8 border-b border-white/10 lg:items-end">
          <div className="flex flex-col">
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <img
                src={logoWhite}
                alt="High Q Bison Tallow"
                className="h-14 w-auto mb-4"
              />
            </Link>
            <p className="font-body text-sm text-white/40 leading-relaxed">
              Luxurious. Natural. Traditional.
            </p>
          </div>

          <div>
            <h4 className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-white/60 mb-4">
              Navigate
            </h4>
            <ul className="space-y-3">
              {NAVIGATE_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    onClick={() => window.scrollTo(0, 0)}
                    className="font-body text-sm text-white/40 hover:text-white transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center justify-end text-center lg:items-center lg:text-center">
            <div className="flex items-center justify-center gap-3 mb-2">
              <MapleLeaf />
              <h4 className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-white">
                Proud Product Of
              </h4>
            </div>
            <p className="font-body text-sm text-white/50 whitespace-nowrap">
              Lethbridge, Alberta, Canada
            </p>
          </div>

          <div>
            <h4 className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-white/60 mb-4">
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
            </ul>
          </div>
        </div>

        <div className="pt-5 flex flex-col items-center gap-2">
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
