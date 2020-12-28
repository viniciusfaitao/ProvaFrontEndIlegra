import React from "react";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import {
  PlanetDescriptionBackground,
  PlanetDescriptionBox,
  PlanetDescriptionHead,
  PlanetDescriptionBody,
  PlanetDescriptionFooter,
} from "./Style";
import { UsePlanets } from "../../../services/planetsApi/Api";
import { PlanetImagesData } from "../../../components/imagesData/planetImages/Index";

export const PlanetDescription = () => {
  const planets = UsePlanets();
  const { name } = useParams();

  return (
    <PlanetDescriptionBackground>
      {planets
        .filter((planet) => planet.name === name)
        .map((planet) => (
          <PlanetDescriptionBox key={planet.name}>
            <PlanetDescriptionHead>
              {PlanetImagesData.map((planetImage) =>
                planetImage.name === planet.name ? (
                  <img src={planetImage.image} />
                ) : null
              )}
              PLANET
              <p>{planet.name}</p>
            </PlanetDescriptionHead>
            <PlanetDescriptionBody>
              <div>
                Rotation_period
                <h3>{planet.rotation_period}</h3>
              </div>
              <div>
                Orbital Period
                <h3>{planet.orbital_period}</h3>
              </div>
              <div>
                Diameter
                <h3>{planet.diameter}</h3>
              </div>
              <div>
                Climate
                <h3>{planet.climate}</h3>
              </div>
              <div>
                Gravity
                <h3>{planet.gravity}</h3>
              </div>
              <div>
                Terrain
                <h3>{planet.terrain}</h3>
              </div>
              <div>
                Surface Water
                <h3>{planet.surface_water}</h3>
              </div>
              <div>
                Population
                <h3>{planet.population}</h3>
              </div>
            </PlanetDescriptionBody>
            <PlanetDescriptionFooter>
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
                <Link to={`/planets`}>
                  <button title="return">Return</button>
                </Link>
              </motion.div>
            </PlanetDescriptionFooter>
          </PlanetDescriptionBox>
        ))}
    </PlanetDescriptionBackground>
  );
};
