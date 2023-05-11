import { supabase } from "../libs/supabase";

const getAll = async () => {
  const { data, error } = await supabase
    .from("planets")
    .select("id,name,description,image");

  if (error) {
    console.log("error", error);
    throw error;
  }

  return data;
};

const get = async (id: number) => {
  const { data, error } = await supabase
    .from("planets")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.log("error", error);
    throw error;
  }

  return data;
};

export const planetService = { getAll, get };
