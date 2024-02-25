import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import Register from "./pages/Register";
import Login from "./pages/Login";
import RepliesPage from "./pages/RepliesPage";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/replies" element={<RepliesPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
