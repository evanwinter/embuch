import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useCursorType from "../../utils/useCursorType";

const variants = {
  enter: (direction) => {
    return {
      // x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      // x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const LogoCollection = ({ images, isDark }) => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [curr, setCurr] = useState(0);

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  // const imageIndex = wrap(0, images.length, page);

  // wrap image index
  const imageIndex = (page + images.length) % images.length;
  console.log(imageIndex);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  const prevCursor = useCursorType("prev");
  const nextCursor = useCursorType("next");

  return (
    <div
      style={{
        border: "2px solid var(--color-black)",
        position: "relative",
        overflow: "hidden",
        paddingBottom: "67%",
      }}
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.img
          key={page}
          className="w-lg"
          style={{
            maxWidth: "100%",
            height: "auto",
            display: "inline-block",
            position: "absolute",
          }}
          src={images[imageIndex]}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "tween" },
            opacity: { duration: 0.2 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
        />
      </AnimatePresence>

      <div
        onClick={() => paginate(-1)}
        {...prevCursor}
        style={{
          position: "absolute",
          width: "50%",
          height: "100%",
          top: 0,
          left: 0,
          zIndex: 20,
        }}
      ></div>
      <div
        onClick={() => paginate(1)}
        {...nextCursor}
        style={{
          position: "absolute",
          width: "50%",
          height: "100%",
          top: 0,
          right: 0,
          zIndex: 20,
        }}
      ></div>

      <div
        style={{
          position: "absolute",
          top: "1rem",
          left: "1rem",
          zIndex: 21,
          display: "flex",
          gap: "0.5rem",
        }}
      >
        {images.map((index) => {
          return (
            <div
              key={index}
              style={{
                width: 16,
                height: 16,
                borderRadius: "50%",
                backgroundColor:
                  imageIndex === index
                    ? "var(--color-mediumGray)"
                    : "var(--color-lightGray)",
              }}
            ></div>
          );
        })}
      </div>

      {/* TODO */}
      <motion.div
        style={{ height: "5px", width: 0, backgroundColor: "red" }}
        animate={{ width: imageIndex / images.length }}
      ></motion.div>
    </div>
  );
};

export default LogoCollection;
