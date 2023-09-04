import React from "react";
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
import image2 from "./assets/images/image2.png";
import image3 from "./assets/images/image3.png";
import textStyles from "./css/Text.module.css";
import marginStyles from "./css/Margin.module.css";
import boxStyles from "./css/Box.module.css";

const App = () => {
  const renderBoxFull = () => {
    return (
      <BoxFull background="linear-gradient(45deg, #ff8000 0%, #ffbb00, #00ffdd 100%)">
        <div className={[textStyles.text36, textStyles.light].join(" ")}>
          Creative plans. Designed for you.
        </div>
        <div className={marginStyles.block2rem}></div>
        <div className={[textStyles.text20, textStyles.light].join(" ")}>
          Explore video, photo, design, and more with a Creative Cloud plan that works for you.
        </div>
        <div className={marginStyles.block2rem}></div>
        <Button text="See all plans" />
      </BoxFull>
    );
  };

  const renderBoxSmall = (background, image, textContent) => {
    return (
      <BoxSmall background={background}>
        <div>
          <div className={textStyles.text16}>NEW IN ILLUSTRATOR</div>
          <div className={[textStyles.text24, marginStyles.block1rem].join(" ")}>Recolor your world.</div>
          <div className={textStyles.text16}></div>
          {textContent}
        </div>
        <img
          className={boxStyles.image}
          src={image}
          style={{ width: "100%", right: "0%", position: "absolute" }}
          alt=""
        />
      </BoxSmall>
    );
  };

  const renderBoxMedium = () => {
    return (
      <BoxMedium background={image2}>
        <div>
          <div className={[textStyles.text24, textStyles.light].join(" ")}>Level up with Adobe Express.</div>
          <div className={[textStyles.text16, marginStyles.block1rem, textStyles.light].join(" ")}>
            Flyers. TikToks. Reels. Create easier. Dream Bigger. With Adobe Firefly generative AI and the new Adobe
            Express.
          </div>
        </div>
      </BoxMedium>
    );
  };

  return (
    <div>
      <Navbar />
      <Container style={{ paddingInline: 0 }}>{renderBoxFull()}</Container>
      <Container>
        {renderBoxSmall("var(--orange-100)", image1, "With simple text prompts and Generative Recolor (beta), unlock endless color combinations in seconds. Dream Bigger.")}
        {renderBoxSmall("linear-gradient(135deg ,#ff0069, #ff7f00)", image0, "Flyers. TikToks. Reels. Create easier. Dream Bigger. With Adobe Firefly generative AI and the new Adobe Express.")}
        <BoxSmall background="var(--purple-100)">
          <div>
            <div className={[textStyles.text16, textStyles.bold, textStyles.
