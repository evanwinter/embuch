import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import { BackLink, Section, Reveal, Row } from "@components";

export default function CustomTypePage() {
  return (
    <div>
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
        Custom Type
      </h1>

      <Section>
        <Reveal effect="fadeInUp">
          <StaticImage
            src={"../../../images/fun/custom-type/1.jpg"}
            alt="TODO"
          />
        </Reveal>

        <div style={{ marginTop: "var(--spacing-sm)" }}></div>

        <Row rowStyles={{ alignItems: "flex-start", gap: "var(--spacing-sm)" }}>
          <Reveal effect="fadeInUp">
            <StaticImage
              src={"../../../images/fun/custom-type/2.jpg"}
              alt="TODO"
            />
          </Reveal>
          <Reveal effect="fadeInUp" delay={0.15}>
            <StaticImage
              src="../../../images/fun/custom-type/3.jpg"
              alt="TODO"
            />
          </Reveal>
        </Row>

        <div style={{ marginTop: "var(--spacing-sm)" }}></div>

        <Reveal effect="fadeInUp">
          <StaticImage
            src={"../../../images/fun/custom-type/4.jpg"}
            alt="TODO"
          />
        </Reveal>

        <div style={{ marginTop: "var(--spacing-sm)" }}></div>

        <Reveal effect="fadeInUp">
          <StaticImage
            src={"../../../images/fun/custom-type/5.jpg"}
            alt="TODO"
          />
        </Reveal>

        <div style={{ marginTop: "var(--spacing-sm)" }}></div>

        <Row rowStyles={{ alignItems: "flex-start", gap: "var(--spacing-sm)" }}>
          <Reveal effect="fadeInUp">
            <StaticImage
              src={"../../../images/fun/custom-type/6.jpg"}
              alt="TODO"
            />
          </Reveal>
          <Reveal effect="fadeInUp" delay={0.15}>
            <StaticImage
              src="../../../images/fun/custom-type/7.jpg"
              alt="TODO"
            />
          </Reveal>
        </Row>

        <div style={{ marginTop: "var(--spacing-sm)" }}></div>

        <Reveal effect="fadeInUp">
          <StaticImage
            src={"../../../images/fun/custom-type/8.jpg"}
            alt="TODO"
          />
        </Reveal>
      </Section>
    </div>
  );
}
