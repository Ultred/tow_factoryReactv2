import styles from "./SelectCustomInsurance.module.css";
import sampleInsurance from "../assets/towfactoryLogo.svg";
import { IoMdArrowDropdown } from "react-icons/io";
import { MdInfo } from "react-icons/md";
import Button from "./Button";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";

const SelectCustomInsurance = () => {
  const [showDropdown, setShowDropdown] = useState(false);
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

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  return (
    <div className={styles.containerSelect}>
      <input
        ref={inputRef}
        onClick={toggleDropdown}
        readOnly
        type="text"
        placeholder="Select Insurance"
        className={styles.inputSelect}
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
            <h2>Please select who insured the vehicle</h2>
            <div className={styles.flexSimple}>
              <MdInfo />

              <p className={styles.textInfoP}>
                This Pricing is for those in Metro Manila only
              </p>
            </div>
            <ul className={styles.ulCont}>
              <li className={styles.liCont}>
                <div className={styles.flexContInsurance}>
                  <img
                    className={styles.imgInsurance}
                    src={sampleInsurance}
                    alt="Insurance"
                  />{" "}
                  <p>Insurance Sample</p>
                </div>
                <p>P 3500.00</p>
              </li>
            </ul>
            <Button buttonStyle={"primary"} type={"submit"}>
              Confirm
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SelectCustomInsurance;
