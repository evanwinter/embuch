import React from "react";

const Row = ({ children, rowStyles, itemStyles }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        ...rowStyles,
      }}
    >
      {children.map((child) => (
        <div style={{ flex: 1, ...itemStyles }}>{child}</div>
      ))}
    </div>
  );
};

export default Row;
