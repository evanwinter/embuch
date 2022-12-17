import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";

import {
  Grid,
  Row,
  Section,
  WorkBanner,
  WorkHeader,
  WorkLayout,
} from "@components";
import { colors } from "@styles";

export default function AudiblePage({ data, location }) {
  const media = data.allCloudinaryMedia.nodes;
  return (
    <WorkLayout pathname={location.pathname}>
      <WorkHeader
        title="Audible"
        subtitle="Clearer Membership"
        description="Rethinking Audible’s plans page and product description pages."
        tags={[{ text: "product design", backgroundColor: colors.pink }]}
      />

      <WorkBanner>
        <GatsbyImage
          class="banner-image"
          image={getImage(media.find(({ public_id }) => public_id.includes("Audible-Banner")))}
        />
      </WorkBanner>

      <Section
        className="py-xxl"
        style={{ backgroundColor: "var(--color-black)" }}
      >
        <GatsbyImage image={getImage(media.find(({ public_id }) => public_id.includes("Audible-Plans")))} />
      </Section>

      <Section
        className="pt-none pb-xxl"
        style={{
          backgroundColor: "var(--color-black)",
          color: "var(--color-white)",
        }}
      >
        <p className="h2 w-lg my-none text-center">
          Audible has multiple forms of membership for their customers. In order
          to make the tiers more easily digestible, we redesigned their plans
          page. We also made a recommendation based on their current use of the
          platform.
        </p>
      </Section>

      <Section className="py-xxl">
        <GatsbyImage image={getImage(media.find(({ public_id }) => public_id.includes("Audible-Web")))} />
      </Section>

      <Section
        className="py-xxl"
        style={{
          backgroundColor: "var(--color-black)",
          color: "var(--color-white)",
        }}
      >
        <GatsbyImage image={getImage(media.find(({ public_id }) => public_id.includes("Audible-Desktop-Mobile")))} />
        <Row
          rowStyles={{
            gap: "var(--spacing-xl)",
            marginTop: "var(--spacing-xxl)",
          }}
        >
          <GatsbyImage image={getImage(media.find(({ public_id }) => public_id.includes("Audible-Mobile_")))} />
          <p className="p1 my-none">
            Along with the plans page, Audible wanted to make more immersive and
            engaging product description pages. We added extra content to pair
            with the audiobook as well as clear pricing up front.
          </p>
        </Row>
      </Section>

      <Section className="py-xxl">
        <Grid
          gridGap="var(--spacing-xl)"
          gridTemplateColumns="1fr 279px"
          alignItems="flex-start"
          className="break-md"
        >
          <GatsbyImage image={getImage(media.find(({ public_id }) => public_id.includes("Audible-Desktop_")))} objectFit="contain" />
          <GatsbyImage image={getImage(media.find(({ public_id }) => public_id.includes("Audible-Mobile-Layout_")))} />
        </Grid>
      </Section>
    </WorkLayout>
  );
}

export const Head = () => (
  <>
    <title>Audible | Emily Buchberger</title>
    <meta
      name="description"
      content="Rethinking Audible’s plans page and product description pages."
    />
  </>
);

export const query = graphql`
  query {
    allCloudinaryMedia(
      filter: {folder: {regex: "/.*work\\/audible.*/"}}
    ) {
      nodes {
        gatsbyImageData
        public_id
      }
    }
  }
`;
