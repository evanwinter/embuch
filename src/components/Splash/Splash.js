import React from "react";

import Spiral from "@images/spiral.png";
import { Background, Content } from "./Splash.styled";

const Splash = () => {
  return (
    <Background>
      <Content>
        <h1 className="h2 mb-md">
          <span>welcome,</span> i'm emily
        </h1>
        <h2 className="my-md">
          <span>this is my digital scrapbook,</span>
          &nbsp; take a look inside
        </h2>
        <img className="mt-lg" src={Spiral} alt="spiral" />
      </Content>
    </Background>
  );
};

export default Splash;
