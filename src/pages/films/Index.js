import React, { useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FilmBackground,
  FilmList,
  FilmListTitle,
  FilmListImage,
  FilmListButton,
} from "./Style";
import { FilmImagesData } from "../../components/imagesData/filmsImages/Index";
import { FilmContext } from "../../contexts/filmContext/Index";
import { LoadingPage } from "../../components/loadingPage/Index";

export const Films = () => {
  const { films } = useContext(FilmContext);

  return (
    <FilmBackground>
      {films.length ? (
        films.map((film) => (
          <FilmList key={film.title}>
            {FilmImagesData.map((filmImage) =>
              filmImage.title === film.title ? (
                <FilmListImage alt={filmImage.name} src={filmImage.image} />
              ) : null
            )}
            <FilmListTitle>{film.title}</FilmListTitle>
            <motion.div
              animate={{
                scale: [0.9, 0.99, 0.99, 0.9, 0.9],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 1,
              }}
            >
              <Link to={`/film/${film.title}`}>
                <FilmListButton title="Details">Details</FilmListButton>
              </Link>
            </motion.div>
          </FilmList>
        ))
      ) : (
        <LoadingPage />
      )}
    </FilmBackground>
  );
};
