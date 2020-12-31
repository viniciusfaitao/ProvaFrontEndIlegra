import React, { useContext } from "react";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import {
  FilmDescriptionBackground,
  FilmDescriptionBox,
  FilmDescriptionHead,
  FilmDescriptionBody,
  FilmDescriptionFooter,
} from "./Style";
import { FilmImagesData } from "../../../components/imagesData/filmsImages/Index";
import { FilmContext } from "../../../contexts/filmContext/Index";
import { LoadingPage } from "../../../components/loadingPage/Index";

export const FilmDescription = () => {
  const { films } = useContext(FilmContext);
  const { title } = useParams();

  return (
    <FilmDescriptionBackground>
      {films.length ? (
        films
          .filter((film) => film.title === title)
          .map((film) => (
            <FilmDescriptionBox key={film.title}>
              <FilmDescriptionHead>
                {FilmImagesData.map((filmImage) =>
                  filmImage.title === film.title ? (
                    <motion.div whileHover={{ scale: 1.8 }}>
                      <img alt={filmImage.name} src={filmImage.image} />
                    </motion.div>
                  ) : null
                )}
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
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                >
                  <Link to={`/films`}>
                    <button title="return">Return</button>
                  </Link>
                </motion.div>
              </FilmDescriptionFooter>
            </FilmDescriptionBox>
          ))
      ) : (
        <LoadingPage />
      )}
    </FilmDescriptionBackground>
  );
};
