import React from "react";
import { UseStarships } from "../../../services/starshipsApi/Api";
import { useParams, Link } from "react-router-dom";

export const StarshipDescription = () => {
  const starships = UseStarships();
  const { name } = useParams();

  return (
    <div>
      {starships
        .filter((starship) => starship.name === name)
        .map((starship, index) => (
          <div key={index}>
            <Link to={`/starships`}>
              <button title="return">
                <h2>Voltar</h2>
              </button>
            </Link>
            <div>{starship.name}</div>
            <div>{starship.passengers}</div>
          </div>
        ))}
    </div>
  );
};
