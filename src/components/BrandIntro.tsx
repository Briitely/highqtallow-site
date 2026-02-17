import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function BrandIntro() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section id="about" className="bg-white py-20 md:py-28">
      <div
        ref={ref}
        className="scroll-reveal max-w-3xl mx-auto px-6 text-center"
      >
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-midnight leading-tight">
          Luxury That Doesn't Take{' '}
          <br className="hidden sm:block" />
          Itself Too Seriously
        </h2>

        <p className="font-body text-base md:text-lg text-midnight/65 mt-8 leading-relaxed max-w-2xl mx-auto">
          High Q is a premium skincare line born in Lethbridge, Alberta -- where
          the prairies meet innovation. We harness the remarkable restorative
          power of bison tallow to create products that actually work, wrapped
          in packaging that makes you smile.
        </p>

        <blockquote className="mt-10 py-6 border-t border-b border-midnight/10">
          <p className="font-display text-xl md:text-2xl italic text-midnight/80">
            "Honest ingredients. Intelligent humor."
          </p>
        </blockquote>

        <Link
          to="/about"
          className="inline-flex items-center gap-2 font-body text-sm font-semibold text-olive-earth hover:text-olive-earth-dark mt-8 transition-colors duration-300 group"
        >
          Learn Our Story
          <ArrowRight
            size={14}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </div>
    </section>
  );
}
