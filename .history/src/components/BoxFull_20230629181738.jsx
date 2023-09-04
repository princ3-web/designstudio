import React from "react";
import boxStyles from "../css/Box.module.css";

const BoxFull = (props) => {
  return (
    <div
      className={boxStyles.boxFull}
      style={[
        props.style,
       
      ]}
    >
      {props.children}
    </div>
  );
};

export default BoxFull;
