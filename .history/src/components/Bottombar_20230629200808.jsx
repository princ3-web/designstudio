import React from 'react';
import bottombarStyles from "../css/Bottombar.module.css";

const items = [
  {category: "Shop for", items: ["aaa", "bbb"]},
  {category: "", items: ["aaa", "bbb"]},
  {category: "", items: ["aaa", "bbb"]}
]

const Bottombar = () => {
  return (
    <div className={bottombarStyles.bottombar}></div>
  )
}

export default Bottombar