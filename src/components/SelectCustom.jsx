import { useState, useRef, useEffect } from "react";
import styles from "./SelectCustom.module.css";
import sampleInsurance from "../assets/towfactoryLogo.svg";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdInfo } from "react-icons/md";
import Button from "./Button";
import { AnimatePresence, motion } from "framer-motion";

const SelectCustom = ({
  value,
  placeholder,
  tooltip,
  heading,
  optionSelect,
  onChange,
}) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const dropdownRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !inputRef.current.contains(event.target)
      ) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const handleValue = () => {
    if (value) {
      return value;
    }
    if (selectedOption) {
      return selectedOption.name;
    }
    return "";
  };
  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    onChange(option); // Invoke onChange with the selected option
  };

  return (
    <div className={styles.containerSelect}>
      <input
        ref={inputRef}
        onClick={toggleDropdown}
        readOnly
        type="text"
        placeholder={placeholder}
        className={styles.inputSelect}
        value={handleValue()}
      />
      <IoMdArrowDropdown
        className={`${showDropdown ? styles.iconInfoUp : styles.iconInfoDown} ${
          styles.iconDropDown
        }`}
      />
      <AnimatePresence>
        {showDropdown && (
          <motion.div
            ref={dropdownRef}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={styles.selectContainerDropdown}
          >
            <h2>{heading}</h2>
            <div className={styles.flexSimple}>
              <MdInfo />
              <p className={styles.textInfoP}>{tooltip}</p>
            </div>
            <ul className={styles.ulCont}>
              {optionSelect.map((option, index) => (
                <li
                  key={index}
                  className={`${styles.liCont} ${
                    selectedOption === option ? styles.active : ""
                  }`}
                  onClick={() => handleOptionSelect(option)}
                >
                  <div className={styles.flexContInsurance}>
                    <img
                      className={styles.imgInsurance}
                      src={sampleInsurance}
                      alt="Insurance"
                    />
                    <p className={styles.textInsurance}>{option.name}</p>
                  </div>
                  <p className={styles.textPrice}>{option.price}</p>
                </li>
              ))}
            </ul>
            <Button
              onClick={toggleDropdown}
              buttonStyle={"primary"}
              type={"submit"}
            >
              Confirm
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SelectCustom;
