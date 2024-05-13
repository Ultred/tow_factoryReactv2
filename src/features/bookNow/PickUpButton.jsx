import styles from "./PickUpButton.module.css";
import { useNavigate } from "react-router-dom";
import { FaBullseye } from "react-icons/fa";
import { savePosition } from "../../context/positionMapState";
const PickUpButton = () => {
  const navigate = useNavigate();
  const { pickUpPosition } = savePosition();
  const handlePickUp = () => {
    navigate("/dashboard/booknow");
  };
  return (
    <button onClick={handlePickUp} className={styles.buttonPickup}>
      <FaBullseye className="text-xl text-white" />
      Place pin Location
    </button>
  );
};

export default PickUpButton;
