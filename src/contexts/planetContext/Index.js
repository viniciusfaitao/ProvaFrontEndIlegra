import React, { createContext, useState, useEffect } from "react";
import { UsePlanets } from "../../services/planetsApi/Api";

export const PlanetContext = createContext();

export const PlanetContextProvider = (props) => {
  const [planets, setPlanet] = useState([]);

  const fetchData = async () => {
    const result = await UsePlanets();
    setPlanet(result);
  };

  useEffect(() => {
    if (planets <= 0) {
      fetchData();
    }
  });

  return (
    <PlanetContext.Provider value={{ planets }}>
      {props.children}
    </PlanetContext.Provider>
  );
};
