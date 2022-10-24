import React, { useRef } from "react";

import cloudsVideo from "@images/clouds.mp4";
import EmilyGraffiti from "@images/emily-graffiti.inline.svg";
import { usePullEffect } from "@utils";

import { Background } from "./Splash.styled";
import { motion } from "framer-motion";

const Splash = () => {
  const logoRef = useRef(null);
  const { x, y } = usePullEffect(logoRef);
  return (
    <Background>
      <video
        autoPlay
        muted
        loop={true}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100vh",
          objectFit: "cover",
          zIndex: -1,
        }}
      >
        <source src={cloudsVideo} />
      </video>
      <motion.div
        ref={logoRef}
        animate={{
          translateX: x * 20,
          translateY: y * 20,
        }}
        transition={{ type: "spring" }}
      >
        <EmilyGraffiti style={{ width: "min(700px, 90vw)" }} />
      </motion.div>
    </Background>
  );
};

export default Splash;
