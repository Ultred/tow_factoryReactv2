import React, { useState } from 'react';
import styles from '/src/components/History.module.css';
import calendarIcon from '../assets/calendar-icon.png';
import pickupIcon from '../assets/pickup-icon.png';
import dropoffIcon from '../assets/dropoff-icon.png';
import Datepicker from './Datepicker';
import NoData from '../assets/NoData.png';

const HistorySidebar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [dataAvailable, setDataAvailable] = useState(false);

  // Function to check if data is available for the selected date
  const checkDataAvailability = (selectedDate) => {
    // Hardcoded example: assume data is available for 2024-04-16
    const hardcodedDate = '2024-04-16';
    return selectedDate.toISOString().slice(0, 10) === hardcodedDate;
  };

  // Function to handle date selection
  const handleDateChange = (date) => {
    console.log("Selected Date:", date); // Log the selected date for debugging
    setSelectedDate(date);
    const isDataAvailable = checkDataAvailability(date);
    setDataAvailable(isDataAvailable);
  };

  return (
    <>
      <Datepicker selectedDate={selectedDate} handleChange={handleDateChange} />
      {dataAvailable ? (
        <div className={styles.mainCont}>
          <div className={styles.cont}>
            <div className={styles.head}>
              <p>TRACKING NUMBER: </p>
              <p className={styles.trackingNumber}>TF0123456789</p>
            </div>
            <div className={styles.trackingInfo}>
              <div className={styles.trackingLeft}>
                <div className={styles.status}>
                  <p>STATUS: </p>
                  <span>Confirmation</span>
                </div>
                <div className={styles.client}>
                  <p>CLIENT: </p>
                  <span>Juan Dela Cruz</span>
                </div>
                <div className={styles.manufacturer}>
                  <p>MANUFACTURER: </p>
                  <span>Honda</span>
                </div>
                <div className={styles.plateNumber}>
                  <p>PLATENUMBER: </p>
                  <span>ABC 123</span>
                </div>
              </div>
              <div className={styles.trackingRight}>
                <div className={styles.calendar}>
                  <img src={calendarIcon}></img>
                  <div className={styles.calendarContainer}>
                    <p>Date Placed: March 15, 2023</p>
                    <span>Date Scheduled: March 20, 2023</span>
                  </div>
                </div>
                <div className={styles.pickUp}>
                  <img src={pickupIcon} alt="Pickup Icon" />
                  <p>839 unit-N S. H. Loyola, Sampaloc, Manila, 1008 Metro Manila</p>
                </div>
                <div className={styles.dropOff}>
                  <img src={dropoffIcon} alt="Dropoff Icon" />
                  <p>Espana, Manila City, Metro Manila, Philippines</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
      <div className={styles.noData}>
        <img src={NoData}/>
      </div>
      )}
    </>
  );
};

export default HistorySidebar;
