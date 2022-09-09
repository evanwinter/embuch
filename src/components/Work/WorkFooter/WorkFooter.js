import React from "react";
import { WORK_PROJECTS } from "@data";
import ArrowSmall from "@images/arrow-right.inline.svg"; // TODO small arrow
import {
  Footer,
  BackLink,
  NextLink,
  LinkImage,
  LinkText,
} from "./WorkFooter.styled";

export default function WorkFooter({ pathname }) {
  const current = WORK_PROJECTS.findIndex(({ slug }) =>
    pathname.includes(slug)
  );
  const nextProject = WORK_PROJECTS[current + 1] || WORK_PROJECTS[0];
  const previousProject =
    WORK_PROJECTS[current - 1] || WORK_PROJECTS[WORK_PROJECTS.length - 1];
  return (
    <Footer>
      {previousProject && (
        <BackLink to={`/designs/${previousProject.slug}`}>
          <LinkText>
            <ArrowSmall />
            back
          </LinkText>
          <LinkImage src={previousProject.coverImage} />
        </BackLink>
      )}
      {nextProject && (
        <NextLink to={`/designs/${nextProject.slug}`}>
          <LinkText>
            next
            <ArrowSmall />
          </LinkText>
          <LinkImage src={nextProject.coverImage} />
        </NextLink>
      )}
    </Footer>
  );
}
