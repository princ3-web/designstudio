import React from "react";
import style from "../css/Box.module.css";

const BoxMedium = ({children}) => {
  return <div className={style.boxMedium}>{children}</div>;
};

export default BoxMedium;
