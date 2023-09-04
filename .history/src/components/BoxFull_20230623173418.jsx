import React from "react";
import style from "../css/Box.module.css";

const BoxFull = (props, { children }) => {

  console.log(props.background)

  const style = {
    backgroundImage: `url(${props.background})`,
  };

  return (
    <div className={style.boxFull} style={style}>
      {children}
    </div>
  );
};

export default BoxFull;
