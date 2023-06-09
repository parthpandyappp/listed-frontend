import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes } from "./routes";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  return (
    <div className="h-screen min-h-screen bg-[#F5F5F5] overflow-y-scroll flex flex-col font-montserrat">
      {/* {location.pathname !== "/" && <Nav />} */}
      <Routes />
    </div>
  );
}

export default App;
