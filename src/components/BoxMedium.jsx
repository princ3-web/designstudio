import React from "react";
import boxStyles from "../css/Box.module.css";

const BoxMedium = (props) => {
  return (
    <div
      className={boxStyles.boxMedium}
      style={{ backgroundImage: `url(${props.background})`, backgroundColor: props.background, backgroundSize:"cover" }}
    >
      {props.children}
    </div>
  );
};

export default BoxMedium;
