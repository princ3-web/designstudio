import React from "react";
import Navbar from "./components/Navbar";
import Bottombar from "./components/Bottombar";

import { BrowserRouter, Routes, R } from "react-router-dom";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={Home} />
        </Routes>
      </BrowserRouter>
      <Bottombar />
    </>
  );
};

export default App;
