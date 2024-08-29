import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://rxpmgdhpcwssmzgrxjnc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ4cG1nZGhwY3dzc216Z3J4am5jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQwNTMwMTMsImV4cCI6MjAyOTYyOTAxM30.DnuOnKAj6NCrm-14L2_W0Np3CIEG0SczRpIxU1TFySY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
