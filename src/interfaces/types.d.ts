import { Database } from "./database";

export type IRoomUser = Database["public"]["Tables"]["room_user"]["Row"];

export type IRoom = Database["public"]["Tables"]["rooms"]["Row"];

export type IQuestion = Database["public"]["Tables"]["questions"]["Row"];

export type IPlanet = Database["public"]["Tables"]["planets"]["Row"];

export type IInfo = Database["public"]["Tables"]["infos"]["Row"];

// -------------

export type IQuestionInsert =
  Database["public"]["Tables"]["questions"]["Insert"];

// npx supabase gen types typescript --project-id "ddyfkljovxwifqdlnkiy" --schema public > src/interfaces/database.d.ts
