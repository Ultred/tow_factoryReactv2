import { motion } from "framer-motion";
import { ModalStoreState } from "../context/ModalStoreState";
import styles from "./ModalMain.module.css";

const ModalMain = ({ children }) => {
  const { closeModal } = ModalStoreState();
  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };
  return (
    <>
      <div onClick={handleOverlayClick} className={styles.modal_overlay}>
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{
            type: "spring",
            ease: "easeInOut",
            duration: 0.2,
            stiffness: 600,
            damping: 30,
          }}
          className={styles.modal}
        >
          {children}
        </motion.div>
      </div>
    </>
  );
};

export default ModalMain;
