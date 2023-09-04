import React from "react";
import style from "../css/Box.module.css";

const BoxSmall = (props) => {
  return <div className={style.boxSmall} style={{bbackgroundColor: props.background}}>{props.children}</div>;
};

export default BoxSmall;
