import React from "react";
import con from "../css/Container.module.css";

const Container = ({children}) => {
  return <div className={style.container}>{children}</div>;
};

export default Container;
