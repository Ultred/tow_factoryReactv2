import styles from "./ScheduleModal.module.css";
import calendarBlue from "../../assets/calendarBlue.svg";
import Calendar from "react-calendar";
import "../../page/Calendar.css";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import { ModalStoreState } from "../../context/ModalStoreState";
import { useState } from "react";
const ScheduleModal = () => {
  const { closeModal } = ModalStoreState();
  const [showCalendar, setShowCalendar] = useState(false);
  const [showTime, setShowTime] = useState(false);

  const handleShowCalendar = () => {
    setShowCalendar((prev) => !prev);
  };

  const handleShowTime = () => {
    setShowTime((prev) => !prev);
  };
  const handleCancel = () => {
    closeModal();
  };
  return (
    <div className={styles.scheduleinfoContainer}>
      <div className={styles.scheduleInfoTop}>
        <h2 className={styles.scheduleInfoToph2}>Booking Schedule</h2>
      </div>
      <div className={styles.scheduleInfoBody}>
        <div className={styles.marginTop}>
          <div className={styles.flexTextMain}>
            <h3 className={styles.scheduleInfoBodyh3}>Date: </h3>
            <div className={styles.flexCalendarTextBlue}>
              <img src={calendarBlue} alt="Blue Calendar" />
              <p onClick={handleShowCalendar}>Choose from calendar</p>
            </div>
          </div>
          <div className="relative">
            <InputField
              icon={"calendarGray"}
              placeholder={"MM/DD/YY"}
              type={"text"}
            />
            {showCalendar && <Calendar className="absolute z-50" />}
          </div>
        </div>
        <div className={styles.marginTop}>
          <div className={styles.flexTextMain}>
            <h3 className={styles.scheduleInfoBodyh3}>Time: </h3>
            <div className={styles.flexCalendarTextBlue}>
              <img src={calendarBlue} alt="Blue Calendar" />
              <p onClick={handleShowTime}>Select Time Schedule</p>
            </div>
          </div>
          <InputField icon={"clockGray"} placeholder={"HH:MM"} type={"text"} />
        </div>
        <div className={styles.flexButton}>
          <div className="w-[40%]">
            <Button
              buttonStyle={"secondary"}
              type={"submit"}
              onClick={handleCancel}
            >
              Cancel
            </Button>
          </div>
          <div className="w-[60%]">
            <Button buttonStyle={"primary"} type={"submit"}>
              Set a Schedule
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleModal;
