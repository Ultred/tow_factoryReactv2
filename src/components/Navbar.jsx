import { Link, NavLink } from "react-router-dom";
import styles from "../components/Navbar.module.css";
import profileIcon from "../assets/profile-icon.png";
import bellIcon from "../assets/bell.svg";
import notificationIcon from "../assets/notifications.svg";
import Logo from "../assets/towfactoryLogo.svg";
import { useState } from "react";
import toast from "react-hot-toast";

const Navbar = () => {
  const [hasNewNotification, setHasNewNotification] = useState(false);

  const handleShowNotificationModal = () => {
    toast.error("No New Notification");
  };
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
              <li
                className={`${styles.NotifIcon} ${
                  hasNewNotification ? styles.shake : ""
                }`}
                onClick={handleShowNotificationModal}
              >
                {hasNewNotification && (
                  <span className={styles.notificationIconDOTRED}></span>
                )}
                <img src={bellIcon} className={styles.profileIcon2} />
              </li>
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
