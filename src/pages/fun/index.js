import React from "react";
import { Grid, Preview } from "@components";
import { FUN_PROJECTS } from "@data";

export default function FunPage() {
  return (
    <div>
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
    </div>
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
