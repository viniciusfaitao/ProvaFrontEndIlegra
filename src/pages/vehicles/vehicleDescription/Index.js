import React from "react";
import { UseVehicles } from "../../../services/vehiclesApi/Api";
import { useParams, Link } from "react-router-dom";

export const VehicleDescription = () => {
  const vehicles = UseVehicles();
  const { name } = useParams();

  return (
    <div>
      {vehicles
        .filter((vehicle) => vehicle.name === name)
        .map((vehicle, index) => (
          <div key={index}>
            <Link to={`/vehicles`}>
              <button title="return">
                <h2>Voltar</h2>
              </button>
            </Link>
            <div>{vehicle.name}</div>
            <div>{vehicle.passengers}</div>
          </div>
        ))}
    </div>
  );
};
