import styles from "./FullScreen.module.css";

const FullScreenLoader = () => {
  return (
    <div className={styles.fullScreen}>
      <div className={styles.loader}></div>
    </div>
  );
};

export default FullScreenLoader;
