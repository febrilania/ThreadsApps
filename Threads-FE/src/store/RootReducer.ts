import { combineReducers } from "@reduxjs/toolkit";
import { authSlice } from "./slices";
import { ThreadsSlice, getThreadSlice } from "./slices/Threads";
import { repliesSlice } from "./slices/Replies";
import { followerSlice } from "./slices/Follows";
// import { userSlice } from "./slices/User";

//manggil action
export const { AUTH_LOGIN, AUTH_CHECK } = authSlice.actions;
export const { GET_THREADS } = ThreadsSlice.actions;
export const { GET_THREAD } = getThreadSlice.actions;
export const { GET_REPLIES } = repliesSlice.actions;
export const { GET_FOLLOWER } = followerSlice.actions;
// export const { GET_USER } = userSlice.actions;

//storage
export const authReducer = authSlice.reducer;
export const threadsReducer = ThreadsSlice.reducer;
export const threadReducer = getThreadSlice.reducer;
export const repliesReducer = repliesSlice.reducer;
export const followerReducer = followerSlice.reducer;
// export const userReducer = userSlice.reducer;

//buat disatuin biar lebih simple
export const rootReducer = combineReducers({
  auth: authReducer,
  threads: threadsReducer,
  thread: threadReducer,
  replies: repliesReducer,
  follower: followerReducer,
  // user: userReducer,
});
