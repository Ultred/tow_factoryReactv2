import { NavLink } from "react-router-dom";
import styles from "../components/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <img
        className={styles.imgLogo}
        src="src/assets/towfactoryLogo.svg"
        alt="Logo"
      />
      <ul className={styles.LinkFlex}>
        <li>
          <NavLink to="/booking">BOOK NOW</NavLink>
        </li>
        <li>
          <NavLink to="/trips">TRIPS</NavLink>
        </li>
        <li>
          <NavLink to="/history">HISTORY</NavLink>
        </li>
        <li>
          <NavLink to="/profile">Profile</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
