import styles from "./DropOffButton.module.css";
import { useNavigate } from "react-router-dom";
import { MdLocationPin } from "react-icons/md";
import { savePosition } from "../../context/positionMapState";

const DropOffButton = () => {
  const navigate = useNavigate();
  const { dropOffPosition } = savePosition();
  const handleDropOff = () => {
    navigate("/dashboard/booknow");
  };
  return (
    <button onClick={handleDropOff} className={styles.buttondropoff}>
      <MdLocationPin className="text-2xl text-white" />
      Place Drop-off Location
    </button>
  );
};

export default DropOffButton;
