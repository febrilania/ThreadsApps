import { createSlice } from "@reduxjs/toolkit";
import { Iuser } from "../../interface/Auth";
import { setAuthToken } from "../../libs/api";

const initialAuthState: Iuser = {
  id: 0,
  username: "",
  full_name: "",
  email: "",
  bio: "",
  profile_picture: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    AUTH_LOGIN: (_, action) => {
      localStorage.setItem("tokenn", action.payload.token);
      setAuthToken(action.payload.token);
      const payload = action.payload;
      const user: Iuser = {
        id: payload.obj.id,
        full_name: payload.obj.full_name,
        email: payload.obj.email,
        username: payload.obj.username,
      };

      return user;
    },
    AUTH_CHECK: (_, action) => {
      setAuthToken(action.payload.token);
      const payload = action.payload;
      const user: Iuser = {
        id: payload.obj.id,
        full_name: payload.obj.full_name,
        email: payload.obj.email,
        username: payload.obj.username,
      };

      return user;
    },
    // AUTH_LOGOUT: (_, action) => {

    // }
  },
});
