import React from "react";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import {
  VehicleDescriptionBackground,
  VehicleDescriptionBox,
  VehicleDescriptionHead,
  VehicleDescriptionBody,
  VehicleDescriptionFooter,
} from "./Style";
import { UseVehicles } from "../../../services/vehiclesApi/Api";
import { VehicleImagesData } from "../../../components/imagesData/vehicleImages/Index";

export const VehicleDescription = () => {
  const vehicles = UseVehicles();
  const { name } = useParams();

  return (
    <VehicleDescriptionBackground>
      {vehicles
        .filter((vehicle) => vehicle.name === name)
        .map((vehicle) => (
          <VehicleDescriptionBox key={vehicle.name}>
            <VehicleDescriptionHead>
              {VehicleImagesData.map((vehicleImage) =>
                vehicleImage.name === vehicle.name ? (
                  <img src={vehicleImage.image} />
                ) : null
              )}
              VEHICLE
              <p>{vehicle.name}</p>
            </VehicleDescriptionHead>
            <VehicleDescriptionBody>
              <div>
                Model
                <h3>{vehicle.model}</h3>
              </div>
              <div>
                Manufacturer
                <h3>{vehicle.manufacturer}</h3>
              </div>
              <div>
                Cost in Credits
                <h3>{vehicle.cost_in_credits}</h3>
              </div>
              <div>
                Length
                <h3>{vehicle.length}</h3>
              </div>
              <div>
                Max Atmosphering Speed
                <h3>{vehicle.max_atmosphering_speed}</h3>
              </div>
              <div>
                Crew
                <h3>{vehicle.crew}</h3>
              </div>
              <div>
                Passengers
                <h3>{vehicle.passengers}</h3>
              </div>
              <div>
                Cargo Capacity
                <h3>{vehicle.cargo_capacity}</h3>
              </div>
              <div>
                Consumables
                <h3>{vehicle.consumables}</h3>
              </div>
              <div>
                Vehicle Class
                <h3>{vehicle.vehicle_class}</h3>
              </div>
            </VehicleDescriptionBody>
            <VehicleDescriptionFooter>
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
                <Link to={`/vehicles`}>
                  <button title="return">Return</button>
                </Link>
              </motion.div>
            </VehicleDescriptionFooter>
          </VehicleDescriptionBox>
        ))}
    </VehicleDescriptionBackground>
  );
};
