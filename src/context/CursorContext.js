import React, { createContext, useState } from "react";

const DEFAULT_VARIABLES = { cursorType: "default" };
const CursorContext = createContext({ ...DEFAULT_VARIABLES });
const CursorConsumer = CursorContext.Consumer;

const CursorProvider = ({ children }) => {
  const [cursorType, setCursorType] = useState(DEFAULT_VARIABLES.cursorType);
  return (
    <CursorContext.Provider value={{ cursorType, setCursorType }}>
      {children}
    </CursorContext.Provider>
  );
};

export { CursorContext, CursorConsumer, CursorProvider };
