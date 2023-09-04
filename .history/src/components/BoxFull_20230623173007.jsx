import React from "react";
import style from "../css/Box.module.css";

const BoxFull = (props, { children }) => {
  return (
    <div className={style.boxFull} style={{ backgroundImage: props.background }}>
      {children}
    </div>
  );
};

export default BoxFull;
