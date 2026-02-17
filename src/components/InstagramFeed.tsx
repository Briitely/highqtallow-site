import { useEffect, useRef } from 'react';
import { Instagram } from 'lucide-react';

const INSTAGRAM_POSTS = [
  'https://www.instagram.com/p/DGHKZrOSqmk/',
  'https://www.instagram.com/p/DGEeaJdyV5I/',
  'https://www.instagram.com/p/DGBz2n-S3KH/',
];

const INSTAGRAM_PROFILE = 'https://www.instagram.com/highqtallow/';

export default function InstagramFeed() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.instagram.com/embed.js';
    script.async = true;
    script.onload = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
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

        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {INSTAGRAM_POSTS.map((url) => (
            <div key={url} className="instagram-embed-wrapper overflow-hidden rounded-2xl bg-white shadow-sm">
              <blockquote
                className="instagram-media"
                data-instgrm-captioned
                data-instgrm-permalink={url}
                data-instgrm-version="14"
                style={{
                  background: '#FFF',
                  border: 0,
                  borderRadius: '16px',
                  margin: 0,
                  maxWidth: '100%',
                  minWidth: '100%',
                  padding: 0,
                  width: '100%',
                }}
              >
                <a href={url} target="_blank" rel="noopener noreferrer" />
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
