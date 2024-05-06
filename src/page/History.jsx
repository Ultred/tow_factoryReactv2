import Calendar from "react-calendar";
import CardData from "../components/CardData";
import styles from "../page/History.module.css";
import "./Calendar.css";
import { historyData } from "../utils/DataSample";
const History = () => {
  return (
    <>
      <div className={styles.historyContainer}>
        <div>
          {historyData.map((data) => (
            <CardData key={data.id} data={data} />
          ))}
        </div>
        <div>
          <Calendar />
        </div>
      </div>
    </>
  );
};

export default History;
