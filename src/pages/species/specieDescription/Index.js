import React from "react";
import { UseSpecies } from "../../../services/speciesApi/Api";
import { useParams, Link } from "react-router-dom";

export const SpecieDescription = () => {
  const species = UseSpecies();
  const { name } = useParams();

  return (
    <div>
      {species
        .filter((specie) => specie.name === name)
        .map((specie, index) => (
          <div key={index}>
            <Link to={`/species`}>
              <button title="return">
                <h2>Voltar</h2>
              </button>
            </Link>
            <div>{specie.name}</div>
            <div>{specie.language}</div>
          </div>
        ))}
    </div>
  );
};
