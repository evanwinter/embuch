import React from "react";
import { Preview } from "@components";
import { Grid } from "@styles";

const data = [
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

export default function FunPage() {
  return (
    <div>
      <Grid gridGap="2rem 3rem" padding="2rem 3rem">
        {data.map((project) => (
          <Preview key={project.slug} project={project} kind="fun" />
        ))}
      </Grid>
    </div>
  );
}
