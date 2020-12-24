import React from "react";
import { UseSpecies } from "../../services/speciesApi/Api";
import { Link } from "react-router-dom";

export const Species = () => {
  const species = UseSpecies();

  return (
    <div>
      <h1>Especies</h1>
      {species.map((specie) => (
        <div key={specie.url}>
          <h2>{specie.name}</h2>
          <Link to={`/specie/${specie.name}`}>
            <button>description</button>
          </Link>
        </div>
      ))}
    </div>
  );
};
