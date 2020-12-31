import React, { useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  StarshipBackground,
  StarshipList,
  StarshipListImage,
  StarshipListTitle,
  StarshipListButton,
} from "./Style";
import { StarshipImagesData } from "../../components/imagesData/starshipsImages/Index";
import { StarshipContext } from "../../contexts/starshipContext/Index";
import { LoadingPage } from "../../components/loadingPage/Index";

export const Starships = () => {
  const { starships } = useContext(StarshipContext);

  return (
    <StarshipBackground>
      {starships.length ? (
        starships.map((starship) => (
          <StarshipList key={starship.name}>
            {StarshipImagesData.map((starshipImage) =>
              starshipImage.name === starship.name ? (
                <StarshipListImage
                  alt={starshipImage.name}
                  src={starshipImage.image}
                />
              ) : null
            )}
            <StarshipListTitle>{starship.name}</StarshipListTitle>
            <motion.div
              animate={{
                scale: [0.9, 0.99, 0.99, 0.9],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 1,
              }}
            >
              <Link to={`/starship/${starship.name}`}>
                <StarshipListButton>Details</StarshipListButton>
              </Link>
            </motion.div>
          </StarshipList>
        ))
      ) : (
        <LoadingPage />
      )}
    </StarshipBackground>
  );
};
