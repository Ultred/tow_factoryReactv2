import styles from "./InputField.module.css";

const InputField = ({
  onChange,
  type,
  name,
  styletype,
  placeholder,
  icon,
  value,
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
      <input
        type={type}
        name={name}
        value={value}
        className={renderStyles(styletype, !!icon)}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
