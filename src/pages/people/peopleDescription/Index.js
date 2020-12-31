import React, { useContext } from "react";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import {
  PeopleDescriptionBackground,
  PeopleDescriptionBox,
  PeopleDescriptionHead,
  PeopleDescriptionBody,
  PeopleDescriptionFooter,
} from "./Style";
import { PeopleImagesData } from "../../../components/imagesData/peopleImages/Index";
import { PeopleContext } from "../../../contexts/peopleContext/Index";
import { LoadingPage } from "../../../components/loadingPage/Index";

export const PeopleDescription = () => {
  const { people } = useContext(PeopleContext);
  const { name } = useParams();

  return (
    <PeopleDescriptionBackground>
      {people.length ? (
        people
          .filter((people) => people.name === name)
          .map((people) => (
            <PeopleDescriptionBox key={people.name}>
              <PeopleDescriptionHead>
                {PeopleImagesData.map((peopleImage) =>
                  peopleImage.name === people.name ? (
                    <motion.div whileHover={{ scale: 1.8 }}>
                      <img alt={peopleImage.name} src={peopleImage.image} />
                    </motion.div>
                  ) : null
                )}
                PEOPLE
                <p>{people.name}</p>
              </PeopleDescriptionHead>
              <PeopleDescriptionBody>
                <div>
                  Height
                  <h3>{people.height}</h3>
                </div>
                <div>
                  Mass
                  <h3>{people.mass}</h3>
                </div>
                <div>
                  Hair Color
                  <h3>{people.hair_color}</h3>
                </div>
                <div>
                  Skin Color
                  <h3>{people.skin_color}</h3>
                </div>
                <div>
                  Eye Color
                  <h3>{people.eye_color}</h3>
                </div>
                <div>
                  Birth Year
                  <h3>{people.birth_year}</h3>
                </div>
                <div>
                  Gender
                  <h3>{people.gender}</h3>
                </div>
              </PeopleDescriptionBody>
              <PeopleDescriptionFooter>
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
                  <Link to={`/peoples`}>
                    <button title="return">Return</button>
                  </Link>
                </motion.div>
              </PeopleDescriptionFooter>
            </PeopleDescriptionBox>
          ))
      ) : (
        <LoadingPage />
      )}
    </PeopleDescriptionBackground>
  );
};
