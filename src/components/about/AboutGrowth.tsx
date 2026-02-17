import { useScrollReveal } from '../../hooks/useScrollReveal';
import feetImg from '../../assets/IMG_3073_(1).jpg';

export default function AboutGrowth() {
  const ref1 = useScrollReveal<HTMLDivElement>();
  const ref2 = useScrollReveal<HTMLDivElement>();

  return (
    <section className="bg-warm py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref1} className="scroll-reveal mb-12">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-olive-earth/60 mb-4 max-w-3xl mx-auto">
            From Experiments to High Q
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-midnight leading-tight max-w-3xl mx-auto">
            What started as a personal experiment slowly grew into its own brand.
          </h2>
        </div>

        <div
          ref={ref2}
          className="scroll-reveal grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          <div>
            <p className="font-body text-base md:text-lg text-midnight/70 leading-relaxed">
              My first balm turned into a lineup. Those early batches turned into
              sales at a single store. And what started as a personal experiment
              slowly grew into its own brand&nbsp;&mdash; shaped by curiosity,
              trial and error, customer feedback, and a lot of late-night
              tinkering.
            </p>

            <p className="font-body text-base md:text-lg text-midnight/70 leading-relaxed mt-6">
              Along the way, I refined everything: the rendering process, the
              formulas, the jars, the labels, the textures, the scents. If
              something wasn't working, I changed it. If something could be
              improved, I improved it.
            </p>

            <p className="font-body text-base md:text-lg text-midnight/70 leading-relaxed mt-6">
              I never had the formal titles or the elegant pieces of paper, but
              I've always taken the work seriously. Maybe too seriously at
              times&nbsp;&mdash; but that's also why the products keep getting
              better.
            </p>
          </div>

          <div className="relative flex justify-center">
            <div className="max-w-xs">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img
                  src={feetImg}
                  alt="Results from using Say No to Crack — left foot treated, right foot untreated"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
              <p className="font-body text-sm text-midnight/50 mt-4 text-center italic">
                Where it all began&nbsp;&mdash; the original Say No to Crack
                packaging.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
