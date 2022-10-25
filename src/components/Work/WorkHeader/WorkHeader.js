import React from "react";
import PropTypes from "prop-types";

import { Clickable, Reveal, TagList } from "@components";
import Arrow from "@images/arrow.inline.svg";

import { Header, BackLink, LinkText } from "./WorkHeader.styled";

const WorkHeader = ({ description, tags, title }) => {
  return (
    <Header>
      <Clickable>
        <BackLink to="/designs">
          <LinkText>
            <Arrow style={{ transform: "rotateX(180deg)" }} />
            back
          </LinkText>
        </BackLink>
      </Clickable>
      <Reveal effect="fadeInUp" distance="lg">
        <h1 className="mt-xl mb-sm">{title}</h1>
      </Reveal>
      <Reveal effect="fadeInUp" distance="lg" delay={0.1}>
        <p className="p1 mt-sm mb-lg">{description}</p>
      </Reveal>
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
