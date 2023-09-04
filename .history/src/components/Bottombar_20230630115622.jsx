import React from "react";
import bottombarStyles from "../css/Bottombar.module.css";
import textStyles from "../css/Text.module.css";
import marginStyles from "../css/Margin.module.css";
import instagram from "../assets/icons/instagram.png";
import twitter from "../assets/icons/twitter.png";
import tiktok from "../assets/icons/tiktok.png";
import youtube from "../assets/icons/youtube.png";

const links = [
  {
    category: "Shop for",
    elements: [
      "Creative Cloud",
      "Photoshop",
      "Adobe Express",
      "Photography",
      "Premiere Pro",
      "Adobe Stock",
      "Elements Family",
      "Document Cloud",
      "Acrobat",
      "Acrobat Sign",
      "Special offers",
      "View plans and pricing",
      "View all products",
    ],
  },
  {
    category: "For business",
    elements: ["Creative Cloud for teams", "Creative Cloud for enterprise", "Document Cloud for business"],
  },
  {
    category: "Experience Cloud",
    elements: [
      "What is Experience Cloud?",
      "Analytics",
      "Experience Manager",
      "Commerce",
      "Marketo Engage",
      "Workfront",
      "Terms of Use",
    ],
  },
  {
    category: "Support",
    elements: [
      "Download and install",
      "Help Center",
      "Adobe Support Community",
      "Enterprise Support",
      "Genuine software",
    ],
  },
  {
    category: "Adobe",
    elements: [
      "About",
      "Careers",
      "Newsroom",
      "Corporate responsibility",
      "Investor Relations",
      "Supply chain",
      "Trust Center",
      "Events",
      "Diversity and inclusion",
      "Integrity",
    ],
  },
];

const socialMedia = [
  { name: "Tiktok", icon: tiktok },
  { name: "Twitter", icon: twitter },
  { name: "instagram", icon: instagram },
  { name: "youtube", icon: youtube },
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
    </div>
  );
};

export default Bottombar;
