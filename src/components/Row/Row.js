import React from "react";

const Row = ({ children }) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {children.map((child) => (
        <div style={{ flex: 1 }}>{child}</div>
      ))}
    </div>
  );
};

export default Row;
