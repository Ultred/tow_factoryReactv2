import styles from "./PickUpButton.module.css";
import { useNavigate } from "react-router-dom";
import { savePosition } from "../../context/positionMapState";
const PickUpButton = () => {
  const navigate = useNavigate();
  const { pickUpPosition } = savePosition();
  const handlePickUp = () => {
    navigate("/dashboard/booknow");
  };
  return (
    <button onClick={handlePickUp} className={styles.buttonPickup}>
      <img src="/src/assets/pickUp.svg" alt="pin" className={styles.icon} />
      Place pin Location
    </button>
  );
};

export default PickUpButton;
