import { useNavigate } from "react-router-dom";
import React from "react";
import { api } from "../../../libs/api";
import useToast from "../../../hooks/useToast";
import { Ilogin } from "../../../interface/Auth";
import { AUTH_LOGIN } from "../../../store/RootReducer";
import { useDispatch } from "react-redux";

export function useLogin() {
  const navigate = useNavigate();
  const toast = useToast();
  const dispatch = useDispatch();

  const [form, setForm] = React.useState<Ilogin>({
    email: "",
    password: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  }

  async function handleLogin() {
    try {
      const response = await api.post("/login", form);
      dispatch(AUTH_LOGIN(response.data));
      if (response) toast("Success", "Login Succesfully", "success");
      navigate("/");
    } catch (error) {
      toast("Error", "email & password no matching", "error");
    }
  }

  return {
    handleChange,
    handleLogin,
  };
}
