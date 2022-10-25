import React, { useContext, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Menu, Transition, Splash } from "@components";
import { useCustomCursor } from "@utils";
import { AppLayout, Sheet } from "./styled";
import { CursorProvider, CursorContext } from "@context";
import "../styles/index.css";
import "../styles/typography.css";

const IDLE = "idle";
const PINNED = "pinned";

const WrappedLayout = ({ children, location }) => {
  return (
    <CursorProvider>
      <Layout children={children} location={location} />
    </CursorProvider>
  );
};

const Layout = ({ children, location }) => {
  const isPinned = location.pathname !== "/";

  // Cursor stuff
  const { cursorType, setCursorType } = useContext(CursorContext);
  const cursorRef = useRef(null);
  const { cursorProps } = useCustomCursor(cursorRef, cursorType);

  // On route change, reset cursor type
  useEffect(() => {
    setCursorType("default");
  }, [location, setCursorType]);

  return (
    <AppLayout pinned={isPinned} ref={cursorRef}>
      <motion.div className="cursor" {...cursorProps}></motion.div>
      <Splash />
      <Sheet
        variants={{
          [IDLE]: { translateY: 0 },
          [PINNED]: {
            // translateY: `calc(-100vh + 108px + 18px)`,
            translateY: "calc(-100vh + 118px + 24px)",
          },
        }}
        initial={isPinned ? PINNED : IDLE}
        animate={isPinned ? PINNED : IDLE}
        transition={{
          type: "spring",
          mass: 0.2,
        }}
      >
        <Menu pathname={location.pathname} />
        <div style={{ marginTop: "-118px" }}>
          <Transition pathname={location.pathname}>{children}</Transition>
        </div>
      </Sheet>
    </AppLayout>
  );
};

export default WrappedLayout;
