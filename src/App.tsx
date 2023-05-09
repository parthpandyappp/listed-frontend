import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes } from "./routes";
import { Nav } from "./components";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  return (
    <div className="h-screen min-h-screen flex flex-col font-montserrat">
      {location.pathname !== "/" && <Nav />}
      <Routes />
    </div>
  );
}

export default App;
