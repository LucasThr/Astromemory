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
      infos: {
        Row: {
          id: number;
          info: string | null;
        };
        Insert: {
          id?: number;
          info?: string | null;
        };
        Update: {
          id?: number;
          info?: string | null;
        };
      };
      planets: {
        Row: {
          composition: string[] | null;
          created_at: string | null;
          description: string | null;
          details: string | null;
          distance: string | null;
          gravity: string | null;
          id: number;
          image: string | null;
          images: string[] | null;
          mass: string | null;
          name: string | null;
          radius: string | null;
          rotation: string | null;
          surface: string | null;
          temperature: string | null;
        };
        Insert: {
          composition?: string[] | null;
          created_at?: string | null;
          description?: string | null;
          details?: string | null;
          distance?: string | null;
          gravity?: string | null;
          id?: number;
          image?: string | null;
          images?: string[] | null;
          mass?: string | null;
          name?: string | null;
          radius?: string | null;
          rotation?: string | null;
          surface?: string | null;
          temperature?: string | null;
        };
        Update: {
          composition?: string[] | null;
          created_at?: string | null;
          description?: string | null;
          details?: string | null;
          distance?: string | null;
          gravity?: string | null;
          id?: number;
          image?: string | null;
          images?: string[] | null;
          mass?: string | null;
          name?: string | null;
          radius?: string | null;
          rotation?: string | null;
          surface?: string | null;
          temperature?: string | null;
        };
      };
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
          ready: boolean | null;
          room_id: number | null;
          score: number | null;
          user_id: number;
        };
        Insert: {
          id?: number;
          owner?: boolean | null;
          ready?: boolean | null;
          room_id?: number | null;
          score?: number | null;
          user_id?: number | null;
        };
        Update: {
          id?: number;
          owner?: boolean | null;
          ready?: boolean | null;
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
          step: number | null;
        };
        Insert: {
          code?: number;
          id?: number;
          number_questions?: number | null;
          questions_list?: number[] | null;
          status?: string | null;
          step?: number | null;
        };
        Update: {
          code?: number;
          id?: number;
          number_questions?: number | null;
          questions_list?: number[] | null;
          status?: string | null;
          step?: number | null;
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
