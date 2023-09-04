import React from "react";
import navbarStyles from "../css/Navbar.module.css";
import textStyles from "../css/Text.module.css";
import logo from "../assets/icons/logo.png";
import find from "../assets/icons/find.png";
import menu from "../assets/icons/menu.png";
import { Link } from "react-router-dom";
import arrow from "../assets/"

const items = [
  { name: "Home", link: "/", arrow: false },
  { name: "Features", link: "/features", arrow: true },
  { name: "Pricing", link: "/", arrow: true },
  { name: "Tutorials", link: "/", arrow: true },
  { name: "Contact", link: "/", arrow: false },

];
const icons = [find, menu];

const Navbar = () => {
  return (
    <div className={navbarStyles.navbar}>
      <img className={navbarStyles.logo} src={logo} />
      <div className={navbarStyles.items}>
        {items.map((object) => (
          <Link to={object.link} className={textStyles.link}>
          <div className={[navbarStyles.item, textStyles.text14].join(" ")}>{object.name}</div>
          <img src="" alt="" />
          </Link>
        ))}
      </div>
      <div className={navbarStyles.icons}>
        {icons.map((object) => (
          <img className={navbarStyles.icon} src={object} />
        ))}
      </div>
    </div>
  );
};

export default Navbar;
