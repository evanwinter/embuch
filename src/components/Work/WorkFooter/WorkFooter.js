import React from "react";
import { WORK_PROJECTS } from "@data";
import Arrow from "@images/arrow.inline.svg";
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
            <Arrow />
            back
          </LinkText>
          <previousProject.coverImage />
        </BackLink>
      )}
      {nextProject && (
        <NextLink to={`/designs/${nextProject.slug}`}>
          <LinkText>
            next
            <Arrow />
          </LinkText>
          <nextProject.coverImage />
        </NextLink>
      )}
    </Footer>
  );
}
