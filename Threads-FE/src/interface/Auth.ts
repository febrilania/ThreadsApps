export interface Ilogin {
  email: string;
  password: string;
}

export interface Iuser {
  id: number;
  username?: string;
  full_name?: string;
  email?: string;
  photo_profile?: string;
  bio?: string;
  cover_photo?: string;
}
