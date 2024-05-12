import styles from "./SignUpSuccess.module.css";
import SuccessPic from "../assets/successSignup.png";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const SignUpSuccess = () => {
  const navigate = useNavigate();

  const handleGotoDashBoard = () => {
    toast.success("Login Successful");
    navigate("/dashboard");
  };
  return (
    <div className={styles.containerParent}>
      <div className={styles.containerChild}>
        <img
          className={styles.img}
          src={SuccessPic}
          alt="Picture na Masaya '_' h3H3"
        />
        <div className={styles.contentContainer}>
          <h1 className={styles.h1}>Registered!</h1>
          <p className={styles.p}>You are now ready to tow your vehicle!</p>
          <Button
            buttonStyle={"primary"}
            type={"submit"}
            onClick={handleGotoDashBoard}
          >
            Proceed to DashBoard
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignUpSuccess;
