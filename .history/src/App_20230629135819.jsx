import React from "react";
import Navbar from "./components/Navbar";
import Bottombar from "./components/Bottombar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Navbar />
        <Routes>
          <Route path="/" element={Home} />
        </Routes>
      <Bottombar />
    </>
  );
};

export default App;
