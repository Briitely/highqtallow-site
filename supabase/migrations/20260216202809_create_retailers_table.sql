/*
  # Create retailers table for store locator

  1. New Tables
    - `retailers`
      - `id` (uuid, primary key) - Unique identifier for each retailer
      - `name` (text, not null) - Store name
      - `address` (text, not null) - Street address
      - `city` (text, not null) - City name
      - `province` (text, not null) - Province/state
      - `postal_code` (text, not null) - Postal/ZIP code
      - `phone` (text) - Contact phone number
      - `email` (text) - Contact email
      - `website` (text) - Store website URL
      - `latitude` (numeric) - Latitude coordinate for mapping
      - `longitude` (numeric) - Longitude coordinate for mapping
      - `created_at` (timestamptz) - Record creation timestamp

  2. Indexes
    - Index on `postal_code` for fast postal code searches
    - Index on `city` for fast city-based searches
    - Index on `province` for filtering by province

  3. Security
    - Enable RLS on `retailers` table
    - Add policy for public read access (store locations are public information)

  4. Sample Data
    - Insert sample Alberta retailers for demonstration
*/

CREATE TABLE IF NOT EXISTS retailers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  address text NOT NULL,
  city text NOT NULL,
  province text NOT NULL,
  postal_code text NOT NULL,
  phone text,
  email text,
  website text,
  latitude numeric,
  longitude numeric,
  created_at timestamptz DEFAULT now()
);

-- Create indexes for search performance
CREATE INDEX IF NOT EXISTS idx_retailers_postal_code ON retailers(postal_code);
CREATE INDEX IF NOT EXISTS idx_retailers_city ON retailers(city);
CREATE INDEX IF NOT EXISTS idx_retailers_province ON retailers(province);

-- Enable Row Level Security
ALTER TABLE retailers ENABLE ROW LEVEL SECURITY;

-- Allow public read access to all retailers (store locations are public information)
CREATE POLICY "Anyone can view retailers"
  ON retailers
  FOR SELECT
  TO anon, authenticated
  USING (true);

-- Insert sample retailers in Alberta
INSERT INTO retailers (name, address, city, province, postal_code, phone, latitude, longitude) VALUES
  ('Natural Health Shop', '123 Main Street', 'Calgary', 'AB', 'T2P 1A1', '403-555-0101', 51.0447, -114.0719),
  ('Green Earth Wellness', '456 Jasper Avenue', 'Edmonton', 'AB', 'T5J 2R8', '780-555-0202', 53.5461, -113.4938),
  ('Prairie Organics', '789 1st Street SW', 'Calgary', 'AB', 'T2P 2B5', '403-555-0303', 51.0486, -114.0708),
  ('Mountain View Health', '321 Banff Avenue', 'Banff', 'AB', 'T1L 1A1', '403-555-0404', 51.1784, -115.5708),
  ('Red Deer Natural Market', '654 Gaetz Avenue', 'Red Deer', 'AB', 'T4N 4A5', '403-555-0505', 52.2681, -113.8112)
ON CONFLICT DO NOTHING;