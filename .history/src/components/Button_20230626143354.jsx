import React from "react";
import buttonStyle from "../css/Button.module.css";

const Button = (props) => {
  return <div className={style.button}>{props.text}</div>;
};

export default Button;
