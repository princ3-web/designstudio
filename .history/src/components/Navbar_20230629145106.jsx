import React from "react";
import navbarStyles from "../css/Navbar.module.css";
import textStyles from "../css/Text.module.css";
import logo from "../assets/icons/logo.png";
import find from "../assets/icons/find.png";
import menu from "../assets/icons/menu.png";

const items = [{ name: "Home", link: "/" },{ name: "Home", link: "/" }, "Features", "Pricing", "Tutorials", "Contact"];
const icons = [find, menu];

const Navbar = () => {
  return (
    <div className={navbarStyles.navbar}>
      <img className={navbarStyles.logo} src={logo} />
      <div className={navbarStyles.items}>
        {items.map((object) => (
          <div className={[navbarStyles.item, textStyles.text14].join(" ")}>{object}</div>
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
