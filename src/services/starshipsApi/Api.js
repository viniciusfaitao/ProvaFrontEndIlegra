import { useEffect, useState } from "react";
import axios from "axios";

export const UseStarships = () => {
  const url = "https://swapi.dev/api";

  const [starships, setStarships] = useState([]);

  useEffect(() => {
    if (!starships.length) {
      getStarships();
    }
  });

  const getStarships = () => {
    axios
      .get(`${url}/starships/`)
      .then((response) => {
        setStarships(response.data.results);
      })
      .catch((error) => {
        console.error("Error cause: " + error.message);
      });
  };

  return starships;
};
