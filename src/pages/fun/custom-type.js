import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import { BackLink, FunLayout, Section, Reveal, Row } from "@components";

import LoveThingsGif from "@images/fun/custom-type/3.gif";
import ShiftFocusGif from "@images/fun/custom-type/5.gif";
import ExperienceGif from "@images/fun/custom-type/8.gif";

export default function CustomTypePage({ location }) {
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
        Custom Type
      </h1>

      <p className="p1" style={{ marginLeft: "var(--spacing-xl)" }}>
        Self-led projects playing with layout and experimenting with custom
        type.
      </p>

      <Section>
        <Reveal effect="fadeInUp">
          <StaticImage src={"../../images/fun/custom-type/1.jpg"} alt="TODO" />
        </Reveal>

        <div style={{ marginTop: "var(--spacing-md)" }}></div>

        <Row rowStyles={{ alignItems: "flex-start", gap: "var(--spacing-md)" }}>
          <Reveal effect="fadeInUp">
            <StaticImage
              src={"../../images/fun/custom-type/2.jpg"}
              alt="TODO"
            />
          </Reveal>
          <Reveal effect="fadeInUp" delay={0.15}>
            <img
              src={LoveThingsGif}
              alt="TODO"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </Reveal>
        </Row>

        <div style={{ marginTop: "var(--spacing-md)" }}></div>

        <Reveal effect="fadeInUp">
          <StaticImage src={"../../images/fun/custom-type/4.jpg"} alt="TODO" />
        </Reveal>

        <div style={{ marginTop: "var(--spacing-md)" }}></div>

        <Reveal effect="fadeInUp">
          <img
            src={ShiftFocusGif}
            style={{ width: "100%", height: "auto", display: "block" }}
            className="w-lg"
            alt="TODO"
          />
        </Reveal>

        <div style={{ marginTop: "var(--spacing-md)" }}></div>

        <Row rowStyles={{ alignItems: "flex-start", gap: "var(--spacing-md)" }}>
          <Reveal effect="fadeInUp">
            <StaticImage
              src={"../../images/fun/custom-type/6.jpg"}
              alt="TODO"
            />
          </Reveal>
          <Reveal effect="fadeInUp" delay={0.15}>
            <StaticImage src="../../images/fun/custom-type/7.jpg" alt="TODO" />
          </Reveal>
        </Row>

        <div style={{ marginTop: "var(--spacing-md)" }}></div>

        <Reveal effect="fadeInUp">
          <img
            style={{ width: "100%", height: "auto", display: "block" }}
            src={ExperienceGif}
            alt="TODO"
          />
        </Reveal>
      </Section>
    </FunLayout>
  );
}
