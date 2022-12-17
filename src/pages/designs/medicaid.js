import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";

import {
  Reveal,
  Row,
  Section,
  WorkBanner,
  WorkHeader,
  WorkLayout,
} from "@components";

export default function MedicaidPage({ data, location }) {
  const media = data.allCloudinaryMedia.nodes;
  const socials = media.filter(({ public_id }) => public_id.includes("/Social-"));
  const videos = media.filter(({ public_id }) => public_id.includes("/Video-"));
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
        <GatsbyImage
          class="banner-image"
          image={getImage(media.find(({ public_id }) => public_id.includes("Medicaid-Banner_")))}
          alt="Medicaid Banner"
        />
      </WorkBanner>

      <Section className="py-xxl">
        <Reveal effect="fadeInUp">
          <GatsbyImage
            image={getImage(media.find(({ public_id }) => public_id.includes("Medicaid-Flyer_")))}
            alt="Medicaid Flyer"
          />
        </Reveal>
      </Section>

      <Section
        className="py-xxl"
        style={{ backgroundColor: "var(--color-black)" }}
      >
        <Reveal effect="fadeInUp">
          <GatsbyImage
            image={getImage(media.find(({ public_id }) => public_id.includes("IG-Posts_")))}
            alt="Medicaid IG Posts"
          />
        </Reveal>
      </Section>

      <Section style={{ paddingBlock: "var(--spacing-xxl)" }}>
        <Row rowStyles={{ gap: "var(--spacing-xl)" }}>
          {videos.map((video, index) => (
            <Reveal key={video.public_id} effect="fadeInUp" delay={index * 0.15}>
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
                <source src={video.secure_url} type="video/mp4" />
              </video>
            </Reveal>
          ))}
        </Row>
      </Section>

      <Section
        className="py-xxl"
        style={{ backgroundColor: "var(--color-black)" }}
      >
        <Reveal effect="fadeInUp">
          <GatsbyImage
            image={getImage(media.find(({ public_id }) => public_id.includes("/OOH_")))}
            alt="Medicaid out-of-home"
          />
        </Reveal>
      </Section>
      <Section className="py-xxl">
        {socials.map((image, index) => (
          <Reveal key={image.public_id} effect="fadeInUp">
            <GatsbyImage
              image={getImage(image)}
              alt="Medicaid social media"
              className={index === socials.length - 1 ? "" : "mb-xl"}
            />
          </Reveal>
        ))}
      </Section>
    </WorkLayout>
  );
}

export const Head = () => (
  <>
    <title>Medicaid | Emily Buchberger</title>
    <meta
      name="description"
      content="The design system for Medicaid had to flex for each state while staying uniform."
    />
  </>
);

export const query = graphql`
  query {
    allCloudinaryMedia(
      filter: {folder: {regex: "/.*work\\/medicaid.*/"}}
    ) {
      nodes {
        gatsbyImageData
        public_id
        secure_url
      }
    }
  }
`;
