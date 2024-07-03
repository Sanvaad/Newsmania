import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://cauckavobwjvlzfcmpxd.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNhdWNrYXZvYndqdmx6ZmNtcHhkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTg2ODQxNDcsImV4cCI6MjAzNDI2MDE0N30.DjeytvFEbtv7u26pRtDvWJqA2JsS5g2HVQO6EPbcAEE";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
