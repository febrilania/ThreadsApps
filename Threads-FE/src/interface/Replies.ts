import { Iuser } from "./Auth";

export interface IReplies {
  id: number;
  content: string;
  image: string;
  created_At: string;
  user: Iuser;
}
