import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://dbgbewawlmlcglzmbxbu.supabase.co'
const supabaseKey = 'weyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRiZ2Jld2F3bG1sY2dsem1ieGJ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTY4NjgzMzIsImV4cCI6MjAzMjQ0NDMzMn0.muZLLYl-A8o7uiVCClmBZLLVp8HW78g3P3UF0oDCE0w'
export const supabase = createClient(supabaseUrl, supabaseKey);
