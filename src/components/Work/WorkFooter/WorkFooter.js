import React from "react";
import PropTypes from "prop-types";

import { Clickable } from "@components";
import { WORK_PROJECTS } from "@data";
import Arrow from "@images/arrow.inline.svg";

import { Footer, BackLink, NextLink, LinkText } from "./WorkFooter.styled";

const WorkFooter = ({ pathname }) => {
  const current = WORK_PROJECTS.findIndex(({ slug }) =>
    pathname.includes(slug)
  );
  const nextProject = WORK_PROJECTS[current + 1] || WORK_PROJECTS[0];
  const previousProject =
    WORK_PROJECTS[current - 1] || WORK_PROJECTS[WORK_PROJECTS.length - 1];

  return (
    <Footer>
      {previousProject && (
        <Clickable>
          <BackLink to={`/designs/${previousProject.slug}`}>
            <LinkText>
              <Arrow />
            </LinkText>
            <previousProject.coverImage />
          </BackLink>
        </Clickable>
      )}
      {nextProject && (
        <Clickable>
          <NextLink to={`/designs/${nextProject.slug}`}>
            <LinkText>
              <Arrow />
            </LinkText>
            <nextProject.coverImage />
          </NextLink>
        </Clickable>
      )}
    </Footer>
  );
};

WorkFooter.propTypes = {
  pathname: PropTypes.string.isRequired,
};

export default WorkFooter;
