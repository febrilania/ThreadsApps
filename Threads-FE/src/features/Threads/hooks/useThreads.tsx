import { api } from "../../../libs/api";
import { useDispatch } from "react-redux";
import { GET_THREAD, GET_THREADS } from "../../../store/RootReducer";
import { useParams } from "react-router-dom";
import { IThreadPost } from "../../../interface/Threads";
import React, { FormEvent } from "react";

export function useThreads() {
  const dispatch = useDispatch();
  const { id } = useParams();

  async function getThreads() {
    try {
      const response = await api.get(`/threads`);
      dispatch(GET_THREADS(response.data));
      console.log(response);
    } catch (error) {
      throw error;
    }
  }

  async function getThread() {
    try {
      const response = await api.get(`/threads/${id}`);
      dispatch(GET_THREAD(response.data));
      console.log(response);
    } catch (error) {
      throw error;
    }
  }

  const [data, setData] = React.useState<IThreadPost>({
    content: "",
    image: null,
  });

  async function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value, files } = event.target;

    if (files) {
      setData({
        ...data,
        [name]: files[0],
      });
    } else {
      setData({
        ...data,
        [name]: value,
      });
    }
  }
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  function handleButtonClick() {
    fileInputRef.current?.click();
  }

  async function postThread(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("content", data.content);
      formData.append("image", data.image as File);

      console.log("FormData:", formData); // Log FormData object

      const response = await api.post("/thread", formData);
      console.log("Response:", response.data); // Log response from the server

      getThreads();
    } catch (error) {
      console.error("Error posting thread:", error);
      throw error;
    }
  }

  return {
    getThreads,
    getThread,
    postThread,
    handleChange,
    handleButtonClick,
    fileInputRef,
    data,
  };
}
