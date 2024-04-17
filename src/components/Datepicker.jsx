
import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from '/src/components/Datepicker.module.css';
import '/src/components/custom-datepicker.css';

const Datepicker = ({ selectedDate, handleChange }) => {
  return (
    <div className={styles.datepickerContainer}>
      <div className={styles.calendarContainer}>
        <DatePicker
          selected={selectedDate}
          onChange={handleChange}
          dateFormat="yyyy-MM-dd"
          calendarClassName={styles.calendar}
          inline
        />
      </div>
    </div>
  );
};

export default Datepicker;
