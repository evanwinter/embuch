import React from "react";
import PropTypes from "prop-types";
import { v4 as uuid } from "uuid";

import { RowContainer, RowItem } from "./Row.styled";

const Row = ({ children, rowStyles, itemStyles, debug = false }) => {
  return (
    <RowContainer debug={debug} style={{ ...rowStyles }}>
      {children.map((child) => (
        <RowItem key={uuid()} style={{ ...itemStyles }}>
          {child}
        </RowItem>
      ))}
    </RowContainer>
  );
};

export default Row;

Row.propTypes = {
  children: PropTypes.node.isRequired,
  rowStyles: PropTypes.object,
  itemStyles: PropTypes.object,
};
