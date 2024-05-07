import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import InputField from "../../components/InputField";
import styles from "../bookNow/BookForm.module.css";
import { FaArrowLeft } from "react-icons/fa6";
import { savePosition } from "../../context/positionMapState";
import { ModalStoreState } from "../../context/ModalStoreState";
import ScheduleModal from "./ScheduleModal";
const BookForm = () => {
  const { pickUpPosition, dropOffPosition } = savePosition();
  const { openModal } = ModalStoreState();
  const navigate = useNavigate();
  const handleTestOnly = () => {
    console.log(pickUpPosition.placeName);
    console.log(dropOffPosition);
    openModal(<ScheduleModal />);
  };

  const handleNavigateBack = () => {
    navigate("/dashboard");
  };
  return (
    <div>
      <div onClick={handleNavigateBack} className={styles.flexTopBack}>
        <FaArrowLeft /> Booking
      </div>
      <div className={styles.bookFormPadding}>
        <div className={styles.marginTop}>
          <div className={styles.flexh2Map}>
            <h2 className={styles.textH2}>Pick-Up Location:</h2>
            <Link className={styles.flexMap} to={"/map/pickup"}>
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
            value={pickUpPosition.placeName}
            name={"pickup"}
            styletype={"primary"}
          />
        </div>
        <div className={styles.marginTop}>
          <div className={styles.flexh2Map}>
            <h2 className={styles.textH2}>Drop-Off Location:</h2>
            <Link className={styles.flexMap} to={"/map/dropoff"}>
              <img
                className={styles.MapImage}
                src="/src/assets/clickMap.svg"
                alt=""
              />
              <p className={styles.mapTextBlue}>Choose from Map</p>
            </Link>
          </div>
          <InputField
            placeholder={"Drop-off Location"}
            icon={"dropoff"}
            type={"text"}
            value={dropOffPosition.placeName}
            name={"dropoff"}
            styletype={"primary"}
          />
        </div>
        <div className={styles.marginTop}>
          <h2 className={styles.textH2}>EON:</h2>
          <InputField
            placeholder={"EON Number"}
            type={"text"}
            name={"dropoff"}
            styletype={"primary"}
          />
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

export default BookForm;
