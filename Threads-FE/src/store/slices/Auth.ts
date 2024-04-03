import { createSlice } from "@reduxjs/toolkit";
import { Iuser } from "../../interface/Auth";
import { setAuthToken } from "../../libs/api";

const initialAuthState: Iuser = {
  id: 0,
  username: "",
  full_name: "",
  email: "",
  bio: "",
  photo_profile: "",
  cover_photo: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthState,
  reducers: {
    AUTH_LOGIN: (_, action) => {
      console.log(action);

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
    // AUTH_LOGIN: (state, action) => {
    //   const { id, email, full_name, username } = action.payload.user;

    //   const { token } = action.payload;

    //   setAuthToken(token);
    //   localStorage.setItem("tokenn", token);

    //   state.id = id;
    //   state.email = email;
    //   state.full_name = full_name;
    //   state.username = username;
    // state.bio = bio;
    // state.profile_picture = profile_picture;
    // },
    // AUTH_CHECK: (_, action) => {
    //   setAuthToken(action.payload.token);
    //   const payload = action.payload;
    //   const user: Iuser = {
    //     id: payload.obj ? payload.obj.id : null,
    //     full_name: payload.obj ? payload.obj.full_name : null,
    //     email: payload.obj ? payload.obj.email : null,
    //     username: payload.obj ? payload.obj.username : null,
    //   };

    //   return user;
    // },
    AUTH_CHECK: (state, action) => {
      const { id, email, full_name, username, bio, photo_profile } =
        action.payload.user;

      state.id = id;
      state.email = email;
      state.full_name = full_name;
      state.username = username;
      state.bio = bio;
      state.photo_profile = photo_profile;
    },
    // AUTH_LOGOUT: (_, action) => {

    // }
  },
});
