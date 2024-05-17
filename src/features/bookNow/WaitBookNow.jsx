import { useState, useEffect } from "react";

import Button from "../../components/Button";
import styles from "./WaitBookNow.module.css";
import { ModalStoreState } from "../../context/ModalStoreState";
import CancelBookingModal from "./CancelBookingModal";
import BookSuccessfullNormalModal from "./BookSuccessfullNormalModal";

const WaitBookNow = () => {
  const [currentTime, setCurrentTime] = useState(new Date(0));
  const [bookCancel, setBookCancel] = useState(true);
  const { openModal } = ModalStoreState();
  const handleCancelBooking = () => {
    openModal(<CancelBookingModal />);
  };

  useEffect(() => {
    // Update current time every second
    const timer = setInterval(() => {
      setCurrentTime((prevTime) => new Date(prevTime.getTime() + 1000));
    }, 1000);

    // Clear interval on component unmount
    return () => clearInterval(timer);
  }, []);

  //Test for handling Success only to show the flow
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "s" || event.key === "S") {
        setBookCancel(false);
        openModal(<BookSuccessfullNormalModal />);
      }
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  // Function to format time to HH:MM:SS
  const formatTime = (date) => {
    const hours = date.getUTCHours().toString().padStart(2, "0");
    const minutes = date.getUTCMinutes().toString().padStart(2, "0");
    const seconds = date.getUTCSeconds().toString().padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <>
      {bookCancel && (
        <div className={styles.waitCont}>
          <div className={styles.waitingTime}>
            <h2 className={styles.h2font}>Waiting for Accepting</h2>
            <p className={styles.pfont}>{formatTime(currentTime)}</p>
          </div>
        </div>
      )}
      <div className={styles.buttonCont}>
        {bookCancel && (
          <Button
            icon={"cross"}
            onClick={handleCancelBooking}
            buttonStyle={"primary"}
          >
            Cancel Booking
          </Button>
        )}
      </div>
    </>
  );
};

export default WaitBookNow;
