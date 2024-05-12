import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import styles from "../page/SignUp.module.css";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { useState } from "react";
import PasswordField from "../components/PasswordField";
import toast from "react-hot-toast";
import * as apiClient from "../service/ApiClient";
import { useMutation } from "@tanstack/react-query";
import FullScreenLoader from "../features/loaders/FullScreenLoader";
const SignUp = () => {
  const [stepsShowCont, setStepsShowCont] = useState(1);
  const navigate = useNavigate();
  const { mutate, isPending } = useMutation({
    mutationKey: ["register"],
    mutationFn: apiClient.postRegister,
    onSuccess: () => {
      navigate("/signup-success");
    },
    onError: (eror) => {
      console.log(eror.message);
      toast.error(eror.message);
    },
  });
  const [formData, setFormData] = useState({
    emailAddress: "",
    password: "",
    firstName: "",
    lastName: "",
    manufacturer: "",
    plateNo: "",
    phoneNo: "",
    confirmPassword: "",
  });
  const {
    emailAddress,
    password,
    firstName,
    lastName,
    manufacturer,
    plateNo,
    phoneNo,
    confirmPassword,
  } = formData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSignUp = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Step 1: Validate email and password
    if (stepsShowCont === 1) {
      if (!emailAddress || !password) {
        toast.error("Please input Email and Password");
        return;
      }
      if (!emailRegex.test(emailAddress)) {
        toast.error("Please enter a valid email address");
        return;
      }
      if (password !== confirmPassword) {
        toast.error("Passwords do not match");
        return;
      }
    }

    // Step 2: Validate first name and last name
    if (stepsShowCont === 2) {
      if (!firstName || !lastName) {
        toast.error("Please input First Name and Last Name");
        return;
      }
    }

    // Step 3: Validate phone number
    if (stepsShowCont === 3) {
      if (!phoneNo) {
        toast.error("Please input a Phone No.");
        return;
      }
    }

    // Step 4: Validate plate number and manufacturer
    if (stepsShowCont === 4) {
      if (!plateNo || !manufacturer) {
        toast.error("Please input Plate No. and Manufacturer");
        return;
      }
      //if Successful in All Validation
      console.log(formData);
      mutate(formData);
      return;
    }

    // Proceed to the next step
    setStepsShowCont((prev) => prev + 1);
  };

  const handleBackShow = (num) => {
    setStepsShowCont(num);
  };

  const handleBack = () => {
    navigate("/login");
  };

  return (
    <>
      {/* Loader Animation Here */}
      {isPending && <FullScreenLoader />}
      <div className={styles.container}>
        <div className={styles.formRight}>
          <div onClick={handleBack} className={styles.back}>
            <IoMdArrowRoundBack /> Registration
          </div>
          <img
            className={styles.imgLoginLogo}
            src="/src/assets/towfactoryLogo.svg"
            alt="Tow Factory"
          />
          <div className={styles.center}>
            <h2>Create Account</h2>
            <h3>Please complete to create an account</h3>
          </div>
          <ul className={styles.buttonClickFlex}>
            <li
              onClick={() => handleBackShow(1)}
              className={`${styles.clickShowButton} ${
                stepsShowCont === 1 && styles.activeButton
              }`}
            ></li>
            <li
              onClick={() => handleBackShow(2)}
              className={`${styles.clickShowButton} ${
                stepsShowCont === 2 && styles.activeButton
              }`}
            ></li>
            <li
              onClick={() => handleBackShow(3)}
              className={`${styles.clickShowButton} ${
                stepsShowCont === 3 && styles.activeButton
              }`}
            ></li>
            <li
              onClick={() => handleBackShow(4)}
              className={`${styles.clickShowButton} ${
                stepsShowCont === 4 && styles.activeButton
              }`}
            ></li>
          </ul>
          {stepsShowCont === 1 && (
            <div className={styles.loginCredentials}>
              <div className={styles.email}>
                <label htmlFor="emailAddress">Email</label>
                <InputField
                  id={"emailAddress"}
                  icon={"email"}
                  onChange={handleInputChange}
                  type={"email"}
                  name={"emailAddress"}
                  value={formData.emailAddress}
                  styletype={"primary"}
                  placeholder={"Enter your Email"}
                />
              </div>
              <div className={styles.email}>
                <label htmlFor="password">Password</label>
                <PasswordField
                  onChange={handleInputChange}
                  id={"password"}
                  name={"password"}
                  value={formData.password}
                  placeholder={"Password"}
                />
              </div>
              <div className={styles.password}>
                <label htmlFor="confirmpassword">Confirm Password</label>
                <PasswordField
                  onChange={handleInputChange}
                  id={"confirmpassword"}
                  name={"confirmPassword"}
                  value={formData.confirmPassword}
                  placeholder={"Confirm Password"}
                />
              </div>
            </div>
          )}
          {stepsShowCont === 2 && (
            <div className={styles.loginCredentials}>
              <div className={styles.email}>
                <label htmlFor="firstName">First Name</label>
                <InputField
                  text={"FN"}
                  id={"firstName"}
                  type={"text"}
                  onChange={handleInputChange}
                  value={formData.firstName}
                  name={"firstName"}
                  styletype={"primary"}
                  placeholder={"Enter your Email"}
                />
              </div>
              <div className={styles.password}>
                <label htmlFor="lastName">Last Name</label>
                <InputField
                  text={"LN"}
                  type={"text"}
                  name={"lastName"}
                  onChange={handleInputChange}
                  value={formData.lastName}
                  styletype={"primary"}
                  placeholder={"Password"}
                />
              </div>
            </div>
          )}

          {stepsShowCont === 3 && (
            <div className={styles.loginCredentials}>
              <div className={styles.email}>
                <label htmlFor="phoneNo">Mobile Number</label>
                <InputField
                  id={"phoneNo"}
                  icon={"phFlag"}
                  value={formData.phoneNo}
                  name={"phoneNo"}
                  onChange={handleInputChange}
                  type={"number"}
                  styletype={"primary"}
                  placeholder={"+63"}
                />
              </div>
            </div>
          )}
          {stepsShowCont === 4 && (
            <div className={styles.loginCredentials}>
              <div className={styles.email}>
                <label htmlFor="manufacturer">Manufacturer</label>
                <InputField
                  icon={"factory"}
                  id={"manufacturer"}
                  onChange={handleInputChange}
                  name={"manufacturer"}
                  type={"text"}
                  value={formData.manufacturer}
                  styletype={"primary"}
                  placeholder={"Enter Name"}
                />
              </div>
              <div className={styles.password}>
                <label htmlFor="plateNo">Plate Number</label>
                <InputField
                  text={"PN"}
                  id={"plateNo"}
                  type={"text"}
                  onChange={handleInputChange}
                  value={formData.plateNo}
                  name={"plateNo"}
                  styletype={"primary"}
                  placeholder={"Plate Number"}
                />
              </div>
            </div>
          )}

          <Button
            buttonStyle={"primary"}
            type={"submit"}
            isLoading={isPending}
            onClick={handleSignUp}
          >
            Next
          </Button>

          <p className={styles.noAccount}>
            Have an account?{" "}
            <Link className={styles.link} to="/login">
              Login!
            </Link>
          </p>
        </div>
        <div className={styles.imgLeft}>
          <img
            className={styles.imgLoginPic}
            src="/src/assets/loginPic.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default SignUp;
