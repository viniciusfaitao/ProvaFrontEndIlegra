import React, { useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  PlanetBackground,
  PlanetList,
  PlanetListButton,
  PlanetListImage,
  PlanetListTitle,
} from "./Style";
import { PlanetImagesData } from "../../components/imagesData/planetImages/Index";
import { PlanetContext } from "../../contexts/planetContext/Index";
import { LoadingPage } from "../../components/loadingPage/Index";

export const Planets = () => {
  const { planets } = useContext(PlanetContext);

  return (
    <PlanetBackground>
      {planets.length ? (
        planets.map((planet) => (
          <PlanetList key={planet.name}>
            {PlanetImagesData.map((planetImage) =>
              planetImage.name === planet.name ? (
                <PlanetListImage
                  alt={planetImage.name}
                  src={planetImage.image}
                />
              ) : null
            )}
            <PlanetListTitle>{planet.name}</PlanetListTitle>
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
              <Link to={`/planet/${planet.name}`}>
                <PlanetListButton>Details</PlanetListButton>
              </Link>
            </motion.div>
          </PlanetList>
        ))
      ) : (
        <LoadingPage />
      )}
    </PlanetBackground>
  );
};
