import React from "react";
import style from "../css/Box.module.css";

const BoxSmall = (props) => {
  return <div className={style.boxSmall} style={{background: props.gr, backgroundColor: props.background}}>{props.children}</div>;
};

export default BoxSmall;
