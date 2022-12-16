import React from "react";
import PropTypes from "prop-types";

import { BackLink, Reveal, TagList } from "@components";

import { Header } from "./WorkHeader.styled";

const WorkHeader = ({ description, tags, title }) => {
  return (
    <Header>
      <BackLink to="/designs"></BackLink>
      <h1 className="h2 mt-xl mb-md">{title}</h1>
      <p className="p1 mb-xl">{description}</p>
      <TagList tags={tags} />
    </Header>
  );
};

export default WorkHeader;

WorkHeader.propTypes = {
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      backgroundColor: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
};
