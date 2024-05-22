// src/hooks/useCalculateETA.js
import { useState } from "react";
import axios from "axios";

const useCalculateETA = (apiKey) => {
  const [eta, setETA] = useState(null);
  const [error, setError] = useState(null);

  const calculateETA = async (origin, destination) => {
    try {
      //Proxy Server because why not?
      const response = await axios.get(
        "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/distancematrix/json",
        {
          params: {
            origins: origin,
            destinations: destination,
            key: apiKey,
          },
        }
      );
      console.log(response);
      if (response.data.status === "OK") {
        const element = response.data.rows[0].elements[0];
        if (element.status === "OK") {
          setETA(element.duration.text);
        } else {
          setError("Error calculating ETA");
        }
      } else {
        setError("Error with Distance Matrix API response");
      }
    } catch (err) {
      console.log("testError");
      //setError("Error fetching data from Distance Matrix API");
    }
  };

  return { eta, calculateETA, error };
};

export default useCalculateETA;
