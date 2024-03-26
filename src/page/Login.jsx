import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styles from "../page/Login.module.css";
import InputField from "../components/InputField";
import Button from "../components/Button";
const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/booking");
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.imgLeft}>
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
          <h2 className={styles.center}>Login</h2>
          <h3 className={styles.center}>Welcome back, enter your details</h3>
          <div>
            <label htmlFor="">Email:</label>
            <InputField
              icon={"email"}
              type={"email"}
              name={"email"}
              styletype={"primary"}
              placeholder={"Enter your Email"}
            />
          </div>
          <div>
            <label htmlFor="">Password:</label>
            <InputField
              icon={"password"}
              type={"password"}
              name={"password"}
              styletype={"primary"}
              placeholder={"Enter your Password"}
            />
          </div>
          <div className={styles.flexCont}>
            <div className={styles.contsimple}>
              <input id="remember" type="checkbox" />
              <label htmlFor="remember">Remember Me</label>
            </div>
            <Link to={"/forgotpassword"}>
              <p className={styles.forgetP}>Forgot Password</p>
            </Link>
          </div>
          <Button buttonStyle={"primary"} type={"submit"} onClick={handleLogin}>
            Login
          </Button>

          <p className={styles.noAccount}>
            Don&apos;t have an account?{" "}
            <Link className={styles.link} to="/signup">
              SignUp
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
