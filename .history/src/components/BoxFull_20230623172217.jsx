import React from "react";
import style from "../css/Box.module.css";

const BoxFull = ({children}, props) => {
  return <div className={style.boxFull} style={{backgroundImage: `url(${props.background})`   backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',}}>{children}</div>;
};

export default BoxFull;
