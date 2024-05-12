import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import styles from "../page/Login.module.css";
import InputField from "../components/InputField";
import Button from "../components/Button";
import { useState } from "react";
import toast from "react-hot-toast";
import PasswordField from "../components/PasswordField";
import { useMutation } from "@tanstack/react-query";
import * as apiClient from "../service/ApiClient";
import useAuthStore from "../context/useAuthStore";
import FullScreenLoader from "../features/loaders/FullScreenLoader";
const Login = () => {
  const navigate = useNavigate();
  const { login } = useAuthStore();
  const [formData, setFormData] = useState({
    emailAddress: "",
    password: "",
  });
  const { emailAddress, password } = formData;
  const { mutate, isPending } = useMutation({
    mutationKey: ["login"],
    mutationFn: apiClient.postLogin,
    onSuccess: (response) => {
      const decodedToken = jwtDecode(response.token);
      console.log(decodedToken);
      login(response.token);
      toast.success("Login Successful");
      navigate("/dashboard");
    },
    onError: (error) => {
      toast.error(error.message || "Something went wrong. Please try again.");
    },
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleLogin = () => {
    if (!emailAddress || !password) {
      toast.error("Please input Email or Password");
      return;
    }
    mutate(formData);
    console.log(formData);
    //navigate("/dashboard");
  };

  return (
    <>
      {/* Loader Animation Here */}
      {isPending && <FullScreenLoader />}
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
          <div className={styles.center}>
            <h2>Login</h2>
            <h3>Welcome back, enter your details</h3>
          </div>

          <div className={styles.loginCredentials}>
            <div className={styles.email}>
              <label htmlFor="">Email</label>
              <InputField
                onChange={handleInputChange}
                id={"emailAddress"}
                icon={"email"}
                type={"email"}
                name={"emailAddress"}
                styletype={"primary"}
                value={formData.emailAddress}
                placeholder={"Enter your Email"}
              />
            </div>
            <div className={styles.password}>
              <label htmlFor="">Password</label>
              <PasswordField
                onChange={handleInputChange}
                id={"password"}
                name={"password"}
                value={formData.password}
                placeholder={"Password"}
              />
              {/* <InputField
                onChange={handleInputChange}
                icon={"password"}
                type={"password"}
                name={"password"}
                value={formData.password}
                styletype={"primary"}
                placeholder={"Password"}
              /> */}
            </div>
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
          <Button
            isLoading={isPending}
            buttonStyle={"primary"}
            type={"submit"}
            onClick={handleLogin}
          >
            Log in
          </Button>
          <p className={styles.noAccount}>
            Don&apos;t have an account?{" "}
            <Link className={styles.link} to="/signup">
              Sign Up!
            </Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
