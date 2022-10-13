import React, { useRef } from "react";
import { Link } from "gatsby";
import { usePullEffect } from "@utils";
import { Background } from "./Splash.styled";
import emilySvg from "../../images/graffiti-2.svg";
import clouds from "../../images/clouds.mp4";

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
        <source src={clouds} />
      </video>
      <Link to="/" ref={logoRef}>
        <img style={{ marginBottom: '15vh' }} loading="priority" src={emilySvg} />
      </Link>
    </Background>
  );
};

export default Splash;
