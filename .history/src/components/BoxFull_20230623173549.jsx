import React from "react";
import style from "../css/Box.module.css";

const BoxFull = (props, { children }) => {

  console.log(props.background)

  return (
    <div className={style.boxFull} style={{ backgroundColor: props.background }}>
      {children}
    </div>
  );
};

export default BoxFull;
