import React, { useState } from "react";
import Button from "../components/Button";
import styles from "./Profile.module.css";
import { LuLock } from "react-icons/lu";
import { FaArrowLeft } from "react-icons/fa";
import { GoEye } from "react-icons/go";
import phFlag from "../assets/emojione_flag-for-philippines.png";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isChangingPass, setisChangingPass] = useState(false);
  const handleEditProfile = () => {
    setIsEditing((prev) => !prev);
  };
  const handleChangePass = () => {
    setisChangingPass((prev) => !prev);
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
                  <p></p>
                  <button onClick={handleEditProfile}>
                    {isEditing ? "Save Profile" : "Edit Profile"}
                  </button>
                </>
              )}
            </div>
            {isChangingPass ? (
              <img
                className={styles.profilePic}
                src="/src/assets/lockPass.svg"
                alt="profilePic"
              />
            ) : (
              <img
                className={styles.profilePic}
                src="/src/assets/Profilepic.png"
                alt="profilePic"
              />
            )}
          </div>
          {isChangingPass ? (
            <div className={styles.profileContainerChangePass}>
              <div className={styles.flexDivInput}>
                <h2 className={styles.textPassLeft}>Old Password</h2>
                <LuLock className={styles.iconLock} />
                <input className={styles.inputPass} type="text" name="" id="" />
                <GoEye className={styles.goeye} />
              </div>
              <p className={styles.textLight}>
                Your password today must be different from your previous
                passwords.
              </p>
              <div className={styles.flexDivInput}>
                <h2 className={styles.textPassLeft}>New Password</h2>
                <LuLock className={styles.iconLock} />
                <input className={styles.inputPass} type="text" name="" id="" />
                <GoEye className={styles.goeye} />
              </div>
              <div className={styles.flexDivInput}>
                <h2 className={styles.textPassLeft}>Retype Password</h2>
                <LuLock className={styles.iconLock} />
                <input className={styles.inputPass} type="text" name="" id="" />
                <GoEye className={styles.goeye} />
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
                <p className={styles.fontBold}>Insurance</p>
              </div>
              <div className={styles.profileContainerData}>
                <div className={styles.profileBodyPosition}>
                <h3 className={styles.fontLight}>Position:</h3>
                <p className={styles.fontBold}>Agent</p>
                </div>
              </div>
              <div className={styles.profileBodyNameCont}>
                <h3 className={styles.fontLight}>Mobile Number:</h3>
                <div className={styles.mobileNumberCont}>
                <img src={phFlag}/>
                <p className={styles.countryCode}>+63</p>
                <p className={styles.fontBold}>9615698142</p>
                </div>
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
                <img src="/src/assets/tooltip.svg" alt="tooltip" />
                <p className={styles.textLight}>
                  Your email will be used for sending a booking receipts and
                  updates of tow factory.
                </p>
              </div>
              <button onClick={handleChangePass} className={styles.changePass}>
                Change Password
              </button>
              {isEditing ? (
                <Button buttonStyle={"quaternary"}>Save Profile</Button>
              ) : (
                <Button buttonStyle={"quinary"}>Log out</Button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
