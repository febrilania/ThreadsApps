// import { createSlice } from "@reduxjs/toolkit";
// import { Iuser } from "../../interface/Auth";
// import { setAuthToken } from "../../libs/api";

import { createSlice } from "@reduxjs/toolkit";
import { Iuser } from "../../interface/Auth";
import { setAuthToken } from "../../libs/api";
import { getUsers } from "../async/users";

// const initialUser: { data: Iuser } = {
//   data: {
//     id: 0,
//     full_name: "",
//     username: "",
//     email: "",
//     bio: "",
//     profile_picture: "",
//   },
// };

// export const userSlice = createSlice({
//   name: "user",
//   initialState: initialUser,

//   reducers: {
//     GET_USER(state, action) {
//       setAuthToken(action.payload.token);
//       state.data = action.payload;
//     },
//   },
// });

const initialUsers: Iuser[] = [];
const initialState = {
  initialUsers,
};
export const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    GET_USERS(state, action) {
      setAuthToken(action.payload.token);
      state.initialUsers = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.initialUsers = action.payload;
    });
  },
});
