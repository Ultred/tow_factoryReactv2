import styles from "./BookNowButton.module.css";

const PickUpButton = () => {
  const handleBookNow = () => {
    console.log("handleBookNow");
  };
  return (
    <button onClick={handleBookNow} className={styles.button}>
      <img src="/src/assets/pickUp.svg" alt="pin" className={styles.icon} />
      Place pin Location
    </button>
  );
};

export default PickUpButton;
