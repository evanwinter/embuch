import React, { useEffect } from "react";
import { Menu, Splash } from "@components";
import { AppLayout, Sheet } from "./styled";
import { PageTransition } from "../components/PageTransition";
import "../styles/index.css";
import "../styles/typography.css";

const IDLE = "idle";
const PINNED = "pinned";

const Layout = ({ children, location }) => {
  const isPinned = location.pathname !== "/";
  return (
    <AppLayout pinned={isPinned}>
      <Splash />
      <Sheet
        variants={{
          [IDLE]: { translateY: 0 },
          [PINNED]: {
            translateY: `calc(-100vh + 108px + 16px)`,
          },
        }}
        initial={isPinned ? PINNED : IDLE}
        animate={isPinned ? PINNED : IDLE}
        transition={{
          type: "spring",
          damping: 40,
          stiffness: 400,
          duration: 0.3,
        }}
      >
        <Menu pathname={location.pathname} />
        <PageTransition pathname={location.pathname}>{children}</PageTransition>
      </Sheet>
    </AppLayout>
  );
};

export default Layout;
