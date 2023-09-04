import React from "react";
import bottombarStyles from "../css/Bottombar.module.css";
imp


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
  { category: "Resources", elements: ["Adobe Blog", "Adobe Developer"] },
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

const Bottombar = () => {
  return (
    <div className={bottombarStyles.bottombar}>
      {links.map((item) => (
        <div className={bottombarStyles.column}>
          <div className={[bottombarStyles.item].join(" ")}>{item.category}</div>
          {item.elements.map((item) => (
            <div className={bottombarStyles.item}>item</div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Bottombar;
