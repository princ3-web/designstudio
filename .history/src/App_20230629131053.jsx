import React from "react";
import Navbar from "./components/Navbar";
import Bottombar from "./components/Bottombar";

import Container from "./components/Container";
import BoxFull from "./components/BoxFull";
import BoxMedium from "./components/BoxMedium";
import BoxSmall from "./components/BoxSmall";
import Button from "./components/Button";
import background from "./assets/images/0.jpg";
import image0 from "./assets/images/image0.png";
import image1 from "./assets/images/image1.png";
import image2 from "./assets/images/image2.png";
import image3 from "./assets/images/image3.png";
import textStyles from "./css/Text.module.css";
import marginStyles from "./css/Margin.module.css";
import boxStyles from "./css/Box.module.css";
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
