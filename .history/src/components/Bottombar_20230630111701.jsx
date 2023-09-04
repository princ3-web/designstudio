import React from "react";
import bottombarStyles from "../css/Bottombar.module.css";

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
    items: [
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
    items: ["Download and install", "Help Center", "Adobe Support Community", "Enterprise Support", "Genuine software"],
  },
  { category: "Resources", items: ["Adobe Blog", "Adobe Developer"] },
  {
    category: "Adobe",
    items: [
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
          <div className={bottombarStyles.item}>{item.category}</div>
          {item.items.map(item => <div>item</div>)}
        </div>
      ))}
    </div>
  );
};

export default Bottombar;
