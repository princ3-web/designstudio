import React from "react";
import style from "../css/Navbar.module.css";

const Navbar = () => {
  return <div className={style.navbar}>
    <div className={style.logo}>logo</div>
    <div className={style.Item}>item</div>
    <div className={style.Icon}>icon</div>
  </div>;
};

export default Navbar;
