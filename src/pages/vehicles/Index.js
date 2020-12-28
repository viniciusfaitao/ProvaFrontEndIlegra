import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  VehicleBackground,
  VehicleList,
  VehicleListImage,
  VehicleListTitle,
  VehicleListButton,
} from "./Style";
import { UseVehicles } from "../../services/vehiclesApi/Api";
import { VehicleImagesData } from "../../components/imagesData/vehicleImages/Index";

export const Vehicles = () => {
  const vehicles = UseVehicles();

  return (
    <VehicleBackground>
      {vehicles.map((vehicle) => (
        <VehicleList key={vehicle.name}>
          {VehicleImagesData.map((vehicleImage) =>
            vehicleImage.name === vehicle.name ? (
              <VehicleListImage src={vehicleImage.image} />
            ) : null
          )}
          <VehicleListTitle>{vehicle.name}</VehicleListTitle>
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
            <Link to={`/vehicle/${vehicle.name}`}>
              <VehicleListButton>Details</VehicleListButton>
            </Link>
          </motion.div>
        </VehicleList>
      ))}
    </VehicleBackground>
  );
};
