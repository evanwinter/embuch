export function stagger({ animation, staggerIndex, staggerAmount }) {
  return {
    ...animation,
    transition: {
      ...animation.transition,
      delay:
        staggerIndex !== undefined
          ? staggerIndex * staggerAmount
          : staggerAmount,
    },
  };
}

export const animateInY = {
  initial: { opacity: 0, translateY: 40 },
  animate: { opacity: 1, translateY: 0 },
  transition: { duration: 0.5, easing: "quadInOut" },
};
