import React from "react";
import ReactDOM from "react-dom/client";
import "@atlaskit/css-reset";
import App from "./App";
import './assets/main.css'


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
