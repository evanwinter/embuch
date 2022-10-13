import { useContext } from "react";
import { CursorContext } from "@context";

export default function useCursorType(cursorType) {
  const { setCursorType } = useContext(CursorContext);
  return {
    onMouseEnter: () => setCursorType(cursorType),
    onMouseLeave: () => setCursorType("default"),
  };
}
