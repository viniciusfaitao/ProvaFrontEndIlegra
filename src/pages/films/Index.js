import React from "react";
import { UseFilms } from "../../services/filmsApi/Api";
import { Link } from "react-router-dom";

export const Films = () => {
  const films = UseFilms();

  return (
    <div>
      <h1>filmes</h1>
      {films.map((film) => (
        <div key={film.title}>
          <h3>{film.title}</h3>
          <Link to={`/film/${film.title}`}>
            <button>Description</button>
          </Link>
        </div>
      ))}
    </div>
  );
};
