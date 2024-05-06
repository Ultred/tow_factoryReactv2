import { useState } from "react";
import styles from "./SecondNavbar.module.css";

const SecondNavbar = ({ data, onItemClick }) => {
  const [selectedItem, setSelectedItem] = useState(data[0]);

  const handleItemClick = (index) => {
    setSelectedItem(index);
    onItemClick(index);
  };

  return (
    <>
      <div className={styles.tripsNavbar}>
        <ul className={styles.tripsNavberUl}>
          {data.map((item, index) => (
            <li
              className={`${styles.tripsNavberLi} ${
                selectedItem === item ? styles.selected : ""
              }`}
              key={index}
              onClick={() => handleItemClick(item)}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default SecondNavbar;
