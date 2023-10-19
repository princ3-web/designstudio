import React from "react";
import style from "../css/Box.module.css";

const BoxFull = ({children}, prop) => {
  return <div className={style.boxFull} style={{backgroundImage}}>{children}</div>;
};

export default BoxFull;