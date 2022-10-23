import React from "react";
import PropTypes from "prop-types";
import { Reveal } from "@components";

const WorkBanner = ({ children }) => {
  return (
    <Reveal effect="fadeInUp" distance="lg" delay={0.3}>
      {children}
    </Reveal>
  );
};

WorkBanner.propTypes = {
  children: PropTypes.node.isRequired,
};

export default WorkBanner;
