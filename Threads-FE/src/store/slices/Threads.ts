import { createSlice } from "@reduxjs/toolkit";
import { IThreads } from "../../interface/Threads";

const getThreads: IThreads[] = [];
const initialState = {
  getThreads,
};

export const ThreadsSlice = createSlice({
  name: "threads",
  initialState,
  reducers: {
    GET_THREADS(state, action) {
      state.getThreads = action.payload;
    },
  },
});

const initialGetThread: {
  data: IThreads;
} = {
  data: {
    id: 0,
    content: "",
    image: "",
    created_at: "",
    user: {
      id: 0,
      username: "",
      full_name: "",
      profile_picture: "",
      email: "",
    },
  },
};

export const getThreadSlice = createSlice({
  name: "getThread",
  initialState: initialGetThread,
  reducers: {
    GET_THREAD(state, action) {
      state.data = action.payload;
    },
  },
});
