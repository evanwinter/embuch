import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import audible from "../../../images/work/audible/Audible-Cover.jpg";
import hlk from "../../../images/work/hlk/HLK-Cover.jpg";
import medicaid from "../../../images/work/medicaid/Medicaid-Cover.jpg";

const variants = {
  enter: (direction) => {
    return {
      x: direction === "prev" ? 625 : -625,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction === "prev" ? 625 : -625,
    };
  },
};

const LogoCollection = ({ children }) => {
  const [[index, direction], setIndex] = useState([0, "next"]);
  const images = [audible, hlk, medicaid];

  return (
    <div
      style={{
        width: 625,
        height: "auto",
        overflow: "hidden",
        display: "flex",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          zIndex: 10,
          top: 16,
          left: 16,
          display: "flex",
          gap: 8,
        }}
      >
        {images.map((_, i) => (
          <button
            key={i}
            style={{
              appearance: "none",
              border: "none",
              width: 20,
              height: 20,
              borderRadius: "50%",
              backgroundColor: index === i ? "gray" : "lightgray",
              cursor: "pointer",
            }}
            onClick={() =>
              setIndex(([prev]) => [i, prev < i ? "next" : "prev"])
            }
          ></button>
        ))}
      </div>
      <AnimatePresence custom={direction}>
        <motion.img
          key={index}
          src={images[index]}
          custom={direction}
          variants={variants}
          initial="center"
          animate="center"
          exit="exit"
          transition={{ ease: "linear" }}
        />
      </AnimatePresence>
    </div>
  );
};

export default function LogosPage({ location }) {
  return (
    <div>
      <h1>Logos</h1>

      <LogoCollection></LogoCollection>
    </div>
  );
}
