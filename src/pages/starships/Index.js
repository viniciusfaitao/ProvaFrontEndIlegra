import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  StarshipBackground,
  StarshipList,
  StarshipListImage,
  StarshipListTitle,
  StarshipListButton,
} from "./Style";
import { UseStarships } from "../../services/starshipsApi/Api";
import { StarshipImagesData } from "../../components/imagesData/starshipsImages/Index";

export const Starships = () => {
  const starships = UseStarships();

  return (
    <StarshipBackground>
      {starships.map((starship) => (
        <StarshipList key={starship.name}>
          {StarshipImagesData.map((starshipImage) =>
            starshipImage.name === starship.name ? (
              <StarshipListImage src={starshipImage.image} />
            ) : null
          )}
          <StarshipListTitle>{starship.name}</StarshipListTitle>
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
            <Link to={`/starship/${starship.name}`}>
              <StarshipListButton>Details</StarshipListButton>
            </Link>
          </motion.div>
        </StarshipList>
      ))}
    </StarshipBackground>
  );
};
