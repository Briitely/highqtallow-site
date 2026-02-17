import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function AboutVision() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section className="bg-midnight py-20 md:py-28">
      <div ref={ref} className="scroll-reveal max-w-3xl mx-auto px-6 text-center">
        <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-lavender/60 mb-4">
          What I'm Building
        </p>
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
          Skincare so thoughtfully crafted that people choose it because it
          works&nbsp;&mdash; not just because it's tallow.
        </h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-[12px] border border-white/10 p-8 transition-all duration-300 hover:bg-white/[0.07] hover:border-white/20">
            <p className="font-display text-lg md:text-xl text-white/95 text-center leading-relaxed">
              Traditional ingredients with modern results.
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-[12px] border border-white/10 p-8 transition-all duration-300 hover:bg-white/[0.07] hover:border-white/20">
            <p className="font-display text-lg md:text-xl text-white/95 text-center leading-relaxed">
              Nothing unnecessary. Everything intentional.
            </p>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-[12px] border border-white/10 p-8 transition-all duration-300 hover:bg-white/[0.07] hover:border-white/20">
            <p className="font-display text-lg md:text-xl text-white/95 text-center leading-relaxed">
              Made slowly to keep it all natural.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
