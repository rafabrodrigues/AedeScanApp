import { supabase } from "../Supabase/supabaseClient";

export async function getUserId() {
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error) {
    console.error("Erro ao obter o usuário:", error);
    return null;
  }

  console.log("ID do usuário logado:", user.id);
  return user.id;
}
