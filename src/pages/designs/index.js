import React from "react";
import { Preview } from "@components";
import { Grid } from "@styles";
import americanCancer from "../../images/ACS_Gala_Handout-15.jpg";
import hlk from "../../images/HLK.jpg";
import audible from "../../images/Audible.jpg";
import ambetter from "../../images/AMB.png";
import medicaid from "../../images/medicaid.jpg";
import ulta from "../../images/ulta.jpg";
import { StaticImage } from "gatsby-plugin-image";

export default function DesignsPage() {
  const projects = [
    {
      title: "American Cancer",
      coverImage: americanCancer,
      slug: "american-cancer",
    },
    {
      title: "HLK",
      coverImage: hlk,
      slug: "hlk",
    },
    {
      title: "Audible",
      coverImage: audible,
      slug: "audible",
    },
    {
      title: "Ambetter X NASCAR",
      coverImage: ambetter,
      slug: "ambetter-nascar",
    },
    {
      title: "Medicaid",
      coverImage: medicaid,
      slug: "medicaid",
    },
    {
      title: "Ulta",
      coverImage: ulta,
      slug: "ulta",
    },
  ];

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
