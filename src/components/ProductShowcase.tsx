import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import heroImage from '../assets/complete_product_hero.png';
import { SHOP_URL } from '../config/shop';

export default function ProductShowcase() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="products" className="bg-warm py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="scroll-reveal text-center mb-12">
          <span className="font-body text-xs font-semibold uppercase tracking-[0.25em] text-olive-earth/60">
            Small-Batch Skincare
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-midnight mt-3">
            Our Products
          </h2>
        </div>

        <div className="relative group rounded-[10px] overflow-hidden shadow-xl">
          <img
            src={heroImage}
            alt="High Q Bison Tallow complete product lineup"
            className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.02]"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <a
              href={SHOP_URL}
              className="inline-flex items-center gap-2 bg-white hover:bg-cream text-midnight font-body text-sm md:text-base font-semibold px-8 md:px-10 py-3.5 md:py-4 rounded-[10px] transition-all duration-300 hover:shadow-2xl hover:scale-105 group/btn"
            >
              View All Products
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover/btn:translate-x-1"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
