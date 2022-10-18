import React from "react";
import PropTypes from "prop-types";

import { Reveal } from "@components";

import { List, Tag } from "./TagList.styled";

const TagList = ({ tags = [] }) => {
  return (
    <List>
      {tags.map(({ text, backgroundColor }, index) => (
        <Reveal effect="fadeInUp" key={text} delay={0.1 + 0.1 * index}>
          <Tag key={text} style={{ backgroundColor }}>
            {text}
          </Tag>
        </Reveal>
      ))}
    </List>
  );
};

export default TagList;

TagList.propTypes = {
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      backgroundColor: PropTypes.string.isRequired,
    })
  ),
};
