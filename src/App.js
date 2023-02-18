import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Proposal from "./pages/Proposal";
import { Main } from "./pages/Main";


const App = () => {
  return (
    <>
      <Routes>
      <Route path="/" element={<Main />} />
        <Route path="/home" element={<Home />} />
        <Route path="/proposal" element={<Proposal />} />
      </Routes>
    </>
  );
};

export default App;