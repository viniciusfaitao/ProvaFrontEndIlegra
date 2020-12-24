import React from "react";
import { UsePlanets } from "../../services/planetsApi/Api";
import { Link } from "react-router-dom";

export const Planets = () => {
  const planets = UsePlanets();

  return (
    <div>
      <h1>Planetas</h1>
      {planets.map((planet) => (
        <div key={planet.url}>
          <h2>{planet.name}</h2>
          <Link to={`/planet/${planet.name}`}>
            <button>Description</button>
          </Link>
        </div>
      ))}
    </div>
  );
};
