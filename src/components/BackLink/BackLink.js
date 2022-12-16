import React from "react";
import PropTypes from "prop-types";

import { Clickable } from "@components";
import Arrow from "@images/back-arrow.inline.svg";

import { LinkText, LinkWrapper } from "./BackLink.styled";

const BackLink = ({ to }) => {
  return (
    <Clickable>
      <LinkWrapper to={to} className="back-link">
        <LinkText className="h5">
          <Arrow />
        </LinkText>
      </LinkWrapper>
    </Clickable>
  );
};

export default BackLink;

BackLink.propTypes = {
  to: PropTypes.string.isRequired,
};
