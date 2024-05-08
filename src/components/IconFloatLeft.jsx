import styles from "./IconFloatLeft.module.css";
import messageIcon from "../assets/messagesIcon.svg";
import callIcon from "../assets/callIcon.svg";
const IconFloatLeft = () => {
  const handleShowChatModal = () => {
    console.log("test");
  };
  return (
    <div className={styles.iconFloatLeft}>
      <div className={styles.circleStyle}>
        <img className={styles.icon} src={callIcon} alt="call" />
      </div>
      <div className={styles.circleStyle}>
        <img
          onClick={handleShowChatModal}
          className={styles.icon}
          src={messageIcon}
          alt="messages"
        />
      </div>
    </div>
  );
};

export default IconFloatLeft;
