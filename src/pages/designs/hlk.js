import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";

import {
  Reveal,
  Section,
  WorkCarousel,
  WorkHeader,
  WorkLayout,
} from "@components";
import { colors } from "@styles";

export default function HlkPage({ data, location }) {
  const media = data.allCloudinaryMedia.nodes;
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
        {media.filter(({ public_id }) => public_id.includes("Ripple_Spread_")).map((image) => (
          <GatsbyImage key={image.public_id} class="image" image={getImage(image)} alt="TODO" />
        ))}
      </WorkCarousel>

      <Section className="py-xxl">
        <Reveal effect="fadeInUp">
          <GatsbyImage image={getImage(media.find(({ public_id }) => public_id.includes("Ripple-Book_")))} />
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
          <GatsbyImage image={getImage(media.find(({ public_id }) => public_id.includes("Walking-Challenge_")))} />
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
          <GatsbyImage image={getImage(media.find(({ public_id }) => public_id.includes("Ripple-Holiday-Card_")))} />
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
        {media.filter(({ public_id }) => public_id.includes("Read-A-Book-Day-HLK-")).map((image) => (
          <GatsbyImage key={image.public_id} class="image" image={getImage(image)} alt="TODO" />
        ))}
      </WorkCarousel>

      <Reveal effect="fadeInUp">
        <GatsbyImage image={getImage(media.find(({ public_id }) => public_id.includes("Read-a-Book-Day-GIF_")))} />
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

export const query = graphql`
  query {
    allCloudinaryMedia(
      filter: {folder: {regex: "/.*work\\/hlk.*/"}}
    ) {
      nodes {
        gatsbyImageData
        public_id
      }
    }
  }
`;
