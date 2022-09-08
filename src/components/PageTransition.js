import React from "react";
import { AnimatePresence, motion } from "framer-motion";

export function PageTransition({
  children,
  pathname,
  duration = 0.15,
  easing = "easeInOut",
}) {
  return (
    <AnimatePresence exitBeforeEnter>
      <motion.div
        key={pathname}
        transition={{ duration, easing }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
