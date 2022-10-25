import React from "react";
import { useCursorType } from "@utils";

const Clickable = ({ children }) => {
  const handleCursor = useCursorType("clickable");
  return (
    <div style={{ display: "inline-block" }} {...handleCursor}>
      {children}
    </div>
  );
};

export default Clickable;
