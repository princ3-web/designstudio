import React from "react";
import style from "../css/Box.module.css";
import image0 from "../assets/images/image3.png";

const BoxMedium = (props) => {
  return (
    <div
      className={style.boxMedium}
      style={{ backgroundImage: `url(${image0})`, backgroundColor: props.background, bac }}
    >
      {props.children}
    </div>
  );
};

export default BoxMedium;
