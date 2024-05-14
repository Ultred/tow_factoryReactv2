import { Link, useNavigate } from "react-router-dom";
import InputField from "../../components/InputField";
import styles from "./RepaironSiteForm.module.css";
import { FaArrowLeft } from "react-icons/fa6";
import Button from "../../components/Button";
import SelectCustomInsurance from "../../components/SelectCustomInsurance";
const RepaironSiteForm = () => {
  const navigate = useNavigate();

  const handleNavigateBack = () => {
    navigate("/dashboard");
  };

  const handleTestOnly = () => {
    console.log("test");
  };
  return (
    <div className={styles.container}>
      <div onClick={handleNavigateBack} className={styles.flexTopBack}>
        <FaArrowLeft /> Booking
      </div>
      <div className={styles.bookFormPadding}>
        <div className={styles.marginTop}>
          <div className={styles.flexh2Map}>
            <h2 className={styles.textH2}>Pick-Up Location:</h2>
            <Link className={styles.flexMap} to={"/dashboard/pickup"}>
              <img
                className={styles.MapImage}
                src="/src/assets/clickMap.svg"
                alt=""
              />
              <p className={styles.mapTextBlue}>Choose from Map</p>
            </Link>
          </div>
          <InputField
            placeholder={"Pick-Up Location"}
            icon={"pickUp"}
            type={"text"}
            name={"pickup"}
            styletype={"primary"}
          />
        </div>
        <div className={styles.marginTop}>
          <h2 className={styles.textH2}>Insurance:</h2>
          <SelectCustomInsurance />
        </div>
        <div className={styles.marginTop}>
          <h2 className={styles.textH2}>Note:</h2>
          <InputField
            placeholder={"Notes"}
            type={"text"}
            name={"dropoff"}
            styletype={"primary"}
          />
        </div>
      </div>
      <div className={styles.divider}></div>
      <div className={`${styles.bookFormPadding} ${styles.flexButton}`}>
        <Button
          icon={"calendarGray"}
          onClick={handleTestOnly}
          buttonStyle={"secondary"}
        >
          Set a Schedule
        </Button>
        <Button type={"submit"} icon={"uphill"} buttonStyle={"primary"}>
          Start your Booking
        </Button>
      </div>
    </div>
  );
};

export default RepaironSiteForm;
