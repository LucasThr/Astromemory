export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  public: {
    Tables: {
      questions: {
        Row: {
          answer: string | null;
          id: number;
          question: string | null;
          wrong_answer: string[] | null;
        };
        Insert: {
          answer?: string | null;
          id?: number;
          question?: string | null;
          wrong_answer?: string[] | null;
        };
        Update: {
          answer?: string | null;
          id?: number;
          question?: string | null;
          wrong_answer?: string[] | null;
        };
      };
      room_user: {
        Row: {
          id: number;
          owner: boolean | null;
          room_id: number | null;
          score: number;
          user_id: number | null;
        };
        Insert: {
          id?: number;
          owner?: boolean | null;
          room_id?: number | null;
          score?: number | null;
          user_id?: number | null;
        };
        Update: {
          id?: number;
          owner?: boolean | null;
          room_id?: number | null;
          score?: number | null;
          user_id?: number | null;
        };
      };
      rooms: {
        Row: {
          code: number;
          id: number;
          number_questions: number | null;
          questions_list: number[];
          status: string | null;
        };
        Insert: {
          code?: number;
          id?: number;
          number_questions?: number | null;
          questions_list?: number[];
          status?: string | null;
        };
        Update: {
          code?: number;
          id?: number;
          number_questions?: number | null;
          questions_list?: number[] | null;
          status?: string | null;
        };
      };
      users: {
        Row: {
          id: number;
          name: string | null;
        };
        Insert: {
          id?: number;
          name?: string | null;
        };
        Update: {
          id?: number;
          name?: string | null;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
}
