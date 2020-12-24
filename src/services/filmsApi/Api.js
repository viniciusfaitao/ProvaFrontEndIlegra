import { useEffect, useState } from "react";
import axios from "axios";

export const UseFilms = () => {
  const url = "https://swapi.dev/api";

  const [films, setFilms] = useState([]);

  useEffect(() => {
    if (!films.length) {
      getFilms();
    }
  });

  const getFilms = () => {
    axios
      .get(`${url}/films/`)
      .then((response) => {
        setFilms(response.data.results);
      })
      .catch((error) => {
        console.error("Error cause: " + error.message);
      });
  };

  return films;
};
