import React from "react";
import style from "../css/Navbar.module.css";

const Navbar = () => {
  return <div className={style.Navbar}>
    <div className={style.Logo}>logo</div>
    <div className={style.Item}>item</div>
    <div className={style.Icon}>ic</div>
  </div>;
};

export default Navbar;
