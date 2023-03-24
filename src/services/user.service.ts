import { supabase } from "../libs/supabase";

const create = async (name: string) => {
  console.log('name', name)
  const { error } = await supabase.from("users").insert([
    {
      name: name,
    },
  ]);
  console.log('error', error)

  return { error };
};

export const userService = { create };
