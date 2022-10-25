import { motion } from "framer-motion";
import styled from "styled-components";
import { colors } from "@styles";

export const Navigation = styled.nav`
  position: relative;
  display: flex;
  width: 100%;
  transform: translateY(-100%);
  pointer-events: none;
  a {
    text-decoration: none;
    color: currentColor;
    pointer-events: all;
  }
`;

export const NavigationLink = styled(motion.div)`
  --size: 100px;
  text-align: center;
  width: calc(var(--size) * 2);
  border-radius: calc(1.5 * var(--size)) calc(1.5 * var(--size)) 0 0;
  padding-block: 2rem 1rem;
  padding-inline: 2rem;
  font-size: 50px;
  font-weight: 300;
  background-color: ${(props) => props.color};

  &[data-active="true"] {
    /* box-shadow: -2px 0px ${colors.lime}, 2px 0px ${colors.lime},
      0px -2px ${colors.lime}; */
    z-index: 14;
    background-color: ${colors.white};
  }
`;

export const FlowerImage = styled.img`
  animation-name: rotate;
  animation-duration: 10s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  @keyframes rotate {
    from {
      transform: rotate(-360deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const Sticker = styled(motion.div)`
  position: absolute;
  right: 2.25rem;
  z-index: 20;
`;
