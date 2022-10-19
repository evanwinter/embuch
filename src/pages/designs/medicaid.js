import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import {
  Reveal,
  Section,
  WorkBanner,
  WorkHeader,
  WorkLayout,
} from "@components";

const imageDefaults = { quality: 100, alt: "TODO" };
const imagePath = "../../images/work/medicaid";

export default function MedicaidPage({ location }) {
  return (
    <WorkLayout pathname={location.pathname}>
      <WorkHeader
        title="Medicaid"
        subtitle="Refresh"
        description="The design system for Medicaid had to flex for each state while staying uniform."
        tags={[
          {
            text: "design",
            backgroundColor: "var(--color-pink)",
          },
          {
            text: "production",
            backgroundColor: "var(--color-orange)",
          },
          {
            text: "retouching",
            backgroundColor: "var(--color-red)",
          },
          {
            text: "animation",
            backgroundColor: "var(--color-green)",
          },
        ]}
      />
      <WorkBanner>
        <StaticImage
          {...imageDefaults}
          src={`${imagePath}/Medicaid-Banner.jpg`}
          layout="fullWidth"
          style={{ borderBlock: "3px solid var(--color-black)" }}
        />
      </WorkBanner>

      <Section>
        <Reveal effect="fadeInUp">
          <StaticImage
            {...imageDefaults}
            src={`${imagePath}/Medicaid-Flyer-1.jpg`}
          />
        </Reveal>
      </Section>

      <Section style={{ backgroundColor: "var(--color-black)" }}>
        <Reveal effect="fadeInUp">
          <StaticImage {...imageDefaults} src={`${imagePath}/IG-Posts.jpg`} />
        </Reveal>
      </Section>

      <Section>
        <Reveal effect="fadeInUp">
          <h1>MP4s</h1>
        </Reveal>
      </Section>

      <Section style={{ backgroundColor: "var(--color-black)" }}>
        <Reveal effect="fadeInUp">
          <StaticImage {...imageDefaults} src={`${imagePath}/OOH-1.jpg`} />
        </Reveal>
      </Section>
      <Section>
        <Reveal effect="fadeInUp">
          <StaticImage
            {...imageDefaults}
            src={`${imagePath}/Social-1.jpg`}
            className="mb-lg"
          />
        </Reveal>
        <Reveal effect="fadeInUp">
          <StaticImage
            {...imageDefaults}
            src={`${imagePath}/Social-2.jpg`}
            className="mb-lg"
          />
        </Reveal>
        <Reveal effect="fadeInUp">
          <StaticImage
            {...imageDefaults}
            src={`${imagePath}/Social-3.jpg`}
            className="mb-lg"
          />
        </Reveal>
        <Reveal effect="fadeInUp">
          <StaticImage {...imageDefaults} src={`${imagePath}/Social-4.jpg`} />
        </Reveal>
      </Section>
    </WorkLayout>
  );
}
