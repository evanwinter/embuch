const fadeIn = () => ({
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
});

const fadeInUp = ({ distance = "xl" }) => ({
  initial: { opacity: 0, translateY: `var(--spacing-${distance})` },
  whileInView: { opacity: 1, translateY: 0 },
});

const fadeInDown = ({ distance = "xl" }) => ({
  initial: { opacity: 0, translateY: `-var(--spacing-${distance})` },
  whileInView: { opacity: 1, translateY: 0 },
});

const fadeInRight = ({ distance = "xl" }) => ({
  initial: { opacity: 0, translateX: `calc(-1 * var(--spacing-${distance}))` },
  whileInView: { opacity: 1, translateX: 0 },
});

const fadeInLeft = ({ distance = "xl" }) => ({
  initial: { opacity: 0, translateX: `var(--spacing-${distance})` },
  whileInView: { opacity: 1, translateX: 0 },
});

const zoomIn = () => ({
  initial: { scale: 0.9 },
  whileInView: { scale: 1 },
});

export const effects = {
  fadeIn,
  fadeInUp,
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  zoomIn,
};
