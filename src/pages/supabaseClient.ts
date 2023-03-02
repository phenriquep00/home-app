import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://uqzowcigbshoyghkgwxo.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVxem93Y2lnYnNob3lnaGtnd3hvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc3OTE3ODcsImV4cCI6MTk5MzM2Nzc4N30.pm4Lxe8sqmDbGc6RY1sFbNUsHC9dkkel5loerWKXoaA";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
