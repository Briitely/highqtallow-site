import { MapPin, ExternalLink, Phone, Globe } from 'lucide-react';
import type { StoreLocation } from '../../types/store';

interface RetailerCardProps {
  retailer: StoreLocation;
  onClick?: () => void;
}

function formatPostalCode(code: string): string {
  const normalized = code.replace(/\s+/g, '').toUpperCase();
  if (normalized.length === 6) return `${normalized.slice(0, 3)} ${normalized.slice(3)}`;
  return code;
}

export default function RetailerCard({ retailer, onClick }: RetailerCardProps) {
  const formattedPostal = formatPostalCode(retailer.postalCode);
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${retailer.lat},${retailer.lng}`;

  return (
    <div
      className="bg-white rounded-[12px] p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-olive-earth/10 cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="font-display text-xl font-bold text-midnight">
          {retailer.name}
        </h3>
        {retailer.distance != null && (
          <span className="font-body text-sm font-semibold text-sage-dark bg-sage/10 px-2.5 py-1 rounded-full whitespace-nowrap ml-3">
            {retailer.distance.toFixed(1)} km
          </span>
        )}
      </div>

      <div className="space-y-3">
        <div className="flex items-start gap-3 text-midnight/70">
          <MapPin size={18} className="mt-0.5 flex-shrink-0 text-lavender" />
          <div className="font-body text-sm leading-relaxed">
            <p>{retailer.address}</p>
            <p>
              {retailer.city}, {retailer.province} {formattedPostal}
            </p>
          </div>
        </div>

        {retailer.phone && (
          <div className="flex items-center gap-3 text-midnight/70">
            <Phone size={16} className="flex-shrink-0 text-lavender" />
            <a
              href={`tel:${retailer.phone.replace(/\D/g, '')}`}
              onClick={(e) => e.stopPropagation()}
              className="font-body text-sm hover:text-midnight transition-colors"
            >
              {retailer.phone}
            </a>
          </div>
        )}

        {retailer.website && (
          <div className="flex items-center gap-3 text-midnight/70">
            <Globe size={16} className="flex-shrink-0 text-lavender" />
            <a
              href={retailer.website.startsWith('http') ? retailer.website : `https://${retailer.website}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="font-body text-sm hover:text-midnight transition-colors truncate"
            >
              {retailer.website.replace(/^https?:\/\//, '').replace(/\/$/, '')}
            </a>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3 mt-4 pt-4 border-t border-olive-earth/10">
          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center justify-center gap-2 bg-lavender hover:bg-lavender-dark text-midnight font-body text-sm font-semibold px-5 py-2.5 rounded-[8px] transition-all duration-300"
          >
            Get Directions
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}
