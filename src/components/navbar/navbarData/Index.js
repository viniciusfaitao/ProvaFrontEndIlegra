import React from "react";

import homeIcon from "../../../assets/icons/homeIcon.png";
import filmsIcon from "../../../assets/icons/filmsIcon.png";
import peopleIcon from "../../../assets/icons/peopleIcon.png";
import planetsIcon from "../../../assets/icons/planetsIcon.png";
import speciesIcon from "../../../assets/icons/speciesIcon.png";
import starshipsIcon from "../../../assets/icons/starshipsIcon.png";
import vehiclesIcon from "../../../assets/icons/vehiclesIcon.png";

export const SidebarData = [
  {
    title: "Home",
    path: "/home",
    icon: <img alt={homeIcon} src={homeIcon} />,
  },
  {
    title: "Films",
    path: "/films",
    icon: <img alt={filmsIcon} src={filmsIcon} />,
  },
  {
    title: "People",
    path: "/peoples",
    icon: <img alt={peopleIcon} src={peopleIcon} />,
  },
  {
    title: "Planets",
    path: "/planets",
    icon: <img alt={planetsIcon} src={planetsIcon} />,
  },
  {
    title: "Species",
    path: "/species",
    icon: <img alt={speciesIcon} src={speciesIcon} />,
  },
  {
    title: "Starships",
    path: "/starships",
    icon: <img alt={starshipsIcon} src={starshipsIcon} />,
  },
  {
    title: "Vehicles",
    path: "/vehicles",
    icon: <img alt={vehiclesIcon} src={vehiclesIcon} />,
  },
];
