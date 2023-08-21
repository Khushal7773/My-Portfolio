import React, { useState } from "react";
import AboutMenuItem from "./AboutMenuItem.js";
import AboutSubheading from "./AboutSubheading.js";
import SubheadingsData from "./SubheadingsData.js";
import personalIcon from "../assets/moebius-triangle.png";
import educationIcon from "../assets/upgrade.png";
import careerIcon from "../assets/triple-corn.png";

function AboutMenu() {
  const [activeMenuItem, setActiveMenuItem] = useState(1);
  const [activeSubheading, setActiveSubheading] = useState(1);

  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
    setActiveSubheading(1);
  };

  const handleSubheadingClick = (subheading) => {
    setActiveSubheading(subheading);
  };

  const menuItems = ["PERSONAL", "EDUCATION", "CAREER"];
  const activeMenuTitle = menuItems[activeMenuItem - 1];
  const activeMenuIcon =
    activeMenuTitle === "PERSONAL"
      ? personalIcon
      : activeMenuTitle === "EDUCATION"
      ? educationIcon
      : careerIcon;

  const subheadings = SubheadingsData[activeMenuItem];

  return (
    <>
      <div className="menu">
        {menuItems.map((item, index) => (
          <AboutMenuItem
            key={index}
            title={item}
            active={activeMenuItem === index + 1}
            onClick={() => handleMenuItemClick(index + 1)}
          />
        ))}
      </div>
      <div className="sub-container">
        <div className="icon-title-container">
          <img src={activeMenuIcon} alt={activeMenuTitle} className="icon" />
          <h3>{activeMenuTitle}</h3>
        </div>
        {subheadings.map((subheading, index) => (
          <AboutSubheading
            key={index}
            title={subheading.title}
            content={subheading.content}
            active={activeSubheading === index + 1}
            onClick={() => handleSubheadingClick(index + 1)}
            menuItem={activeMenuItem}
          />
        ))}
      </div>
    </>
  );
}

export default AboutMenu;
