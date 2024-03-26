import { Link, NavLink } from "react-router-dom";
import styles from "../components/Navbar.module.css";
import profileIcon from "../assets/profile-icon.png";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <img
        className={styles.imgLogo}
        src="src/assets/towfactoryLogo.svg"
        alt="Logo"
      />
      <div className={styles.navButtons}>
        <ul className={styles.LinkFlex}>
          <li>
            <NavLink
              to="/booking"
              className={({ isActive }) =>
                isActive ? `${styles.active}` : styles.navLink
              }
            >
              BOOK NOW
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/trips"
              className={({ isActive }) =>
                isActive ? `${styles.active}` : styles.navLink
              }
            >
              TRIPS
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/history"
              className={({ isActive }) =>
                isActive ? `${styles.active}` : styles.navLink
              }
            >
              HISTORY
            </NavLink>
          </li>
          <li>
            <Link to="/profile">
              <img src={profileIcon} className={styles.profileIcon} />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
