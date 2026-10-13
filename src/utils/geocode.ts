export type GeocodedCity = { lat: number; lng: number; city: string; province: string | null };
const cache = new Map<string, GeocodedCity>();
const provinceCodes: Record<string, string> = {
  alberta: 'AB', 'british columbia': 'BC', saskatchewan: 'SK', manitoba: 'MB',
  ontario: 'ON', quebec: 'QC', québec: 'QC', 'new brunswick': 'NB',
  'nova scotia': 'NS', 'prince edward island': 'PE', 'newfoundland and labrador': 'NL',
  yukon: 'YT', 'northwest territories': 'NT', nunavut: 'NU',
};
async function fetchNominatim(q: string): Promise<GeocodedCity | null> {
  const url = `https://nominatim.openstreetmap.org/search?format=json&addressdetails=1&limit=1&countrycodes=ca&q=${encodeURIComponent(q)}`;
  const res = await fetch(url);
  if (!res.ok) return null;
  const data: Array<{ lat: string; lon: string; address?: { city?: string; town?: string; village?: string; municipality?: string; state?: string; province?: string; country_code?: string } }> = await res.json();
  if (data.length === 0) return null;
  const first = data[0];
  const address = first.address;
  if (address?.country_code && address.country_code.toLowerCase() !== 'ca') return null;
  const state = (address?.state ?? address?.province ?? '').toLocaleLowerCase('en-CA');
  const city = address?.city ?? address?.town ?? address?.village ?? address?.municipality ?? '';
  const lat = Number(first.lat);
  const lng = Number(first.lon);
  if (!Number.isFinite(lat) || !Number.isFinite(lng)) return null;
  return { lat, lng, city, province: provinceCodes[state] ?? null };
}
export async function geocodeCity(query: string): Promise<GeocodedCity | null> {
  const key = query.trim().toLocaleLowerCase('en-CA');
  if (cache.has(key)) return cache.get(key)!;
  let result = await fetchNominatim(query);
  if (!result) result = await fetchNominatim(query + ' Canada');
  if (result) cache.set(key, result);
  return result;
}
