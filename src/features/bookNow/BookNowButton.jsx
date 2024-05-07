import styles from "./BookNowButton.module.css";
import DashboardPic from "../../assets/dashboardPic.svg";
import RepairaonSite from "../../assets/RepairOnSite.svg";
import Uphill from "../../assets/uphill.svg";
import { useNavigate } from "react-router-dom";
const BookNowButton = () => {
  const navigate = useNavigate();
  const handleBookNow = () => {
    navigate("/dashboard/booknow");
  };
  const handleRepairOnSite = () => {
    navigate("/dashboard/repaironsite");
  };
  return (
    <div className={styles.flexBookNow}>
      <img src={DashboardPic} alt="dashboard" />
      <div className={styles.buttonContCenter}>
        <button onClick={handleBookNow} className={styles.button}>
          <img src={Uphill} alt="uphill" className={styles.icon} />
          Start your Booking
        </button>
        <button onClick={handleRepairOnSite} className={styles.button2}>
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
