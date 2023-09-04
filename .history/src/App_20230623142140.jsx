import React from "react";
import "./css/App.css";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Bottombar from "./components/Navbar";

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
