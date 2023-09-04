import React from "react";
import style from "../css/Box.module.css";

const BoxSmall = (pr) => {
  return <div className={style.boxSmall} style={{backgroundColor: props.background}}>{children}</div>;
};

export default BoxSmall;
