import { useContext, useEffect, useState } from "react";
import useMouse from "@react-hook/mouse-position";

import { CursorContext } from "@context";

export default function useCustomCursor(ref) {
  const { cursorType } = useContext(CursorContext);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const mouse = useMouse(ref, {
    enterDelay: 0,
    leaveDelay: 0,
  });

  useEffect(() => {
    if (mouse.clientX !== null && mouse.clientY !== null) {
      setMouseX(mouse.clientX);
      setMouseY(mouse.clientY);
    }
  }, [mouse]);

  const cursorStyles = {
    opacity: 1,
    height: 20,
    width: 20,
    backgroundColor: "var(--color-black)",
    borderRadius: "50%",
  };

  const defaults = {
    ...cursorStyles,
    x: mouseX,
    y: mouseY,
    // TODO: Make this snappier
    transition: {
      type: "spring",
      mass: 0.5,
      damping: 20,
      stiffness: 200,
    },
  };

  const variants = {
    default: {
      ...defaults,
      border: "2px solid var(--color-black)",
    },
    clickable: {
      ...defaults,
      scale: 1.5,
      backgroundColor: "var(--color-lime)",
      border: "2px solid var(--color-black)",
    },
    // TODO: show arrow when hovering over carousel
    arrow: {
      ...defaults,
      // backgroundColor: "transparent",
      // border: "2px solid transparent",
      // borderRadius: 0,
    },
  };

  const transition = {
    type: "spring",
  };

  const cursorProps = {
    variants,
    transition,
    animate: cursorType,
  };

  return { mouseX, mouseY, cursorProps, cursorType };
}
