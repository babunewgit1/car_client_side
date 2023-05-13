import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes.jsx";
import AuthProvidor from "./AuthProvidor/AuthProvidor.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvidor>
    <RouterProvider router={router}>
      <React.StrictMode></React.StrictMode>,
    </RouterProvider>
  </AuthProvidor>
);
