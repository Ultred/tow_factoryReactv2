import Button from "../../components/Button";
import { ModalStoreState } from "../../context/ModalStoreState";
import styles from "./CancelBookingModal.module.css";

const CancelBookingModal = () => {
  const { closeModal } = ModalStoreState();

  const handleCancel = () => {
    closeModal();
  };
  return (
    <div className={styles.scheduleinfoContainer}>
      <div className={styles.scheduleInfoTop}>
        <h2 className={styles.scheduleInfoToph2}>Cancel Booking Procecss</h2>
      </div>
      <div className={styles.scheduleInfoBody}>
        <div className={styles.margin}>
          <div className={styles.flexTextMain}>
            Are you sure you want to leave this section? your process of booking
            will be lost.
          </div>
        </div>

        <div className={styles.flexButton}>
          <Button
            buttonStyle={"secondary"}
            type={"submit"}
            onClick={handleCancel}
          >
            Continue
          </Button>
          <Button icon={"check"} buttonStyle={"primary"} type={"submit"}>
            Leave
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CancelBookingModal;
