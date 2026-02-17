import { Leaf, FlaskConical, Target } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const PROMISES = [
  {
    icon: Leaf,
    title: '100% Natural Ingredients',
    description: 'No synthetics, no fillers, no compromises.',
  },
  {
    icon: FlaskConical,
    title: 'Pure Bison Tallow',
    description: 'The highest concentration on the market.',
  },
  {
    icon: Target,
    title: 'Purpose-Built Formulas',
    description: 'Each balm is designed for a specific use case with added natural ingredients to support it.',
  },
];

export default function BrandPromise() {
  const ref = useScrollReveal<HTMLDivElement>();

  return (
    <section className="bg-white py-16 md:py-20 border-t border-gray-100">
      <div
        ref={ref}
        className="scroll-reveal max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16"
      >
        {PROMISES.map(({ icon: Icon, title, description }) => (
          <div key={title} className="flex flex-col items-center text-center group">
            <div className="w-14 h-14 rounded-[10px] bg-sage/10 flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-sage/20 group-hover:scale-110">
              <Icon size={26} className="text-sage-dark" strokeWidth={1.5} />
            </div>
            <h3 className="font-display text-lg font-semibold text-midnight mb-2">
              {title}
            </h3>
            <p className="font-body text-sm text-midnight/60 max-w-xs">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
