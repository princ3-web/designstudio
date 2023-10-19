import React from "react";
import bottombarStyles from "../css/Bottombar.module.css";
import textStyles from "../css/Text.module.css";
import marginStyles from "../css/Margin.module.css";
import instagram from "../assets/icons/instagram.png";
import twitter from "../assets/icons/twitter.png";
import tiktok from "../assets/icons/tiktok.png";
import youtube from "../assets/icons/youtube.png";



const socialMedia = [
  { name: "Tiktok", icon: tiktok },
  { name: "Twitter", icon: twitter },
  { name: "Instagram", icon: instagram },
  { name: "Youtube", icon: youtube },
];

const Bottombar = () => {
  return (
    <div className={bottombarStyles.bottombar}>
      <div className={bottombarStyles.links}>
        {links.map((item) => (
          <div className={bottombarStyles.column}>
            <div
              className={[bottombarStyles.category, textStyles.bold, marginStyles.bottom1rem, textStyles.text14].join(
                " "
              )}
            >
              {item.category}
            </div>
            {item.elements.map((i) => (
              <div className={[bottombarStyles.element, textStyles.text12].join(" ")}>{i}</div>
            ))}
          </div>
        ))}
      </div>
      <div className={bottombarStyles.socialLinks}>
        <div className={[bottombarStyles.socialTitle, textStyles.text14, textStyles.bold].join(" ")}>Reach us on social media</div>
        {socialMedia.map((object) => (
          <div className={[bottombarStyles.socialItem, textStyles.text12].join(" ")}>
            <img className={bottombarStyles.socialIcon} src={object.icon} alt=""/>
            <div className={bottombarStyles.socialName}>{object.name}</div>
          </div>
        ))}
      </div>
      <div className={bottombarStyles.infos}>
      </div>
    </div>
  );
};

export default Bottombar;
