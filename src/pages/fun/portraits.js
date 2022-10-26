import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import { BackLink, FunLayout, Grid, Reveal } from "@components";

export default function PortraitsPage({ location }) {
  return (
    <FunLayout pathname={location.pathname}>
      <div
        style={{
          marginLeft: "var(--spacing-xl)",
          marginTop: "var(--spacing-xl)",
        }}
      >
        <BackLink to="/fun">back</BackLink>
      </div>

      <h1
        style={{
          marginLeft: "var(--spacing-xl)",
          marginTop: "var(--spacing-xl)",
        }}
      >
        Portraits
      </h1>

      <p
        className="p1"
        style={{
          marginLeft: "var(--spacing-xl)",
          marginBottom: "var(--spacing-xl)",
        }}
      >
        Illustrations for friends and their babies.
      </p>

      <Grid
        gridGap="4vw"
        padding="var(--spacing-xl)"
        style={{ backgroundColor: "var(--color-black)" }}
      >
        <Reveal effect="fadeInUp">
          <StaticImage src={"../../images/fun/portraits/1.jpg"} alt="TODO" />
        </Reveal>
        <Reveal effect="fadeInUp" delay={0.1}>
          <StaticImage src={"../../images/fun/portraits/2.jpg"} alt="TODO" />
        </Reveal>
        <Reveal effect="fadeInUp">
          <StaticImage src={"../../images/fun/portraits/3.jpg"} alt="TODO" />
        </Reveal>
        <Reveal effect="fadeInUp" delay={0.1}>
          <StaticImage src={"../../images/fun/portraits/4.jpg"} alt="TODO" />
        </Reveal>
        <Reveal effect="fadeInUp">
          <StaticImage src={"../../images/fun/portraits/5.jpg"} alt="TODO" />
        </Reveal>
        <Reveal effect="fadeInUp" delay={0.1}>
          <StaticImage src={"../../images/fun/portraits/6.jpg"} alt="TODO" />
        </Reveal>
        <Reveal effect="fadeInUp">
          <StaticImage src={"../../images/fun/portraits/7.jpg"} alt="TODO" />
        </Reveal>
        <Reveal effect="fadeInUp" delay={0.1}>
          <StaticImage src={"../../images/fun/portraits/8.jpg"} alt="TODO" />
        </Reveal>
      </Grid>
    </FunLayout>
  );
}
