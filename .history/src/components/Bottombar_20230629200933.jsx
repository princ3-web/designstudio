import React from 'react';
import bottombarStyles from "../css/Bottombar.module.css";

const items = [
  {category: "Shop for", items: [  'Creative Cloud',
  'Photoshop',
  'Adobe Express',
  'Photography',
  'Premiere Pro',
  'Adobe Stock',
  'Elements Family',
  'Document Cloud',
  'Acrobat',
  'Acrobat Sign',
  'Special offers',
  'View plans and pricing',
  'View all products']},
  {category: "For business", items: ["aaa", "bbb"]},
  {category: "Experience Cloud", items: ["aaa", "bbb"]},
  {category: "Support", items: ["aaa", "bbb"]},
  {category: "Resources", items: ["aaa", "bbb"]},
  {category: "Adobe", items: ["aaa", "bbb"]}
]

const Bottombar = () => {
  return (
    <div className={bottombarStyles.bottombar}></div>
  )
}

export default Bottombar