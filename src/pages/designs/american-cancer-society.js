import React from "react";
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import {
  Reveal,
  Row,
  Section,
  WorkBanner,
  WorkCarousel,
  WorkHeader,
  WorkLayout,
} from "@components";
import { colors } from "@styles";

const AmericanCancerPage = ({ data, location }) => {
  const media = data.allCloudinaryMedia.nodes;
  const banner = media.find(({ public_id }) => public_id.includes("Banner"));
  const carousel1 = media.filter(({ public_id }) => public_id.includes("carousel-1"));
  const handout = media.find(({ public_id }) => public_id.includes("Handout-Mockup"));
  const carousel2 = media.filter(({ public_id }) => public_id.includes("Poster-"));
  const research = media.filter(({ public_id }) => public_id.includes("Research-Highlights-"));
  const carousel3 = media.filter(({ public_id }) => public_id.includes("Gala-Images-"));

  return (
    <WorkLayout pathname={location.pathname}>
      <WorkHeader
        title="American Cancer Society Gala"
        subtitle="The American Cancer Society 6th Annual Champions of Hope Gala"
        description="Designed the visual look and feel for the American Cancer Society's Gala."
        tags={[
          { text: "design", backgroundColor: colors.pink },
          { text: "production", backgroundColor: colors.orange },
          { text: "illustration", backgroundColor: colors.red },
        ]}
      />

      <WorkBanner>
        <GatsbyImage class="banner-image" image={getImage(banner)} alt={"TODO"} />
      </WorkBanner>

      <WorkCarousel backgroundColor={colors.darkGray}>
        {carousel1.map((image) => (
          <GatsbyImage class="image" key={image.public_id} image={getImage(image)} alt={"TODO"} />
        ))}
      </WorkCarousel>

      <Section className="pt-xxl">
        <Reveal effect="fadeInUp" distance="lg">
          <p
            className="h2 my-none mx-auto w-lg"
            style={{ textAlign: "center" }}
          >
            This booklet was created to highlight the research done by the
            American Cancer Society.
          </p>
        </Reveal>
      </Section>

      <Section className="pb-xxl">
        <Reveal effect="fadeInUp">
          <GatsbyImage image={getImage(handout)} alt="TODO" />
        </Reveal>
      </Section>

      <Section
        style={{
          backgroundColor: "var(--color-black)",
          color: "var(--color-white)",
          paddingTop: "var(--spacing-xxl)",
        }}
      >
        <Row
          rowStyles={{
            justifyContent: "space-between",
            gap: "var(--spacing-xl)",
          }}
        >
          <Reveal
            effect="fadeInUp"
            amount={0.25}
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <GatsbyImage image={getImage(carousel2.find(({ public_id }) => public_id.includes("Poster-5")))} alt="TODO" />
          </Reveal>
          <Reveal effect="fadeInUp" delay={0.15}>
            <p className="p1 my-none">
              The American Cancer Society asked us to create an immersive
              experience for those attending the Gala. The visitors were able to
              walk through an exhibit that highlighted their research efforts.
              Visitors also connected to personal stories of those affected by
              cancer through quotes and custom illustrations.
            </p>
          </Reveal>
        </Row>
        <Row
          rowStyles={{
            gap: "var(--spacing-xl)",
            paddingTop: "var(--spacing-xxl)",
            paddingBottom: 0,
            justifyContent: "space-between",
          }}
        >
          {research.sort((a, b) => b.public_id > a.public_id).map((image, index) => (
            <Reveal
              effect="fadeInRight"
              amount={0.25}
              delay={index * 0.15}
              key={image.public_id}
            >
              <GatsbyImage image={getImage(image)} alt="TODO" />
            </Reveal>
          ))
          }
        </Row>
      </Section>
      <WorkCarousel backgroundColor={colors.black}>
        {carousel2.map((image) => (
          <GatsbyImage class="image" key={image.public_id} image={getImage(image)} alt={"TODO"} />
        ))}
      </WorkCarousel>
      <Section style={{ paddingBlock: "var(--spacing-xxl)" }}>
        <Reveal effect="fadeInUp">
          <GatsbyImage image={getImage(media.find(({ public_id }) => public_id.includes("Wall-Print")))} alt="TODO" />
        </Reveal>
      </Section>
      <WorkCarousel backgroundColor={colors.black} color={colors.white}>
        {carousel3.map((image) => (
          <GatsbyImage class="image" key={image.public_id} image={getImage(image)} alt={"TODO"} />
        ))}
      </WorkCarousel>
      <Section style={{ paddingTop: "var(--spacing-xxl)" }}>
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            width: "100%",
            paddingTop: "56.25%",
          }}
        >
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/1vTJ3nX1Bxg?start=8"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
            }}
          ></iframe>
        </div>
      </Section>
    </WorkLayout>
  );
};

export default AmericanCancerPage;

export const Head = () => (
  <>
    <title>American Cancer Society | Emily Buchberger</title>
    <meta
      name="description"
      content="The American Cancer Society asked us to create an immersive experience for those attending the Gala. The visitors were able to walk through an exhibit that highlighted their research efforts. Visitors also connected to personal stories of those affected by cancer through quotes and custom illustrations."
    />
  </>
);


export const query = graphql`
  query {
    allCloudinaryMedia(
      filter: {folder: {regex: "/.*work\\/american-cancer.*/"}}
    ) {
      nodes {
        gatsbyImageData
        public_id
      }
    }
  }
`;
