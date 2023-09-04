import React from "react";
import "./css/App.module.css";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Bottombar from "./components/Bottombar";
import BoxFull from "./components/BoxFull";
import BoxMedium from "./components/BoxMedium";
import BoxSmall from "./components/BoxSmall";
import Button from "./components/Button";
import Text from "./css/Text.module.css";
import Margin from "./css/Margin.module.css";
import background from "./assets/images/0.jpg";

function App() {
  return (
    <div>
      <Navbar />
      <Container>
        <BoxFull background={background}>
          <div className={[Text.text36, Text.textLight].join(" ")}>
            Creative plans. Designed for you.
          </div>
          <div className={Margin.block2rem}></div>
          <div className={Text.text20}>
            Explore video, photo, design, and more with a Creative Cloud plan that works
            for you.
          </div>
          <div className={Margin.block1rem}></div>
          <Button text={"See all plans"} />
        </BoxFull>
      </Container>
      <Container>
        <BoxSmall></BoxSmall>
        <BoxSmall></BoxSmall>
        <BoxSmall></BoxSmall>
      </Container>
      <Container>
        <BoxMedium></BoxMedium>
        <BoxSmall></BoxSmall>
      </Container>
      <Bottombar />
    </div>
  );
}

export default App;
