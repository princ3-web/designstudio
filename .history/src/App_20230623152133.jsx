import React from "react";
import "./css/App.css";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Bottombar from "./components/Bottombar";
import BoxFull from "./components/BoxFull";

function App() {
  return (
    <div>
      <Navbar />
      <Container>
        <BoxFull></BoxFull>
      </Container>
      <Container>
        <Box></BoxFull>
      </Container>
      <Bottombar />
    </div>
  );
}

export default App;
