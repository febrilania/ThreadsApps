import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import Register from "./pages/Register";
import Login from "./pages/Login";
import RepliesPage from "./pages/RepliesPage";
import Search from "./pages/Search";
import FollowPages from "./pages/FollowPages";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/replies" element={<RepliesPage />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/follow" element={<FollowPages />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
