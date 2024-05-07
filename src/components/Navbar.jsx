import { Link, NavLink } from "react-router-dom";
import styles from "../components/Navbar.module.css";
import profileIcon from "../assets/profile-icon.png";
import notificationIcon from "../assets/notifications.svg";
import Logo from "../assets/towfactoryLogo.svg";
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <img className={styles.imgLogo} src={Logo} alt="Logo" />
      <div className={styles.navButtons}>
        <ul className={styles.LinkFlex}>
          <li>
            <NavLink
              to="/dashboard"
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
            <div className={styles.flexIconNavbar}>
              <img src={notificationIcon} className={styles.profileIcon} />
              <Link to="/profile">
                <img src={profileIcon} className={styles.profileIcon} />
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
