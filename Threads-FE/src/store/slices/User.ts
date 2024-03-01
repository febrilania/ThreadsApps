// import { createSlice } from "@reduxjs/toolkit";
// import { Iuser } from "../../interface/Auth";
// import { setAuthToken } from "../../libs/api";

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
