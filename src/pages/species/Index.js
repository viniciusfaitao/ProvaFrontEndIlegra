import React, { useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  SpecieBackground,
  SpecieList,
  SpecieListImage,
  SpecieListTitle,
  SpecieListButton,
} from "./Style";
import { SpecieImagesData } from "../../components/imagesData/specieImages/Index";
import { SpecieContext } from "../../contexts/specieContext/Index";
import { LoadingPage } from "../../components/loadingPage/Index";

export const Species = () => {
  const { species } = useContext(SpecieContext);

  return (
    <SpecieBackground>
      {species.length ? (
        species.map((specie) => (
          <SpecieList key={specie.name}>
            {SpecieImagesData.map((specieImage) =>
              specieImage.name === specie.name ? (
                <SpecieListImage
                  alt={specieImage.name}
                  src={specieImage.image}
                />
              ) : null
            )}
            <SpecieListTitle>{specie.name}</SpecieListTitle>
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
              <Link to={`/specie/${specie.name}`}>
                <SpecieListButton>Details</SpecieListButton>
              </Link>
            </motion.div>
          </SpecieList>
        ))
      ) : (
        <LoadingPage />
      )}
    </SpecieBackground>
  );
};
