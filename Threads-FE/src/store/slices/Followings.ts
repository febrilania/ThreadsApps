import { createSlice } from "@reduxjs/toolkit";
import { IFollowings } from "../../interface/Follows";
import { getFollowing } from "../async/follows";

const initialState = {
  initialFollowing: [] as IFollowings[], // Menetapkan tipe IFollowings untuk initialFollowing
};

export const followingSlice = createSlice({
  name: "following",
  initialState,
  reducers: {
    setFollowings: (state, action) => {
      state.initialFollowing = action.payload; // Menggunakan nama aksi yang lebih deskriptif
    },
  },
  extraReducers(builder) {
    builder.addCase(getFollowing.fulfilled, (state, action) => {
      state.initialFollowing = action.payload;
    });
  },
});
export const { setFollowings } = followingSlice.actions;
