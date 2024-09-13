import { createClient } from "@supabase/supabase-js";
const supabaseUrl = 'https://dbgbewawlmlcglzmbxbu.supabase.co/'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRiZ2Jld2F3bG1sY2dsem1ieGJ1Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxNjg2ODMzMiwiZXhwIjoyMDMyNDQ0MzMyfQ.YKe0VtTVEFpC_xNnznIDeZ45IYlPw31yVeCsb_zAOQQ";
export const supabase = createClient(supabaseUrl, supabaseKey);
