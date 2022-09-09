import React from "react";
import { TagList } from "../../TagList";
import Arrow from "@images/arrow-right.inline.svg"; // TODO small arrow
import {
  Header,
  Description,
  Separator,
  Subtitle,
  BackLink,
  LinkText,
  Title,
} from "./WorkHeader.styled";

const WorkHeader = ({ title, tags, subtitle, description }) => {
  return (
    <Header>
      <BackLink to="/designs">
        <LinkText>
          <Arrow />
          back
        </LinkText>
      </BackLink>
      <Title>{title}</Title>
      <TagList tags={tags} />
      <Separator />
      <Subtitle>{subtitle}</Subtitle>
      <Description>{description}</Description>
    </Header>
  );
};

export default WorkHeader;
