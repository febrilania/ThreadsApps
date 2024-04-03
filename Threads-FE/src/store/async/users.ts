import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../libs/api";

export const getUsers = createAsyncThunk("users/getUsers", async () => {
  try {
    const response = await api.get("/users");
    console.log("asyntunk user", response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
});
