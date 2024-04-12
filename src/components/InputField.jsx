import styles from "./InputField.module.css";

const InputField = ({
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
        type={type}
        name={name}
        value={value}
        className={renderStyles(styletype, !!icon)}
        text={text}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
