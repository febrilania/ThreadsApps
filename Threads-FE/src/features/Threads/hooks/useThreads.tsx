import { api } from "../../../libs/api";
import { useDispatch } from "react-redux";
import { GET_THREAD, GET_THREADS } from "../../../store/RootReducer";
import { useParams } from "react-router-dom";

export function useThreads() {
  const dispatch = useDispatch();
  const { id } = useParams();

  async function getThreads() {
    try {
      const response = await api.get(`/threads`);
      dispatch(GET_THREADS(response.data));
    } catch (error) {
      throw error;
    }
  }

  async function getThread() {
    try {
      const response = await api.get(`/threads/${id}`);
      dispatch(GET_THREAD(response.data));
    } catch (error) {
      throw error;
    }
  }

  return {
    getThreads,
    getThread,
  };
}
