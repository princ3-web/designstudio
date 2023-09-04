import React from "react";
import style from "../css/Box.module.css";

const BoxSmall = ({children}) => {
  return <div className={style.boxSmall} style>{children}</div>;
};

export default BoxSmall;
