import React, { useContext } from "react";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import {
  SpecieDescriptionBackground,
  SpecieDescriptionBox,
  SpecieDescriptionHead,
  SpecieDescriptionBody,
  SpecieDescriptionFooter,
} from "./Style";
import { SpecieImagesData } from "../../../components/imagesData/specieImages/Index";
import { SpecieContext } from "../../../contexts/specieContext/Index";
import { PlanetContext } from "../../../contexts/planetContext/Index";
import { LoadingPage } from "../../../components/loadingPage/Index";

export const SpecieDescription = () => {
  const { species } = useContext(SpecieContext);
  const { planets } = useContext(PlanetContext);
  const { name } = useParams();

  return (
    <SpecieDescriptionBackground>
      {species.length ? (
        species
          .filter((specie) => specie.name === name)
          .map((specie) => (
            <SpecieDescriptionBox key={specie.name}>
              <SpecieDescriptionHead>
                {SpecieImagesData.map((specieImage) =>
                  specieImage.name === specie.name ? (
                    <motion.div whileHover={{ scale: 1.8 }}>
                      <img alt={specieImage.name} src={specieImage.image} />
                    </motion.div>
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
                  <h3>
                    {planets
                      .filter((planet) => planet.url === specie.homeworld)
                      .map((planet) => planet.name)}
                  </h3>
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
                    repeat: Infinity,
                    repeatDelay: 1,
                  }}
                >
                  <Link to={`/species`}>
                    <button title="return">Return</button>
                  </Link>
                </motion.div>
              </SpecieDescriptionFooter>
            </SpecieDescriptionBox>
          ))
      ) : (
        <LoadingPage />
      )}
    </SpecieDescriptionBackground>
  );
};
