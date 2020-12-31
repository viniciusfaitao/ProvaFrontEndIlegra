import React from "react";
import { motion } from "framer-motion";
import { HomeBackground, HomeList } from "./Style";
import { NavbarMenu } from "../../components/navbar/navbarMenu/Index";
import { LoadingPage } from "../../components/loadingPage/Index";

export const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <HomeBackground>
        <HomeList>
          <motion.div
            transition={{
              duration: 4,
              type: "spring",
              stiffness: 50,
              restDelta: 2,
            }}
          >
            {NavbarMenu ? <NavbarMenu /> : <LoadingPage />}
          </motion.div>
        </HomeList>
      </HomeBackground>
    </motion.div>
  );
};
