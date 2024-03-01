export interface DataDummy {
  id: number;
  fullname?: string;
  username?: string;
  content?: string;
  posted_at: string;
  picture?: string;
  image?: string;
  likes_count: number;
  replies_count: number;
  user?: Iuser;
}

export interface Iuser {
  id: number;
  full_name: string;
  username: string;
  email?: string;
  password?: string;
  photo_profile?: string;
  bio?: string;
  created_at?: Date;
}
