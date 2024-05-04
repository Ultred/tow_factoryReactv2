import { Link } from "react-router-dom";
import Button from "../../components/Button";
import InputField from "../../components/InputField";
import styles from "../bookNow/BookForm.module.css";
import { MdOutlineCancel } from "react-icons/md";
import { FaArrowLeft } from "react-icons/fa6";
import { savePosition } from "../../context/positionMapState";
const BookForm = () => {
  const { pickUpPosition, dropOffPosition } = savePosition();

  const handleTestOnly = () => {
    console.log(pickUpPosition.placeName);
    console.log(dropOffPosition);
  };
  return (
    <div>
      <div className={styles.flexTopBack}>
        <FaArrowLeft /> Booking
      </div>
      <div>
        <div>
          <div>
            <h2>Pick-Up Location:</h2>
            <Link className={styles.flexMap} to={"/dashboard/pickup"}>
              <img
                className={styles.MapImage}
                src="/src/assets/clickMap.svg"
                alt=""
              />
              <p>Choose from Map</p>
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
        <div>
          <div>
            <h2>Drop-Off Location:</h2>
            <Link className={styles.flexMap} to={"/dashboard/dropoff"}>
              <img
                className={styles.MapImage}
                src="/src/assets/clickMap.svg"
                alt=""
              />
              <p>Choose from Map</p>
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
        <div>
          <h2>Insurance:</h2>
          <InputField
            placeholder={"Insurance"}
            type={"text"}
            name={"dropoff"}
            styletype={"primary"}
          />
        </div>
        <div>
          <h2>Note:</h2>
          <InputField
            placeholder={"Notes"}
            type={"text"}
            name={"dropoff"}
            styletype={"primary"}
          />
        </div>
      </div>
      <div></div>
      <div>
        <Button onClick={handleTestOnly} buttonStyle={"secondary"}>
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
