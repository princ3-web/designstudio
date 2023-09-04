import React from "react";
import containerStyles from "../css/Container.module.css";

const Container = (props) => {
  return (
    <div className={containerStyles.container} style={[props.style]}>
      {props.children}
    </div>
  );
};

export default Container;
