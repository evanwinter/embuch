import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import {
  Reveal,
  Section,
  WorkBanner,
  WorkCarousel,
  WorkHeader,
  WorkLayout,
} from "@components";
import { colors } from "@styles";

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

      <Section>
        <Reveal effect="fadeInUp">
          <StaticImage
            {...imageDefaults}
            src={`${imagePath}/Ripple-Book.jpg`}
          />
        </Reveal>
      </Section>

      <Section
        style={{
          alignItems: "flex-start",
          backgroundColor: "var(--color-black)",
          color: "var(--color-white)",
          paddingBottom: 0,
        }}
      >
        <h2 className="mt-none p1 mb-none" style={{ fontWeight: 500 }}>
          Walking Challenge
        </h2>
        <p className="p1 my-none">
          Mailer sent out to all employees inviting them to participate in a
          steps challenge.
        </p>
      </Section>

      <Section style={{ backgroundColor: "var(--color-black)" }}>
        <StaticImage
          {...imageDefaults}
          src={`${imagePath}/HLK-Walking-Challenge.jpg`}
        />
      </Section>

      <Section
        style={{
          alignItems: "flex-start",
        }}
        className="pb-none"
      >
        <h2 className="mt-none p1 mb-none" style={{ fontWeight: 500 }}>
          Holiday Card
        </h2>
        <p className="p1 my-none">
          Card thanking partners of HLK for a great year accompanying a gift.
        </p>
      </Section>

      <Section>
        <StaticImage
          {...imageDefaults}
          src={`${imagePath}/Ripple-Holiday-Card.jpg`}
        />
      </Section>

      <Section
        style={{
          alignItems: "flex-start",
          backgroundColor: "var(--color-black)",
          color: "var(--color-white)",
          paddingBottom: 0,
        }}
      >
        <h2 className="mt-none">Read a Book Day</h2>
        <p className="p1 my-none">
          Social posts highlighting books picked out by employees.
        </p>
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

      <StaticImage
        {...imageDefaults}
        src={`${imagePath}/Ripple-Banner-3.jpg`}
        layout="fullWidth"
      />
    </WorkLayout>
  );
}
