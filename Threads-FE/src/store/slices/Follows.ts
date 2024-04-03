import { createSlice } from "@reduxjs/toolkit";
import { IFollows } from "../../interface/Follows";
import { setAuthToken } from "../../libs/api";
import { getFollower } from "../async/follows";

const initialFollower: IFollows[] = [];

const initialState = {
  initialFollower,
};

export const followerSlice = createSlice({
  name: "follower",
  initialState,
  reducers: {
    GET_FOLLOWER(state, action) {
      setAuthToken(action.payload.token);
      state.initialFollower = action.payload;
    },
  },
  extraReducers(builder) {
    builder.addCase(getFollower.fulfilled, (state, action) => {
      state.initialFollower = action.payload;
    });
  },
});
