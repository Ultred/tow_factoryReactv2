import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "../components/Navbar.module.css";
import profileIcon from "../assets/profile-icon.png"

const Navbar = () => {
  const [activeLink, setActiveLink] = useState(null);

  const handleNavLinkClick = (index) => {
    setActiveLink(activeLink === index ? null : index);
  };

  return (
    <nav className={styles.navbar}>
      <img
        className={styles.imgLogo}
        src="src/assets/towfactoryLogo.svg"
        alt="Logo"
      />
      <div className={styles.navButtons}>
        <ul className={styles.LinkFlex}>
          <li className={activeLink === 0 ? styles.active : ""}>
            <NavLink to="/booking" onClick={() => handleNavLinkClick(0)}>BOOK NOW</NavLink>
          </li>
          <li className={activeLink === 1 ? styles.active : ""}>
            <NavLink to="/trips" onClick={() => handleNavLinkClick(1)}>TRIPS</NavLink>
          </li>
          <li className={activeLink === 2 ? styles.active : ""}>
            <NavLink to="/history" onClick={() => handleNavLinkClick(2)}>HISTORY</NavLink>
          </li>
        </ul>
        <img 
          src={profileIcon}
          className={styles.profileIcon}
        />
      </div>
    </nav>
  );
};

export default Navbar;
