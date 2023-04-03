import { supabase } from "../libs/supabase";

const getArrayOfQuestions = async () => {
  const { data, error } = await supabase.from("questions").select("*");
  console.log("data", data);
  console.log("error", error);

  return { data, error };
};

const getOne = async (id: number) => {
  const { data, error } = await supabase
    .from("questions")
    .select("*")
    .eq("id", id)
    .single();

  return { data, error };
};

export const questionService = { getArrayOfQuestions, getOne };
