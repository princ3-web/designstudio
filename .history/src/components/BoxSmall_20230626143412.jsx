import React from "react";
import boxStyles from "../css/Box.module.css";

const BoxSmall = (props) => {
  return (
    <div
      className={boxStyles.boxSmall}
      style={{ backgroundImage: props.background, backgroundColor: props.background }}
    >
      {props.children}
    </div>
  );
};

export default BoxSmall;
