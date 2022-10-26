import React from "react";
import PropTypes from "prop-types";

import { Clickable } from "@components";
import { FUN_PROJECTS } from "@data";
import Arrow from "@images/arrow.inline.svg";

import {
  Footer,
  BackLink,
  NextLink,
  LinkText,
} from "../../Work/WorkFooter/WorkFooter.styled";

const FunFooter = ({ pathname }) => {
  const current = FUN_PROJECTS.findIndex(({ slug }) => pathname.includes(slug));
  const nextProject = FUN_PROJECTS[current + 1] || FUN_PROJECTS[0];
  const previousProject =
    FUN_PROJECTS[current - 1] || FUN_PROJECTS[FUN_PROJECTS.length - 1];

  return (
    <Footer>
      {previousProject && (
        <Clickable>
          <BackLink to={`/fun/${previousProject.slug}`}>
            <LinkText>
              <Arrow />
              back
            </LinkText>
            <previousProject.coverImage />
          </BackLink>
        </Clickable>
      )}
      {nextProject && (
        <Clickable>
          <NextLink to={`/fun/${nextProject.slug}`}>
            <LinkText>
              next
              <Arrow />
            </LinkText>
            <nextProject.coverImage />
          </NextLink>
        </Clickable>
      )}
    </Footer>
  );
};

FunFooter.propTypes = {
  pathname: PropTypes.string.isRequired,
};

export default FunFooter;
