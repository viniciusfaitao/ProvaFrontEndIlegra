import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FilmBackground,
  FilmList,
  FilmListTitle,
  FilmListDescription,
  FilmListButton,
} from "./Style";
import { UseFilms } from "../../services/filmsApi/Api";

export const Films = () => {
  const films = UseFilms();

  return (
    <FilmBackground>
      {films.map((film) => (
        <FilmList key={film.title}>
          <FilmListTitle>{film.title}</FilmListTitle>
          <FilmListDescription>{film.opening_crawl}</FilmListDescription>
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
            <Link to={`/film/${film.title}`}>
              <FilmListButton>Details</FilmListButton>
            </Link>
          </motion.div>
        </FilmList>
      ))}
    </FilmBackground>
  );
};
