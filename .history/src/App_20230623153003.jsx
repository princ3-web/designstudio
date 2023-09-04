import React from "react";
import "./css/App.css";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Bottombar from "./components/Bottombar";
import BoxFull from "./components/BoxFull";
import BoxMedium from "./components/BoxMedium";
import BoxSmall from "./components/BoxSmall";

function App() {
  return (
    <div>
      <Navbar />
      <BoxFull></BoxFull>

      <Container>
      </Container>
      <Container>
        <BoxMedium></BoxMedium>
        <BoxSmall></BoxSmall>
      </Container>
      <Container>
        <BoxSmall></BoxSmall>
        <BoxSmall></BoxSmall>
        <BoxSmall></BoxSmall>
      </Container>
      <Bottombar />
    </div>
  );
}

export default App;
