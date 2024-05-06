import styles from "./CardData.module.css";
import dropOffRedIcon from "../assets/dropOffred.svg";
import pickUpBlueIcon from "../assets/pickUpblue.svg";
import dateIcon from "../assets/date.svg";
import PropTypes from "prop-types";
const CardData = ({
  data: {
    trackingNumber,
    status,
    client,
    manufacturer,
    plateNumber,
    datePlaced,
    dateScheduled,
    pickUpLocation,
    dropOffLocation,
  },
}) => {
  let statusColorClass = "";
  let statusColorP = "";
  // Determine color based on status
  switch (status.toUpperCase()) {
    case "IN TRANSIT":
      statusColorClass = styles.inTransit;
      break;
    case "CANCELLED":
      statusColorClass = styles.cancelled;
      break;
    case "DELIVERED":
      statusColorClass = styles.delivered;
      break;
    case "RECEIVED":
      statusColorClass = styles.recieved;
      break;
    default:
      statusColorClass = "";
  }

  switch (status.toUpperCase()) {
    case "IN TRANSIT":
      statusColorP = styles.inTransitP;
      break;
    case "CANCELLED":
      statusColorP = styles.cancelledP;
      break;
    case "DELIVERED":
      statusColorP = styles.deliveredP;
      break;
    default:
      statusColorP = "";
  }
  return (
    <div className={styles.cardDataContainer}>
      <div className={`${styles.cardDataContainerTop} ${statusColorClass}`}>
        <h2>
          TRACKING NUMBER: <span>{trackingNumber}</span>
        </h2>
        <p>CLIENT: CLIENT 1</p>
      </div>
      <div className={styles.cardDataContainerBody}>
        <div className={styles.cardDataContainerBodyLeft}>
          <p>
            STATUS:
            <span className={`${styles.boldText} ${statusColorP}`}>
              {status}
            </span>
          </p>
          <p>
            CLIENT: <span className={styles.boldText}>{client}</span>
          </p>
          <p>
            MANUFACTURER:
            <span className={styles.boldText}>{manufacturer}</span>
          </p>
          <p>
            PLATE NUMBER: <span className={styles.boldText}>{plateNumber}</span>
          </p>
        </div>
        <div className={styles.cardDataContainerBodyRight}>
          <div className={styles.flexDataContainer}>
            <img src={dateIcon} alt="" />
            <div>
              <p>
                Date Placed: <span>{datePlaced}</span>
              </p>
              <p>
                Date Scheduled: <span>{dateScheduled}</span>
              </p>
            </div>
          </div>
          <div className={styles.flexDataContainer}>
            <img src={pickUpBlueIcon} alt="pickup" />
            <p>{pickUpLocation}</p>
          </div>
          <div className={styles.flexDataContainer}>
            <img src={dropOffRedIcon} alt="dropoff" />
            <p>{dropOffLocation}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

//PropTypes
CardData.propTypes = {
  data: PropTypes.shape({
    trackingNumber: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    client: PropTypes.string.isRequired,
    manufacturer: PropTypes.string.isRequired,
    plateNumber: PropTypes.string.isRequired,
    datePlaced: PropTypes.string.isRequired,
    dateScheduled: PropTypes.string.isRequired,
    pickUpLocation: PropTypes.string.isRequired,
    dropOffLocation: PropTypes.string.isRequired,
  }).isRequired,
};
export default CardData;
