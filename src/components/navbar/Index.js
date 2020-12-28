import React from "react";
import { motion, useCycle } from "framer-motion";
import { NavbarToggle } from "./navbarToggle/Index";
import { NavbarMenu } from "./navbarMenu/Index";
import { NavbarBackground } from "./Style";

const sideBar = {
  open: {
    clipPath: `circle(700px at 40px 40px)`,
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
    </NavbarBackground>
  );
};
