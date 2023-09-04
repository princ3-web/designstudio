import React from "react";
import style from "../css/Navbar.module.css";

const items = ["item", "item", "item"];
const icons = ["icon", "icon", "icon"];

const Navbar = () => {
  return (
    <div className={style.navbar}>
      <div className={style.logo}>logo</div>
      {items.map((object) => (
        <div className={style.item}>{object}</div>
      ))}
      {icons.map(<div className={style.icon}>icon</div>}
    </div>
  );
};

export default Navbar;
