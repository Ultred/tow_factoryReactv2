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
  disabledStyle,
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

  const renderDisabledStyle = () => {
    if (!isActive) {
      switch (disabledStyle) {
        case "primary":
          return styles.primaryDisabled;
        case "secondary":
          return styles.secondaryDisabled;
        default:
          return null;
      }
    }
    return "";
  };

  return (
    <button
      className={`${styles.button} ${
        styles[buttonStyle]
      } ${renderDisabledStyle()}`}
      onClick={handleClick}
      type={type}
      disabled={!isActive || isLoading}
    >
      {icon && renderIcon(icon)}
      {isLoading ? "Loading..." : children}
    </button>
  );
};

export default Button2Custom;
