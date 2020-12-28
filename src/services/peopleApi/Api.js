import { useEffect, useState } from "react";
import axios from "axios";

export const UsePeople = () => {
  const url = "https://swapi.dev/api";

  const [people, setPeople] = useState([]);

  useEffect(() => {
    if (!people.length) {
      getPeople();
    }
  });

  const getPeople = () => {
    axios
      .get(`${url}/people/`)
      .then((response) => {
        setPeople(response.data.results);
      })
      .catch((error) => {
        console.error("Error cause: " + error.message);
      });
  };

  return people;
};
