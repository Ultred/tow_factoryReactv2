import uppHillIcon from "../assets/uphill.svg";
import { FaCalendar } from "react-icons/fa6";
import styles from "./Button2Custom.module.css";
const Button2Custom = ({
  onClick,
  children,
  buttonStyle,
  type,
  icon,
  isLoading,
  isActive,
}) => {
  const handleClick = (event) => {
    event.preventDefault();
    if (onClick) {
      onClick();
    }
  };
  const renderIcon = (icon) => {
    switch (icon) {
      case "uphill":
        return <img className="w-[20px]" src={uppHillIcon} alt="uphill" />;
      case "calendar":
        return <FaCalendar className="text-xl" />;
      default:
        return null;
    }
  };

  return (
    <button
      className={`${styles.button} ${styles[buttonStyle]}`}
      onClick={handleClick}
      type={type}
      disabled={isLoading}
    >
      {icon && renderIcon(icon)}
      {isLoading ? "Loading..." : children}
    </button>
  );
};

export default Button2Custom;
