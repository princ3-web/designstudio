import React from "react";
import boxStyles from "../css/Box.module.css";
import image from "../assets/images/image4.png";

const BoxFull = (props) => {
  return (
    <div
      className={boxStyles.boxFull}
      style={{
        backgroundImage: `url(${image})`,
        backgroundColor: un,
        background: props.gradient ? props.gradient : "none",
      }}
    >
      {props.children}
    </div>
  );
};

export default BoxFull;
