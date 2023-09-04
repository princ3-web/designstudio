import React from "react";
import "./css/App.css";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Bottombar from "./components/Bottombar1";

function App() {
  return (
    <div>
      <Navbar />
      <Container />
      <Bottombar />
    </div>
  );
}

export default App;
