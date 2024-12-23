"use client";

import { cn } from "@evanwinter/cn";
import { motion } from "motion/react";
import type { MotionProps, Transition, Variant, Variants } from "motion/react";

interface RevealProps extends MotionProps {
  children: React.ReactNode;
  className?: string;
  variants?: {
    offscreen?: Variant;
    onscreen?: Variant;
  };
  isVisible?: boolean;
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

  const mergedVariants = {
    ...defaultVariants,
    ...props.variants,
  };

  return (
    <motion.div
      initial="offscreen"
      transition={defaultTransition}
      animate={props.isVisible ? "onscreen" : undefined}
      whileInView={!props.isVisible ? "onscreen" : undefined}
      {...props}
      variants={mergedVariants}
      viewport={!props.isVisible ? mergedViewport : undefined}
      className={cn(props.className)}
    >
      {props.children}
    </motion.div>
  );
}
