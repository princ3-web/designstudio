import React from "react";
import style from "../css/Box.module.css";

const BoxFull = (props) => {
  return (
    <div className={style.boxFull} style={{ backgroundImage: props.background }}>
      <img className={style.boxFull} src={props.background} alt="" />
      {props.children}
    </div>
  );
};

export default BoxFull;
