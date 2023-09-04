import React from "react";
import boxStyles from "../css/Box.module.css";
import image from "../assets/images/image4.png";

const BoxFull = (props) => {
  return (
    <div
      className={boxStyles.boxFull}
      style={{
        backgroundImage: props.backgroundImage ? `url(${image})` : "none",
        backgroundColor: props.background ? props.background : undefined,
        background: props.gradient ? props.gradient : undefined,
      }}
    >
      {props.children}
    </div>
  );
};

export default BoxFull;
