export function stagger({ animation, index, amount }) {
  return {
    ...animation,
    transition: {
      ...animation.transition,
      delay: index !== undefined ? amount * index : amount,
    },
  };
}

export const animateInY = {
  initial: { opacity: 0, translateY: 40 },
  animate: { opacity: 1, translateY: 0 },
  transition: { duration: 0.5, easing: "quadInOut" },
};