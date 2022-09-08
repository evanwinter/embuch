import React from "react";
import { TagList } from "../../TagList";
import {
  Header,
  Description,
  Separator,
  Subtitle,
  Title,
} from "./WorkHeader.styled";

const WorkHeader = ({ title, tags, subtitle, description }) => {
  return (
    <Header>
      <Title>{title}</Title>
      <TagList tags={tags} />
      <Separator />
      <Subtitle>{subtitle}</Subtitle>
      <Description>{description}</Description>
    </Header>
  );
};

export default WorkHeader;
