import React from "react";
import style from "../css/Box.module.css";
import image3 from "../assets/images/image3.png";

const BoxMedium = (props) => {
  return (
    <div
      className={style.boxMedium}
      style={{ backgroundImage: `url(${prob})`, backgroundColor: props.background, backgroundSize:"cover" }}
    >
      {props.children}
    </div>
  );
};

export default BoxMedium;
