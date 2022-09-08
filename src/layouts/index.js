import React, { useRef } from "react";
import { Menu, Splash } from "@components";
import { AppLayout, Sheet } from "./styled";
import { useDimensions } from "@utils";
import { PageTransition } from "../components/PageTransition";
import "../styles/index.css";
import "../styles/typography.css";

const IDLE = "idle";
const PINNED = "pinned";

const Layout = ({ children, location }) => {
  const { pathname } = location;
  const isPinned = pathname !== "/";
  const ref = useRef(null);
  const { height = 105 } = useDimensions(ref);

  return (
    <AppLayout pinned={isPinned}>
      <Splash />
      <Sheet
        variants={{
          [IDLE]: { translateY: 0 },
          [PINNED]: { translateY: `calc(-100vh + ${height + 16}px)` },
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
        <Menu pathname={pathname} ref={ref} />
        <PageTransition pathname={pathname}>{children}</PageTransition>
      </Sheet>
    </AppLayout>
  );
};

export default Layout;
