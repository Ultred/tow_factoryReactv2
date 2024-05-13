import { Link } from "react-router-dom";
import styles from "./UrlMapLocator.module.css";
const UrlMapLocator = () => {
  return (
    <div className={styles.urlCont}>
      <p className={styles.url}>
        URL Map Locator:
        <Link className={styles.urlUnderline} to={"/dashboard"}>
          http://towfactory/map/locator
        </Link>
      </p>
    </div>
  );
};

export default UrlMapLocator;
