import toast from "react-hot-toast";
import Button from "../../components/Button";
import InputField from "../../components/InputField";
import { ModalStoreState } from "../../context/ModalStoreState";
import styles from "./CRNModal.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const CRNModal = () => {
  const navigate = useNavigate();
  const { closeModal } = ModalStoreState();
  const [crn, setCRN] = useState("");
  const handleCancel = () => {
    closeModal();
  };
  const handleProceed = () => {
    if (!crn.trim()) {
      toast.error("Please input CRN");
      return;
    }
    navigate("/dashboard/repairOnSite");
    closeModal();
  };
  const handleCRNChange = (e) => {
    setCRN(e.target.value);
  };
  return (
    <div className={styles.scheduleinfoContainer}>
      <div className={styles.scheduleInfoTop}>
        <h2 className={styles.scheduleInfoToph2}>CRN</h2>
      </div>
      <form className={styles.scheduleInfoBody}>
        <div className={styles.margin}>
          <div className={styles.flexTextMain}>
            Please input Control Reference Number (CRN) before proceed to
            booking
          </div>
          <InputField onChange={handleCRNChange} text={"CRN"} type={"text"} />
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
              icon={"check"}
              onClick={handleProceed}
              buttonStyle={"primary"}
              type={"submit"}
            >
              Proceed
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CRNModal;
