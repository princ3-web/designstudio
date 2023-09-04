import React from "react";
import boxStyles from "../css/Box.module.css";

const BoxFull = (props) => {
  return (
    <div
      className={boxStyles.boxFull}
      style={
        {
          backgroundImage: props.gradient
            ? props.gradient
            : props.backgroundImage
            ? `url(${props.backgroundImage})`
            : "none",
          backgroundColor: props.background,
        },
      ]}
    >
      {props.children}
    </div>
  );
};

export default BoxFull;
