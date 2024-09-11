
import { useState, useEffect } from 'react';
import { supabase } from '../../Supabase/supabaseClient';

export function useAuth() {
  const [session, setSession] = useState(null);

  useEffect(() => {
    const currentSession = supabase.auth.getSession();
    currentSession.then(({ data: { session } }) => setSession(session));

    const { data: authListener } = supabase.auth.onAuthStateChange((_, session) => {
      setSession(session);
    });

    return () => {
      authListener?.unsubscribe();
    };
  }, []);

  return { session };
}
