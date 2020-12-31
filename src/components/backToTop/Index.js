import React, { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import { ScrollTop } from "./Style";

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
      <FaArrowCircleUp
        onClick={scrollTop}
        style={{ display: showScroll ? "flex" : "none" }}
      />
    </ScrollTop>
  );
};
