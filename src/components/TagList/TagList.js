import React from "react";
import PropTypes from "prop-types";

import { List, Tag } from "./TagList.styled";

const TagList = ({ tags = [] }) => {
  return (
    <List>
      {tags.map(({ text }) => (
        <Tag key={text}>{text}</Tag>
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
