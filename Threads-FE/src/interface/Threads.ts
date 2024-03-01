import { Iuser } from "./Auth";

export interface IThreads {
  id: number;
  content: string;
  image: string;
  created_at: string;
  user: Iuser;
}
