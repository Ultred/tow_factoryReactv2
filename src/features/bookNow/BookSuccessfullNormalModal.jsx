import styles from "./BookSuccessfullNormalModal.module.css";
import pickupBlue from "./../../assets/pickUpblue.svg";
import dropOffRed from "./../../assets/dropOffred.svg";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import { ModalStoreState } from "../../context/ModalStoreState";
import { bookingStore } from "../../context/bookingStoreState";
import { savePosition } from "../../context/positionMapState";
const BookSuccessfullNormalModal = () => {
  const { closeModal } = ModalStoreState();
  const { clearBookStateValue } = bookingStore();
  const { clearPositionState } = savePosition();
  const navigate = useNavigate();

  const handleDone = () => {
    navigate("/trips");
    clearBookStateValue();
    clearPositionState();
    closeModal();
    console.log("test");
  };

  const handleCheckDetails = () => {
    console.log("test");
  };
  return (
    <div className={styles.notificationModalContainer}>
      <div className={styles.notificationModalTop}>
        <h2 className={styles.notificationModalh2}>Booked</h2>
      </div>
      <div>
        <p className="text-center py-5">
          Congratulations! Your driver is on the way now. The arrival time of
          your truck driver is
        </p>
        <h2>ETA: 10:16 AM</h2>
      </div>
      <div className={styles.notificationModalData}>
        <p>
          CLIENT: <span className={styles.boldtext}>Juan Dela Cruz</span>
        </p>
        <p>
          PHONE: <span className={styles.boldtext}>09123456789</span>
        </p>
      </div>
      <div className={styles.notificationModalLocation}>
        <div className={styles.flexNotif}>
          <img src={pickupBlue} alt="pickup" />
          <p>839 unit-N S. H. Loyola, Sampaloc, Manila, 1008 Metro Manila</p>
        </div>
        <div className={styles.flexNotif}>
          <img src={dropOffRed} alt="dropoff" />
          <p>Espana, Manila City, Metro Manila, Philippines</p>
        </div>
      </div>
      <div className={styles.flexTotal}>
        <h2 className={styles.fontBoldh}>Total Amount:</h2>
        <p className={styles.fontBlueP}>P10000</p>
      </div>
      <div className={styles.notificationModalButtons}>
        <div className="w-[40%]">
          <Button
            buttonStyle={"secondary"}
            type={"submit"}
            onClick={handleDone}
          >
            Done
          </Button>
        </div>
        <div className="w-[60%]">
          <Button
            buttonStyle={"primary"}
            type={"submit"}
            onClick={handleCheckDetails}
          >
            Check Details
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BookSuccessfullNormalModal;
