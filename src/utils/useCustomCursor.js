import { useContext, useEffect, useState } from "react";
import useMouse from "@react-hook/mouse-position";

import { CursorContext } from "@context";

import BackArrow from "@images/arrow-right-small.svg";

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

  const cursorSize = 20;

  const cursorStyles = {
    opacity: 1,
    height: cursorSize,
    width: cursorSize,
    backgroundColor: "var(--color-black)",
    borderRadius: "50%",
    border: "2px solid var(--color-black)",
  };

  const defaults = {
    ...cursorStyles,
    x: mouseX - cursorSize / 2,
    y: mouseY - cursorSize / 2,
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
    },
    clickable: {
      ...defaults,
      scale: 1.5,
      x: mouseX - (cursorSize * 1.5) / 2,
      y: mouseY - (cursorSize * 1.5) / 2,
      backgroundColor: "var(--color-lime)",
    },
    // TODO: show arrow when hovering over carousel
    arrow: {
      ...defaults,
    },
    prev: {
      ...defaults,
      backgroundImage: `url(${BackArrow})`,
      backgroundColor: "transparent",
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      border: "none",
      width: 50,
      height: 50,
      rotate: "0deg",
    },
    next: {
      ...defaults,
      backgroundImage: `url(${BackArrow})`,
      backgroundColor: "transparent",
      backgroundSize: "contain",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      border: "none",
      width: 50,
      height: 50,
      rotate: "180deg",
    },
  };

  const transition = {
    type: "spring",
  };

  const cursorProps = {
    variants,
    transition,
    animate: cursorType,
    icon: BackArrow,
  };

  return { mouseX, mouseY, cursorProps, cursorType };
}
