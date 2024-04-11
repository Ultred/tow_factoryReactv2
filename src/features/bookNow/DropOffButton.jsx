import styles from "./DropOffButton.module.css";
import { useNavigate } from "react-router-dom";
import { savePosition } from "../../context/positionMapState";

const DropOffButton = () => {
  const navigate = useNavigate();
  const { dropOffPosition } = savePosition();
  const handleDropOff = () => {
    navigate("/dashboard/booknow");
  };
  return (
    <button onClick={handleDropOff} className={styles.buttondropoff}>
      <img
        src="/src/assets/dropoff.svg"
        alt="uphill"
        className="w-6 text-white"
      />
      Place Drop-off Location
    </button>
  );
};

export default DropOffButton;
