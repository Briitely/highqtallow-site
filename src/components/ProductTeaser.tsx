import { useState, useEffect, useCallback } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { BALMS, SOAPS } from '../data/products';
import ProductCard from './ProductCard';

export default function ProductTeaser() {
  const balmsRef = useScrollReveal<HTMLDivElement>(0.1);
  const soapsRef = useScrollReveal<HTMLDivElement>(0.1);
  const [activeCard, setActiveCard] = useState<string | null>(null);

  const closeAll = useCallback(() => setActiveCard(null), []);

  useEffect(() => {
    document.addEventListener('click', closeAll);
    return () => document.removeEventListener('click', closeAll);
  }, [closeAll]);

  const handleToggle = (name: string) => {
    setActiveCard((prev) => (prev === name ? null : name));
  };

  return (
    <section id="products-grid" className="bg-warm py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-8">
          <h3 className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-midnight/40 mb-6 text-center md:text-left">
            Balms & Creams
          </h3>

          <div
            ref={balmsRef}
            className="scroll-reveal grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {BALMS.map((product) => (
              <ProductCard
                key={product.name}
                product={product}
                isOpen={activeCard === product.name}
                onToggle={() => handleToggle(product.name)}
              />
            ))}
          </div>
        </div>

        <div className="mt-14">
          <h3 className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-midnight/40 mb-6 text-center md:text-left">
            Soaps
          </h3>
          <div
            ref={soapsRef}
            className="scroll-reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {SOAPS.map((product) => (
              <ProductCard
                key={product.name}
                product={product}
                isOpen={activeCard === product.name}
                onToggle={() => handleToggle(product.name)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
