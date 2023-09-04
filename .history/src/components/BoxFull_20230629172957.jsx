import React from "react";
import boxStyles from "../css/Box.module.css";
import image from "../assets/images/0.jpg";

const BoxFull = (props) => {
  return (
    <div className={boxStyles.boxFull} style={{ backgroundImage: `url(${props.backgroundIm})`, backgroundColor: props.background }}>
      {props.children}
    </div>
  );
};

export default BoxFull;
