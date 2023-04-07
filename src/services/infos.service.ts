import { supabase } from "../libs/supabase";

const getInfo = async (id: number) => {
  const { data, error } = await supabase
    .from("infos")
    .select()
    .eq("id", id)
    .single();

  return { data, error };
};

export const infosService = { getInfo };
