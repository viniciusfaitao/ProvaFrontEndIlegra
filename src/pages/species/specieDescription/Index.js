import React from "react";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import {
  SpecieDescriptionBackground,
  SpecieDescriptionBox,
  SpecieDescriptionHead,
  SpecieDescriptionBody,
  SpecieDescriptionFooter,
} from "./Style";
import { UseSpecies } from "../../../services/speciesApi/Api";
import { SpecieImagesData } from "../../../components/imagesData/specieImages/Index";

export const SpecieDescription = () => {
  const species = UseSpecies();
  const { name } = useParams();

  return (
    <SpecieDescriptionBackground>
      {species
        .filter((specie) => specie.name === name)
        .map((specie) => (
          <SpecieDescriptionBox key={specie.name}>
            <SpecieDescriptionHead>
              {SpecieImagesData.map((specieImage) =>
                specieImage.name === specie.name ? (
                  <img src={specieImage.image} />
                ) : null
              )}
              SPECIE
              <p>{specie.name}</p>
            </SpecieDescriptionHead>
            <SpecieDescriptionBody>
              <div>
                Classification
                <h3>{specie.classification}</h3>
              </div>
              <div>
                Designation
                <h3>{specie.designation}</h3>
              </div>
              <div>
                Average Height
                <h3>{specie.average_height}</h3>
              </div>
              <div>
                Skin Colors
                <h3>{specie.skin_colors}</h3>
              </div>
              <div>
                Hair Colors
                <h3>{specie.hair_colors}</h3>
              </div>
              <div>
                Eye Colors
                <h3>{specie.eye_colors}</h3>
              </div>
              <div>
                Average Lifespan
                <h3>{specie.average_lifespan}</h3>
              </div>
              <div>
                Homeworld
                <h3>{specie.homeworld}</h3>
              </div>
              <div>
                Language
                <h3>{specie.language}</h3>
              </div>
            </SpecieDescriptionBody>
            <SpecieDescriptionFooter>
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
                <Link to={`/species`}>
                  <button title="return">Return</button>
                </Link>
              </motion.div>
            </SpecieDescriptionFooter>
          </SpecieDescriptionBox>
        ))}
    </SpecieDescriptionBackground>
  );
};
