import {Routes, Route} from "react-router-dom";
import Board from "../pages/Board";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Singin from "../pages/Signin";
import Singup from "../pages/Signup";
import PrivateRoutes from "./privateRoutes";

export default function Router() {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route path="signup" element={<Singup />} />
      <Route path="signin" element={<Singin />} />
      <Route element={<PrivateRoutes />}>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:id" element={<Board />} />
        </Route>
      </Route>
      <Route path="*" element={<p>There's nothing here: 404!</p>} />
    </Routes>
  );
}
