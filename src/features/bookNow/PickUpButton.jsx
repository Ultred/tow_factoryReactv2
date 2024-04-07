import styles from "./BookNowButton.module.css";
import { useNavigate } from "react-router-dom";
import { savePosition } from "../../context/positionMapState";
const PickUpButton = () => {
  const navigate = useNavigate();
  const { pickUpPosition } = savePosition();
  const handlePickUp = () => {
    navigate("/dashboard/booknow");
  };
  return (
    <button onClick={handlePickUp} className={styles.button}>
      <img src="/src/assets/pickUp.svg" alt="pin" className={styles.icon} />
      Place pin Location
    </button>
  );
};

export default PickUpButton;
