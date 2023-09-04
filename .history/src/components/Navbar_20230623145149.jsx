import React from "react";
import style from "../css/Navbar.module.css";

const items = ["item", "item", "item"]
const icons = ["icon", "icon", "icon"]

const Navbar = () => {
  return <div className={style.navbar}>
    <div className={style.logo}>logo</div>
    {items.map( i<div className={style.item}>item</div>)}
    <div className={style.icon}>icon</div>
  </div>;
};

export default Navbar;
