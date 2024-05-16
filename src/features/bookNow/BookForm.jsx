import { Link, useNavigate } from "react-router-dom";
import InputField from "../../components/InputField";
import styles from "../bookNow/BookForm.module.css";
import { FaArrowLeft } from "react-icons/fa6";
import { ModalStoreState } from "../../context/ModalStoreState";
import ScheduleModal from "./ScheduleModal";
import Button2Custom from "../../components/Button2Custom";
import { useEffect, useState } from "react";
import SelectCustom from "../../components/SelectCustom";
import CancelBookingModal from "./CancelBookingModal";
import { bookingStore } from "../../context/bookingStoreState";
import toast from "react-hot-toast";

const dataSample = [
  { name: "Unit Sample 1", price: "P 3500.00" },
  { name: "Unit Sample 2", price: "P 3500.00" },
];
const BookForm = () => {
  const { bookStateValue, setBookStateValue } = bookingStore();
  const [showETA, setShowETA] = useState(false);
  const { openModal } = ModalStoreState();
  const navigate = useNavigate();

  const handleOpenScheduleModal = () => {
    openModal(<ScheduleModal />);
  };

  const handleNavigateBack = () => {
    openModal(<CancelBookingModal />);
  };

  const handleBookNow = () => {
    const { pickUpPlaceName, dropOffPlaceName, unit, eon, note } =
      bookStateValue;
    if (pickUpPlaceName && dropOffPlaceName && unit && eon && note) {
      navigate("/dashboard/wait");
    } else {
      toast.error("Please fill in all required fields");
    }
  };

  const handleGetUnitValue = (value) => {
    setBookStateValue({ ...bookStateValue, unit: value.name });
  };

  const handleGetEONValue = (event) => {
    setBookStateValue({ ...bookStateValue, eon: event.target.value });
  };

  const handleGetNoteValue = (event) => {
    setBookStateValue({ ...bookStateValue, note: event.target.value });
  };

  useEffect(() => {
    const { pickUpPlaceName, dropOffPlaceName, unit, eon, note } =
      bookStateValue;
    if (pickUpPlaceName && dropOffPlaceName && unit && eon && note) {
      setShowETA(true);
    }
  }, [bookStateValue]);

  const canBookNow =
    bookStateValue.pickUpPlaceName &&
    bookStateValue.dropOffPlaceName &&
    bookStateValue.unit &&
    bookStateValue.eon &&
    bookStateValue.note;
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
            id={"pickup"}
            placeholder={"Pick-Up Location"}
            icon={"pickUp"}
            type={"text"}
            value={bookStateValue.pickUpPlaceName}
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
            id={"dropoff"}
            placeholder={"Drop-off Location"}
            icon={"dropoff"}
            type={"text"}
            value={bookStateValue.dropOffPlaceName}
            name={"dropoff"}
            styletype={"primary"}
          />
        </div>
        <div className={styles.marginTop}>
          <h2 className={styles.textH2}>EON:</h2>
          <InputField
            id={"eon"}
            placeholder={"EON Number"}
            type={"number"}
            value={bookStateValue.eon}
            onChange={handleGetEONValue}
            name={"dropoff"}
            styletype={"primary"}
          />
        </div>
        <div className={styles.marginTop}>
          <h2 className={styles.textH2}>Unit:</h2>
          <SelectCustom
            onChange={handleGetUnitValue}
            optionSelect={dataSample}
            value={bookStateValue.unit}
            placeholder={"Select Unit"}
            tooltip={"This Pricing is for those in Metro Manila only"}
            heading={"Please select what unit of service you require"}
          />
        </div>
        <div className={styles.marginTop}>
          <h2 className={styles.textH2}>Note:</h2>
          <InputField
            id={"note"}
            placeholder={"Make a Note..."}
            value={bookStateValue.note}
            onChange={handleGetNoteValue}
            type={"text"}
            name={"dropoff"}
            styletype={"primary"}
          />
        </div>
      </div>
      <div className={styles.divider}>
        {showETA && (
          <>
            <p className={styles.fontP}>
              ETA: <span className={styles.textFontBlue}>10-15 Mins</span>
            </p>
            <p className={styles.fontP}>
              Amount: <span className={styles.textFontBlue}>P1500</span>
            </p>
          </>
        )}
      </div>
      <div className={`${styles.bookFormPadding} ${styles.flexButton}`}>
        <Button2Custom
          disabledStyle={"primary"}
          isActive={canBookNow}
          icon={"calendar"}
          onClick={handleOpenScheduleModal}
          buttonStyle={"secondary"}
        >
          {bookStateValue.date && bookStateValue.time ? (
            <div className={styles.buttonSchedule}>
              <h2>
                Date: <span>{bookStateValue.date}</span>
              </h2>
              <h2>
                Time: <span>{bookStateValue.time}</span>
              </h2>
            </div>
          ) : (
            "Set a Schedule"
          )}
        </Button2Custom>
        <Button2Custom
          isActive={canBookNow}
          disabledStyle={"secondary"}
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
