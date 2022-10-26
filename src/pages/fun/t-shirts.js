import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import { BackLink, FunLayout, Grid, Reveal } from "@components";

export default function TShirtsPage({ location }) {
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
        T-Shirts
      </h1>

      <p className="p1" style={{ marginLeft: "var(--spacing-xl)" }}>
        Custom commissioned designs.
      </p>

      <Grid gridTemplateColumns="1fr" padding="var(--spacing-xl)">
        <Reveal effect="fadeInUp">
          <StaticImage src={"../../images/fun/t-shirts/1.jpg"} alt="TODO" />
        </Reveal>
        <Reveal effect="fadeInUp">
          <StaticImage src={"../../images/fun/t-shirts/2.jpg"} alt="TODO" />
        </Reveal>
        <Reveal effect="fadeInUp">
          <StaticImage src={"../../images/fun/t-shirts/3.jpg"} alt="TODO" />
        </Reveal>
      </Grid>
    </FunLayout>
  );
}
