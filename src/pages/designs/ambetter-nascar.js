import React from "react";
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import {
  Reveal,
  Row,
  Section,
  WorkBanner,
  WorkHeader,
  WorkLayout,
} from "@components";
import { colors } from "@styles";

export default function AmbetterPage({ data, location }) {
  const media = data.allCloudinaryMedia.nodes;
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

      <WorkBanner>
        <GatsbyImage class="banner-image" image={getImage(media.find(({ public_id }) => public_id.includes("AMB-Banner")))} />
      </WorkBanner>

      <Section
        className="py-xxl"
        style={{
          backgroundColor: "var(--color-black)",
          color: "var(--color-white)",
        }}
      >
        <Row rowStyles={{ gap: "var(--spacing-xl)" }}>
          <Reveal effect="fadeInUp">
            <GatsbyImage image={getImage(media.find(({ public_id }) => public_id.includes("Ad-1")))} />
          </Reveal>
          <Reveal effect="fadeInUp" delay={0.15}>
            <GatsbyImage image={getImage(media.find(({ public_id }) => public_id.includes("Ad-2")))} />
          </Reveal>
        </Row>

        <Reveal effect="fadeInUp">
          <p className="h2 w-xl my-xxl" style={{ textAlign: "center" }}>
            NASCAR-goers stopped by to test their strength, change a tire, and
            win merch while learning about Ambetter benefits.
          </p>
        </Reveal>

        <Reveal effect="fadeInUp">
          <GatsbyImage class="mb-xxl" image={getImage(media.find(({ public_id }) => public_id.includes("Speed-Swap")))} />
        </Reveal>
        <Reveal effect="fadeInUp">
          <GatsbyImage image={getImage(media.find(({ public_id }) => public_id.includes("Fan-Zone")))} />
        </Reveal>
      </Section>

      <Section className="py-xxl">
        <Row rowStyles={{ gap: "var(--spacing-xl)" }}>
          <Reveal effect="fadeInUp">
            <GatsbyImage image={getImage(media.find(({ public_id }) => public_id.includes("Handout-1")))} />
          </Reveal>
          <Reveal effect="fadeInUp" delay={0.15}>
            <GatsbyImage image={getImage(media.find(({ public_id }) => public_id.includes("Handout-2")))} />
          </Reveal>
        </Row>
      </Section>

      <Section
        className="py-xxl"
        style={{ backgroundColor: "var(--color-black)" }}
      >
        <Reveal effect="fadeInUp">
          <GatsbyImage class="mb-xxl" image={getImage(media.find(({ public_id }) => public_id.includes("Signs-1")))} />
        </Reveal>
        <Reveal effect="fadeInUp">
          <GatsbyImage image={getImage(media.find(({ public_id }) => public_id.includes("Signs-2")))} />
        </Reveal>
      </Section>
    </WorkLayout>
  );
}

export const Head = () => (
  <>
    <title>Ambetter x NASCAR | Emily Buchberger</title>
    <meta
      name="description"
      content="Ambetter activation at a NASCAR race track, complete with games and swag."
    />
  </>
);

export const query = graphql`
  query {
    allCloudinaryMedia(
      filter: {folder: {regex: "/.*work\\/ambetter-nascar.*/"}}
    ) {
      nodes {
        gatsbyImageData
        public_id
      }
    }
  }
`;
