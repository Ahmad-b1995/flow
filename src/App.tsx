import {Outlet} from "react-router-dom";
import Router from "./routes";

export default function App() {
  return (
    <div>
      <Router />
      <Outlet />
    </div>
  );
}
