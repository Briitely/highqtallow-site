import type { StoreLocation } from '../types/store';

function formatPhone(raw: string): string | undefined {
  const digits = raw.replace(/\D/g, '');
  if (digits.length === 10) {
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  }
  if (digits.length === 11 && digits[0] === '1') {
    return `(${digits.slice(1, 4)}) ${digits.slice(4, 7)}-${digits.slice(7)}`;
  }
  return raw || undefined;
}

export function parseCSV(csvText: string): StoreLocation[] {
  const lines = csvText
    .replace(/\r\n/g, '\n')
    .split('\n')
    .filter(line => line.trim());

  if (lines.length < 2) return [];

  const stores: StoreLocation[] = [];

  for (let i = 1; i < lines.length; i++) {
    const line = lines[i];
    const values: string[] = [];
    let currentValue = '';
    let insideQuotes = false;

    for (let j = 0; j < line.length; j++) {
      const char = line[j];
      if (char === '"') {
        insideQuotes = !insideQuotes;
      } else if (char === ',' && !insideQuotes) {
        values.push(currentValue.trim());
        currentValue = '';
      } else {
        currentValue += char;
      }
    }
    values.push(currentValue.trim());

    if (values.length < 13) continue;

    const name = values[0]?.trim() || '';
    const address = values[1]?.trim() || '';
    const city = values[2]?.trim() || '';
    const province = values[3]?.trim() || '';
    const postalCode = values[4]?.trim() || '';
    const lat = parseFloat(values[5]);
    const lng = parseFloat(values[6]);

  const rawPhone = values[7]?.trim() || '';
const rawWebsite = values[8]?.trim() || '';
const wholesaleStatus = values[12]?.trim() || '';

const phone = formatPhone(rawPhone);
const website = rawWebsite || undefined;

// Only active wholesale retailers should appear on the public map
if (
  !isNaN(lat) &&
  !isNaN(lng) &&
  name &&
  wholesaleStatus.toLowerCase() === 'active'
) {
  stores.push({
    name,
    address,
    city,
    province,
    postalCode,
    lat,
    lng,
    phone,
    website
  });
}
  }

  return stores;
}
