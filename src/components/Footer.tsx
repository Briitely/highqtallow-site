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
      className="w-7 h-7 flex-shrink-0"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 375 375"
      aria-hidden="true"
    >
      <path
        fill="#940f18"
        d="M 176.816406 371.6875 L 179.839844 285.699219 C 179.851562 285.378906 179.734375 285.0625 179.511719 284.824219 L 178.976562 284.246094 C 178.351562 283.5625 177.449219 283.171875 176.511719 283.171875 C 176.316406 283.171875 176.117188 283.191406 175.925781 283.222656 L 93.683594 297.753906 L 104.546875 264.964844 C 105.667969 261.589844 104.445312 257.945312 101.507812 255.890625 L 14.175781 194.820312 L 39.941406 183.128906 C 40.5625 182.847656 40.871094 182.179688 40.683594 181.542969 L 21.914062 117.976562 L 79.828125 131.628906 C 79.9375 131.652344 80.050781 131.667969 80.160156 131.667969 C 80.753906 131.667969 81.433594 131.25 81.523438 130.476562 L 84.960938 101.28125 L 126.414062 141.144531 C 126.941406 141.648438 127.542969 141.90625 128.210938 141.90625 C 129.003906 141.90625 129.824219 141.53125 130.339844 140.921875 C 130.820312 140.355469 130.996094 139.667969 130.863281 138.882812 L 116.472656 53.59375 L 149.339844 68.941406 C 150.238281 69.359375 151.1875 69.570312 152.167969 69.570312 C 154.703125 69.570312 156.976562 68.183594 158.101562 65.945312 L 187.5 7.417969 L 216.898438 65.945312 C 218.019531 68.183594 220.296875 69.570312 222.832031 69.570312 C 223.8125 69.570312 224.765625 69.359375 225.660156 68.941406 L 258.527344 53.59375 L 244.136719 138.882812 C 244 139.667969 244.175781 140.355469 244.660156 140.921875 C 245.175781 141.53125 245.992188 141.90625 246.789062 141.90625 C 247.457031 141.90625 248.058594 141.648438 248.582031 141.144531 L 290.039062 101.28125 L 293.476562 130.476562 C 293.566406 131.25 294.246094 131.667969 294.839844 131.667969 C 294.949219 131.667969 295.058594 131.652344 295.171875 131.628906 L 353.085938 117.976562 L 334.316406 181.542969 C 334.128906 182.179688 334.441406 182.847656 335.058594 183.128906 L 360.824219 194.820312 L 273.492188 255.890625 C 270.554688 257.945312 269.332031 261.589844 270.449219 264.964844 L 281.3125 297.753906 L 199.074219 283.222656 C 198.882812 283.191406 198.683594 283.171875 198.484375 283.171875 C 197.546875 283.171875 196.648438 283.5625 196.023438 284.246094 L 195.488281 284.824219 C 195.265625 285.0625 195.148438 285.378906 195.160156 285.699219 L 198.183594 371.6875 L 176.816406 371.6875"
      />
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

          <div class="flex flex-col items-center justify-end text-center lg:items-center lg:text-center">

  <!-- Centered Leaf + Title -->
  <div class="flex items-center justify-center gap-3 mb-2">
    <!-- Maple Leaf -->
    <svg width="22" height="22" viewBox="0 0 24 24" fill="#940f18" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L14.5 8H21L15.5 12L18 20L12 15.5L6 20L8.5 12L3 8H9.5L12 2Z"/>
    </svg>

    <h4 class="font-body text-xs font-semibold uppercase tracking-[0.2em] text-white">
      Proud Product Of
    </h4>
  </div>

  <!-- Location -->
  <p class="font-body text-sm text-white/50 whitespace-nowrap">
    Lethbridge, Alberta, Canada
  </p>

</div>
              </div>
            </div>
            <div className="mt-5 self-start">
              <h4 className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-white/60 mb-4">
                For Retailers
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/contact"
                    onClick={() => window.scrollTo(0, 0)}
                    className="font-body text-sm transition-colors duration-300 text-lavender/80 hover:text-lavender font-medium"
                  >
                    Sell Our Products
                  </Link>
                </li>
              </ul>
            </div>
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
