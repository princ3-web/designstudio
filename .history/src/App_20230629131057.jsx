import React from "react";
import Navbar from "./components/Navbar";
import Bottombar from "./components/Bottombar";
import Boxes from "./components/Boxes";

const App = () => {
  return (
    <div>
      <Navbar />
      <Boxes />
      <Bottombar />
    </div>
  );
};

export default App;
