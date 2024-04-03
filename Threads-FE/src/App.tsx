import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import Register from "./features/Auth/components/Register";
import Login from "./features/Auth/components/Login";
import RepliesPage from "./pages/RepliesPage";
import Search from "./pages/Search";
import FollowPages from "./pages/FollowPages";
import { api, setAuthToken } from "./libs/api";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AUTH_CHECK } from "./store/RootReducer";
import ProfilePages from "./pages/ProfilePages";

const App: React.FC = () => {
  const dispatch = useDispatch();
  async function checkAuth() {
    try {
      setAuthToken(localStorage.tokenn);
      const response = await api.get("/auth/check");
      dispatch(AUTH_CHECK(response.data));
    } catch (error) {
      throw error;
    }
  }
  useEffect(() => {
    if (localStorage.tokenn) {
      checkAuth();
    }
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/replies/threads/:id" element={<RepliesPage />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/follow" element={<FollowPages />}></Route>
          <Route path="/profile" element={<ProfilePages />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
