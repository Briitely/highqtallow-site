import { Instagram } from 'lucide-react';

export default function FloatingSocial() {
  return (
    <div className="hidden lg:flex fixed right-0 top-1/2 -translate-y-1/2 z-50 flex-col">
      <a
        href="https://www.instagram.com/highqtallow/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-10 h-10 rounded-l-[10px] bg-midnight/90 hover:bg-lavender/90 flex items-center justify-center transition-all duration-300 group"
        aria-label="Instagram"
      >
        <Instagram size={18} className="text-white/80 group-hover:text-white" />
      </a>
    </div>
  );
}
