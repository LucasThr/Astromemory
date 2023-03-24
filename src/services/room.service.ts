import { supabase } from "../libs/supabase";

const create = async (
  code: number,
  number_questions: number,
  status: string,
  questions_list: number[]
) => {
  const { error } = await supabase.from("rooms").insert([
    {
      code: code,
      number_questions: number_questions,
      status: status,
      questions_list: questions_list,
    },
  ]);

  return { error };
};

export const roomService = {create};
