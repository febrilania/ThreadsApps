import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { api } from "../../../libs/api";
import { AUTH_CHECK } from "../../../store/RootReducer";

export function useUser() {
  const dispatch = useDispatch();
  const { id } = useParams();

  async function getUserLogin() {
    try {
      const response = await api.get(`/check/${id}`);
      dispatch(AUTH_CHECK(response.data));
      console.log(response);
    } catch (error) {
      throw error;
    }
  }
  return {
    getUserLogin,
  };
}
