import React, { useContext } from "react";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import {
  StarshipDescriptionBackground,
  StarshipDescriptionBox,
  StarshipDescriptionHead,
  StarshipDescriptionBody,
  StarshipDescriptionFooter,
} from "./Style";
import { StarshipImagesData } from "../../../components/imagesData/starshipsImages/Index";
import { StarshipContext } from "../../../contexts/starshipContext/Index";
import { LoadingPage } from "../../../components/loadingPage/Index";

export const StarshipDescription = () => {
  const { starships } = useContext(StarshipContext);
  const { name } = useParams();

  return (
    <StarshipDescriptionBackground>
      {starships.length ? (
        starships
          .filter((starship) => starship.name === name)
          .map((starship) => (
            <StarshipDescriptionBox key={starship.name}>
              <StarshipDescriptionHead>
                {StarshipImagesData.map((starshipImage) =>
                  starshipImage.name === starship.name ? (
                    <motion.div whileHover={{ scale: 1.8 }}>
                      <img alt={starshipImage.name} src={starshipImage.image} />
                    </motion.div>
                  ) : null
                )}
                STARSHIP
                <p>{starship.name}</p>
              </StarshipDescriptionHead>
              <StarshipDescriptionBody>
                <div>
                  Model
                  <h3>{starship.model}</h3>
                </div>
                <div>
                  Manufacturer
                  <h3>{starship.manufacturer}</h3>
                </div>
                <div>
                  Cost in Credits
                  <h3>{starship.cost_in_credits}</h3>
                </div>
                <div>
                  Length
                  <h3>{starship.length}</h3>
                </div>
                <div>
                  Max Atmosphering Speed
                  <h3>{starship.max_atmosphering_speed}</h3>
                </div>
                <div>
                  Crew
                  <h3>{starship.crew}</h3>
                </div>
                <div>
                  Passengers
                  <h3>{starship.passengers}</h3>
                </div>
                <div>
                  Cargo Capacity
                  <h3>{starship.cargo_capacity}</h3>
                </div>
                <div>
                  Consumables
                  <h3>{starship.consumables}</h3>
                </div>
                <div>
                  Hyperdrive Rating
                  <h3>{starship.hyperdrive_rating}</h3>
                </div>
                <div>
                  MGLT
                  <h3>{starship.MGLT}</h3>
                </div>
                <div>
                  Starship Class
                  <h3>{starship.starship_class}</h3>
                </div>
              </StarshipDescriptionBody>
              <StarshipDescriptionFooter>
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
                  <Link to={`/starships`}>
                    <button title="return">Return</button>
                  </Link>
                </motion.div>
              </StarshipDescriptionFooter>
            </StarshipDescriptionBox>
          ))
      ) : (
        <LoadingPage />
      )}
    </StarshipDescriptionBackground>
  );
};
