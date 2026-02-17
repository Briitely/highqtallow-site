import type { Product } from '../data/products';

function HighlightedText({ text, phrase, dark }: { text: string; phrase?: string; dark?: boolean }) {
  if (!phrase) return <>{text}</>;

  const idx = text.toLowerCase().indexOf(phrase.toLowerCase());
  if (idx === -1) return <>{text}</>;

  const before = text.slice(0, idx);
  const match = text.slice(idx, idx + phrase.length);
  const after = text.slice(idx + phrase.length);

  return (
    <>
      {before}
      <span className={`inline-block bg-white/95 text-midnight px-2 py-0.5 rounded-[5px] font-semibold`}>
        {match}
      </span>
      {after}
    </>
  );
}

interface ProductCardProps {
  product: Product;
  isOpen?: boolean;
  onToggle?: () => void;
}

export default function ProductCard({ product, isOpen = false, onToggle }: ProductCardProps) {
  const dark = product.overlayTextDark;

  return (
    <div
      className="group relative bg-white rounded-[10px] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
      onClick={(e) => {
        e.stopPropagation();
        onToggle?.();
      }}
    >
      <div
        className="h-1.5 w-full"
        style={{ backgroundColor: product.accentColor }}
      />

      {product.ribbon && (
        <div className="absolute top-4 right-0 z-10 pointer-events-none">
          <div
            className="relative pl-3 pr-3 py-1.5 rounded-l-[6px] shadow-sm"
            style={{ backgroundColor: product.accentColor }}
          >
            <span className="font-body text-[9px] font-bold uppercase tracking-wider text-white">
              {product.ribbon}
            </span>
          </div>
          <div
            className="absolute top-full right-0 w-0 h-0 border-l-[6px] border-t-[6px] border-l-transparent"
            style={{ borderTopColor: product.accentColor, filter: 'brightness(0.7)' }}
          />
        </div>
      )}

      {product.image && (
        <div className="bg-gray-50 flex items-center justify-center px-6 pt-6">
          <img
            src={product.image}
            alt={product.name}
            className="w-full max-h-48 object-contain"
            loading="lazy"
          />
        </div>
      )}
      <div className="p-6 md:p-8">
        <span className="font-body text-[10px] font-semibold uppercase tracking-[0.2em] text-midnight/40">
          {product.type}
        </span>
        <h3 className="font-display text-xl md:text-2xl italic font-semibold text-midnight mt-2 group-hover:text-olive-earth transition-colors duration-300">
          {product.name}
        </h3>
        <p className="font-body text-sm text-midnight/55 mt-3 leading-relaxed">
          {product.tagline}
        </p>
      </div>

      <div
        className={`absolute inset-0 flex flex-col justify-center p-5 md:p-7 rounded-[10px] transition-all duration-400 ease-out overflow-y-auto ${
          isOpen
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-3 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto'
        }`}
        style={{ backgroundColor: `${product.accentColor}ee` }}
      >
        <h3 className={`font-display text-lg md:text-xl italic font-semibold ${dark ? 'text-midnight' : 'text-white'}`}>
          {product.name}
        </h3>
        <p className={`font-display text-sm italic mt-1.5 ${dark ? 'text-midnight/70' : 'text-white/80'}`}>
          {product.subtitle}
        </p>
        <div className={`w-8 h-px mt-3 mb-3 ${dark ? 'bg-midnight/30' : 'bg-white/40'}`} />
        <p className={`font-body text-xs leading-relaxed ${dark ? 'text-midnight/85' : 'text-white/90'}`}>
          <HighlightedText text={product.description} phrase={product.highlightPhrase} dark={dark} />
        </p>
        {product.ingredients && (
          <div className="mt-3">
            <span className={`font-body text-[9px] font-semibold uppercase tracking-[0.15em] ${dark ? 'text-midnight/50' : 'text-white/60'}`}>
              Ingredients
            </span>
            <p className={`font-body text-[11px] leading-relaxed mt-1 ${dark ? 'text-midnight/70' : 'text-white/75'}`}>
              {product.ingredients}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
