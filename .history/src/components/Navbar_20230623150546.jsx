import React from "react";
import style from "../css/Navbar.module.css";
import logo from "../assets/icons/logo.png";
import find from "../assets/icons/find.png";
import menu from "../assets/icons/menu.png";

const items = ["Creativity & Design", "PDF & E-signatures", "Help & Support"];
const icons = [find, menu];

const Navbar = () => {
  return (
    <div className={style.navbar}>
      <img className={style.logo} src/>
      <div className={style.items}>
        {items.map((object) => (
          <div className={style.item}>{object}</div>
        ))}
      </div>
      <div className={style.icons}>
        {icons.map((object) => (
          <img className={style.icon} src={object}/>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
