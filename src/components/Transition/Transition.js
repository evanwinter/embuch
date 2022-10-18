import React from "react";
import PropTypes from "prop-types";
import { AnimatePresence, motion } from "framer-motion";

const PageTransition = ({
  children,
  pathname,
  duration = 0.2,
  ease = "easeInOut",
}) => {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        key={pathname}
        transition={{ duration, ease }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};

export default PageTransition;

PageTransition.propTypes = {
  children: PropTypes.node.isRequired,
  pathname: PropTypes.string.isRequired,
  duration: PropTypes.number,
  ease: PropTypes.string,
};
