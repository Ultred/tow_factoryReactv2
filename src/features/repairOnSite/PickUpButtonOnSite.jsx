import styles from "./PickUpButtonOnSite.module.css";
import { useNavigate } from "react-router-dom";
import { FaBullseye } from "react-icons/fa";
import { savePosition } from "../../context/positionMapState";
import UrlMapLocator from "../bookNow/UrlMapLocator";
const PickUpButtonOnSite = () => {
  const navigate = useNavigate();
  const { pickUpPosition } = savePosition();

  const handlePickUp = () => {
    navigate("/dashboard/repaironsite");
  };
  return (
    <>
      <UrlMapLocator />
      <button onClick={handlePickUp} className={styles.buttonPickup}>
        <FaBullseye className="text-xl text-white" />
        Place pin Location
      </button>
    </>
  );
};

export default PickUpButtonOnSite;
