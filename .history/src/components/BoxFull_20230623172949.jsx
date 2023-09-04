import React from "react";
import style from "../css/Box.module.css";

const BoxFull = (props,{ children }) => {
  return (
    <div className={style.boxFull} style={{ backgroundImage: props.background }}>
      <img src={props.background} alt="" style={{width: "100%", height: "100%"}} />
      {children}
    </div>
  );
};

export default BoxFull;
