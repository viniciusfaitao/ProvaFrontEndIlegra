import React from "react";
import { UseFilms } from "../../../services/filmsApi/Api";
import { useParams, Link } from "react-router-dom";

export const FilmDescription = () => {
  const films = UseFilms();
  const { title } = useParams();

  return (
    <div>
      {films
        .filter((film) => film.title === title)
        .map((film, index) => (
          <div key={index}>
            <Link to={`/films`}>
              <button title="return">
                <h2>Voltar</h2>
              </button>
            </Link>
            <div>{film.title}</div>
            <div>{film.species}</div>
          </div>
        ))}
    </div>
  );
};
