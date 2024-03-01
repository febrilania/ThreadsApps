export interface Ilogin {
  email: string;
  password: string;
}

export interface Iuser {
  id: number;
  username: string;
  full_name: string;
  email: string;
  profile_picture?: string;
  bio?: string;
}
