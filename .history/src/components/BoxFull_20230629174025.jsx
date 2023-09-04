import React from "react";
import boxStyles from "../css/Box.module.css";

const BoxFull = (props) => {
  return (
    <div
      className={boxStyles.boxFull}
      style={{
        backgroundImage: ,
        backgroundColor: props.background ? props.background : undefined,
        background: props.gradient ? props.gradient : undefined,
      }}
    >
      {props.children}
    </div>
  );
};

export default BoxFull;
