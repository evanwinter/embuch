import React from "react";
import { Preview } from "@components";
import { Grid } from "@styles";
import sundayScaries from "../../images/fun/sunday-scaries.jpg";
import prettyGood from "../../images/fun/prettygood.jpg";
import kittySleep from "../../images/fun/kittysleep.jpg";
import customType from "../../images/fun/customtype.jpg";

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
    coverImage: sundayScaries,
  },
  {
    title: "Logos",
    slug: "logos",
    coverImage: prettyGood,
  },
  {
    title: "Portraits",
    slug: "portaits",
    coverImage: kittySleep,
  },
  {
    title: "Custom Type",
    slug: "custom-type",
    coverImage: customType,
  },
];
