import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  PeopleBackground,
  PeopleList,
  PeopleListButton,
  PeopleListImage,
  PeopleListTitle,
} from "./Style";
import { UsePeople } from "../../services/peopleApi/Api";
import { PeopleImagesData } from "../../components/imagesData/peopleImages/Index";

export const People = () => {
  const people = UsePeople();

  return (
    <PeopleBackground>
      {people.map((people) => (
        <PeopleList key={people.name}>
          {PeopleImagesData.map((peopleImage) =>
            peopleImage.name === people.name ? (
              <PeopleListImage src={peopleImage.image} />
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
              loop: Infinity,
              repeatDelay: 1,
            }}
          >
            <Link to={`/people/${people.name}`}>
              <PeopleListButton>Details</PeopleListButton>
            </Link>
          </motion.div>
        </PeopleList>
      ))}
    </PeopleBackground>
  );
};
