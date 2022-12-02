import React from "react";
import { Grid, Preview, Reveal } from "@components";
import { FUN_PROJECTS } from "@data";

export default function FunPage() {
  return (
    <>
      <Reveal effect="fadeInUp">
        <h1 className="sr-only">Fun</h1>
        <h2 className="mx-xl mt-xl w-md fw-500">
          Some of the fun things I've made in my free time.
        </h2>
      </Reveal>
      <Grid gridGap="var(--spacing-xl)" padding="var(--spacing-xl)">
        {FUN_PROJECTS.map((funProject, index) => (
          <Preview
            key={funProject.slug}
            project={funProject}
            kind="fun"
            index={index}
          />
        ))}
      </Grid>
    </>
  );
}

export const Head = () => (
  <>
    <title>Fun | Emily Buchberger</title>
    <meta
      name="description"
      content="Personal projects made by Emily Buchberger, a designer in Chicago."
    />
  </>
);
