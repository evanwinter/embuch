import React from "react";
import PropTypes from "prop-types";

import { Reveal, TagList } from "@components";
import Arrow from "@images/arrow.inline.svg";

import { Header, Separator, BackLink, LinkText } from "./WorkHeader.styled";

const WorkHeader = ({ title, tags, subtitle, description }) => {
  return (
    <Header>
      <BackLink to="/designs">
        <LinkText>
          <Arrow style={{ transform: "rotateX(180deg)" }} />
          back
        </LinkText>
      </BackLink>
      <Reveal effect="fadeInUp" distance="lg">
        <h1 className="mt-xl">{title}</h1>
      </Reveal>
      <TagList tags={tags} />
      <Reveal effect="fadeInUp" distance="lg" delay={0.1}>
        <Separator />
      </Reveal>
      <Reveal effect="fadeInUp" distance="lg" delay={0.2}>
        <h2 className="mb-none">{subtitle}</h2>
      </Reveal>
      <Reveal effect="fadeInUp" distance="lg" delay={0.3}>
        <p className="p1 my-xs">{description}</p>
      </Reveal>
    </Header>
  );
};

export default WorkHeader;

WorkHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      backgroundColor: PropTypes.string.isRequired,
    })
  ).isRequired,
};
