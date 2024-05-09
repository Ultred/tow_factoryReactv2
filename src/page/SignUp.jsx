import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { IoMdArrowRoundBack } from "react-icons/io";
import styles from "../page/SignUp.module.css";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { useState } from "react";
const SignUp = () => {
  const [stepsShowCont, setStepsShowCont] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    manufacturer: "",
    plateNumber: "",
    mobileNumber: "",
  });
  const navigate = useNavigate();

  const handleSignUp = () => {
    if (stepsShowCont === 4) {
      console.log("loading...");
      return;
    }
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
                <label htmlFor="">Email</label>
                <InputField
                  icon={"email"}
                  type={"email"}
                  name={"email"}
                  styletype={"primary"}
                  placeholder={"Enter your Email"}
                />
              </div>
              <div className={styles.password}>
                <label htmlFor="">Password</label>
                <InputField
                  icon={"password"}
                  type={"password"}
                  name={"password"}
                  styletype={"primary"}
                  placeholder={"Password"}
                />
              </div>
            </div>
          )}
          {stepsShowCont === 2 && (
            <div className={styles.loginCredentials}>
              <div className={styles.email}>
                <label htmlFor="">First Name</label>
                <InputField
                  text={"FN"}
                  type={"email"}
                  name={"email"}
                  styletype={"primary"}
                  placeholder={"Enter your Email"}
                />
              </div>
              <div className={styles.password}>
                <label htmlFor="">Last Name</label>
                <InputField
                  text={"LN"}
                  type={"password"}
                  name={"password"}
                  styletype={"primary"}
                  placeholder={"Password"}
                />
              </div>
            </div>
          )}

          {stepsShowCont === 3 && (
            <div className={styles.loginCredentials}>
              <div className={styles.email}>
                <label htmlFor="">Mobile Number</label>
                <InputField
                  icon={"phFlag"}
                  name={"mobileNumber"}
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
                <label htmlFor="">Manufacturer</label>
                <InputField
                  icon={"factory"}
                  name={"manufacturer"}
                  styletype={"primary"}
                  placeholder={"Enter Name"}
                />
              </div>
              <div className={styles.password}>
                <label htmlFor="">Plate Number</label>
                <InputField
                  text={"PN"}
                  name={"plateNumber"}
                  styletype={"primary"}
                  placeholder={"Plate Number"}
                />
              </div>
            </div>
          )}

          <Button
            buttonStyle={"primary"}
            type={"submit"}
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
