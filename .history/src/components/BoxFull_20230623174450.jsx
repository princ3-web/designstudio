import React from "react";
import style from "../css/Box.module.css";

const BoxFull = (props) => {
  return (
    <div className={style.boxFull} style={{ backgroundImage: props.background }}>
      {/* <img src={props.background} alt="" /> */}
      {propschildren}
    </div>
  );
};

export default BoxFull;
