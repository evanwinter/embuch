import React from "react";
import { TagList } from "../../TagList";
import Arrow from "@images/arrow.inline.svg";
import {
  Header,
  Description,
  Separator,
  Subtitle,
  BackLink,
  LinkText,
  Title,
} from "./WorkHeader.styled";

const WorkHeader = ({ title, tags, subtitle, description, HeaderImage }) => {
  return (
    <Header>
      <BackLink to="/designs">
        <LinkText>
          <Arrow style={{ transform: "rotateX(180deg)" }} />
          back
        </LinkText>
      </BackLink>
      <Title>{title}</Title>
      <TagList tags={tags} />
      <Separator />
      <Subtitle>{subtitle}</Subtitle>
      <Description>{description}</Description>
      {HeaderImage && <HeaderImage />}
    </Header>
  );
};

export default WorkHeader;
