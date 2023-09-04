import React from "react";
import style from "../css/Box.module.css";
import image0 from "./assets/images/image0.png";


const BoxMedium = (props) => {
  return (
    <div
      className={style.boxMedium}
      style={{ backgroundImage: props.background, backgroundColor: props.background }}
    >
      {props.children}
    </div>
  );
};

export default BoxMedium;
