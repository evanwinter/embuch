"use client";

import { motion } from "motion/react";
import type { MotionProps, Transition, Variant, Variants } from "motion/react";

interface RevealProps extends MotionProps {
  children: React.ReactNode;
  variants?: {
    offscreen: Variant;
    onscreen: Variant;
  };
}

const defaultVariants: Variants = {
  offscreen: { opacity: 0, y: 32 },
  onscreen: { opacity: 1, y: 0 },
};

const defaultTransition: Transition = {
  duration: 0.75,
};

const defaultViewport = {
  amount: 0.25,
  once: true,
};

export function Reveal(props: RevealProps) {
  const mergedViewport = {
    ...defaultViewport,
    ...props.viewport,
  };

  return (
    <motion.div
      initial="offscreen"
      transition={defaultTransition}
      variants={defaultVariants}
      whileInView="onscreen"
      {...props}
      viewport={mergedViewport}
    >
      {props.children}
    </motion.div>
  );
}
