import { useScrollReveal } from '../../hooks/useScrollReveal';
import packagingImg from '../../assets/IMG_2847.jpeg';

export default function AboutOrigin() {
  const ref1 = useScrollReveal<HTMLDivElement>();
  const ref2 = useScrollReveal<HTMLDivElement>();
  const ref3 = useScrollReveal<HTMLDivElement>();

  return (
    <section className="bg-warm py-20 md:py-28">
      <div className="max-w-3xl mx-auto px-6">
        <div ref={ref1} className="scroll-reveal">
          <p className="font-body text-base md:text-lg text-midnight/70 leading-relaxed">
            I'd already reversed my type 2 diabetes through food and movement,
            which taught me something important: we can do more for ourselves
            than we think. Once you experience that kind of change, it becomes
            impossible not to look at everything&nbsp;&mdash; including
            skincare&nbsp;&mdash; with a different level of curiosity and
            intention.
          </p>

          <p className="font-body text-base md:text-lg text-midnight/70 leading-relaxed mt-6">
            So when a local company handed me a bag of bison kidney fat scraps
            one day, I didn't see waste. I saw potential. As a chef, I'm wired
            to ask, "How do I get the best out of this?" As someone obsessed
            with nutrition, I'm wired to understand ingredients. And as someone
            who genuinely enjoys the process, I'm wired to keep refining until
            something feels right.
          </p>

          <p className="font-body text-base md:text-lg text-midnight/70 leading-relaxed mt-6">
            So I rendered it. Slowly. Carefully. The way you'd approach a French
            sauce&nbsp;&mdash; not because anyone asked me to, but because
            that's how I've always worked.
          </p>
        </div>

        <div ref={ref2} className="scroll-reveal mt-12">
          <p className="font-display text-2xl md:text-3xl font-bold text-midnight leading-snug">
            Then I made a balm for myself.
          </p>

          <p className="font-body text-base md:text-lg text-midnight/70 leading-relaxed mt-6">
            The first time I used it on my cracked chef hands, I actually
            laughed. Not because it was funny, but because it worked so
            well&nbsp;&mdash; and because the answer had been sitting in a bag
            of bison fat the whole time.
          </p>

          <blockquote className="my-10 py-6 border-l-4 border-lavender pl-6">
            <p className="font-display text-xl md:text-2xl italic text-midnight/80">
              That moment changed everything.
            </p>
          </blockquote>
        </div>

        <div ref={ref3} className="scroll-reveal mt-12 flex justify-center">
          <div className="max-w-sm">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img
                src={packagingImg}
                alt="The original High Q Bison Tallow packaging — early batches of Say No to Crack"
                className="w-full h-auto"
                loading="lazy"
              />
            </div>
            <p className="font-body text-sm text-midnight/50 mt-4 text-center italic">
              The proof is in the tallow&nbsp;&mdash; one foot treated with
              Say No to Crack, one foot untreated.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
