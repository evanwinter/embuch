import React from "react";
import PropTypes from "prop-types";
import { useCursorType } from "@utils";

const Clickable = ({ children, condition }) => {
  const handleCursor = useCursorType("clickable", condition);
  return <div {...handleCursor}>{children}</div>;
};

export default Clickable;

Clickable.propTypes = {
  children: PropTypes.node.isRequired,
  condition: PropTypes.bool,
};
