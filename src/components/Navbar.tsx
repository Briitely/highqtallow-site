import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import logoWhite from '../assets/HighQ_BisonTallow_White_Transparent_(1).png';
import { SHOP_URL } from '../config/shop';

interface NavLink {
  label: string;
  href?: string;
  to?: string;
}

const NAV_LINKS: NavLink[] = [
  { label: 'About Us', to: '/about' },
  { label: 'Products', to: '/products' },
  { label: 'Where to Buy', to: '/where-to-buy' },
  { label: 'Contact Us', to: '/contact' },
];

interface NavbarProps {
  forceOpaque?: boolean;
}

export default function Navbar({ forceOpaque = false }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled || forceOpaque
          ? 'bg-midnight/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between relative z-10">
        <Link to="/" className="flex-shrink-0">
          <img
            src={logoWhite}
            alt="High Q Bison Tallow"
            className="h-14 md:h-16 w-auto"
          />
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) =>
            link.to ? (
              <Link
                key={link.label}
                to={link.to}
                className="font-body text-sm font-medium text-white/80 hover:text-white transition-colors duration-300 tracking-wide"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="font-body text-sm font-medium text-white/80 hover:text-white transition-colors duration-300 tracking-wide"
              >
                {link.label}
              </a>
            )
          )}
          <Link
            to="/contact#sell-our-product"
            className="font-body text-xs font-semibold uppercase tracking-widest text-lavender hover:text-lavender-light transition-colors duration-300"
          >
            Sell Our Products
          </Link>
        </div>

        <div className="hidden lg:block">
          <Link
            to={SHOP_URL}
            className="inline-flex items-center gap-2 bg-lavender hover:bg-lavender-dark text-midnight font-body text-sm font-semibold px-6 py-2.5 rounded-[10px] transition-all duration-300 hover:shadow-lg hover:shadow-lavender/25"
          >
            <ShoppingBag size={16} />
            Shop
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(true)}
          className="lg:hidden text-white p-2"
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </div>

      {createPortal(
        <div
          className={`lg:hidden fixed inset-0 w-screen h-screen backdrop-blur-lg transition-all duration-500 ${
            mobileOpen
              ? 'opacity-100 pointer-events-auto'
              : 'opacity-0 pointer-events-none'
          }`}
          style={{ zIndex: 9999, backgroundColor: 'rgba(30, 27, 41, 0.98)' }}
          onClick={() => setMobileOpen(false)}
        >
          <div
            className="flex flex-col items-center justify-center h-full gap-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-5 right-6 text-white p-2"
              aria-label="Close menu"
            >
              <X size={28} />
            </button>

            {NAV_LINKS.map((link, i) =>
              link.to ? (
                <Link
                  key={link.label}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className="font-body text-xl font-medium text-white/90 hover:text-white transition-all duration-300"
                  style={{ transitionDelay: mobileOpen ? `${i * 80}ms` : '0ms' }}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-body text-xl font-medium text-white/90 hover:text-white transition-all duration-300"
                  style={{ transitionDelay: mobileOpen ? `${i * 80}ms` : '0ms' }}
                >
                  {link.label}
                </a>
              )
            )}
            <Link
              to="/contact#sell-our-product"
              onClick={() => setMobileOpen(false)}
              className="font-body text-sm font-semibold uppercase tracking-widest text-lavender hover:text-lavender-light transition-colors duration-300"
            >
              Sell Our Products
            </Link>
            <Link
              to={SHOP_URL}
              onClick={() => setMobileOpen(false)}
              className="inline-flex items-center gap-2 bg-lavender hover:bg-lavender-dark text-midnight font-body text-base font-semibold px-8 py-3 rounded-[10px] transition-all duration-300 mt-4"
            >
              <ShoppingBag size={18} />
              Shop
            </Link>
          </div>
        </div>,
        document.body
      )}
    </nav>
  );
}
