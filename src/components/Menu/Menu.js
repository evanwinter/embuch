import React from "react";
import { Link } from "gatsby";
import { motion } from "framer-motion";

import { colors } from "@styles";
import { useCursorType } from "@utils";

import {
  FlowerImage,
  Navigation,
  NavigationLink,
  Sticker,
} from "./Menu.styled";

const Menu = ({ pathname }) => {
  const handleCursor = useCursorType("clickable");
  return (
    <Navigation>
      <Link to="/designs" color="currentColor">
        <NavigationLink
          data-active={pathname.includes("/designs")}
          color={colors.pink}
          {...handleCursor}
        >
          Work
        </NavigationLink>
      </Link>
      <Link to="/fun" color="currentColor">
        <NavigationLink
          data-active={pathname.includes("/fun")}
          color={colors.red}
          {...handleCursor}
        >
          Fun
        </NavigationLink>
      </Link>
      <Link to="/about" color="currentColor">
        <NavigationLink
          data-active={pathname.includes("/about")}
          color={colors.orange}
          {...handleCursor}
        >
          Me
        </NavigationLink>
      </Link>
      <Sticker
        variants={{
          idle: { translateY: 0 },
          pinned: { translateY: 70 },
        }}
        initial="idle"
        animate={pathname !== "/" ? "pinned" : "idle"}
        style={{ right: "2.25rem", position: "absolute" }}
      >
        <Link to="/">
          <motion.div
            key="flower"
            whileTap={{ scale: 0.9, transition: { duration: 0.3 } }}
            {...handleCursor}
          >
            <FlowerImage src="/daisy.svg" alt="Flower" />
          </motion.div>
        </Link>
      </Sticker>
    </Navigation>
  );
};

export default Menu;
