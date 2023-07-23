import { Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./home-page";

export const Routing = () => {
  return (
    <Routes>
      <Route path="/pages/:id" element={<HomePage />} />
      <Route path="*" element={<Navigate to="/pages/1" replace />} />
    </Routes>
  );
};
