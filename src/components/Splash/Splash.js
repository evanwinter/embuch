import React from "react";

import Spiral from "@images/spiral.png";
import { Background, Content } from "./Splash.styled";

const Splash = () => {
  return (
    <Background>
      <Content>
        <h1 className="h2 mb-md">
          <span>hello,</span> i'm emily!
        </h1>
        <h2 className="my-md">
          {/* <span>this is my portfolio,</span>
          &nbsp; take a look inside! */}
          <span>i'm a designer in Chicago &mdash;</span> and this this my portfolio site.
        </h2>
        <img className="mt-lg" src={Spiral} alt="spiral" />
      </Content>
    </Background>
  );
};

export default Splash;
