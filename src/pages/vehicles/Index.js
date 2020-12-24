import React from "react";
import { UseVehicles } from "../../services/vehiclesApi/Api";
import { Link } from "react-router-dom";

export const Vehicles = () => {
  const vehicles = UseVehicles();

  return (
    <div>
      <h1>veiculos</h1>
      {vehicles.map((vehicle) => (
        <div key={vehicle.url}>
          <h2>{vehicle.name}</h2>
          <Link to={`/vehicle/${vehicle.name}`}>
            <button>description</button>
          </Link>
        </div>
      ))}
    </div>
  );
};
