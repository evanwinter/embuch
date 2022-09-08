import React from "react";
import { Link } from "gatsby";
import { Background, Text } from "./Splash.styled";
import emilySvg from "../../images/emily.svg";
import clouds from "../../images/clouds.mp4";

const Splash = () => {
  return (
    <Background>
      <video
        autoPlay
        muted
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
      <Link to="/">
        <img loading="priority" src={emilySvg} />
      </Link>
      <Text>
        <span style={{ fontFamily: "Turret Road" }}>makes</span>
        <span style={{ fontFamily: "Fleur De Leah" }}>things</span>
      </Text>
    </Background>
  );
};

export default Splash;
