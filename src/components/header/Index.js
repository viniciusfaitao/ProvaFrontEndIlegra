import React from "react";
import { Navbar } from "../navbar/Index";
import {
  HeaderBackground,
  HeaderLeft,
  HeaderCenter,
  HeaderRight,
} from "./Style";
import { motion } from "framer-motion";

export const Header = () => {
  return (
    <HeaderBackground>
      <HeaderLeft>
        <Navbar />
      </HeaderLeft>
      <motion.div
        initial={{ y: -650 }}
        animate={{ y: 0 }}
        transition={{ duration: 4 }}
      >
        <HeaderCenter>
          <h1 className="star">STAR</h1>
          <h1 className="wars">WARS</h1>
        </HeaderCenter>
      </motion.div>

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
        <HeaderRight>
          <p>Welcome to the dark side</p>
        </HeaderRight>
      </motion.div>
    </HeaderBackground>
  );
};
