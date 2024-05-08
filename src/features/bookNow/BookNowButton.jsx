import styles from "./BookNowButton.module.css";
import DashboardPic from "../../assets/dashboardPic.svg";
import RepairaonSite from "../../assets/RepairOnSite.svg";
import Uphill from "../../assets/uphill.svg";
import { useNavigate } from "react-router-dom";
import { ModalStoreState } from "../../context/ModalStoreState";
import CRNModal from "./CRNModal";
const BookNowButton = () => {
  const { openModal } = ModalStoreState();
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate("/dashboard/booknow");
  };
  // const handleRepairOnSite = () => {
  //   navigate("/dashboard/repaironsite");
  // };

  const handleCRNModalShow = () => {
    openModal(<CRNModal />);
  };
  return (
    <div className={styles.flexBookNow}>
      <img src={DashboardPic} alt="dashboard" />
      <p className={styles.pText}>Start your Booking anytime</p>
      <div className={styles.buttonContCenter}>
        <button onClick={handleBookNow} className={styles.button}>
          <img src={Uphill} alt="uphill" className={styles.icon} />
          Start your Booking
        </button>
        <button onClick={handleCRNModalShow} className={styles.button2}>
          <img
            src={RepairaonSite}
            alt="Repair on Site"
            className={styles.icon}
          />
          Repair on-site
        </button>
      </div>
    </div>
  );
};

export default BookNowButton;
