import React from "react";
import style from "../css/Box.module.css";

const BoxFull = ({children}, props) => {
  return <div className={style.boxFull} style={{backgroundImage: props.backgroun}}>{children}</div>;
};

export default BoxFull;
