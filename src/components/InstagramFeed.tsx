import { useEffect, useRef } from 'react';
import { Instagram } from 'lucide-react';

const INSTAGRAM_PROFILE = 'https://www.instagram.com/highqtallow/';
const LIGHTWIDGET_SRC =
  'https://lightwidget.com/widgets/8a9c7aead6325537b9bc9dd1297db966.html';

export default function InstagramFeed() {
  const scriptLoaded = useRef(false);

  useEffect(() => {
    if (scriptLoaded.current) return;
    if (document.querySelector('script[src="https://cdn.lightwidget.com/widgets/lightwidget.js"]')) {
      scriptLoaded.current = true;
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://cdn.lightwidget.com/widgets/lightwidget.js';
    script.async = true;
    document.body.appendChild(script);
    scriptLoaded.current = true;
  }, []);

  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-midnight">
            Follow Along on Instagram
          </h2>
          <a
            href={INSTAGRAM_PROFILE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-body text-sm text-midnight/50 hover:text-midnight transition-colors duration-300 mt-4"
          >
            <Instagram size={16} />
            @highqtallow
          </a>
        </div>

        <div className="w-full overflow-hidden">
          <iframe
            src={LIGHTWIDGET_SRC}
            scrolling="no"
            allowTransparency={true}
            className="lightwidget-widget"
            style={{
              width: '100%',
              border: 0,
              overflow: 'hidden',
            }}
            title="Instagram Feed"
          />
        </div>
      </div>
    </section>
  );
}
