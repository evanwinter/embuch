import styled from "styled-components";
import { Link } from "gatsby";
import { motion } from "framer-motion";
import { colors } from "@styles";

export const PreviewLink = styled(Link)`
  display: block;
  width: 100%;
  height: auto;
  position: relative;

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

export const PreviewItem = styled(motion.div)`
  > div {
    border: 2px solid ${colors.black};
  }
`;
