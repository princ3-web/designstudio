import React from "react";
import style from "../css/Box.module.css";

const BoxFull = (props) => {
  return (
    <div className={style.boxFull} style={{ background: 'linear-gradient(to right, #430089, #82ffa1)'
  }}>
      {props.children}
    </div>
  );
};

export default BoxFull;
