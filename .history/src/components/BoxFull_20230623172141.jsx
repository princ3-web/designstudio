import React from "react";
import style from "../css/Box.module.css";

const BoxFull = ({children}, props) => {
  return <div className={style.boxFull} style={{backgroundImage: `url(${props.backgroundImage})`,}}>{children}</div>;
};

export default BoxFull;
