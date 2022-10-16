import React from "react";

import { Preview } from "@components";
import { WORK_PROJECTS } from "@data";
import { Grid } from "@styles";

export default function DesignsPage() {
  return (
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
  );
}
