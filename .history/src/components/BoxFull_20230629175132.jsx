import React from "react";
import boxStyles from "../css/Box.module.css";
import image from "../assets/images/image4.png";

const BoxFull = (props) => {
  return (
    <div
      className={boxStyles.boxFull}
      style={{
        backgroundImage: props.gradient? props. gprops.backgroundImage ? `url(${props.backgroundImage})` : "none",
        backgroundColor: props.background
      }}
    >
      {props.children}
    </div>
  );
};

export default BoxFull;
