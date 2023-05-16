import { supabase } from "../libs/supabase";
import { questionService } from "./question.service";

const create = async (
  user_id: number,
  number_questions: number,
  status: string,
  questions_list: number[]
) => {
  const questions = await questionService.getArrayOfQuestions(number_questions);
  if (questions.error) return { data: null, error: questions.error };

  const { data, error } = await supabase
    .from("rooms")
    .insert([
      {
        number_questions: number_questions,
        status: status,
        questions_list: questions.data,
      },
    ])
    .select()
    .single();

  if (error) return { data, error };

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

const get = async (code: number) => {
  const { data, error } = await supabase
    .from("rooms")
    .select()
    .eq("code", code)
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

const join = async (room_id: number, user_id: number) => {
  const { data, error } = await supabase
    .from("room_user")
    .insert([
      {
        user_id: user_id,
        room_id: room_id,
        owner: false,
      },
    ])
    .select()
    .single();

  return { data, error };
};

const addPoints = async (room_user_id: number, score: number) => {
  const { data, error } = await supabase
    .from("room_user")
    .update({ score: score })
    .eq("id", room_user_id);

  return { data, error };
};

export const roomService = {
  create,
  addUserToRoom,
  launch,
  get,
  join,
  addPoints,
};
