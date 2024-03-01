import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { api } from "../../../libs/api";
import { GET_REPLIES } from "../../../store/RootReducer";

export function useReplies() {
  const dispatch = useDispatch();
  const { id } = useParams();
  async function getReplies() {
    try {
      const response = await api.get(`/replies/threads/${id}`);
      dispatch(GET_REPLIES(response.data.data));
      console.log(response);
    } catch (error) {
      throw error;
    }
  }
  return {
    getReplies,
  };
}
