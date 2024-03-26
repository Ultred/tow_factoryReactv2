import styles from "./Button.module.css";

const Button = ({ onClick, children, buttonStyle, type, icon }) => {
  const renderStyle = (style) => {
    switch (style) {
      case "primary":
        return styles.primary;
      case "secondary":
        return styles.secondary;
      default:
        return styles.primary;
      // Add other cases to customize style
    }
  };

  const renderIcon = (icon) => {
    switch (icon) {
      case "uphill":
        return "/src/assets/uphill.svg";
    }
  };

  return (
    <button className={renderStyle(buttonStyle)} onClick={onClick} type={type}>
      {icon && (
        <img src={renderIcon(icon)} alt={icon} style={{ width: "20px" }} />
      )}
      {children}
    </button>
  );
};

export default Button;
