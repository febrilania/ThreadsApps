import { Iuser } from "./Auth";

export interface IThreads {
  id: number;
  content: string;
  image: string;
  created_at?: string;
  user?: Iuser;
  repliesLength?: number;
  likeLength?: number;
}

export type IThreadPost = {
  content: string;
  image: File | null;
};
