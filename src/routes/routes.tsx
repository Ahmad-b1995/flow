import {Routes, Route} from "react-router-dom";
import Board from "../pages/Board";
import Home from "../pages/Home";
import Singin from "../pages/Signin";
import Singup from "../pages/Signup";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="board" element={<Board />} />
      <Route path="signup" element={<Singup />} />
      <Route path="signin" element={<Singin />} />
    </Routes>
  );
}
