import { colors } from "@utils";
import { motion } from "framer-motion";
import styled, { css } from "styled-components";

export const AppLayout = styled.div`
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
  background-color: ${colors.white};
  /* border-top: 2px solid ${colors.lime}; */

  header {
    z-index: 10;
    margin-top: -107px;
  }
`;
