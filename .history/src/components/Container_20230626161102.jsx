import React from "react";
import containerStyles from "../css/Container.module.css";

const Container = ({children}) => {
  return <div className={containerStyles.container} style={props.style}>{children}</div>;
};

export default Container;
