import React from "react";
import Navbar from "./components/Navbar";
import Bottombar from "./components/Bottombar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Features from "./pages/Features";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Featu />} />
      </Routes>
      <Bottombar />
    </>
  );
};

export default App;
