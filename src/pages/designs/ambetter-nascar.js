import React from "react";
import { Reveal, Row, WorkHeader, WorkLayout } from "@components";
import { colors, Section } from "@styles";
import { StaticImage } from "gatsby-plugin-image";

const imageDefaults = { quality: 100, alt: "TODO" };
const imagePath = "../../images/work/ambetter-nascar";

export default function AmbetterPage({ location }) {
  return (
    <WorkLayout pathname={location.pathname}>
      <WorkHeader
        title="Ambetter x NASCAR"
        subtitle="Raceway Experience"
        description="Ambetter activation at a NASCAR race track, complete with games and swag."
        tags={[
          { text: "design", backgroundColor: colors.pink },
          { text: "production", backgroundColor: colors.orange },
        ]}
      />

      <StaticImage
        {...imageDefaults}
        src={`${imagePath}/AMB-Banner.jpg`}
        layout="fullWidth"
        style={{ borderBlock: `3px solid var(--color-black)` }}
      />

      <Section
        style={{
          backgroundColor: "var(--color-black)",
          color: "var(--color-white)",
        }}
      >
        <Row rowStyles={{ gap: "var(--spacing-xl)" }}>
          <Reveal effect="fadeInUp">
            <StaticImage {...imageDefaults} src={`${imagePath}/Ad-1.jpg`} />
          </Reveal>
          <Reveal effect="fadeInUp" delay={0.15}>
            <StaticImage {...imageDefaults} src={`${imagePath}/Ad-2.jpg`} />
          </Reveal>
        </Row>

        <Reveal effect="fadeInUp">
          <p className="h2 w-xl my-xxl" style={{ textAlign: "center" }}>
            NASCAR-goers stopped by to test their strength, change a tire, and
            win merch while learning about Ambetter benefits.
          </p>
        </Reveal>

        <Reveal effect="fadeInUp">
          <StaticImage
            {...imageDefaults}
            src={`${imagePath}/Speed-Swap.jpg`}
            className="mb-xl"
          />
        </Reveal>
        <Reveal effect="fadeInUp">
          <StaticImage {...imageDefaults} src={`${imagePath}/Fan-Zone.jpg`} />
        </Reveal>
      </Section>

      <Section>
        <Row rowStyles={{ gap: "var(--spacing-xl)" }}>
          <Reveal effect="fadeInUp">
            <StaticImage
              {...imageDefaults}
              src={`${imagePath}/Handout-1.jpg`}
            />
          </Reveal>
          <Reveal effect="fadeInUp" delay={0.15}>
            <StaticImage
              {...imageDefaults}
              src={`${imagePath}/Handout-2.jpg`}
            />
          </Reveal>
        </Row>
      </Section>

      <Section style={{ backgroundColor: "var(--color-black)" }}>
        <Reveal effect="fadeInUp">
          <StaticImage
            {...imageDefaults}
            src={`${imagePath}/Signs-1.jpg`}
            className="mb-xl"
          />
        </Reveal>
        <Reveal effect="fadeInUp">
          <StaticImage {...imageDefaults} src={`${imagePath}/Signs-2.jpg`} />
        </Reveal>
      </Section>
    </WorkLayout>
  );
}
