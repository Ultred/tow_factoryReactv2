import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import { ModalStoreState } from "../../context/ModalStoreState";
import styles from "./CancelBookingModal.module.css";
import { bookingStore } from "../../context/bookingStoreState";

const CancelBookingModal = () => {
  const navigate = useNavigate();
  const { closeModal } = ModalStoreState();
  const { clearBookStateValue } = bookingStore();

  const handleCancel = () => {
    closeModal();
  };

  const handleLeave = () => {
    navigate("/dashboard");
    clearBookStateValue();
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
            <Button
              onClick={handleLeave}
              icon={"check"}
              buttonStyle={"redButton"}
              type={"submit"}
            >
              Leave
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CancelBookingModal;
