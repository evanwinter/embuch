import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import {
  Reveal,
  Section,
  WorkCarousel,
  WorkHeader,
  WorkLayout,
} from "@components";
import { colors } from "@styles";

import ReadABookGif from "@images/work/hlk/Read-a-Book-Day-GIF.gif";

const imageDefaults = { quality: 100, alt: "TODO" };
const imagePath = "../../images/work/hlk";

export default function HlkPage({ location }) {
  return (
    <WorkLayout pathname={location.pathname}>
      <WorkHeader
        title="HLK Brand"
        subtitle="Ripple: Volume One"
        description="Book containing HLK’s weekly internal communication newsletters from 2020-2021."
        tags={[
          { text: "design", backgroundColor: colors.pink },
          { text: "production", backgroundColor: colors.orange },
          { text: "illustration", backgroundColor: colors.red },
        ]}
      />

      <WorkCarousel backgroundColor={colors.white} color={colors.black}>
        <StaticImage
          {...imageDefaults}
          src={`${imagePath}/Ripple_Spread_1.jpg`}
          height={600}
        />
        <StaticImage
          {...imageDefaults}
          src={`${imagePath}/Ripple_Spread_3.jpg`}
          height={600}
        />
        <StaticImage
          {...imageDefaults}
          src={`${imagePath}/Ripple_Spread_4.jpg`}
          height={600}
        />
      </WorkCarousel>

      <Section className="py-xxl">
        <Reveal effect="fadeInUp">
          <StaticImage
            {...imageDefaults}
            src={`${imagePath}/Ripple-Book.jpg`}
          />
        </Reveal>
      </Section>

      <Section
        className="pt-xxl pb-none"
        style={{
          alignItems: "flex-start",
          backgroundColor: "var(--color-black)",
          color: "var(--color-white)",
        }}
      >
        <Reveal effect="fadeInLeft">
          <p className="mt-none p1 mb-sm" style={{ fontWeight: 500 }}>
            Walking Challenge
          </p>
        </Reveal>
        <Reveal effect="fadeInLeft" delay={0.1}>
          <p className="p2 my-none">
            Mailer sent out to all employees inviting them to participate in a
            steps challenge.
          </p>
        </Reveal>
      </Section>
      <Section
        className="pb-xxl"
        style={{ backgroundColor: "var(--color-black)" }}
      >
        <Reveal effect="fadeInUp">
          <StaticImage
            {...imageDefaults}
            src={`${imagePath}/HLK-Walking-Challenge.jpg`}
          />
        </Reveal>
      </Section>

      <Section className="pt-xxl pb-none" style={{ alignItems: "flex-start" }}>
        <Reveal effect="fadeInUp">
          <h2 className="mt-none p1 mb-none" style={{ fontWeight: 500 }}>
            Holiday Card
          </h2>
        </Reveal>
        <Reveal effect="fadeInUp" delay={0.1}>
          <p className="p1 my-none">
            Card thanking partners of HLK for a great year accompanying a gift.
          </p>
        </Reveal>
      </Section>
      <Section className="pb-xxl">
        <Reveal effect="fadeInUp">
          <StaticImage
            {...imageDefaults}
            src={`${imagePath}/Ripple-Holiday-Card.jpg`}
          />
        </Reveal>
      </Section>

      <Section
        className="pt-xxl pb-none"
        style={{
          alignItems: "flex-start",
          backgroundColor: "var(--color-black)",
          color: "var(--color-white)",
        }}
      >
        <Reveal effect="fadeInLeft">
          <p className="mt-none mb-sm p1">Read a Book Day</p>
        </Reveal>
        <Reveal effect="fadeInLeft" delay={0.1}>
          <p className="p2 my-none">
            Social posts highlighting books picked out by employees.
          </p>
        </Reveal>
      </Section>

      <WorkCarousel
        backgroundColor="var(--color-black)"
        color="var(--color-white)"
      >
        <StaticImage
          {...imageDefaults}
          src={`${imagePath}/Read-A-Book-Day-HLK-1.jpg`}
          height={571}
        />
        <StaticImage
          {...imageDefaults}
          src={`${imagePath}/Read-A-Book-Day-HLK-2.jpg`}
          height={571}
        />
        <StaticImage
          {...imageDefaults}
          src={`${imagePath}/Read-A-Book-Day-HLK-3.jpg`}
          height={571}
        />
        <StaticImage
          {...imageDefaults}
          src={`${imagePath}/Read-A-Book-Day-HLK-4.jpg`}
          height={571}
        />
        <StaticImage
          {...imageDefaults}
          src={`${imagePath}/Read-A-Book-Day-HLK-5.jpg`}
          height={571}
        />
        <StaticImage
          {...imageDefaults}
          src={`${imagePath}/Read-A-Book-Day-HLK-6.jpg`}
          height={571}
        />
        <StaticImage
          {...imageDefaults}
          src={`${imagePath}/Read-A-Book-Day-HLK-7.jpg`}
          height={571}
        />
      </WorkCarousel>

      <Reveal effect="fadeInUp">
        <img
          src={ReadABookGif}
          alt="Read a Book Day"
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      </Reveal>
    </WorkLayout>
  );
}

export const Head = () => (
  <>
    <title>HLK Brand | Emily Buchberger</title>
    <meta
      name="description"
      content="Book containing HLK's weekly internal communication newsletters from 2020-2021."
    />
  </>
);
