import React from "react";
import style from "../css/Navbar.module.css";

const Navbar = () => {
  return <div className={style.Navbar}>
    <div className={style.Logo}></div>
    <div className={style.Item}></div>
    <div className={style.Icon}></div>
  </div>;
};

export default Navbar;
