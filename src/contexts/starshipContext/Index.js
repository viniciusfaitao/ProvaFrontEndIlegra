import React, { createContext, useState, useEffect } from "react";
import { UseStarships } from "../../services/starshipsApi/Api";

export const StarshipContext = createContext();

export const StarshipContextProvider = (props) => {
  const [starships, setStarships] = useState([]);

  const fetchData = async () => {
    const result = await UseStarships();
    setStarships(result);
  };

  useEffect(() => {
    if (starships <= 0) {
      fetchData();
    }
  });

  return (
    <StarshipContext.Provider value={{ starships }}>
      {props.children}
    </StarshipContext.Provider>
  );
};
