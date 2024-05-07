import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styles from "../page/SignUp.module.css";
import InputField from "../components/InputField";
import Button from "../components/Button";

const SignUp = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    manufacturer: "",
    plateNumber: "",
    mobileNumber: "",
  });
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleNextClick = () => {
    if (step < 4) {
      setStep(step + 1);
    } else {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    // Simulate form submission
    setTimeout(() => {
      setRegistrationSuccess(true);
    }, 1000);
  };
  const navigate = useNavigate();

  const handleDashboard = () => {
    navigate("/dashboard");
  };

  const renderForm = () => {
    return (
      <>
        <div className={styles.center}>
          <h2>Create Account</h2>
          <h3>Please complete to create an account</h3>
        </div>
        {step === 1 && (
          <>
            <div className={styles.loginCredentials}>
              <div className={styles.email}>
                <label htmlFor="">Email</label>
                <InputField
                  icon={"email"}
                  type={"email"}
                  name={"email"}
                  styletype={"primary"}
                  placeholder={"Enter your Email"}
                  value={formData.email}
                  onChange={handleInputChange}
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
                  value={formData.password}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </>
        )}
        {step === 2 && (
          <>
            <div className={styles.loginCredentials}>
              <div className={styles.firstName}>
                <label htmlFor="">First Name</label>
                <InputField
                  text={"FN"}
                  name={"firstName"}
                  styletype={"primary"}
                  placeholder={"First Name"}
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
              </div>
              <div className={styles.lastName}>
                <label htmlFor="">Last Name</label>
                <InputField
                  text={"LN"}
                  name={"lastName"}
                  styletype={"primary"}
                  placeholder={"Last Name"}
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </>
        )}
        {step === 3 && (
          <div className={styles.loginCredentials}>
            <div className={styles.mobileNo}>
              <label htmlFor="">Mobile Number</label>
              <InputField
                icon={"phFlag"}
                name={"mobileNumber"}
                type={"number"}
                styletype={"primary"}
                placeholder={"+63"}
                value={formData.mobileNumber}
                onChange={handleInputChange}
              />
            </div>
          </div>
        )}

        {step === 4 && (
          <>
            <div className={styles.loginCredentials}>
              <div className={styles.manufacturer}>
                <label htmlFor="">Manufacturer</label>
                <InputField
                  icon={"factory"}
                  name={"manufacturer"}
                  styletype={"primary"}
                  placeholder={"Enter Name"}
                  value={formData.manufacturer}
                  onChange={handleInputChange}
                />
              </div>
              <div className={styles.plateNumber}>
                <label htmlFor="">Plate Number</label>
                <InputField
                  text={"PN"}
                  name={"plateNumber"}
                  styletype={"primary"}
                  placeholder={"Plate Number"}
                  value={formData.plateNumber}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </>
        )}
        <div className={styles.flexCont}></div>
        <Button
          buttonStyle={"primary"}
          type={"button"}
          onClick={handleNextClick}
        >
          {step < 4 ? "Next" : "Register"}
        </Button>
      </>
    );
  };

  return (
    <>
      {!registrationSuccess && (
        <div className={styles.container}>
          <div className={styles.imgRight}>
            <img
              className={styles.imgLoginPic}
              src="/src/assets/loginPic.png"
              alt=""
            />
          </div>
          <form className={styles.formRight}>
            <img
              className={styles.imgLoginLogo}
              src="/src/assets/towfactoryLogo.svg"
              alt="Tow Factory"
            />
            {renderForm()}
            <p className={styles.noAccount}>
              Already have an account?{" "}
              <Link className={styles.link} to="/login">
                Sign In!
              </Link>
            </p>
          </form>
        </div>
      )}
      {registrationSuccess && (
        <div className={styles.successPage}>
          <img
            className={styles.imgSuccessLogo}
            src="/src/assets/Frame 4000.png"
            alt=""
          />
          <div className={styles.regSuccess}>
            <h2>Registered!</h2>
            <h3>You are now ready to tow your vehicle!</h3>
          </div>
          <Button
            buttonStyle={"tertiary"}
            type={"submit"}
            onClick={handleDashboard}
          >
            Proceed to dashboard
          </Button>
        </div>
      )}
    </>
  );
};

export default SignUp;
