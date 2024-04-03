import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../libs/api";
import { useParams } from "react-router-dom";

export const getThread = createAsyncThunk("threads/getThread", async () => {
  const { id } = useParams();
  try {
    const response = await api.get(`/threads/${id}`);
    console.log("asyntunk thread id", response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
});
