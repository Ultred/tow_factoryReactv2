import { Link, useNavigate } from "react-router-dom";
import InputField from "../../components/InputField";
import styles from "../bookNow/BookForm.module.css";
import { FaArrowLeft } from "react-icons/fa6";
import { savePosition } from "../../context/positionMapState";
import { ModalStoreState } from "../../context/ModalStoreState";
import ScheduleModal from "./ScheduleModal";
import Button2Custom from "../../components/Button2Custom";
const BookForm = () => {
  const { pickUpPosition, dropOffPosition } = savePosition();
  const { openModal } = ModalStoreState();
  const navigate = useNavigate();
  const handleOpenScheduleModal = () => {
    console.log(pickUpPosition.placeName);
    console.log(dropOffPosition);
    openModal(<ScheduleModal />);
  };

  const handleNavigateBack = () => {
    navigate("/dashboard");
  };

  const handleBookNow = () => {
    navigate("/dashboard/wait");
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
            value={pickUpPosition.placeName}
            name={"pickup"}
            styletype={"primary"}
          />
        </div>
        <div className={styles.marginTop}>
          <div className={styles.flexh2Map}>
            <h2 className={styles.textH2}>Drop-Off Location:</h2>
            <Link className={styles.flexMap} to={"/dashboard/dropoff"}>
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
            placeholder={"Make a Note..."}
            type={"text"}
            name={"dropoff"}
            styletype={"primary"}
          />
        </div>
      </div>
      <div className={styles.divider}>
        <p className={styles.fontP}>
          ETA: <span className={styles.textFontBlue}>10-15 Mins</span>
        </p>
        <p className={styles.fontP}>
          Amount: <span className={styles.textFontBlue}>P1500</span>
        </p>
      </div>
      <div className={`${styles.bookFormPadding} ${styles.flexButton}`}>
        <Button2Custom
          icon={"calendar"}
          onClick={handleOpenScheduleModal}
          buttonStyle={"secondary"}
        >
          Set a Schedule
        </Button2Custom>
        <Button2Custom
          type={"submit"}
          onClick={handleBookNow}
          icon={"uphill"}
          buttonStyle={"primary"}
        >
          Book Now
        </Button2Custom>
      </div>
    </div>
  );
};

export default BookForm;
