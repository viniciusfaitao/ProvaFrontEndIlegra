import React from "react";
import { motion } from "framer-motion";

const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    strokeLinecap="round"
    {...props}
  />
);
const PathClose = (props) => (
  <motion.path
    fill="transparent"
    x="5px"
    y="5px"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

export const NavbarToggle = ({ toggle }) => (
  <button onClick={toggle}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="45"
      height="45"
      viewBox="1 0 28 31.999"
      enableBackground="new 1 0 28 31.999"
    >
      <Path
        fill="#E4E7E7"
        d="M4 9.999c-1.104 0-2 .896-2 2v18c-.553 0-1 .448-1 1.001 0 .552.447.999 1 .999h3c.553 0 1-.447 1-.999 0-.553-.447-1.001-1-1.001l1-20h-2zm24 20v-18c0-1.104-.896-2-2-2h-2l1 20c-.553 0-1 .448-1 1.001 0 .552.447.999 1 .999h3c.553 0 1-.447 1-.999 0-.553-.447-1.001-1-1.001z"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <g fill="#C8CBCB">
        <Path
          d="M6 31c0-.553-.447-1.001-1-1.001l1-19.999h-2v18.997l1 3.002c.553 0 1-.447 1-.999zM26 10h-2l1 19.999c-.553 0-1 .448-1 1.001 0 .552.447.999 1 .999l1-2.991v-19.008z"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
      </g>
      <Path
        fill="#324D5B"
        d="M8 28h14l-2 2h-10l-2-2z"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        fill="#E4E7E7"
        d="M15 0c5.522 0 10 4.477 10 10v18h-20v-18c0-5.523 4.478-10 10-10z"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        fill="#324D5B"
        d="M15 2.999c1.104 0 2 .896 2 2 0 1.105-.896 2.001-2 2.001s-2-.896-2-2.001c0-1.103.896-2 2-2z"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <Path
        fill="#2494BC"
        d="M5 10v2h20v-2h-20zm5 7h10v-2.001h-10v2.001zm0 3.999h10v-1.999h-10v1.999zm0 4.001h10v-2h-10v2z"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <PathClose
        variants={{
          closed: { opacity: 0, d: "M 2 2.5 L 20 2.5" },
          open: { opacity: 1, d: "M 3 16.5 L 17 2.5" },
        }}
        transition={{ duration: 0.1 }}
      />
      <PathClose
        variants={{
          closed: { opacity: 0, d: "M 2 16.346 L 20 16.346" },
          open: { opacity: 1, d: "M 3 2.5 L 17 16.346" },
        }}
        transition={{ duration: 0.1 }}
      />
    </svg>
  </button>
);
