import React from "react";
import boxStyles from "../css/Box.module.css";

const BoxFull = (props) => {
  return (
    <div className={boxStyles.boxFull} style={{ backgroundImage: props.gradien, backgroundImage: `url(${props.background})`, backgroundColor: props.background }}>
      {props.children}
    </div>
  );
};

export default BoxFull;
