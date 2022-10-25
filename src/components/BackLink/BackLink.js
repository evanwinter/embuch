import React from "react";
import PropTypes from "prop-types";

import { Clickable } from "@components";
import Arrow from "@images/back-arrow.inline.svg";

import { LinkText, LinkWrapper } from "./BackLink.styled";

const BackLink = ({ children, to }) => {
  return (
    <Clickable>
      <LinkWrapper to={to} className="back-link">
        <LinkText>
          <Arrow />
          {children}
        </LinkText>
      </LinkWrapper>
    </Clickable>
  );
};

export default BackLink;

BackLink.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
};
