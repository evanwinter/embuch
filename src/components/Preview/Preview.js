import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

import { Clickable, Reveal } from "@components";
import { colors } from "@styles";

import { PreviewItem, PreviewLink } from "./Preview.styled";

export default function Preview({ project, kind = "designs", index = 0 }) {
  const Image = project["coverImage"];
  return (
    <Reveal effect="fadeInUp" delay={index * 0.1}>
      <Clickable>
        <PreviewItem key={project.slug}>
          <h3 className="h2">{project.title}</h3>
          <motion.div
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            whileTap={{
              boxShadow: `0.3rem 0.3rem 0 ${colors.black}`,
              translateY: "-0.3rem",
              translateX: "-0.3rem",
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
      </Clickable>
    </Reveal>
  );
}

Preview.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    coverImage: PropTypes.func.isRequired,
  }).isRequired,
  kind: PropTypes.oneOf(["designs", "fun"]),
};
