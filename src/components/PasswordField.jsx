import React, { useState } from "react";
import { GoEye, GoEyeClosed } from "react-icons/go";
import { LuLock } from "react-icons/lu";
import styles from "./PasswordField.module.css";

const PasswordField = ({ onChange, name, id, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className={styles.flexDivInput}>
      <LuLock className={styles.iconLock} />
      <input
        className={styles.inputPass}
        onChange={onChange}
        type={showPassword ? "text" : "password"}
        name={name}
        id={id}
        placeholder={placeholder}
      />
      {showPassword ? (
        <GoEyeClosed
          onClick={togglePasswordVisibility}
          className={styles.goeye}
        />
      ) : (
        <GoEye onClick={togglePasswordVisibility} className={styles.goeye} />
      )}
    </div>
  );
};

export default PasswordField;
