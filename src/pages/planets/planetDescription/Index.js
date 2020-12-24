import React from "react";
import { UsePlanets } from "../../../services/planetsApi/Api";
import { useParams, Link } from "react-router-dom";

export const PlanetDescription = () => {
  const planets = UsePlanets();
  const { name } = useParams();

  return (
    <div>
      {planets
        .filter((planet) => planet.name === name)
        .map((planet, index) => (
          <div key={index}>
            <Link to={`/planets`}>
              <button title="return">
                <h2>Voltar</h2>
              </button>
            </Link>
            <div>{planet.name}</div>
            <div>{planet.population}</div>
          </div>
        ))}
    </div>
  );
};
