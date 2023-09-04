import React from "react";
import style from "../css/Navbar.module.css";

const items = ["item", "item", "item"];
const icons = ["icon", "icon", "icon"];

const Navbar = () => {
  return (
    <div className={style.navbar}>
      <div className={style.logo}>logo</div>
      <div className={style.items}>
        {items.map((object) => (
          <div className={style.item}>{object}</div>
        ))}
      </div>
      <div className={style.icon}></div>
      {icons.map((object) => (
        <div className={style.icon}>{object}</div>
      ))}
    </div>
  );
};

export default Navbar;
