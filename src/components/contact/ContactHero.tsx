import { useEffect, useState } from 'react';
import headerBg from '../../assets/ChatGPT_Image_Feb_16,_2026,_04_44_36_PM.png';

export default function ContactHero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-[60vh] md:min-h-[70vh] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={headerBg}
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-midnight/90 via-midnight/60 to-midnight/30" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-midnight/50" />

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-3xl">
          <h1
            className={`font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.15] transition-all duration-1000 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Contact Us
          </h1>

          <p
            className={`font-body text-lg md:text-xl text-white/90 mt-8 max-w-2xl leading-relaxed transition-all duration-1000 delay-300 ${
              loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            Have a question, want to carry our products, or just want to say
            hello? We'd love to hear from you.
          </p>
        </div>
      </div>
    </section>
  );
}
