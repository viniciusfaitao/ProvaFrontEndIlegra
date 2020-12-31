import React, { createContext, useState, useEffect } from "react";
import { UseSpecies } from "../../services/speciesApi/Api";

export const SpecieContext = createContext();

export const SpecieContextProvider = (props) => {
  const [species, setSpecie] = useState([]);

  const fetchData = async () => {
    const result = await UseSpecies();
    setSpecie(result);
  };

  useEffect(() => {
    if (species <= 0) {
      fetchData();
    }
  });

  return (
    <SpecieContext.Provider value={{ species }}>
      {props.children}
    </SpecieContext.Provider>
  );
};
