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

export const Sheet = styled(motion.div)`
  position: absolute;
  top: 100vh;
  left: 0;
  width: 100%;
  min-height: calc(100vh - 118px);
  background-color: var(--color-white);
  border-top: 2px solid var(--color-black);
`;
