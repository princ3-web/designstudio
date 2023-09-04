import React from "react";
import style from "../css/Box.module.css";

const BoxFull = (props, { children }) => {

  console.log(props.background)

  const style = {
    backgroundImage: `url(${props.backgro})`,
  };

  return (
    <div className={style.boxFull} style={{ backgroundImage: props.background }}>
      {children}
    </div>
  );
};

export default BoxFull;
