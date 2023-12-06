// import {Outlet} from "react-router-dom";
import {Route, Routes} from "react-router-dom";
import Board from "./pages/Board";
import Home from "./pages/Home";
import Router from "./routes";
import Singin from "./pages/Signin";
import Singup from "./pages/Signup";
import "./styles/Global";

export default function App() {
  return (
    <Routes>
      <Route path="/flow">
        <Route index element={<Home />} />
        <Route path="board" element={<Board />} />
        <Route path="signup" element={<Singup />} />
        <Route path="signin" element={<Singin />} />
      </Route>
    </Routes>
  );
}
