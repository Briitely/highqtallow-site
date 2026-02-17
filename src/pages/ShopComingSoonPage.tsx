import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, ShoppingBag } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ShopComingSoonPage() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      <section className="relative min-h-[80vh] flex items-center justify-center bg-midnight overflow-hidden">
        <div className="absolute inset-0 opacity-[0.04]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }} />
        </div>

        <div className="relative max-w-2xl mx-auto px-6 text-center">
          <div
            className={`inline-flex items-center gap-2 bg-lavender/10 border border-lavender/20 rounded-full px-5 py-2 mb-8 transition-all duration-700 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            <ShoppingBag size={14} className="text-lavender" />
            <span className="font-body text-xs font-semibold text-lavender tracking-wide uppercase">
              Coming Soon
            </span>
          </div>

          <h1
            className={`font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.15] transition-all duration-1000 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Online Shop
            <br />
            Coming Soon
          </h1>

          <p
            className={`font-body text-base md:text-lg text-white/60 mt-6 max-w-lg mx-auto leading-relaxed transition-all duration-1000 delay-200 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            We're getting our online store ready. In the meantime, you can find High Q Tallow
            in select retailers across Alberta.
          </p>

          <div
            className={`mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-1000 delay-400 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <Link
              to="/where-to-buy"
              className="inline-flex items-center gap-2 bg-lavender hover:bg-lavender-dark text-midnight font-body text-sm font-semibold px-8 py-3.5 rounded-[10px] transition-all duration-300 hover:shadow-xl hover:shadow-lavender/20 group w-full sm:w-auto justify-center"
            >
              <MapPin size={16} />
              Find a Retailer
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              to="/products"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-white/40 text-white font-body text-sm font-semibold px-8 py-3.5 rounded-[10px] transition-all duration-300 hover:bg-white/5 group w-full sm:w-auto justify-center"
            >
              See the Products
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          <p
            className={`mt-10 font-body text-sm text-white/30 transition-all duration-1000 delay-[600ms] ${
              loaded ? 'opacity-100' : 'opacity-0'
            }`}
          >
            Questions?{' '}
            <Link
              to="/contact"
              className="text-white/50 hover:text-white/70 underline underline-offset-2 transition-colors duration-200"
            >
              Contact us
            </Link>
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
