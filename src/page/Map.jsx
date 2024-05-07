import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./Map.module.css";
import { savePosition } from "../context/positionMapState";
const containerStyle = {
  height: "100% ",
  width: "100%",
};

const center = {
  lat: 14.68843,
  lng: 121.0745,
};

const Map = () => {
  const location = useLocation();
  const [markerPosition, setMarkerPosition] = useState(center);
  const { setPickUpPosition, setDropOffPosition } = savePosition();

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyB-YCmWmM3kDrZ81fNJK5RjmPX17ghyUGk",
  });

  const handleDragEnd = async (e) => {
    const newPosition = {
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
    };
    setMarkerPosition(newPosition);

    // Get the place name using Geocoder
    const geocoder = new window.google.maps.Geocoder(); // Create Geocoder instance
    const results = await geocoder.geocode({ location: newPosition }); // Use Geocoder instance
    const placeName = results.results[0].formatted_address;
    if (location.pathname === "/test/pickup") {
      setPickUpPosition({ ...newPosition, placeName }); //Change the test
    } else if (location.pathname === "/test/dropoff") {
      setDropOffPosition({ ...newPosition, placeName });
    }
  };

  const renderMarker =
    location.pathname === "/test/pickup" ||
    location.pathname === "/test/dropoff";

  return isLoaded ? (
    <>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={markerPosition}
        zoom={10}
        className={styles.mapContainer}
      >
        {renderMarker && (
          <Marker
            position={markerPosition}
            draggable
            onDragEnd={handleDragEnd}
          />
        )}
      </GoogleMap>
    </>
  ) : (
    <></>
  );
};

export default Map;
