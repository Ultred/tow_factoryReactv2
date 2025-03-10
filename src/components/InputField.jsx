import styles from "./InputField.module.css";
import clockGrayIcon from "../assets/clockGray.svg";
import calendarGrayIcon from "../assets/calendarGray.svg";
const InputField = ({
  id,
  onChange,
  type,
  name,
  styletype,
  placeholder,
  icon,
  value,
  text,
}) => {
  const renderStyles = (styletype, hasIcon) => {
    let inputStyle = styles.primary;
    if (styletype === "secondary") {
      inputStyle = styles.secondary;
    }
    if (hasIcon) {
      inputStyle += ` ${styles.withIcon}`;
    }
    return inputStyle;
  };

  const renderIcon = (icon) => {
    switch (icon) {
      case "email":
        return "/src/assets/email.svg";
      case "password":
        return "/src/assets/password.svg";
      case "dropoff":
        return "/src/assets/dropoff.svg";
      case "pickUp":
        return "/src/assets/pickup.svg";
      case "phFlag":
        return "/src/assets/emojione_flag-for-philippines.png";
      case "factory":
        return "/src/assets/ph_factory-thin.png";
      case "calendarGray":
        return calendarGrayIcon;
      case "clockGray":
        return clockGrayIcon;
      default:
        return null;
    }
    // Add other cases to customize icon
  };

  return (
    <div className={styles.inputFieldContainer}>
      {icon && (
        <img
          className={styles.imgIconInput}
          src={renderIcon(icon)}
          alt="icon"
        />
      )}
      {text && (
        <div className={styles.textIconInput}>
          <p>{text}</p>
        </div>
      )}
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        className={renderStyles(styletype, !!icon)}
        placeholder={placeholder}
        onChange={onChange}
        inputMode={type === "number" ? "numeric" : "text"}
      />
    </div>
  );
};

export default InputField;
