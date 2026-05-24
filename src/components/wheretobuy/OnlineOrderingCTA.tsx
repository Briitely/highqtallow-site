import { ShoppingBag, Truck, Shield } from 'lucide-react';
import { SHOP_URL } from '../../config/shop';

export default function OnlineOrderingCTA() {
  return (
    <section id="shop-online" className="py-20 bg-olive-earth-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Can't Find a Store Nearby?
          </h2>
          <p className="font-body text-lg text-white/80 max-w-2xl mx-auto">
            Shop directly from our online store and have High Q Tallow delivered right to your door
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-lavender/20 rounded-full mb-4">
              <Truck className="text-lavender" size={28} />
            </div>
            <h3 className="font-display text-xl font-bold text-white mb-2">
              Fast Shipping
            </h3>
            <p className="font-body text-white/70">
              Quick delivery across Canada
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-lavender/20 rounded-full mb-4">
              <Shield className="text-lavender" size={28} />
            </div>
            <h3 className="font-display text-xl font-bold text-white mb-2">
              Quality Guarantee
            </h3>
            <p className="font-body text-white/70">
              High-quality products every time
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-lavender/20 rounded-full mb-4">
              <ShoppingBag className="text-lavender" size={28} />
            </div>
            <h3 className="font-display text-xl font-bold text-white mb-2">
              Full Product Range
            </h3>
            <p className="font-body text-white/70">
              Access to our complete collection
            </p>
          </div>
        </div>

        <div className="text-center">
          <a
            href={SHOP_URL}
            className="inline-flex items-center justify-center gap-2 bg-lavender hover:bg-lavender-dark text-midnight font-body text-base font-semibold px-10 py-4 rounded-[12px] transition-all duration-300 hover:shadow-xl hover:shadow-lavender/30"
          >
            <ShoppingBag size={20} />
            Shop Online Now
          </a>
          <p className="font-body text-sm text-white/60 mt-4">
            Free shipping on orders over $75
          </p>
        </div>
      </div>
    </section>
  );
}
