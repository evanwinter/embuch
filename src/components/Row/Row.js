import React from "react";
import { RowContainer, RowItem } from "./Row.styled";

const Row = ({ children, rowStyles, itemStyles }) => {
  return (
    <RowContainer style={{ ...rowStyles }}>
      {children.map((child) => (
        <RowItem style={{ ...itemStyles }}>{child}</RowItem>
      ))}
    </RowContainer>
  );
};

export default Row;
