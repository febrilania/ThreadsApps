import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices";
import { ThreadsSlice, getThreadSlice } from "./slices/Threads";
import { repliesSlice } from "./slices/Replies";
import { followerSlice } from "./slices/Follows";
import { followingSlice } from "./slices/Followings";
import { TypedUseSelectorHook } from "react-redux";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { userSlice } from "./slices/User";
// import { userSlice } from "./slices/User";

//manggil action
export const { AUTH_LOGIN, AUTH_CHECK } = authSlice.actions;
export const { GET_THREADS } = ThreadsSlice.actions;
export const { GET_THREAD } = getThreadSlice.actions;
export const { GET_REPLIES } = repliesSlice.actions;
export const { GET_FOLLOWER } = followerSlice.actions;
export const { GET_FOLLOWINGS } = followingSlice.actions;

// export const { GET_USER } = userSlice.actions;

//storage
export const authReducer = authSlice.reducer;
export const threadsReducer = ThreadsSlice.reducer;
export const threadReducer = getThreadSlice.reducer;
export const repliesReducer = repliesSlice.reducer;
export const followerReducer = followerSlice.reducer;
export const followingReducer = followingSlice.reducer;
export const usersReducer = userSlice.reducer;

// export const userReducer = userSlice.reducer;

//buat disatuin biar lebih simple
const rootReducer = combineReducers({
  auth: authReducer,
  threads: threadsReducer,
  thread: threadReducer,
  replies: repliesReducer,
  follower: followerReducer,
  following: followingReducer,
  users: usersReducer,

  // user: userReducer,
});
export const store = configureStore({
  reducer: rootReducer,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
