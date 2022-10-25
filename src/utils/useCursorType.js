import { useContext } from "react";
import { CursorContext } from "@context";

export default function useCursorType(cursorType, condition = true) {
  const { setCursorType } = useContext(CursorContext);
  return {
    onMouseEnter: () => condition && setCursorType(cursorType),
    onMouseLeave: () => setCursorType("default"),
  };
}
