import { useState, useEffect } from 'react';
import { Search, Loader2, AlertCircle, X, MapPin } from 'lucide-react';
import RetailerCard from './RetailerCard';
import MapView from './MapView';
import { geocodeCity } from '../../utils/geocode';
import { haversineDistance } from '../../utils/haversine';
import { parseCSV } from '../../utils/csv';
import type { StoreLocation } from '../../types/store';

const STORES_CSV_URL =
  'https://docs.google.com/spreadsheets/d/e/2PACX-1vR6MLPeWdVRJMJxk-8ND3Z-N0zuHcFZT_kZEwqOs31oYe7Rkeu0y9fkltaSsxH9TYPlcQxUkHxDTBrX/pub?gid=0&single=true&output=csv';

const RADIUS_KM = 150;

export default function StoreLocator() {
  const [searchQuery, setSearchQuery] = useState('');
  const [allStores, setAllStores] = useState<StoreLocation[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searching, setSearching] = useState(false);
  const [searchCenter, setSearchCenter] = useState<{ lat: number; lng: number } | null>(null);
  const [resultStores, setResultStores] = useState<StoreLocation[] | null>(null);
  const [noNearbyMessage, setNoNearbyMessage] = useState<string | null>(null);
  const [focusTarget, setFocusTarget] = useState<{
    lat: number;
    lng: number;
    key: number;
  } | null>(null);

  useEffect(() => {
    loadStores();
  }, []);

  const loadStores = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(STORES_CSV_URL);
      if (!response.ok) throw new Error('Failed to fetch store locations');
      const csvText = await response.text();
      const stores = parseCSV(csvText);
      stores.sort((a, b) => a.city.localeCompare(b.city));
      setAllStores(stores);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load stores');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    const query = searchQuery.trim();
    if (!query || allStores.length === 0) return;

    setSearching(true);
    setNoNearbyMessage(null);
    setFocusTarget(null);

    try {
      const q = query.toLowerCase();

      const cityMatches = allStores.filter((s) => {
        const city = s.city.trim().toLowerCase();
        return city === q || city.includes(q);
      });

      if (cityMatches.length > 0) {
        setSearchCenter(null);
        setResultStores(cityMatches);
        return;
      }

      const nameMatches = allStores.filter((s) =>
        s.name.trim().toLowerCase().includes(q)
      );

      if (nameMatches.length > 0) {
        setSearchCenter(null);
        setResultStores(nameMatches);
        return;
      }

      const center = await geocodeCity(query);

      if (!center) {
        setSearchCenter(null);
        setResultStores([]);
        setNoNearbyMessage('No stores found matching your search.');
        return;
      }

      setSearchCenter(center);

      const withDistances: StoreLocation[] = allStores.map((store) => ({
        ...store,
        distance: haversineDistance(center.lat, center.lng, store.lat, store.lng),
      }));

      withDistances.sort((a, b) => a.distance! - b.distance!);

      const withinRadius = withDistances.filter((s) => s.distance! <= RADIUS_KM);

      if (withinRadius.length > 0) {
        setResultStores(withinRadius);
      } else {
        setResultStores(withDistances.slice(0, 10));
        setNoNearbyMessage(
          'No stores within 150km \u2014 here are the closest locations.'
        );
      }
    } catch {
      setNoNearbyMessage('Search failed. Please try again.');
    } finally {
      setSearching(false);
    }
  };

  const handleClear = () => {
    setSearchQuery('');
    setSearchCenter(null);
    setResultStores(null);
    setNoNearbyMessage(null);
    setFocusTarget(null);
  };

  const handleCardClick = (store: StoreLocation) => {
    setFocusTarget({ lat: store.lat, lng: store.lng, key: Date.now() });
    document
      .getElementById('map-container')
      ?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const isSearched = resultStores !== null;

  return (
    <section id="store-locator" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-midnight">
            Find a Store Near You
          </h2>
        </div>

        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch(e)}
              placeholder="Search by city, or store name"
              className="w-full px-6 py-4 pr-28 rounded-[12px] border-2 border-olive-earth/20 focus:border-lavender focus:outline-none font-body text-base text-midnight placeholder:text-midnight/40 transition-colors"
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
              {(searchQuery || isSearched) && (
                <button
                  type="button"
                  onClick={handleClear}
                  className="text-midnight/40 hover:text-midnight p-2 rounded-[8px] transition-colors"
                >
                  <X size={18} />
                </button>
              )}
              <button
                type="button"
                onClick={handleSearch}
                disabled={searching || !searchQuery.trim()}
                className="bg-lavender hover:bg-lavender-dark text-midnight p-3 rounded-[8px] transition-colors disabled:opacity-50"
              >
                {searching ? (
                  <Loader2 size={20} className="animate-spin" />
                ) : (
                  <Search size={20} />
                )}
              </button>
            </div>
          </div>
        </div>

        <div id="map-container" className="mb-12">
          <MapView
            allStores={allStores}
            filteredStores={resultStores}
            searchCenter={searchCenter}
            focusTarget={focusTarget}
            loading={loading}
            error={error}
            onRetry={loadStores}
          />
        </div>

        {isSearched && (
          <>
            {noNearbyMessage && (
              <div className="bg-amber-50 border border-amber-200 rounded-[12px] p-4 mb-8 flex items-center gap-3">
                <MapPin size={20} className="text-amber-600 flex-shrink-0" />
                <p className="font-body text-sm text-amber-800">{noNearbyMessage}</p>
              </div>
            )}

            <div className="mb-8">
              <h3 className="font-display text-2xl font-bold text-midnight mb-2">
                Search Results
              </h3>
              <p className="font-body text-midnight/60">
                {resultStores.length}{' '}
                {resultStores.length === 1 ? 'store' : 'stores'} found
              </p>
            </div>

            {resultStores.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {resultStores.map((store, index) => (
                  <RetailerCard
                    key={`${store.name}-${store.city}-${index}`}
                    retailer={store}
                    onClick={() => handleCardClick(store)}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="font-body text-lg text-midnight/60">
                  No stores found matching your search. Try a different city or
                  store name.
                </p>
                <button
                  onClick={handleClear}
                  className="mt-4 text-lavender hover:text-lavender-dark font-semibold transition-colors"
                >
                  Clear Search
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
