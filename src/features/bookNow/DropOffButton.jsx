import styles from "./BookNowButton.module.css";

const DropOffButton = () => {
  const handleBookNow = () => {
    console.log("handleBookNow");
  };
  return (
    <button onClick={handleBookNow} className={styles.button}>
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
