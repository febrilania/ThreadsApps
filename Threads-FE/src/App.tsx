import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import Register from "./pages/Register";
import Login from "./pages/Login";

const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
