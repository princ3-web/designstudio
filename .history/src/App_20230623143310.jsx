import React from "react";
import "./css/App.css";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Bottombar from "./components/Bottombar";

function App() {
  return (
    <div>
      <Navbar />
      <Container />
      <Bottombar />
      <div></div>
    </div>
  );
}

export default App;
