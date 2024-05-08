import styles from "./Button.module.css";
import { FaCheck, FaTimes } from "react-icons/fa";

const Button = ({ onClick, children, buttonStyle, type, icon }) => {
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
      default:
        return null;
    }
  };

  return (
    <button
      className={`${styles.button} ${styles[buttonStyle]}`}
      onClick={handleClick}
      type={type}
    >
      {icon && renderIcon(icon)}
      {children}
    </button>
  );
};

export default Button;
