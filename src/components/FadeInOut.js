import React from "react";
import { motion } from "framer-motion";

export function FadeInOut({
  children,
  key,
  duration = 0.3,
  easing = "easeInOut",
}) {
  return (
    <motion.div
      key={key}
      transition={{ duration, easing }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  );
}
