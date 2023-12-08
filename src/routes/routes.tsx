import {Routes, Route, Navigate} from "react-router-dom";
import Board from "../pages/Board";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Singin from "../pages/Signin";
import Singup from "../pages/Signup";
import PrivateRoutes from "./privateRoutes";
import {get} from "local-storage";

export default function Router() {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route
        path="signin"
        element={
          !get("user") ? <Singin /> : <Navigate replace to="/dashboard" />
        }
      />
      <Route
        path="signup"
        element={
          !get("user") ? <Singup /> : <Navigate replace to="/dashboard" />
        }
      />
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
