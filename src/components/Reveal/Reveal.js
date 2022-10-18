import React from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

import { effects } from "./effects";

/**
 * Reveal component when it enters the viewport.
 * @param {Object} children
 * @param {String} effect
 * @param {Number} delay
 * @param {String|Number} amount
 * @param {Number} distance
 */
const Reveal = ({
  children,
  effect = "fadeIn",
  once = true,
  delay = 0,
  amount = "some",
  distance = "xl",
  ...restProps
}) => {
  const variants = effects[effect]({ distance });
  return (
    <motion.div
      viewport={{ once, amount }}
      {...variants}
      transition={{
        type: "spring",
        damping: 35,
        delay,
        staggerChildren: 0.1,
      }}
      {...restProps}
    >
      {children}
    </motion.div>
  );
};

Reveal.propTypes = {
  children: PropTypes.node.isRequired,
  delay: PropTypes.number,
  effect: PropTypes.oneOf(Object.keys(effects)),
  once: PropTypes.bool,
  amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Reveal;
