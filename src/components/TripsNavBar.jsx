import styles from "../components/TripsNavBar.module.css";
import { useState } from "react";

function TripsNavBar({ data }) {
  const [selectedItem, setSelectedItem] = useState(0);

  const handleItemClick = (index) => {
    setSelectedItem(index);
    console.log(selectedItem);
  };
  return (
    <>
      <div className={styles.tripsNavbar}>
        <ul className={styles.tripsNavberUl}>
          {data.map((item, index) => (
            <li
              className={`${styles.tripsNavberLi} ${
                selectedItem === index ? styles.selected : ""
              }`}
              key={index}
              onClick={() => handleItemClick(index)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default TripsNavBar;
