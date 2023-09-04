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
  const boxContainer = {
    display: "flex",
    justifyContent: "space-between",
    boxSizing: "border-box",
    width: "100%",
    paddingInline: "4rem",
  };
  
  return (
    <div>
      <Navbar />
      <Container>
        <BoxFull background={background}>
          <div className={[Text.text36, Text.textLight].join(" ")}>
            Creative plans. Designed for you.
          </div>
          <div className={Margin.block2rem}></div>
          <div className={[Text.text20, Text.textLight].join(" ")}>
            Explore video, photo, design, and more with a Creative Cloud plan that works
            for you.
          </div>
          <div className={Margin.block2rem}></div>
          <Button text={"See all plans"} />
        </BoxFull>
      </Container>
      <Container>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            boxSizing: "border-box",
            width: "100%",
            paddingInline: "4rem",
          }}
        >
          <BoxSmall background={"var(--orange-100)"}></BoxSmall>
          <BoxSmall background={"var(--pink-100)"}></BoxSmall>
          <BoxSmall background={"var(--purple-100)"}></BoxSmall>
        </div>
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
