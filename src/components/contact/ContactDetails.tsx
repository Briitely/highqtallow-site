import { Phone, Mail, MapPin } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function ContactDetails() {
  const ref = useScrollReveal();

  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className="scroll-reveal max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-midnight">
            Get in Touch
          </h2>
          <p className="font-body text-base md:text-lg text-midnight/60 mt-4 leading-relaxed">
            Reach out anytime — we're here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <ContactCard
            icon={<Phone size={24} />}
            label="Phone"
            value="855-839-9099"
            href="tel:8558399099"
          />
          <ContactCard
            icon={<Mail size={24} />}
            label="Email"
            value="info@highqtallow.com"
            href="mailto:info@highqtallow.com"
          />
          <ContactCard
            icon={<MapPin size={24} />}
            label="Location"
            value="Lethbridge, Alberta, Canada"
          />
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const ref = useScrollReveal();

  const content = (
    <div
      ref={ref}
      className="scroll-reveal group flex flex-col items-center text-center p-8 rounded-2xl border border-midnight/8 hover:border-lavender/30 bg-white hover:bg-cream/30 transition-all duration-500 hover:shadow-lg hover:shadow-midnight/5"
    >
      <div className="w-14 h-14 rounded-xl bg-midnight/5 group-hover:bg-lavender/15 flex items-center justify-center transition-all duration-500 mb-5">
        <span className="text-midnight/50 group-hover:text-lavender transition-colors duration-500">
          {icon}
        </span>
      </div>
      <span className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-midnight/40 mb-2">
        {label}
      </span>
      <span className="font-body text-base font-medium text-midnight group-hover:text-midnight/80 transition-colors duration-300">
        {value}
      </span>
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block">
        {content}
      </a>
    );
  }

  return content;
}
