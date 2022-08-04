import { motion } from "framer-motion";
import styled from "styled-components";
import { colors } from "@utils";

export const Navigation = styled.nav`
  display: flex;
  width: 100%;

  a {
    text-decoration: none;
    color: currentColor;
  }
`;

export const NavigationLink = styled(motion.div)`
  --size: 100px;
  text-align: center;
  width: calc(var(--size) * 2);
  border-radius: calc(1.5 * var(--size)) calc(1.5 * var(--size)) 0 0;
  padding-block: 2rem 1rem;
  padding-inline: 2rem;
  font-size: 3rem;
  font-weight: 400;
  background-color: ${(props) => props.color};

  &[data-active="true"] {
    box-shadow: -2px 0px ${colors.lime}, 2px 0px ${colors.lime},
      0px -2px ${colors.lime};
    z-index: 14;
    background-color: ${colors.white};
    margin-bottom: -2px;
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
`;
