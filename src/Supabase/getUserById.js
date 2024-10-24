import { supabase } from "./supabaseClient";
import { createClient } from "@supabase/supabase-js";

// export async function getUserById(userId) {
//     console.log("userID", userId);
//     // console.log("supabase ", supabase)

//     const { data } = await supabase.from("tab_bairros").select();
//     //   .eq("id_users", userId);
    
//     console.log(data)

//     if (error) {
//       console.error("Erro ao buscar o usuário:", error);
//       return null;
//     }

//     // console.log("Dados do usuário:", data);

//     return data;
//   }

export const getUserById =  async (userId) => {
    console.log("userID", userId);

    const supabaseUrl = 'https://dbgbewawlmlcglzmbxbu.supabase.co/'
    const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRiZ2Jld2F3bG1sY2dsem1ieGJ1Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxNjg2ODMzMiwiZXhwIjoyMDMyNDQ0MzMyfQ.YKe0VtTVEFpC_xNnznIDeZ45IYlPw31yVeCsb_zAOQQ";

    const supabase = createClient(supabaseUrl, supabaseKey);


    const { data, error } = await supabase.from("tab_users").select()
    .then((res) => {
        console.log('res', res)
        return res
    })
    .catch((e) => {
        console.log('e', e)
        return e
    })
    console.log(data)

    if (error) {
      alert("Erro ao buscar dados dos bairros:", error);
      return;
    }

    return data;
  };