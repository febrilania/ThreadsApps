import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../libs/api";

export const getFollower = createAsyncThunk("follow/getFollower", async () => {
  try {
    const response = await api.get("/follower");

    return response.data.data;
  } catch (error) {
    throw error;
  }
});

export const getFollowing = createAsyncThunk(
  "follow/getFollowing",
  async () => {
    try {
      const response = await api.get("/following");
      console.log("ini data following", response.data.data);
      return response.data.data;
    } catch (error) {
      throw error;
    }
  }
);
