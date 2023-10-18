import React from "react";
import ReactDOM from "react-dom/client";
//import { ContadorApp } from "./ContadorApp";
import "./styles.css";
//import ListadoApp from "./ListadoApp";
import { UsersApp } from "./UsersApp";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UsersApp></UsersApp>
  </React.StrictMode>
);
