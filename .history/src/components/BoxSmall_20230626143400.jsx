import React from "react";
import boxSt from "../css/Box.module.css";

const BoxSmall = (props) => {
  return (
    <div
      className={style.boxSmall}
      style={{ backgroundImage: props.background, backgroundColor: props.background }}
    >
      {props.children}
    </div>
  );
};

export default BoxSmall;
