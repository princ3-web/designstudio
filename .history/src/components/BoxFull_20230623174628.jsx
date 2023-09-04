import React from "react";
import style from "../css/Box.module.css";
import image from 

const BoxFull = (props) => {
  return (
    <div className={style.boxFull}>
      <img className={style.background} src={props.background} alt="" />
      {props.children}
    </div>
  );
};

export default BoxFull;