import React from "react";
import ReactDOM from "react-dom/client";
import "@atlaskit/css-reset";
import App from "./App";
import "./styles/Global.scss";
import {HashRouter} from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
