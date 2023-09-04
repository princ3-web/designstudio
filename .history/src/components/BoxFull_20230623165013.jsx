import React from "react";
import style from "../css/Box.module.css";

const BoxFull = ({children}) => {
  return <div className={style.boxFull}>{children}</div>;
};

export default BoxFull;
