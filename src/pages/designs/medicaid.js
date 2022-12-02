import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import {
  Reveal,
  Row,
  Section,
  WorkBanner,
  WorkHeader,
  WorkLayout,
} from "@components";

import video1 from "@images/work/medicaid/1.mp4";
import video2 from "@images/work/medicaid/2.mp4";
import video3 from "@images/work/medicaid/3.mp4";

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

      <Section className="py-xxl">
        <Reveal effect="fadeInUp">
          <StaticImage
            {...imageDefaults}
            src={`${imagePath}/Medicaid-Flyer-1.jpg`}
          />
        </Reveal>
      </Section>

      <Section
        className="py-xxl"
        style={{ backgroundColor: "var(--color-black)" }}
      >
        <Reveal effect="fadeInUp">
          <StaticImage {...imageDefaults} src={`${imagePath}/IG-Posts.jpg`} />
        </Reveal>
      </Section>

      <Section style={{ paddingBlock: "var(--spacing-xxl)" }}>
        <Row rowStyles={{ gap: "var(--spacing-xl)" }}>
          <Reveal effect="fadeInUp">
            <video
              style={{
                display: "inline-flex",
                flex: 1,
                width: "100%",
                height: "auto",
              }}
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={video1} type="video/mp4" />
            </video>
          </Reveal>
          <Reveal effect="fadeInUp" delay={0.15}>
            <video
              style={{
                display: "inline-flex",
                flex: 1,
                width: "100%",
                height: "auto",
              }}
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={video2} type="video/mp4" />
            </video>
          </Reveal>
          <Reveal effect="fadeInUp" delay={0.3}>
            <video
              style={{
                display: "inline-flex",
                flex: 1,
                width: "100%",
                height: "auto",
              }}
              autoPlay
              loop
              muted
              playsInline
            >
              <source src={video3} type="video/mp4" />
            </video>
          </Reveal>
        </Row>
      </Section>

      <Section
        className="py-xxl"
        style={{ backgroundColor: "var(--color-black)" }}
      >
        <Reveal effect="fadeInUp">
          <StaticImage {...imageDefaults} src={`${imagePath}/OOH-1.jpg`} />
        </Reveal>
      </Section>
      <Section className="py-xxl">
        <Reveal effect="fadeInUp">
          <StaticImage
            {...imageDefaults}
            src={`${imagePath}/Social-1.jpg`}
            className="mb-xl"
          />
        </Reveal>
        <Reveal effect="fadeInUp">
          <StaticImage
            {...imageDefaults}
            src={`${imagePath}/Social-2.jpg`}
            className="mb-xl"
          />
        </Reveal>
        <Reveal effect="fadeInUp">
          <StaticImage
            {...imageDefaults}
            src={`${imagePath}/Social-3.jpg`}
            className="mb-xl"
          />
        </Reveal>
        <Reveal effect="fadeInUp">
          <StaticImage {...imageDefaults} src={`${imagePath}/Social-4.jpg`} />
        </Reveal>
      </Section>
    </WorkLayout>
  );
}
