import React from "react";
import containerStyles from "../css/Container.module.css";

const Container = ({children}) => {
  return <div className={style.container}>{children}</div>;
};

export default Container;