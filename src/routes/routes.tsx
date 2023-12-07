import {Routes, Route} from "react-router-dom";
import Board from "../pages/Board";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Singin from "../pages/Signin";
import Singup from "../pages/Signup";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="signup" element={<Singup />} />
      <Route path="signin" element={<Singin />} />
      <Route path="dashboard" element={<Dashboard />}>
        <Route path="projects" element={<Projects />} />
        <Route path="projects/:id" element={<Board />} />
      </Route>
    </Routes>
  );
}
