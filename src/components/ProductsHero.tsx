import { useEffect, useState } from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import headerBg from '../assets/products-hero-bg.png';
import { SHOP_URL } from '../config/shop';

export default function ProductsHero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-[75vh] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={headerBg}
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-olive-earth/90 via-olive-earth/60 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-olive-earth-dark/40" />

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-16 md:pt-40 md:pb-24 lg:pt-48 lg:pb-32">
        <div className="max-w-3xl">
          <h1
            className={`font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] transition-all duration-1000 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            The Collection
          </h1>

          <p
            className={`font-body text-base md:text-lg text-white/80 mt-8 max-w-2xl leading-relaxed transition-all duration-1000 delay-300 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Scent isn't the only difference. Each balm is purposefully formulated
            with a specific active ingredient for a specific skin concern — the way
            a premium skincare line should be, not just the same base with a
            different fragrance.
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 mt-10 transition-all duration-1000 delay-500 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <Link
              to="/where-to-buy"
              className="inline-flex items-center justify-center gap-2 bg-lavender hover:bg-lavender-dark text-midnight font-body text-sm font-semibold px-8 py-3.5 rounded-[10px] transition-all duration-300 hover:shadow-xl hover:shadow-lavender/20 group"
            >
              <MapPin size={16} />
              Find a Retailer
            </Link>
            <a
              href={SHOP_URL}
              className="inline-flex items-center justify-center gap-2 border-2 border-white/40 hover:border-white text-white font-body text-sm font-semibold px-8 py-3.5 rounded-[10px] transition-all duration-300 hover:bg-white/10 group"
            >
              Buy Now
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
