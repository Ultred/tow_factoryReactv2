import styles from "./ScheduleModal.module.css";
import calendarBlue from "../../assets/calendarBlue.svg";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import { ModalStoreState } from "../../context/ModalStoreState";
const ScheduleModal = () => {
  const { closeModal } = ModalStoreState();

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
              <p>Choose from calendar</p>
            </div>
          </div>
          <InputField placeholder={"MM/DD/YY"} type={"text"} />
        </div>
        <div className={styles.marginTop}>
          <div className={styles.flexTextMain}>
            <h3 className={styles.scheduleInfoBodyh3}>Time: </h3>
            <div className={styles.flexCalendarTextBlue}>
              <img src={calendarBlue} alt="Blue Calendar" />
              <p>Select Time Schedule</p>
            </div>
          </div>
          <InputField placeholder={"HH:MM"} type={"text"} />
        </div>
        <div className={styles.flexButton}>
          <Button
            buttonStyle={"secondary"}
            type={"submit"}
            onClick={handleCancel}
          >
            Cancel
          </Button>
          <Button buttonStyle={"primary"} type={"submit"}>
            Set a Schedule
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ScheduleModal;
