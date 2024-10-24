import { useState, useEffect } from 'react';
import { supabase } from '../../Supabase/supabaseClient';

export function useAuth() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    const fetchSession = async () => {
      const { data: { session } } = await supabase.auth.getSession(); 
      setSession(session);
    };

    fetchSession();

    const { data: authListener } = supabase.auth.onAuthStateChange((_, session) => {
      setSession(session);
    });

    return () => {
      authListener?.unsubscribe();
    };
  }, []);

  return { session };
}
