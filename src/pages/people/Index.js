import React, { useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  PeopleBackground,
  PeopleList,
  PeopleListButton,
  PeopleListImage,
  PeopleListTitle,
} from "./Style";
import { PeopleImagesData } from "../../components/imagesData/peopleImages/Index";
import { PeopleContext } from "../../contexts/peopleContext/Index";
import { LoadingPage } from "../../components/loadingPage/Index";

export const People = () => {
  const { people } = useContext(PeopleContext);

  return (
    <PeopleBackground>
      {people.length ? (
        people.map((people) => (
          <PeopleList key={people.name}>
            {PeopleImagesData.map((peopleImage) =>
              peopleImage.name === people.name ? (
                <PeopleListImage
                  alt={peopleImage.name}
                  src={peopleImage.image}
                />
              ) : null
            )}
            <PeopleListTitle>{people.name}</PeopleListTitle>
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
              <Link to={`/people/${people.name}`}>
                <PeopleListButton>Details</PeopleListButton>
              </Link>
            </motion.div>
          </PeopleList>
        ))
      ) : (
        <LoadingPage />
      )}
    </PeopleBackground>
  );
};
