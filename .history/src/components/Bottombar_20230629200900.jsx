import React from 'react';
import bottombarStyles from "../css/Bottombar.module.css";

const items = [
  {category: "Shop for", items: ["aaa", "bbb"]},
  {category: "For business", items: ["aaa", "bbb"]},
  {category: "Experience Cloud", items: ["aaa", "bbb"]},
  {category: "Support", items: ["aaa", "bbb"]},
  {category: "Resources", items: ["aaa", "bbb"]}
  {category: "Adobe", items: ["aaa", "bbb"]}
]

const Bottombar = () => {
  return (
    <div className={bottombarStyles.bottombar}></div>
  )
}

export default Bottombar