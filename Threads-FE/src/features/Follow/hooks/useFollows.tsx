import { useDispatch } from "react-redux";
import { api, setAuthToken } from "../../../libs/api";
import { GET_FOLLOWER } from "../../../store/RootReducer";

export function useFollows() {
  const dispatch = useDispatch();
  async function getFollower() {
    try {
      const response = await api.get("/follower");
      setAuthToken(localStorage.tokenn);
      dispatch(GET_FOLLOWER(response.data));
    } catch (error) {
      throw error;
    }
  }

  return {
    getFollower,
  };
}
