import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Routing } from "./pages";
import "./styles/App.css";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/pages/1");
  }, []);

  return (
    <>
      <Routing />
    </>
  );
}

export default App;
