import React, { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { AnimatePresence } from "framer-motion";
import audible from "../../../images/Audible.jpg";
import hlk from "../../../images/HLK.jpg";
import medicaid from "../../../images/medicaid.jpg";
import { motion } from "framer-motion";

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
            style={{
              appearance: "none",
              border: "none",
              width: 20,
              height: 20,
              borderRadius: "50%",
              backgroundColor: index === i ? "gray" : "lightgray",
              cursor: "pointer",
            }}
            key={i}
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

      <LogoCollection>
        {/* <div style={{ minWidth: 625 }}>
          <StaticImage src="../../../images/Audible.jpg" alt="" width={625} />
        </div>
        <div style={{ minWidth: 625 }}>
          <StaticImage src="../../../images/Audible.jpg" alt="" width={625} />
        </div>
        <div style={{ minWidth: 625 }}>
          <StaticImage src="../../../images/Audible.jpg" alt="" width={625} />
        </div> */}
      </LogoCollection>
    </div>
  );
}
