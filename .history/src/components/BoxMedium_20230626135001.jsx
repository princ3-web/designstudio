import React from "react";
import style from "../css/Box.module.css";

const BoxMedium = (props) => {
  return <div className={style.boxMedium} style={{ backgroundImage: props.gradient, backgroundColor: props.background }}>{prochildren}</div>;
};

export default BoxMedium;
