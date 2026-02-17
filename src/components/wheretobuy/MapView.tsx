import { useEffect, useRef } from 'react';
import L from 'leaflet';
import { Loader2, AlertCircle } from 'lucide-react';
import 'leaflet/dist/leaflet.css';
import type { StoreLocation } from '../../types/store';

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

const searchCenterIcon = L.divIcon({
  className: '',
  html: '<div style="width:18px;height:18px;background:#e74c3c;border:3px solid white;border-radius:50%;box-shadow:0 2px 8px rgba(0,0,0,0.35);"></div>',
  iconSize: [18, 18],
  iconAnchor: [9, 9],
});

function formatPostalCode(code: string): string {
  const normalized = code.replace(/\s+/g, '').toUpperCase();
  if (normalized.length === 6) return `${normalized.slice(0, 3)} ${normalized.slice(3)}`;
  return code;
}

const RADIUS_METERS = 150000;

const dimIcon = L.divIcon({
  className: '',
  html: '<div style="width:10px;height:10px;background:#9ca3af;border:2px solid white;border-radius:50%;box-shadow:0 1px 4px rgba(0,0,0,0.2);"></div>',
  iconSize: [10, 10],
  iconAnchor: [5, 5],
});

interface MapViewProps {
  allStores: StoreLocation[];
  filteredStores?: StoreLocation[] | null;
  searchCenter?: { lat: number; lng: number } | null;
  focusTarget?: { lat: number; lng: number; key: number } | null;
  loading?: boolean;
  error?: string | null;
  onRetry?: () => void;
}

