import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import styles from "./Map.module.css";
import { savePosition } from "../context/positionMapState";
import { bookingStore } from "../context/bookingStoreState";
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
  const { setBookStateValue, bookStateValue } = bookingStore();
  const { setPickUpPosition, setDropOffPosition } = savePosition();

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyA06ZsF5FHeRM-nEax-v0VsOezcS69DsAY",
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
    //Save pickUp Dropoff Position

    if (location.pathname === "/dashboard/pickup") {
      const pickUpPositionSave = {
        pickUpLat: e.latLng.lat(),
        pickUpLong: e.latLng.lng(),
        pickUpPlaceName: placeName,
      };
      setPickUpPosition({ ...newPosition, placeName });
      setBookStateValue({ ...bookStateValue, ...pickUpPositionSave });
    } else if (location.pathname === "/dashboard/dropoff") {
      const dropOFFPositionSave = {
        dropOffLat: e.latLng.lat(),
        dropOffLong: e.latLng.lng(),
        dropOffPlaceName: placeName,
      };
      setDropOffPosition({ ...newPosition, placeName });
      setBookStateValue({ ...bookStateValue, ...dropOFFPositionSave });
    }
  };

  const renderMarker =
    location.pathname === "/dashboard/pickup" ||
    location.pathname === "/dashboard/dropoff";

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
