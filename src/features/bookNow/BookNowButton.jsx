import styles from "./BookNowButton.module.css";
import { useNavigate } from "react-router-dom";
const BookNowButton = () => {
  const navigate = useNavigate();
  const handleBookNow = () => {
    navigate("/dashboard/booknow");
  };
  return (
    <div className={styles.flexBookNow}>
      <button onClick={handleBookNow} className={styles.button2}>
        <img
          src="/src/assets/RepairOnSite.svg"
          alt="uphill"
          className={styles.icon}
        />
        Repair on-site
      </button>
      <button onClick={handleBookNow} className={styles.button}>
        <img
          src="/src/assets/uphill.svg"
          alt="uphill"
          className={styles.icon}
        />
        Start your Booking
      </button>
    </div>
  );
};

export default BookNowButton;
