import { useEffect, useState } from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import headerBg from '../assets/ChatGPT_Image_Feb_15,_2026,_01_55_56_PM.png';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-[85vh] overflow-hidden">
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
            Crafted with Alberta
            <br />
            Bison Tallow.
            <br />
            <span className="text-white/90">Pure. Natural. </span>
            <span className="relative inline-block">
              <span className="relative z-10">Resilient.</span>
              <span className="absolute inset-0 -inset-x-3 -inset-y-1 bg-lavender/90 rounded-[10px] -z-0" />
            </span>
          </h1>

          <p
            className={`font-body text-base md:text-lg text-white/70 mt-8 max-w-xl leading-relaxed transition-all duration-1000 delay-300 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Born from the land, perfected by science, and stubbornly better
            than beef. Small-batch skincare that's unapologetically{' '}<span className="whitespace-nowrap">High Q<span className="text-[0.6em] align-super font-semibold tracking-tight leading-none">&trade;</span></span>.
          </p>

          <p
            className={`font-body text-sm md:text-base text-white/50 mt-3 max-w-xl italic transition-all duration-1000 delay-400 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Alberta-made, M&eacute;tis-owned, and built on respect for the land.
          </p>

          <div
            className={`flex flex-col sm:flex-row gap-4 mt-10 transition-all duration-1000 delay-500 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <Link
              to="/products"
              className="inline-flex items-center justify-center gap-2 bg-lavender hover:bg-lavender-dark text-midnight font-body text-sm font-semibold px-8 py-3.5 rounded-[10px] transition-all duration-300 hover:shadow-xl hover:shadow-lavender/20 group"
            >
              Explore Products
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
            <Link
              to="/where-to-buy"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/40 hover:border-white text-white font-body text-sm font-semibold px-8 py-3.5 rounded-[10px] transition-all duration-300 hover:bg-white/10"
            >
              <MapPin size={16} />
              Find a Retailer
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
