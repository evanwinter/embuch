import React from "react";
import { Preview } from "@components";
import { Grid } from "@styles";
import { WORK_PROJECTS } from "@data";

export default function DesignsPage({ location }) {
  return (
    <Grid
      gridGap="var(--spacing-xl) var(--spacing-lg)"
      padding="var(--spacing-xl)"
    >
      {WORK_PROJECTS.map((project, index) => (
        <Preview
          key={project.title}
          project={project}
          kind="designs"
          index={index}
        />
      ))}
    </Grid>
  );
}
