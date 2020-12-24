import { useEffect, useState } from "react";
import axios from "axios";

export const UseVehicles = () => {
  const url = "https://swapi.dev/api";

  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    if (!vehicles.length) {
      getVehicles();
    }
  });

  const getVehicles = () => {
    axios
      .get(`${url}/vehicles/`)
      .then((response) => {
        setVehicles(response.data.results);
      })
      .catch((error) => {
        console.error("Error cause: " + error.message);
      });
  };

  return vehicles;
};
