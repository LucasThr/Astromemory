import { supabase } from "../libs/supabase";

const create = async (
  user_id: number,
  number_questions: number,
  status: string,
  questions_list: number[]
) => {
  const questions = [1, 2, 3, 4, 5];

  const { data, error } = await supabase
    .from("rooms")
    .insert([
      {
        number_questions: number_questions,
        status: status,
        questions_list: questions,
      },
    ])
    .select()
    .single();

  if (error) return { data, error };

  let userRoom = await addUserToRoom(user_id, data.id, true);
  if (userRoom.error) return { error: userRoom.error };

  return { data, error };
};

const addUserToRoom = async (
  user_id: number,
  room_id: number,
  isOwner: boolean
) => {
  const { data, error } = await supabase
    .from("room_user")
    .insert([
      {
        user_id: user_id,
        room_id: room_id,
        owner: isOwner,
      },
    ])
    .select()
    .single();

  return { data, error };
};

const launch = async (room_id: number) => {
  const { data, error } = await supabase
    .from("rooms")
    .update({ status: "playing" })
    .eq("id", room_id);

  return { data, error };
};

export const roomService = { create, addUserToRoom, launch };
