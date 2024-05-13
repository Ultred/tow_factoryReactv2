import styles from "./Button.module.css";
import { FaCheck, FaTimes } from "react-icons/fa";
import uppHillIcon from "../assets/uphill.svg";
const Button = ({ onClick, children, buttonStyle, type, icon, isLoading }) => {
  const handleClick = (event) => {
    event.preventDefault();
    if (onClick) {
      onClick();
    }
  };

  const renderIcon = (icon) => {
    switch (icon) {
      case "check":
        return <FaCheck />;
      case "cross":
        return <FaTimes />;
      case "uphill":
        return <img className="w-[20px]" src={uppHillIcon} alt="uphill" />;
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

export default Button;
