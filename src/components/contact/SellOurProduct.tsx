import { useEffect, useRef } from 'react';
import { Store } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function SellOurProduct() {
  const sectionRef = useScrollReveal();
  const scriptLoaded = useRef(false);

  useEffect(() => {
    if (scriptLoaded.current) return;
    scriptLoaded.current = true;

    const script = document.createElement('script');
    script.src = 'https://links.briitely.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <section id="sell-our-product" className="py-20 md:py-28 bg-cream/40">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={sectionRef} className="scroll-reveal text-center mb-14">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-midnight/5 mb-6">
            <Store size={24} className="text-midnight/50" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-midnight">
            Sell Our Product
          </h2>
          <p className="font-body text-base md:text-lg text-midnight/60 mt-4 max-w-2xl mx-auto leading-relaxed">
            Interested in carrying High Q Bison Tallow in your store? Fill out the
            form below and we'll be in touch.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-white rounded-2xl border border-midnight/8 shadow-sm overflow-hidden">
          <iframe
            src="https://links.briitely.com/widget/form/yFJDotkcJ6ZFDPyLytMp"
            style={{ width: '100%', height: '492px', border: 'none' }}
            id="inline-yFJDotkcJ6ZFDPyLytMp"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="rfq"
            data-height="492"
            data-layout-iframe-id="inline-yFJDotkcJ6ZFDPyLytMp"
            data-form-id="yFJDotkcJ6ZFDPyLytMp"
            title="rfq"
          />
        </div>
      </div>
    </section>
  );
}
