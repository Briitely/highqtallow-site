import { useEffect, useState } from 'react';
import { ShoppingBag } from 'lucide-react';
import headerBg from '../../assets/ChatGPT_Image_Feb_16,_2026,_04_38_07_PM.png';
import { SHOP_URL } from '../../config/shop';

export default function WhereToBuyHero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-[70vh] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={headerBg}
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-olive-earth/95 via-olive-earth/70 to-olive-earth/40" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-olive-earth-dark/50" />

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-3xl">
          <h1
            className={`font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.15] transition-all duration-1000 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Where to Buy
          </h1>

          <p
            className={`font-body text-lg md:text-xl text-white/90 mt-8 max-w-2xl leading-relaxed transition-all duration-1000 delay-300 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            High Q™ Tallow is proudly stocked by independent retailers across
            Alberta and beyond. We believe great products belong in great local
            shops&nbsp;&mdash; and we're committed to supporting the small
            businesses that strengthen our communities.
          </p>

          <p
            className={`font-body text-lg md:text-xl text-white/90 mt-4 max-w-2xl leading-relaxed transition-all duration-1000 delay-400 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Don't see a shop near you? You can always order directly from us
            online.
          </p>

          <div
            className={`mt-10 transition-all duration-1000 delay-500 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <a
              href={SHOP_URL}
              className="inline-flex items-center justify-center gap-2 bg-lavender hover:bg-lavender-dark text-midnight font-body text-sm font-semibold px-8 py-3.5 rounded-[10px] transition-all duration-300 hover:shadow-xl hover:shadow-lavender/20"
            >
              <ShoppingBag size={16} />
              Shop Online
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
