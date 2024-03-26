import { Link } from "react-router-dom";
import Button from "../../components/Button";
import InputField from "../../components/InputField";
import styles from "../bookNow/BookForm.module.css";
import { MdOutlineCancel } from "react-icons/md";
const BookForm = () => {
  return (
    <div className={styles.bookFormCont}>
      <form className={styles.formStyle} action="">
        <div className={styles.FormTop}>
          <h2>Booking</h2>
          <Link to="/booking">
            <MdOutlineCancel />
          </Link>
        </div>
        <div className={styles.bookFormPadding}>
          <div className={styles.flexFormBook}>
            <div className={styles.bookwidth50}>
              <div className={styles.flexMap}>
                <h3>Pick-Up Location:</h3>
                <Link className={styles.flexMap} to={"/booking/pickup"}>
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
                name={"pickup"}
                styletype={"primary"}
              />
              <h3>Contact Person:</h3>
              <InputField
                placeholder={"Contact Person's Name"}
                type={"text"}
                name={"contactPerson"}
                styletype={"primary"}
              />
            </div>
            <div className={styles.bookwidth50}>
              <div className={styles.flexMap}>
                <h3>Drop-off Location</h3>
                <Link className={styles.flexMap} to={"/booking/dropoff"}>
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
                name={"dropoff"}
                styletype={"primary"}
              />
              <h3>Contact Phone Number:</h3>
              <InputField
                placeholder={"Contact Phone Number"}
                type={"text"}
                name={"phoneNumber"}
                styletype={"primary"}
              />
            </div>
          </div>
          <h3>Notes:</h3>
          <InputField
            placeholder={"Notes(Optional)"}
            type={"text"}
            name={"notes"}
            styletype={"primary"}
          />
        </div>
        <div className={styles.bookFormHorizontal}></div>
        <div className={styles.flexContButton}>
          <Button buttonStyle={"secondary"}>Set a Schedule</Button>
          <Button type={"submit"} icon={"uphill"} buttonStyle={"primary"}>
            Book Now
          </Button>
        </div>
      </form>
    </div>
  );
};

export default BookForm;
