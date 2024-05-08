import toast from "react-hot-toast";
import Button from "../../components/Button";
import InputField from "../../components/InputField";
import { ModalStoreState } from "../../context/ModalStoreState";
import styles from "./CRNModal.module.css";
const CRNModal = () => {
  const { closeModal } = ModalStoreState();
  const handleCancel = () => {
    closeModal();
  };
  const handleProceed = () => {
    toast.error("Please input CRN");
    return;
  };
  return (
    <div className={styles.scheduleinfoContainer}>
      <div className={styles.scheduleInfoTop}>
        <h2 className={styles.scheduleInfoToph2}>CRN</h2>
      </div>
      <div className={styles.scheduleInfoBody}>
        <div className={styles.margin}>
          <div className={styles.flexTextMain}>
            Please input Control Reference Number (CRN) before proceed to
            booking
          </div>
          <InputField text={"CRN"} type={"text"} />
        </div>

        <div className={styles.flexButton}>
          <Button
            buttonStyle={"secondary"}
            type={"submit"}
            onClick={handleCancel}
          >
            Cancel
          </Button>
          <Button
            icon={"check"}
            onClick={handleProceed}
            buttonStyle={"primary"}
            type={"submit"}
          >
            Proceed
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CRNModal;
