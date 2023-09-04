import React from "react";
import style from "../css/Box.module.css";

const BoxFull = (props) => {
  return (
    <div className={style.boxFull} style={{ background: UR }}>
      {props.children}
    </div>
  );
};

export default BoxFull;
