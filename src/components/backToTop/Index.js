import React, { useState } from "react";
import { ScrollTop } from "./Style";
import starshipIcon from "../../assets/icons/starshipIconBTT.png";
import { motion } from "framer-motion";

export const ScrollArrow = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 150) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 150) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.addEventListener("scroll", checkScrollTop);

  return (
    <ScrollTop>
      <div
        onClick={scrollTop}
        style={{ display: showScroll ? "flex" : "none" }}
      >
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
          <img title="Back To Top" alt={starshipIcon} src={starshipIcon} />
        </motion.div>
      </div>
    </ScrollTop>
  );
};
