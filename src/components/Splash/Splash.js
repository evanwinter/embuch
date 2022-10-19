import React, { useRef } from "react";
import { Link } from "gatsby";

import cloudsVideo from "@images/clouds.mp4";
import EmilyGraffiti from "@images/emily-graffiti.inline.svg";
import { usePullEffect } from "@utils";

import { Background } from "./Splash.styled";

const Splash = () => {
  const logoRef = useRef(null);
  usePullEffect(logoRef);
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
      <Link to="/" ref={logoRef}>
        <EmilyGraffiti style={{ width: "min(700px, 90vw)" }} />
      </Link>
    </Background>
  );
};

export default Splash;
