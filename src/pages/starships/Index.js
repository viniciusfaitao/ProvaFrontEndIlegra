import React from "react";
import { UseStarships } from "../../services/starshipsApi/Api";
import { Link } from "react-router-dom";

export const Starships = () => {
  const starships = UseStarships();

  return (
    <div>
      <h1>naves estelares</h1>
      {starships.map((starship) => (
        <div key={starship.url}>
          <h2>{starship.name}</h2>
          <Link to={`/starship/${starship.name}`}>
            <button>description</button>
          </Link>
        </div>
      ))}
    </div>
  );
};
