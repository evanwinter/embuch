import React from "react";
import { Preview } from "@components";
import { Grid } from "@styles";

export default function FunPage() {
  return (
    <div>
      <Grid gridGap="2rem 3rem" padding="2rem 3rem">
        {projects.map((project, index) => (
          <Preview
            key={project.slug}
            project={project}
            kind="fun"
            index={index}
          />
        ))}
      </Grid>
    </div>
  );
}

const projects = [
  {
    title: "T-Shirts",
    slug: "t-shirts",
    coverImage: "/fun/sunday-scaries.jpg",
  },
  {
    title: "Logos",
    slug: "logos",
    coverImage: "/fun/prettygood.jpg",
  },
  {
    title: "Portraits",
    slug: "portaits",
    coverImage: "/fun/kittysleep.jpg",
  },
  {
    title: "Custom Type",
    slug: "custom-type",
    coverImage: "/fun/customtype.jpg",
  },
];
