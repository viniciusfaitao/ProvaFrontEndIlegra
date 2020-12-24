import { useEffect, useState } from "react";
import axios from "axios";

export const UseSpecies = () => {
  const url = "https://swapi.dev/api";

  const [species, setSpecies] = useState([]);

  useEffect(() => {
    if (!species.length) {
      getSpecies();
    }
  });

  const getSpecies = () => {
    axios
      .get(`${url}/species/`)
      .then((response) => {
        setSpecies(response.data.results);
      })
      .catch((error) => {
        console.error("Error cause: " + error.message);
      });
  };

  return species;
};
