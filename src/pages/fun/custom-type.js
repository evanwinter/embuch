import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import { BackLink, FunLayout, Section, Reveal, Row } from "@components";

import LoveThingsGif from "@images/fun/custom-type/3.gif";
import ShiftFocusGif from "@images/fun/custom-type/5.gif";
import ExperienceGif from "@images/fun/custom-type/8.gif";

export default function CustomTypePage({ location }) {
  return (
    <FunLayout pathname={location.pathname}>
      <div className="ml-xl mt-xl">
        <BackLink to="/fun">back</BackLink>
      </div>
      <h1 className="ml-xl mt-xl">custom type</h1>
      <p className="p1 ml-xl">
        Self-led projects playing with layout and experimenting with custom
        type.
      </p>

      <Section>
        <StaticImage src={"../../images/fun/custom-type/1.jpg"} alt="TODO" />

        <div style={{ marginTop: "var(--spacing-md)" }}></div>

        <Row rowStyles={{ alignItems: "flex-start", gap: "var(--spacing-md)" }}>
          <StaticImage src={"../../images/fun/custom-type/2.jpg"} alt="TODO" />

          <img
            src={LoveThingsGif}
            alt="TODO"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </Row>

        <div style={{ marginTop: "var(--spacing-md)" }}></div>

        <StaticImage src={"../../images/fun/custom-type/4.jpg"} alt="TODO" />

        <div style={{ marginTop: "var(--spacing-md)" }}></div>

        <img
          src={ShiftFocusGif}
          style={{ width: "100%", height: "auto", display: "block" }}
          className="w-lg"
          alt="TODO"
        />

        <div style={{ marginTop: "var(--spacing-md)" }}></div>

        <Row rowStyles={{ alignItems: "flex-start", gap: "var(--spacing-md)" }}>
          <StaticImage src={"../../images/fun/custom-type/6.jpg"} alt="TODO" />

          <StaticImage src="../../images/fun/custom-type/7.jpg" alt="TODO" />
        </Row>

        <div style={{ marginTop: "var(--spacing-md)" }}></div>

        <img
          style={{ width: "100%", height: "auto", display: "block" }}
          src={ExperienceGif}
          alt="TODO"
        />
      </Section>
    </FunLayout>
  );
}
