import React, { useEffect, useRef } from "react";
import { Link } from "gatsby";
import { Background, Text } from "./Splash.styled";
import emilySvg from "../../images/graffiti-2.svg";
import clouds from "../../images/clouds.mp4";

const Splash = () => {
  const logoRef = useRef(null);
  const backgroundRef = useRef(null);

  const parallax = (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    logoRef.current.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
  };

  useEffect(() => {
    document.addEventListener("mousemove", parallax);
    return () => document.removeEventListener("mousemove", parallax);
  }, []);

  return (
    <Background>
      <video
        autoPlay
        muted
        ref={backgroundRef}
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
        <img loading="priority" src={emilySvg} />
      </Link>
      {/* <Text>
        <span style={{ fontFamily: "Turret Road" }}>makes</span>
        <span style={{ fontFamily: "Fleur De Leah" }}>things</span>
      </Text> */}
    </Background>
  );
};

export default Splash;
