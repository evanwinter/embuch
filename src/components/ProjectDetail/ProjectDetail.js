import React from "react";
import {
  HeroImage,
  Page,
  Intro,
  Images,
  GridImage,
} from "./ProjectDetail.styled";
import { getImage } from "gatsby-plugin-image";

export default function ProjectDetail({ data }) {
  return (
    <>
      <HeroImage image={getImage(data.heroImage)} />

      <Page>
        <Intro>
          <h1>{data.title}</h1>
          <h3>{data.subtitle}</h3>
          <p>{data.summary.summary}</p>
        </Intro>

        <Images>
          {data.images.map((image, i) => {
            return <GridImage key={i} image={getImage(image)} />;
          })}
        </Images>
      </Page>
    </>
  );
}
