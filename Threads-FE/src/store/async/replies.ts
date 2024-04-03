import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../libs/api";
import { useParams } from "react-router-dom";

export const getReplies = createAsyncThunk("reply/getReplies", async () => {
  const { id } = useParams();
  try {
    const response = await api.get(`/replies/threads/${id}`);
    console.log("asyntunk replies", response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
});
