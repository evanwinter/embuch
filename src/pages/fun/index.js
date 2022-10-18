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
