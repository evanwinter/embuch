import { App } from "@styles";
import { motion } from "framer-motion";
import styled, { css } from "styled-components";

export const AppLayout = styled(App)`
  width: 100%;
  height: auto;
  ${(props) =>
    !props.pinned &&
    css`
      height: 100vh;
      position: fixed;
      overflow-y: hidden;
    `}
`;

export const Background = styled.div`
  background-color: lightskyblue;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: url("/clouds.png");
`;

export const Sheet = styled(motion.div)`
  position: absolute;
  top: 100vh;
  left: 0;
  width: 100%;
  min-height: 100vh;
  background-color: var(--color-white);
`;
