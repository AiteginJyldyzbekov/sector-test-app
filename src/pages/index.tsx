import { Route, Routes } from "react-router-dom";
import HomePage from "./home-page";

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};
