import { useEffect, useState } from "react";
import axios from "axios";

export const UsePlanets = () => {
  const url = "https://swapi.dev/api";

  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    if (!planets.length) {
      getPlanets();
    }
  });

  const getPlanets = () => {
    axios
      .get(`${url}/planets/`)
      .then((response) => {
        setPlanets(response.data.results);
      })
      .catch((error) => {
        console.error("Error cause: " + error.message);
      });
  };

  return planets;
};
