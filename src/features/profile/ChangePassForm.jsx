import { useState } from "react";
import { jwtDecode } from "jwt-decode";
import styles from "./ChangePass.module.css";
import PasswordField from "../../components/PasswordField";
import Button from "../../components/Button";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";
import * as apiClient from "../../service/ApiClient";
import useAuthStore from "../../context/useAuthStore";
const ChangePassForm = () => {
  const { token } = useAuthStore();

  const { mutate, isPending } = useMutation({
    mutationKey: ["changePassword"],
    mutationFn: apiClient.putChangePassword,
    onSuccess: () => {
      toast.success("Change Password Successful");
    },
    onError: (error) => {
      toast.error(error.message || "Something went wrong. Please try again.");
    },
  });
  const [formDataPass, setFormDataPass] = useState({
    data: {
      oldPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    },
  });
  const {
    data: { oldPassword, newPassword, confirmNewPassword },
  } = formDataPass;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormDataPass((prevData) => ({
      ...prevData,
      data: {
        ...prevData.data,
        [name]: value,
      },
    }));
  };

  const handleSave = () => {
    if (!oldPassword || !newPassword || !confirmNewPassword) {
      toast.error("Please input Required Fields");
      return;
    }
    if (newPassword !== confirmNewPassword) {
      toast.error("New password and confirm new password do not match");
      return;
    }
    const decodedToken = jwtDecode(token);
    const userId = decodedToken.userId;
    //console.log(formDataPass);
    //Make it a formData
    const formData = new FormData();
    formData.append("oldPassword", oldPassword);
    formData.append("newPassword", newPassword);
    formData.append("confirmNewPassword", confirmNewPassword);
    mutate(userId, formData);
  };
  return (
    <div className={styles.profileContainerChangePass}>
      <div className={styles.marginTopBottom}>
        <h2>Old Password</h2>
        <PasswordField
          name="oldPassword"
          value={oldPassword}
          onChange={handleInputChange}
          placeholder={"Old Password"}
          id={"oldPassword"}
        />
      </div>
      <p className={styles.textLight}>
        Your password today must be different from your previous passwords.
      </p>
      <div className={styles.marginTopBottom}>
        <h2>New Password</h2>
        <PasswordField
          onChange={handleInputChange}
          value={newPassword}
          name="newPassword"
          placeholder={"New Password"}
          id={"newPassword"}
        />
      </div>
      <div className={styles.marginTopBottom}>
        <h2>Retype Password</h2>
        <PasswordField
          placeholder={"Retype Password"}
          id={"retypePassword"}
          onChange={handleInputChange}
          name="confirmNewPassword"
          value={confirmNewPassword}
        />
      </div>
      <Button
        isLoading={isPending}
        onClick={handleSave}
        buttonStyle={"quaternary"}
      >
        Save Password
      </Button>
    </div>
  );
};

export default ChangePassForm;
