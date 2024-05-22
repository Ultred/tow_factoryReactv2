import { useState } from "react";
import styles from "./ScheduleModalOnsite.module.css";
import calendarBlue from "../../assets/calendarBlue.svg";
import Calendar from "react-calendar";
import "../../page/Calendar.css";
import InputField from "../../components/InputField";
import Button from "../../components/Button";
import { ModalStoreState } from "../../context/ModalStoreState";
import { bookingStore } from "../../context/bookingStoreState";
import toast from "react-hot-toast";

const ScheduleModalOnsite = () => {
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);
  const { bookStateValue, setBookStateValue } = bookingStore();
  const { closeModal } = ModalStoreState();

  const formatDate = (date) => {
    if (!date) return "";
    const formattedDate = new Date(date).toLocaleDateString("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "2-digit",
    });
    return formattedDate;
  };

  const [showCalendar, setShowCalendar] = useState(false);
  const [showTime, setShowTime] = useState(false);

  const handleShowCalendar = () => {
    setShowCalendar((prev) => !prev);
  };
  const handleSetaSchedule = () => {
    const { scheduledDate, scheduledTime } = bookStateValue;
    if (!scheduledDate || !scheduledTime) {
      toast.error("Please Input All Field");
      return;
    }
    toast.success("Schedule Saved");
    closeModal();
  };

  const handleGetTimeValue = (event) => {
    setBookStateValue({ ...bookStateValue, scheduledTime: event.target.value });
    console.log(event.target.value);
  };

  const handleGetCalendarValue = (value) => {
    setBookStateValue({ ...bookStateValue, scheduledDate: formatDate(value) });
    setDate(value);
  };

  const handleShowTime = () => {
    setShowTime((prev) => !prev);
  };

  const handleCancel = () => {
    closeModal();
  };

  return (
    <div className={styles.scheduleinfoContainer}>
      <div className={styles.scheduleInfoTop}>
        <h2 className={styles.scheduleInfoToph2}>Booking Schedule</h2>
      </div>
      <div className={styles.scheduleInfoBody}>
        <div className={styles.marginTop}>
          <div className={styles.flexTextMain}>
            <h3 className={styles.scheduleInfoBodyh3}>Date: </h3>
            <div className={styles.flexCalendarTextBlue}>
              <img src={calendarBlue} alt="Blue Calendar" />
              <p onClick={handleShowCalendar}>Choose from calendar</p>
            </div>
          </div>
          <div className="relative">
            <InputField
              id={"scheduledDate"}
              icon={"calendarGray"}
              placeholder={"MM/DD/YY"}
              type={"text"}
              value={bookStateValue.scheduledDate} // Format the date here
            />
            {showCalendar && (
              <Calendar
                value={date}
                onChange={handleGetCalendarValue}
                className="absolute z-50"
              />
            )}
          </div>
        </div>
        <div className={styles.marginTop}>
          <div className={styles.flexTextMain}>
            <h3 className={styles.scheduleInfoBodyh3}>Time: </h3>
            <div className={styles.flexCalendarTextBlue}>
              <img src={calendarBlue} alt="Blue Calendar" />
              <p onClick={handleShowTime}>Select Time Schedule</p>
            </div>
          </div>
          <InputField
            onChange={handleGetTimeValue}
            icon={"clockGray"}
            placeholder={"HH:MM"}
            id={"scheduledTime"}
            value={bookStateValue.scheduledTime}
            type={"text"}
          />
        </div>
        <div className={styles.flexButton}>
          <div className="w-[40%]">
            <Button
              buttonStyle={"secondary"}
              type={"submit"}
              onClick={handleCancel}
            >
              Cancel
            </Button>
          </div>
          <div className="w-[60%]">
            <Button
              onClick={handleSetaSchedule}
              buttonStyle={"primary"}
              type={"submit"}
            >
              Set a Schedule
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleModalOnsite;
