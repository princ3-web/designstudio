import React from "react";
import style from "../css/Box.module.css";

const BoxMedium = (props) => {
  return (
    <div
      className={style.boxMedium}
      style={{ backgroundImage: props.background, backgroundColor: props.background }}
    >
      {props.children}
    </div>
  );
};

export default BoxMedium;
