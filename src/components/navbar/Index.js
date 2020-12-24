import React from "react";
import { motion, useCycle } from "framer-motion";
import { NavbarToggle } from "./navbarToggle/Index";
import { NavbarMenu } from "./navbarMenu/Index";
import { NavbarBackground, NavbarTitle, NavbarWelcome } from "./Style";

const sideBar = {
  open: {
    clipPath: `circle(900px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 50,
      restDelta: 2,
    },
  },
  closed: {
    clipPath: "circle(35px at 40px 40px)",
    transition: {
      delay: 0.1,
      type: "spring",
      stiffness: 200,
      damping: 40,
    },
  },
};

export const Navbar = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <NavbarBackground>
      <motion.nav initial={false} animate={isOpen ? "open" : "closed"}>
        <motion.div className="background" variants={sideBar} />
        <NavbarMenu />
        <NavbarToggle toggle={() => toggleOpen()} />
      </motion.nav>

      <motion.div
        initial={{ y: -550 }}
        animate={{ y: 0 }}
        transition={{ duration: 4 }}
      >
        <NavbarTitle>
          <h1 className="star">STAR</h1>
          <h1 className="wars">WARS</h1>
        </NavbarTitle>
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
        <NavbarWelcome>
          <h1>Welcome to the dark side</h1>
        </NavbarWelcome>
      </motion.div>
    </NavbarBackground>
  );
};
