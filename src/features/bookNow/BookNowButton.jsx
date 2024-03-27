import styles from "./BookNowButton.module.css";
import { useNavigate } from "react-router-dom";
const BookNowButton = () => {
  const navigate = useNavigate();
  const handleBookNow = () => {
    navigate("/dashboard/booknow");
  };
  return (
    <button onClick={handleBookNow} className={styles.button}>
      <img src="/src/assets/uphill.svg" alt="uphill" className={styles.icon} />
      Start your Booking
    </button>
  );
};

export default BookNowButton;
