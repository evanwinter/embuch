import React from "react";
import { Preview } from "@components";
import { Grid } from "@styles";
import { FUN_PROJECTS } from "@data";

export default function FunPage({ location }) {
  return (
    <div>
      <Grid gridGap="2rem 3rem" padding="2rem 3rem">
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
