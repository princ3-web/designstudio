import React from "react";
import style from "../css/Box.module.css";

const BoxFull = (props, { children }) => {
  console.log(props.background);

  return (
    <div className={style.boxFull} style={{ backgroundImage: URL() }}>
      <img src={props.background} alt="" />
      {children}
    </div>
  );
};

export default BoxFull;
