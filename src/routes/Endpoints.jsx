import { Route, Routes } from "react-router-dom";
import { Auth } from "../pages";

const Endpoints = () => {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
    </Routes>
  );
};

export { Endpoints as Routes };
