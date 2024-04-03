import { createSlice } from "@reduxjs/toolkit";
import { IReplies } from "../../interface/Replies";
import { getReplies } from "../async/replies";

const initialGetReplies: IReplies[] = [];

const initialState = { initialGetReplies };

export const repliesSlice = createSlice({
  name: "Replies",
  initialState,
  reducers: {
    GET_REPLIES(state, action) {
      state.initialGetReplies = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(getReplies.fulfilled, (state, action) => {
      state.initialGetReplies = action.payload;
    });
  },
});
