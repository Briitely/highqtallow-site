export interface StoreLocation {
  name: string;
  address: string;
  city: string;
  province: string;
  postalCode: string;
  lat: number;
  lng: number;
  phone?: string;
  website?: string;
  distance?: number;
}
