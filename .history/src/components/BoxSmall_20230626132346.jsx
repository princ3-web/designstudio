import React from "react";
import style from "../css/Box.module.css";

const BoxSmall = (props) => {
  return <div className={style.boxSmall} style={{backgroundbackgroundColor: props.background}}>{props.children}</div>;
};

export default BoxSmall;