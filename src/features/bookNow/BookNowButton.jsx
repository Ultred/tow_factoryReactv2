import styles from "./BookNowButton.module.css";
import { useNavigate } from "react-router-dom";
const BookNowButton = () => {
  const navigate = useNavigate();
  const handleBookNow = () => {
    navigate("/booking/booknow");
  };
  return (
    <button onClick={handleBookNow} className={styles.button}>
      <img src="/src/assets/bookingIcon.svg" />
      Start your Booking
    </button>
  );
};

export default BookNowButton;
