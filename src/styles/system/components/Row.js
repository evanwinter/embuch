import React from "react";

export const Row = ({ children }) => {
  return (
    <div style={{ display: "flex" }}>
      {children.map((child) => (
        <div style={{ flex: 1 }}>{child}</div>
      ))}
    </div>
  );
};
