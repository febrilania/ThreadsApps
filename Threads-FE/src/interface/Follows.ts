import { Iuser } from "./Auth";

export interface IFollows {
  id: number;
  created_at: Date;
  follower: Iuser;
  is_followed: boolean;
}

export interface IFollowings {
  id: number;
  created_at: Date;
  following: Iuser;
}

export interface IFollowing {
  data: IFollowings;
}

export interface IFollower {
  // id: number;
  data: IFollows;
}
