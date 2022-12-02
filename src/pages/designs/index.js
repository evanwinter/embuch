import React from "react";

import { Grid, Preview, Reveal } from "@components";
import { WORK_PROJECTS } from "@data";

export default function DesignsPage() {
  return (
    <>
      <h1 className="sr-only">Design Work</h1>
      <Reveal effect="fadeInUp">
        <h3 className="h2 mx-xl mt-xl w-md fw-500">
          A collection of my professional design work.
        </h3>
      </Reveal>
      <Grid gridGap="var(--spacing-xl)" padding="var(--spacing-xl)">
        {WORK_PROJECTS.map((project, index) => (
          <Preview
            key={project.title}
            project={project}
            kind="designs"
            index={index}
          />
        ))}
      </Grid>
    </>
  );
}

export const Head = () => (
  <>
    <title>Work | Emily Buchberger</title>
    <meta
      name="description"
      content="Design work by Emily Buchberger, a designer in Chicago."
    />
  </>
);
