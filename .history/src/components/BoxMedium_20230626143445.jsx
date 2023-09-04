import React from "react";
import box from "../css/Box.module.css";

const BoxMedium = (props) => {
  return (
    <div
      className={style.boxMedium}
      style={{ backgroundImage: `url(${props.background})`, backgroundColor: props.background, backgroundSize:"cover" }}
    >
      {props.children}
    </div>
  );
};

export default BoxMedium;
