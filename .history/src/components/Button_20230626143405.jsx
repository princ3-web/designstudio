import React from "react";
import buttonStyles from "../css/Button.module.css";

const Button = (props) => {
  return <div className={buttonStyles.button}>{props.text}</div>;
};

export default Button;
