import React from "react";
import { Preview } from "@components";
import { Grid } from "@styles";

export default function DesignsPage() {
  return (
    <Grid gridGap="2rem 3rem" padding="2rem 3rem">
      {projects.map((project, index) => (
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

const projects = [
  {
    title: "American Cancer",
    coverImage: "/ACS_Gala_Handout-15.jpg",
    slug: "american-cancer",
  },
  {
    title: "HLK",
    coverImage: "/HLK.jpg",
    slug: "hlk",
  },
  {
    title: "Audible",
    coverImage: "/Audible.jpg",
    slug: "audible",
  },
  {
    title: "Ambetter X NASCAR",
    coverImage: "/AMB.png",
    slug: "ambetter-nascar",
  },
  {
    title: "Medicaid",
    coverImage: "/medicaid.jpg",
    slug: "medicaid",
  },
  {
    title: "Ulta",
    coverImage: "/ulta.jpg",
    slug: "ulta",
  },
];