export default function MapView({
  allStores,
  filteredStores,
  searchCenter,
  focusTarget,
  loading,
  error,
  onRetry,
}: MapViewProps) {
  const mapRef = useRef<L.Map | null>(null);
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const markersRef = useRef<Map<string, L.Marker>>(new Map());
  const circleRef = useRef<L.Circle | null>(null);
  const searchMarkerRef = useRef<L.Marker | null>(null);

  const markerKey = (s: StoreLocation) => `${s.name}|${s.lat}|${s.lng}`;

  useEffect(() => {
    if (loading || allStores.length === 0) return;

    if (!mapRef.current) {
      initializeMap();
    }

    const isSearched = filteredStores !== null && filteredStores !== undefined;
    updateMarkers(allStores, isSearched ? filteredStores : null);

    if (searchCenter) {
      updateSearchOverlay(searchCenter);
    } else {
      clearSearchOverlay();
      if (isSearched && filteredStores.length > 0) {
        fitBoundsToStores(filteredStores);
      } else {
        fitBoundsToStores(allStores);
      }
    }
  }, [allStores, filteredStores, loading, searchCenter]);

  useEffect(() => {
    if (!focusTarget || !mapRef.current) return;

    let found: L.Marker | null = null;
    markersRef.current.forEach((marker) => {
      const pos = marker.getLatLng();
      if (
        Math.abs(pos.lat - focusTarget.lat) < 0.0001 &&
        Math.abs(pos.lng - focusTarget.lng) < 0.0001
      ) {
        found = marker;
      }
    });

    if (found) {
      mapRef.current.setView([focusTarget.lat, focusTarget.lng], 13, { animate: true });
      (found as L.Marker).openPopup();
    } else {
      mapRef.current.setView([focusTarget.lat, focusTarget.lng], 13, { animate: true });
    }
  }, [focusTarget]);

  useEffect(() => {
    return () => {
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  const initializeMap = () => {
    if (!mapContainerRef.current) return;

    const map = L.map(mapContainerRef.current, {
      center: [56.1304, -106.3468],
      zoom: 4,
      scrollWheelZoom: true,
    });

    mapRef.current = map;

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 19,
    }).addTo(map);
  };

  const updateMarkers = (
    stores: StoreLocation[],
    highlighted: StoreLocation[] | null
  ) => {
    markersRef.current.forEach((marker) => marker.remove());
    markersRef.current.clear();

    const highlightedKeys = highlighted
      ? new Set(highlighted.map(markerKey))
      : null;

    stores.forEach((store) => {
      if (!mapRef.current) return;

      const isDimmed = highlightedKeys !== null && !highlightedKeys.has(markerKey(store));

      const marker = isDimmed
        ? L.marker([store.lat, store.lng], { icon: dimIcon, zIndexOffset: -1000 }).addTo(mapRef.current)
        : L.marker([store.lat, store.lng]).addTo(mapRef.current);

      const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${store.lat},${store.lng}`;
      const matchedStore = highlighted?.find((h) => markerKey(h) === markerKey(store));
      const distanceHtml =
        (matchedStore?.distance ?? store.distance) != null
          ? `<p style="margin:8px 0 0;font-size:13px;color:#5f9465;font-weight:600;">${((matchedStore?.distance ?? store.distance)!).toFixed(1)} km away</p>`
          : '';

      marker.bindPopup(`
        <div style="font-family:system-ui,-apple-system,sans-serif;min-width:200px;">
          <h3 style="font-weight:bold;font-size:16px;margin:0 0 8px;color:#1a1a1a;">
            ${store.name}
          </h3>
          <p style="margin:0 0 4px;font-size:14px;color:#4a4a4a;">
            ${store.address}
          </p>
          <p style="margin:0;font-size:14px;color:#4a4a4a;">
            ${store.city}, ${store.province} ${formatPostalCode(store.postalCode)}
          </p>
          ${distanceHtml}
          <a href="${directionsUrl}" target="_blank" rel="noopener noreferrer"
            style="display:inline-block;margin-top:10px;padding:6px 14px;background:#bba9fa;color:#1e1b29;border-radius:6px;text-decoration:none;font-size:13px;font-weight:600;">
            Get Directions
          </a>
        </div>
      `);

      markersRef.current.set(markerKey(store), marker);
    });
  };

  const updateSearchOverlay = (center: { lat: number; lng: number }) => {
    if (!mapRef.current) return;

    clearSearchOverlay();

    circleRef.current = L.circle([center.lat, center.lng], {
      radius: RADIUS_METERS,
      color: '#bba9fa',
      fillColor: '#bba9fa',
      fillOpacity: 0.08,
      weight: 2,
    }).addTo(mapRef.current);

    searchMarkerRef.current = L.marker([center.lat, center.lng], {
      icon: searchCenterIcon,
    })
      .addTo(mapRef.current)
      .bindPopup(
        '<div style="font-family:system-ui;font-weight:600;font-size:14px;">Search Location</div>'
      );

    mapRef.current.fitBounds(circleRef.current.getBounds(), { padding: [30, 30] });
  };

  const clearSearchOverlay = () => {
    if (circleRef.current) {
      circleRef.current.remove();
      circleRef.current = null;
    }
    if (searchMarkerRef.current) {
      searchMarkerRef.current.remove();
      searchMarkerRef.current = null;
    }
  };

  const fitBoundsToStores = (storesToShow: StoreLocation[]) => {
    if (!mapRef.current || storesToShow.length === 0) return;

    const bounds = L.latLngBounds(storesToShow.map((s) => [s.lat, s.lng]));
    mapRef.current.fitBounds(bounds, {
      padding: [50, 50],
      maxZoom: 15,
    });
  };

  if (loading) {
    return (
      <div className="bg-white rounded-[12px] shadow-lg border border-olive-earth/10 p-8">
        <div className="flex flex-col items-center justify-center py-20">
          <Loader2 size={40} className="animate-spin text-lavender mb-4" />
          <p className="font-body text-midnight/60">Loading store locations...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-white rounded-[12px] shadow-lg border border-olive-earth/10 p-8">
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="bg-red-50 rounded-full p-4 mb-4">
            <AlertCircle size={32} className="text-red-500" />
          </div>
          <h3 className="font-display text-xl font-bold text-midnight mb-2">Unable to Load Map</h3>
          <p className="font-body text-midnight/60 max-w-md">{error}</p>
          {onRetry && (
            <button
              onClick={onRetry}
              className="mt-6 bg-lavender hover:bg-lavender-dark text-midnight font-body font-semibold px-6 py-3 rounded-[8px] transition-colors"
            >
              Try Again
            </button>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-[12px] shadow-lg border border-olive-earth/10 overflow-hidden">
      <div
        ref={mapContainerRef}
        className="w-full h-[450px] md:h-[600px]"
        style={{ background: '#f5f5f5' }}
      />
    </div>
  );
}
