const fadeIn = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
};

const fadeInUp = {
  initial: { opacity: 0, translateY: "var(--spacing-xl)" },
  whileInView: { opacity: 1, translateY: 0 },
};

const fadeInDown = {
  initial: { opacity: 0, translateY: "-var(--spacing-xl)" },
  whileInView: { opacity: 1, translateY: 0 },
};

const fadeInLeft = {
  initial: { opacity: 0, translateX: "-var(--spacing-xl)" },
  whileInView: { opacity: 1, translateX: 0 },
};

const fadeInRight = {
  initial: { opacity: 0, translateX: "var(--spacing-xl)" },
  whileInView: { opacity: 1, translateX: 0 },
};

const zoomIn = {
  initial: { scale: 0.9 },
  whileInView: { scale: 1 },
};

export const effects = {
  fadeIn,
  fadeInUp,
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  zoomIn,
};
