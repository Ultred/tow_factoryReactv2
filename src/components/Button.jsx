import styles from "./Button.module.css";

const Button = ({ onClick, children, buttonStyle, type }) => {
  const renderStyle = (style) => {
    switch (style) {
      case "primary":
        return styles.primary;
      default:
        return styles.primary;
      // Add other cases to customize style
    }
  };

  return (
    <button className={renderStyle(buttonStyle)} onClick={onClick} type={type}>
      {children}
    </button>
  );
};

export default Button;
