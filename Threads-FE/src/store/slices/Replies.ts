import { createSlice } from "@reduxjs/toolkit";
import { IReplies } from "../../interface/Replies";

const getReplies: IReplies[] = [];

const initialState = { getReplies };

export const repliesSlice = createSlice({
  name: "Replies",
  initialState,
  reducers: {
    GET_REPLIES(state, action) {
      state.getReplies = action.payload;
    },
  },
});
