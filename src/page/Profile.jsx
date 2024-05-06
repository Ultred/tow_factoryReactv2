import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import styles from "./Profile.module.css";
import { FaArrowLeft } from "react-icons/fa";
import toolTip from "../assets/tooltip.svg";
import profileIcon from "../assets/profile-icon.png";
import lockPass from "../assets/lockPass.svg";
import PasswordField from "../components/PasswordField";
const Profile = () => {
  const navigate = useNavigate();

  const [isEditing, setIsEditing] = useState(false);
  const [isChangingPass, setisChangingPass] = useState(false);
  const handleEditProfile = () => {
    setIsEditing((prev) => !prev);
  };
  const handleChangePass = () => {
    setisChangingPass((prev) => !prev);
  };
  const handleLogoutTestOnlyNavigate = () => {
    navigate("/login");
  };

  return (
    <div className={styles.profileContainer}>
      <div className={styles.profileContainerBg}>
        <div className={styles.profileContainerData}>
          <div className={styles.profileContainerTop}>
            <div className={styles.profileContainerTopName}>
              {isChangingPass ? (
                <button
                  className={styles.profileContainerTopNameBtn}
                  onClick={handleChangePass}
                >
                  <FaArrowLeft /> Change Password
                </button>
              ) : (
                <>
                  <p>Insurance</p>
                  <button onClick={handleEditProfile}>
                    {isEditing ? "Save Profile" : "Edit Profile"}
                  </button>
                </>
              )}
            </div>
            {isChangingPass ? (
              <img
                className={styles.profilePic}
                src={lockPass}
                alt="profilePic"
              />
            ) : (
              <img
                className={styles.profilePic}
                src={profileIcon}
                alt="profilePic"
              />
            )}
          </div>
          {isChangingPass ? (
            <div className={styles.profileContainerChangePass}>
              <div className={styles.marginTopBottom}>
                <h2>Old Password</h2>
                <PasswordField
                  placeholder={"Old Password"}
                  id={"oldPassword"}
                />
              </div>
              <p className={styles.textLight}>
                Your password today must be different from your previous
                passwords.
              </p>
              <div className={styles.marginTopBottom}>
                <h2>New Password</h2>
                <PasswordField
                  placeholder={"New Password"}
                  name="password"
                  id={"newPassword"}
                />
              </div>
              <div className={styles.marginTopBottom}>
                <h2>Retype Password</h2>
                <PasswordField
                  placeholder={"Retype Password"}
                  id={"retypePassword"}
                />
              </div>
              <Button buttonStyle={"quaternary"}>Save Password</Button>
            </div>
          ) : (
            <div className={styles.profileContainerBody}>
              <div className={styles.profileBodyNameCont}>
                <h3 className={styles.fontLight}>Name:</h3>
                {isEditing ? (
                  <input
                    type="text"
                    className={styles.fontInputEdit}
                    defaultValue="Juan Dela Cruz"
                  />
                ) : (
                  <p className={styles.fontBold}>Juan Dela Cruz</p>
                )}
              </div>
              <div className={styles.profileBodyNameCont}>
                <h3 className={styles.fontLight}>Type:</h3>
                <p className={styles.fontBold}>Admin</p>
              </div>
              <div className={styles.profileBodyNameCont}>
                <h3 className={styles.fontLight}>Mobile Number:</h3>
                <p className={styles.fontBold}>09615698142</p>
              </div>
              <div className={styles.profileBodyNameContEmail}>
                <div className={styles.widthfull}>
                  <h3 className={styles.fontLight}>Email:</h3>
                  {isEditing ? (
                    <input
                      type="email"
                      className={styles.fontInputEdit}
                      defaultValue="admin@gmail.com"
                    />
                  ) : (
                    <>
                      <p className={styles.fontBold}>admin@gmail.com</p>
                    </>
                  )}
                </div>
              </div>
              <div className={styles.flexprofileBodyNameTooltip}>
                <img src={toolTip} alt="tooltip" />
                <p className={styles.textLight}>
                  Your email will be used for sending a booking receipts and
                  updates of tow factory.
                </p>
              </div>
              <button onClick={handleChangePass} className={styles.changePass}>
                Change Pass
              </button>
              {isEditing ? (
                <Button buttonStyle={"quaternary"}>Save Profile</Button>
              ) : (
                <Button
                  onClick={handleLogoutTestOnlyNavigate}
                  buttonStyle={"tertiary"}
                >
                  Log out
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
