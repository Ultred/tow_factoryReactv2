import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import styles from "./Map.module.css";
const containerStyle = {
  height: "90vh",
  width: "100%",
};
const center = {
  lat: 14.68843,
  lng: 121.0745,
};

const Map = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyB-YCmWmM3kDrZ81fNJK5RjmPX17ghyUGk",
  });
  return isLoaded ? (
    <>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        className={styles.mapContainer}
      ></GoogleMap>
    </>
  ) : (
    <></>
  );
};

export default Map;
