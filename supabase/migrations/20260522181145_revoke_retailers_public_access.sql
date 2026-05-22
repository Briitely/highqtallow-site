/*
  # Revoke public access to retailers table

  1. Security Changes
    - Revoke SELECT from `anon` role to prevent GraphQL schema exposure
    - Revoke SELECT from `authenticated` role to prevent GraphQL schema exposure
    - Drop overly permissive RLS policy that used USING (true)
    - Add restrictive RLS policy allowing only service_role access

  2. Notes
    - The retailers table is not used by the frontend (store locator uses external CSV)
    - This resolves GraphQL schema visibility warnings
    - Data remains accessible via service_role for admin purposes
*/

-- Revoke SELECT from anon and authenticated roles
REVOKE SELECT ON public.retailers FROM anon;
REVOKE SELECT ON public.retailers FROM authenticated;

-- Drop the overly permissive policy
DROP POLICY IF EXISTS "Anyone can view retailers" ON public.retailers;

-- Add a restrictive policy for service_role admin access only
CREATE POLICY "Only service role can view retailers"
  ON public.retailers
  FOR SELECT
  TO service_role
  USING (true);
