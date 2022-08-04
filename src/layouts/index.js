import React from "react";
import { Menu, Splash } from "@components";
import { AnimatePresence } from "framer-motion";
import { FadeInOut } from "@components/FadeInOut";
import "../styles/index.css";
import { AppLayout, Sheet } from "./styled";

const IDLE = "idle";
const PINNED = "pinned";

const Layout = ({ children, location }) => {
  const { pathname } = location;
  let isPinned = pathname !== "/";
  return (
    <AppLayout pinned={isPinned}>
      <Splash />
      <Sheet
        variants={{
          [IDLE]: { translateY: 0 },
          [PINNED]: { translateY: "calc(-100vh + 150px)" },
        }}
        initial={IDLE}
        animate={isPinned ? PINNED : IDLE}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 200,
          duration: 0.3,
        }}
      >
        <header>
          <Menu pathname={pathname} />
        </header>
        <AnimatePresence exitBeforeEnter>
          <FadeInOut key={pathname}>{children}</FadeInOut>
        </AnimatePresence>
      </Sheet>
    </AppLayout>
  );
};

export default Layout;
