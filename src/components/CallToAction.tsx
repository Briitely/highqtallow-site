import { MapPin, Store } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function CallToAction() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="where-to-buy" className="bg-deep-plum py-20 md:py-28">
      <div
        ref={ref}
        className="scroll-reveal max-w-4xl mx-auto px-6 text-center"
      >
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
          Find High Q Near You
        </h2>
        <p className="font-body text-base md:text-lg text-white/60 mt-6 max-w-xl mx-auto leading-relaxed">
          Our products are available at select retailers across Alberta and
          beyond. Find a store near you or bring High Q to your shelves.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <Link
            to="/where-to-buy"
            className="inline-flex items-center gap-2 bg-lavender hover:bg-lavender-dark text-midnight font-body text-sm font-semibold px-8 py-3.5 rounded-[10px] transition-all duration-300 hover:shadow-xl hover:shadow-lavender/20 group"
          >
            <MapPin size={16} />
            Where to Buy
          </Link>
          <Link
            to="/contact#sell-our-product"
            className="inline-flex items-center gap-2 border-2 border-white/30 hover:border-white text-white font-body text-sm font-semibold px-8 py-3.5 rounded-[10px] transition-all duration-300 hover:bg-white/10 group"
          >
            <Store size={16} />
            Carry Our Products
          </Link>
        </div>
      </div>
    </section>
  );
}
