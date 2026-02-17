import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function AboutRendering() {
  const ref1 = useScrollReveal<HTMLDivElement>();
  const ref2 = useScrollReveal<HTMLDivElement>();

  return (
    <section className="bg-white py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-6">
        <div ref={ref1} className="scroll-reveal">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-olive-earth/60 mb-4">
            Why I Render the Way I Do
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-midnight leading-tight">
            Anyone can melt fat.{' '}
            <br className="hidden sm:block" />
            But not everyone treats it like a cosmetic ingredient.
          </h2>
        </div>

        <div ref={ref2} className="scroll-reveal mt-10">
          <p className="font-body text-base md:text-lg text-midnight/70 leading-relaxed">
            Early on, I learned that some rendering methods make tallow look
            nicer, but strip out the vitamins and nutrients that matter.
            Salt-water rendering gives you a clean-looking product&nbsp;&mdash;
            but at the cost of what your skin actually needs.
          </p>

          <p className="font-body text-base md:text-lg text-midnight/70 leading-relaxed mt-6">
            So I chose a dry-rendering and purification process that keeps those
            nutrients intact. It takes more time. More attention. More patience.
            But the result is simply better&nbsp;&mdash; period.
          </p>

          <div className="mt-10 p-8 bg-warm rounded-2xl">
            <p className="font-display text-lg md:text-xl italic text-midnight/80 text-center">
              This isn't about competing with anyone else. It's about making
              something I can stand behind.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
