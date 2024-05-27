import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import * as apiClient from "../service/ApiClient";
import useAuthStore from "../context/useAuthStore";
import ChangePassForm from "../features/profile/ChangePassForm";
import SmallLoader from "../features/loaders/SmallLoader";
import Button from "../components/Button";
import toolTip from "../assets/tooltip.svg";
import profileIcon from "../assets/profile-icon.png";
import lockPass from "../assets/lockPass.svg";
import styles from "./Profile.module.css";

const Profile = () => {
  const navigate = useNavigate();
  const { logout } = useAuthStore();
  const [isEditing, setIsEditing] = useState(false);
  const [isChangingPass, setisChangingPass] = useState(false);

  const handleEditProfile = () => {
    setIsEditing((prev) => !prev);
  };

  const handleChangePass = () => {
    setisChangingPass((prev) => !prev);
  };

  const handleLogoutTestOnlyNavigate = () => {
    logout();
    toast.success("Logout Successful");
    navigate("/login");
  };

  const {
    data: profile,
    isLoading,
    isFetching,
    isError,
  } = useQuery({
    queryKey: ["userProfile"],
    queryFn: apiClient.getSingleProfile,
    refetchOnWindowFocus: false,
  });

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
            <img
              className={styles.profilePic}
              src={isChangingPass ? lockPass : profileIcon}
              alt="profilePic"
            />
          </div>
          {isError && (
            <div className={styles.error}>
              <p>Error: Unable to fetch profile data.</p>
            </div>
          )}
          {isChangingPass ? (
            <ChangePassForm />
          ) : isLoading || isFetching ? (
            <div className="flex justify-center items-center min-h-[300px]">
              <SmallLoader />
            </div>
          ) : (
            <div className={styles.profileContainerBody}>
              <div className="grid gap-12 grid-cols-2 mt-5">
                <div className={styles.profileBodyNameCont}>
                  <h3 className={styles.fontLight}>First Name:</h3>
                  {isEditing ? (
                    <input
                      type="text"
                      className={styles.fontInputEdit}
                      defaultValue={profile?.result?.firstName}
                    />
                  ) : (
                    <p className={styles.fontBold}>
                      {profile?.result?.firstName}
                    </p>
                  )}
                </div>
                <div className={styles.profileBodyNameCont}>
                  <h3 className={styles.fontLight}>Last Name:</h3>
                  {isEditing ? (
                    <input
                      type="text"
                      className={styles.fontInputEdit}
                      defaultValue={profile?.result?.lastName}
                    />
                  ) : (
                    <p className={styles.fontBold}>
                      {profile?.result?.lastName}
                    </p>
                  )}
                </div>
              </div>
              <div className="grid gap-12 grid-cols-2">
                <div className={styles.profileBodyNameCont}>
                  <h3 className={styles.fontLight}>Type:</h3>
                  {isEditing ? (
                    <input
                      type="text"
                      className={styles.fontInputEdit}
                      defaultValue="Insurance"
                    />
                  ) : (
                    <p className={styles.fontBold}>Insurance</p>
                  )}
                </div>
                <div className={styles.profileBodyNameCont}>
                  <h3 className={styles.fontLight}>Position:</h3>
                  {isEditing ? (
                    <input
                      type="text"
                      className={styles.fontInputEdit}
                      defaultValue="Agent"
                    />
                  ) : (
                    <p className={styles.fontBold}>Agent</p>
                  )}
                </div>
              </div>
              <div className={styles.profileBodyNameCont}>
                <h3 className={styles.fontLight}>Mobile Number:</h3>
                {isEditing ? (
                  <input
                    type="text"
                    className={styles.fontInputEdit}
                    defaultValue={profile?.result?.phoneNum}
                  />
                ) : (
                  <p className={styles.fontBold}>{profile?.result?.phoneNum}</p>
                )}
              </div>
              <div className={styles.profileBodyNameContEmail}>
                <div className={styles.widthfull}>
                  <h3 className={styles.fontLight}>Email:</h3>
                  {isEditing ? (
                    <input
                      type="email"
                      className={styles.fontInputEdit}
                      defaultValue={profile?.result?.email}
                    />
                  ) : (
                    <p className={styles.fontBold}>{profile?.result?.email}</p>
                  )}
                </div>
              </div>
              <div className={styles.flexprofileBodyNameTooltip}>
                <img src={toolTip} alt="tooltip" />
                <p className={styles.textLight}>
                  Your email will be used for sending booking receipts and
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
