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
  function generateRandomColor() {
    var red = Math.floor(Math.random() * 256); // Random value between 0 and 255
    var green = Math.floor(Math.random() * 256); // Random value between 0 and 255
    var blue = Math.floor(Math.random() * 256); // Random value between 0 and 255
    var alpha = Math.random(); // Random value between 0 and 1

    var rgbaColor = "rgba(" + red + ", " + green + ", " + blue + ", " + alpha + ")";
    return rgbaColor;
  }

  var color1 = generateRandomColor();
  var color2 = generateRandomColor();
  var gradient = "linear-gradient(to right, " + color1 + ", " + color2 + ")";
  console.log(gradient);

  return (
    <div>
      <Navbar />
      <Container>
        <BoxFull background={`linear-gradient(to right, rgba(143, 113, 250, 0.904555013553054), rgba(27, 3, 209, 0.3462560820646432))`}>
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