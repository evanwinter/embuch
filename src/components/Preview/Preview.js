import React from "react";
import { animateInY, stagger } from "@utils";
import { colors } from "@styles";
import { PreviewItem, PreviewLink } from "./Preview.styled";
import { motion } from "framer-motion";

export default function Preview({ project, kind = "designs", index = 0 }) {
  const animation = stagger({
    animation: animateInY,
    index: index,
    amount: 0.1,
  });

  const Image = project["coverImage"];

  return (
    <PreviewItem key={project.slug} {...animation}>
      <h3 className="h2">{project.title}</h3>
      <motion.div
        whileTap={{
          boxShadow: `0.4rem 0.4rem 0 ${colors.black}`,
          translateY: "-0.4rem",
          translateX: "-0.4rem",
        }}
        whileHover={{
          boxShadow: `0.5rem 0.5rem 0 ${colors.black}`,
          translateY: "-0.5rem",
          translateX: "-0.5rem",
        }}
      >
        <PreviewLink to={`/${kind}/${project.slug}`}>
          <Image />
        </PreviewLink>
      </motion.div>
    </PreviewItem>
  );
}
