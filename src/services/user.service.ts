import { supabase } from "../libs/supabase";

const create = async (name: string) => {
  console.log("name", name);
  const { data, error } = await supabase
    .from("users")
    .insert([
      {
        name: name,
      },
    ])
    .select()
    .single();
  console.log("error", error);

  return { data, error };
};

const getAllFromRoom = async (room_id: number) => {
  const { data, error } = await supabase
    .from("room_user")
    .select("*,users(id,name)")
    .eq("room_id", room_id);

  return { data, error };
};

export const userService = { create, getAllFromRoom };
