import React from "react";
import "./css/App.module.css";
import Text from "./css/Text.module.css";
import Margin from "./css/Margin.module.css";
import BoxStyle from "./css/Box.module.css";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import Bottombar from "./components/Bottombar";
import BoxFull from "./components/BoxFull";
import BoxMedium from "./components/BoxMedium";
import BoxSmall from "./components/BoxSmall";
import Button from "./components/Button";
import background from "./assets/images/0.jpg";
import image0 from "./assets/images/image0.png";
import image1 from "./assets/images/image1.png";

const App = () => {
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
        <BoxSmall background={"var(--orange-100)"}>
          <img className={BoxStyle.image} src={image0} style={{ width: "40%" }} alt="" />
        </BoxSmall>
        <BoxSmall background={"var(--pink-100)"}>
          <img className={BoxStyle.image} src={image1} style={{ width: "80%" }} alt="" />
        </BoxSmall>
        <BoxSmall background={"var(--purple-100)"}>
          <img className={BoxStyle.image} src={image1} style={{ width: "40%" }} alt="" />
        </BoxSmall>
      </Container>
      <Container>
        <BoxMedium></BoxMedium>
        <BoxSmall></BoxSmall>
      </Container>
      <Bottombar />
    </div>
  );
};

export default App;
