import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import { Grid, Reveal } from "@components";

export default function TShirtsPage({ location }) {
  return (
    <div>
      <h1
        style={{
          marginLeft: "var(--spacing-xl)",
          marginTop: "var(--spacing-xl)",
        }}
      >
        T-Shirts
      </h1>

      <Grid gridTemplateColumns="1fr" padding="var(--spacing-xl)">
        <Reveal effect="fadeInUp">
          <StaticImage src={"../../../images/fun/t-shirts/1.jpg"} alt="TODO" />
        </Reveal>
        <Reveal effect="fadeInUp">
          <StaticImage src={"../../../images/fun/t-shirts/2.jpg"} alt="TODO" />
        </Reveal>
        <Reveal effect="fadeInUp">
          <StaticImage src={"../../../images/fun/t-shirts/3.jpg"} alt="TODO" />
        </Reveal>
      </Grid>
    </div>
  );
}
