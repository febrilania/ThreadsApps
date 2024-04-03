// import { useDispatch } from "react-redux";
// import { useParams } from "react-router-dom";
// import { api } from "../../../libs/api";
// import { GET_REPLIES } from "../../../store/RootReducer";

// export function useReplies() {
//   const dispatch = useDispatch();
//   const { id } = useParams();
//   async function getReplies() {
//     try {
//       const response = await api.get(`/replies/threads/${id}`);
//       dispatch(GET_REPLIES(response.data.data));
//       console.log(response);
//     } catch (error) {
//       throw error;
//     }
//   }
//   return {
//     getReplies,
//   };
// }
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { api } from "../../../libs/api";
import { GET_REPLIES } from "../../../store/RootReducer";
import { IReplies } from "../../../interface/Replies";

export function useReplies() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [replies, setReplies] = useState<IReplies[]>([]);

  async function getReplies() {
    try {
      const response = await api.get(`/replies/threads/${id}`);
      setReplies(response.data.data);
      dispatch(GET_REPLIES(response.data.data));
      console.log(response);
    } catch (error) {
      throw error;
    }
  }

  return {
    replies,
    getReplies,
  };
}
