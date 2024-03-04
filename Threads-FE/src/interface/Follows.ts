import { Iuser } from "./Auth";

export interface IFollows {
  id: number;
  user: Iuser;
  is_followed: boolean;
}
