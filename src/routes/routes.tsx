import {BrowserRouter, Routes, Route} from "react-router-dom";
import Board from "../pages/Board";
import Home from "../pages/Home";
import Singin from "../pages/Singin";
import Singup from "../pages/Singup";

export default function Router() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/flow">
          <Route index element={<Home />} />
          <Route path="board" element={<Board />} />
          <Route path="signup" element={<Singup />} />
          <Route path="signin" element={<Singin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
