import { supabase } from "../libs/supabase";

const getArrayOfQuestions = async (number: number) => {
  const { data, error } = await supabase.from("questions").select("id");
  console.log("data", data);
  console.log("errorffeef", error);
  if (data === null) return { error: "No data found" };

  //randomize list of question
  const randomizeList = data
    .sort(() => Math.random() - Math.random())
    .slice(0, number);

  //create only an array of numbers
  const flatten = randomizeList.map((item) => item.id);

  return { data: flatten, error };
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
