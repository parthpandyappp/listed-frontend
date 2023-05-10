import { Route, Routes } from "react-router-dom";
import { Analytics, Auth } from "../pages";

const Endpoints = () => {
  return (
    <Routes>
      <Route path="/" element={<Auth />} />
      <Route path="/analytics" element={<Analytics />} />
    </Routes>
  );
};

export { Endpoints as Routes };
