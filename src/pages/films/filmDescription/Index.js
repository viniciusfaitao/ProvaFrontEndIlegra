import React from "react";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import {
  FilmDescriptionBackground,
  FilmDescriptionBox,
  FilmDescriptionHead,
  FilmDescriptionBody,
  FilmDescriptionFooter,
} from "./Style";
import { UseFilms } from "../../../services/filmsApi/Api";

export const FilmDescription = () => {
  const films = UseFilms();
  const { title } = useParams();

  return (
    <FilmDescriptionBackground>
      {films
        .filter((film) => film.title === title)
        .map((film) => (
          <FilmDescriptionBox key={film.title}>
            <FilmDescriptionHead>
              FILM
              <p>{film.title}</p>
            </FilmDescriptionHead>
            <FilmDescriptionBody>
              <div>
                Director
                <h3>{film.director}</h3>
              </div>
              <div>
                Producer
                <h3>{film.producer}</h3>
              </div>
              <div>
                Release Date
                <h3>{film.release_date}</h3>
              </div>
              <div>
                Opening Crawl
                <h4>{film.opening_crawl}</h4>
              </div>
            </FilmDescriptionBody>
            <FilmDescriptionFooter>
              <motion.div
                animate={{
                  scale: [0.9, 0.99, 0.99, 0.9, 0.9],
                }}
                transition={{
                  duration: 2,
                  ease: "easeInOut",
                  times: [0, 0.2, 0.5, 0.8, 1],
                  loop: Infinity,
                  repeatDelay: 1,
                }}
              >
                <Link to={`/films`}>
                  <button title="return">Return</button>
                </Link>
              </motion.div>
            </FilmDescriptionFooter>
          </FilmDescriptionBox>
        ))}
    </FilmDescriptionBackground>
  );
};
