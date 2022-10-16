import React from "react";
import { Preview } from "@components";
import { Grid } from "@styles";
import { FUN_PROJECTS } from "@data";

export default function FunPage({ location }) {
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
