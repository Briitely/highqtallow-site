const cache = new Map<string, { lat: number; lng: number }>();

async function fetchNominatim(q: string): Promise<{ lat: number; lng: number } | null> {
  const url = `https://nominatim.openstreetmap.org/search?format=json&limit=1&countrycodes=ca&q=${encodeURIComponent(q)}`;
  const res = await fetch(url);
  if (!res.ok) return null;
  const data = await res.json();
  if (data.length === 0) return null;
  return { lat: parseFloat(data[0].lat), lng: parseFloat(data[0].lon) };
}

export async function geocodeCity(query: string): Promise<{ lat: number; lng: number } | null> {
  const key = query.trim().toLowerCase();
  if (cache.has(key)) return cache.get(key)!;

  let result = await fetchNominatim(query);

  if (!result) {
    result = await fetchNominatim(query + ' Canada');
  }

  if (result) {
    cache.set(key, result);
  }

  return result;
}
