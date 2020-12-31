import React, { createContext, useState, useEffect } from "react";
import { UseVehicles } from "../../services/vehiclesApi/Api";

export const VehicleContext = createContext();

export const VehicleContextProvider = (props) => {
  const [vehicles, setVehicles] = useState([]);

  const fetchData = async () => {
    const result = await UseVehicles();
    setVehicles(result);
  };

  useEffect(() => {
    if (vehicles <= 0) {
      fetchData();
    }
  });

  return (
    <VehicleContext.Provider value={{ vehicles }}>
      {props.children}
    </VehicleContext.Provider>
  );
};
