import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import { motion } from "framer-motion";

import { Clickable } from "@components";
import { colors } from "@styles";

import {
  FlowerImage,
  Navigation,
  NavigationLink,
  Sticker,
} from "./Menu.styled";

const Menu = ({ pathname }) => {
  return (
    <Navigation>
      <Clickable>
        <Link to="/designs" color="currentColor">
          <NavigationLink
            data-active={pathname.includes("/designs")}
            color={colors.pink}
          >
            Work
          </NavigationLink>
        </Link>
      </Clickable>
      <Clickable>
        <Link to="/fun" color="currentColor">
          <NavigationLink
            data-active={pathname.includes("/fun")}
            color={colors.red}
          >
            Fun
          </NavigationLink>
        </Link>
      </Clickable>
      <Clickable>
        <Link to="/about" color="currentColor">
          <NavigationLink
            data-active={pathname.includes("/about")}
            color={colors.orange}
          >
            Me
          </NavigationLink>
        </Link>
      </Clickable>
      <Clickable>
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
            >
              <FlowerImage src="/daisy.svg" alt="Flower" />
            </motion.div>
          </Link>
        </Sticker>
      </Clickable>
    </Navigation>
  );
};

Menu.propTypes = {
  pathname: PropTypes.string.isRequired,
};

export default Menu;
