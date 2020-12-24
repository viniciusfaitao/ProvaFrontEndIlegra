import { useEffect, useState } from "react";
import axios from "axios";

export const UsePeoples = () => {
  const url = "https://swapi.dev/api";

  const [peoples, setPeoples] = useState([]);

  useEffect(() => {
    if (!peoples.length) {
      getPeoples();
    }
  });

  const getPeoples = () => {
    axios
      .get(`${url}/people/`)
      .then((response) => {
        setPeoples(response.data.results);
      })
      .catch((error) => {
        console.error("Error cause: " + error.message);
      });
  };

  return peoples;
};
