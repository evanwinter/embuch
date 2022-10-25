import React, { useRef } from "react";
import PropTypes from "prop-types";

import { Clickable } from "@components";
import cloudsVideo from "@images/clouds.mp4";
import EmilyGraffiti from "@images/emily-graffiti.inline.svg";
import { usePullEffect } from "@utils";

import { Background } from "./Splash.styled";
import { motion } from "framer-motion";

const Splash = ({ isPinned }) => {
  const logoRef = useRef(null);
  const { x, y } = usePullEffect(logoRef);
  return (
    // <Clickable condition={isPinned}>
      <Background to="/">
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
    // {/* </Clickable> */}
  );
};

export default Splash;

Splash.propTypes = {
  isPinned: PropTypes.bool,
};
