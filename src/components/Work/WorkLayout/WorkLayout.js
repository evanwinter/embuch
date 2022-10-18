import React from "react";
import PropTypes from "prop-types";

import { WorkFooter } from "@components";

const WorkLayout = ({ children, pathname }) => (
  <>
    {children}
    <WorkFooter pathname={pathname} />
  </>
);

WorkLayout.propTypes = {
  children: PropTypes.node.isRequired,
  pathname: PropTypes.string.isRequired,
};

export default WorkLayout;
