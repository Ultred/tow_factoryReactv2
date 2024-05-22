import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  DirectionsRenderer,
} from "@react-google-maps/api";

import { useEffect, useState } from "react";
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
const directionsRendererOptions = {
  polylineOptions: {
    strokeColor: "#1c2cbc",
    strokeOpacity: 1,
    strokeWeight: 7,
  },
};

const Map = () => {
  const location = useLocation();
  const [markerPosition, setMarkerPosition] = useState(center);
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const { setBookStateValue, bookStateValue } = bookingStore();
  const {
    setPickUpPosition,
    setDropOffPosition,
    pickUpPosition,
    dropOffPosition,
  } = savePosition();

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyA06ZsF5FHeRM-nEax-v0VsOezcS69DsAY",
  });

  useEffect(() => {
    const calculateRoute = async () => {
      if (pickUpPosition && dropOffPosition) {
        try {
          const directionsService = new window.google.maps.DirectionsService();
          const results = await directionsService.route({
            origin: pickUpPosition,
            destination: dropOffPosition,
            travelMode: window.google.maps.TravelMode.DRIVING,
          });
          setDirectionsResponse(results);
          console.log(results);
        } catch (error) {
          console.log(error.message);
        }
      }
    };

    calculateRoute();
  }, [pickUpPosition, dropOffPosition]);

  //Function To Drag Marker Save Pickup&Dropoff Position
  const handleDragEnd = async (e) => {
    const newPosition = {
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
    };
    // setMarkerPosition(newPosition);

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
    } else if (location.pathname === "/dashboard/pickuponsite") {
      const pickUpPositionSaveOnSite = {
        pickUpLat: e.latLng.lat(),
        pickUpLong: e.latLng.lng(),
        pickUpPlaceName: placeName,
      };
      setBookStateValue({ ...bookStateValue, ...pickUpPositionSaveOnSite });
    }
  };

  const renderMarker =
    location.pathname === "/dashboard/pickup" ||
    location.pathname === "/dashboard/dropoff" ||
    location.pathname === "/dashboard/pickuponsite";

  const renderShowMarkeronRepaironSite =
    location.pathname === "/dashboard/repaironsite";

  return isLoaded ? (
    <>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={markerPosition}
        zoom={15}
        options={{
          zoomControl: false,
          mapTypeControl: false,
        }}
        className={styles.mapContainer}
      >
        {(renderMarker || renderShowMarkeronRepaironSite) && (
          <Marker
            position={markerPosition}
            draggable={!renderShowMarkeronRepaironSite}
            onDragEnd={handleDragEnd}
          />
        )}

        {directionsResponse && (
          <DirectionsRenderer
            options={directionsRendererOptions}
            directions={directionsResponse}
          />
        )}
      </GoogleMap>
    </>
  ) : (
    <></>
  );
};

export default Map;
