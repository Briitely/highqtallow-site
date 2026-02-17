import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function AboutNow() {
  const ref1 = useScrollReveal<HTMLDivElement>();
  const ref2 = useScrollReveal<HTMLDivElement>();

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-6">
        <div ref={ref1} className="scroll-reveal">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-olive-earth/60 mb-4">
            Where We Are Now
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-midnight leading-tight">
            Every batch starts with Alberta bison tallow rendered the way I
            believe it should be.
          </h2>

          <p className="font-body text-base md:text-lg text-midnight/70 leading-relaxed mt-8">
            Today, High Q Tallow creates three balms&nbsp;&mdash; Saving Face,
            Say No to Crack, and Don't Be Rash&nbsp;&mdash; and four soaps with
            names that reflect the brand's personality: Zest Intentions, Herb
            Your Enthusiasm, The Dude, and Orange You Glad.
          </p>

          <p className="font-body text-base md:text-lg text-midnight/70 leading-relaxed mt-6">
            Every product is made in small batches in the High Q Kitchen. And
            every formula exists because of research, testing, and real-world
            feedback.
          </p>
        </div>

        <div ref={ref2} className="scroll-reveal mt-12">
          <blockquote className="py-8 border-t border-b border-midnight/10">
            <p className="font-display text-xl md:text-2xl italic text-midnight/80 text-center">
              I love what I do. I love this brand. And I love the fact that it
              all started because I just wanted to fix my own hands.
            </p>
          </blockquote>

          <div className="mt-10 text-center">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 bg-lavender hover:bg-lavender-dark text-midnight font-body text-sm font-semibold px-8 py-3.5 rounded-[10px] transition-all duration-300 hover:shadow-xl hover:shadow-lavender/20 group"
            >
              Explore the Products
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
