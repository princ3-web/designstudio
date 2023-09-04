import React from "react";
import boxStyles from "../css/Box.module.css";

const BoxFull = (props) => {
  return (
    <div
      className={boxStyles.boxFull}
      style={{
        backgroundColor: props.background,
        background: props.gradient,
      }}
    >
      {props.children}
    </div>
  );
};

export default BoxFull;
