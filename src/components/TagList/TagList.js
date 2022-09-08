import React from "react";
import { List, Tag } from "./TagList.styled";

const TagList = ({ tags = [] }) => {
  return (
    <List>
      {tags.map(({ text, backgroundColor }) => (
        <Tag key={text} style={{ backgroundColor }}>
          {text}
        </Tag>
      ))}
    </List>
  );
};

export default TagList;
