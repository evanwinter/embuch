import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";

import { Reveal, Row, WorkLayout, WorkCarousel, WorkHeader } from "@components";
import { colors, Section } from "@styles";

const AmericanCancerPage = ({ location }) => {
  // Load images
  const images = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "work/american-cancer" } }) {
        nodes {
          name
          childImageSharp {
            gatsbyImageData(quality: 100)
          }
        }
      }
    }
  `).allFile.nodes.reduce((imageMap, image) => {
    imageMap[image.name] = image.childImageSharp.gatsbyImageData;
    return imageMap;
  }, {});

  const BannerImage = () => (
    <StaticImage
      src="../../images/work/american-cancer/ACS-Header1.png"
      alt="American Cancer Society Gala"
      style={{ borderBlock: `2px solid ${colors.black}` }}
    />
  );

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

      <BannerImage />

      <Section>
        <Reveal effect="fadeInUp" amount="all">
          <p className="h2">
            This booklet was created to highlight the research done by the
            American Cancer Society.
          </p>
        </Reveal>
      </Section>

      <Reveal effect="fadeIn">
        <WorkCarousel backgroundColor={colors.darkGray}>
          <StaticImage
            src="../../images/work/american-cancer/ACS_Gala_Handout-1.jpg"
            alt="ACS_Gala_Handout-1"
            height={571}
          />
          <StaticImage
            src="../../images/work/american-cancer/ACS_Gala_Handout-2.jpg"
            alt="ACS_Gala_Handout-2"
            height={571}
          />
          <StaticImage
            src="../../images/work/american-cancer/ACS_Gala_Handout-3.jpg"
            alt="ACS_Gala_Handout-3"
            height={571}
          />
          <StaticImage
            src="../../images/work/american-cancer/ACS_Gala_Handout-4.jpg"
            alt="ACS_Gala_Handout-4"
            height={571}
          />
          <StaticImage
            src="../../images/work/american-cancer/ACS_Gala_Handout-5.jpg"
            alt="ACS_Gala_Handout-5"
            height={571}
          />
          <StaticImage
            src="../../images/work/american-cancer/ACS_Gala_Handout-6.jpg"
            alt="ACS_Gala_Handout-6"
            height={571}
          />
          <StaticImage
            src="../../images/work/american-cancer/ACS_Gala_Handout-7.jpg"
            alt="ACS_Gala_Handout-7"
            height={571}
          />
          <StaticImage
            src="../../images/work/american-cancer/ACS_Gala_Handout-8.jpg"
            alt="ACS_Gala_Handout-8"
            height={571}
          />
          <StaticImage
            src="../../images/work/american-cancer/ACS_Gala_Handout-9.jpg"
            alt="ACS_Gala_Handout-9"
            height={571}
          />
          <StaticImage
            src="../../images/work/american-cancer/ACS_Gala_Handout-10.jpg"
            alt="ACS_Gala_Handout-10"
            height={571}
          />
          <StaticImage
            src="../../images/work/american-cancer/ACS_Gala_Handout-11.jpg"
            alt="ACS_Gala_Handout-11"
            height={571}
          />
          <StaticImage
            src="../../images/work/american-cancer/ACS_Gala_Handout-12.jpg"
            alt="ACS_Gala_Handout-12"
            height={571}
          />
          <StaticImage
            src="../../images/work/american-cancer/ACS_Gala_Handout-13.jpg"
            alt="ACS_Gala_Handout-13"
            height={571}
          />
        </WorkCarousel>
      </Reveal>

      <Section>
        <Reveal effect="fadeInUp">
          <StaticImage
            src="../../images/work/american-cancer/ACS-Handout-Mockup-1.jpg"
            alt="TODO"
            objectFit="contain"
          />
        </Reveal>
      </Section>

      <Section
        style={{
          backgroundColor: "var(--color-black)",
          color: "var(--color-white)",
        }}
      >
        <Row rowStyles={{ justifyContent: "space-between" }}>
          <Reveal
            effect="fadeInUp"
            amount={0.25}
            style={{
              display: "flex",
              // justifyContent: "center",
              alignItems: "center",
            }}
          >
            <StaticImage
              src="../../images/work/american-cancer/ACS-5.jpg"
              alt="TODO"
              height={700}
              quality={100}
            />
          </Reveal>
          <Reveal effect="fadeInUp" amount={0.25} delay={0.5}>
            <p
              className="p1"
              style={{
                fontWeight: "lighter",
              }}
            >
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
            marginTop: "var(--spacing-xl)",
            justifyContent: "space-between",
          }}
        >
          <Reveal effect="fadeInUp" amount={0.25}>
            <StaticImage
              src="../../images/work/american-cancer/Research-Highlights-1.jpg"
              quality={100}
              height={571}
            />
          </Reveal>
          <Reveal effect="fadeInUp" amount={0.25} delay={0.15}>
            <StaticImage
              src="../../images/work/american-cancer/Research-Highlights-2.jpg"
              quality={100}
              height={571}
            />
          </Reveal>
          <Reveal effect="fadeInUp" amount={0.25} delay={0.3}>
            <StaticImage
              src="../../images/work/american-cancer/Research-Highlights-3.jpg"
              quality={100}
              height={571}
            />
          </Reveal>
        </Row>
      </Section>

      <Reveal effect="fadeIn" amount={0.25}>
        <WorkCarousel backgroundColor={colors.black}>
          <StaticImage
            src="../../images/work/american-cancer/ACS-1.jpg"
            alt="ACS-1"
            height={571}
          />
          <StaticImage
            src="../../images/work/american-cancer/ACS-2.jpg"
            alt="ACS-2"
            height={571}
          />
          <StaticImage
            src="../../images/work/american-cancer/ACS-3.jpg"
            alt="ACS-3"
            height={571}
          />
          <StaticImage
            src="../../images/work/american-cancer/ACS-4.jpg"
            alt="ACS-4"
            height={571}
          />
          <StaticImage
            src="../../images/work/american-cancer/ACS-5.jpg"
            alt="ACS-5"
            height={571}
          />
        </WorkCarousel>
      </Reveal>

      <Reveal effect="fadeInUp">
        <WorkCarousel backgroundColor={colors.lightGray} color={colors.black}>
          <StaticImage
            src="../../images/work/american-cancer/ACS-Gala-Images-1.jpg"
            alt="ACS-Gala-Images-1"
            height={571}
          />
          <StaticImage
            src="../../images/work/american-cancer/ACS-Gala-Images-2.jpg"
            alt="ACS-Gala-Images-2"
            height={571}
          />
          <StaticImage
            src="../../images/work/american-cancer/ACS-Gala-Images-3.jpg"
            alt="ACS-Gala-Images-3"
            height={571}
          />
          <StaticImage
            src="../../images/work/american-cancer/ACS-Gala-Images-4.jpg"
            alt="ACS-Gala-Images-4"
            height={571}
          />
          <StaticImage
            src="../../images/work/american-cancer/ACS-Gala-Images-5.jpg"
            alt="ACS-Gala-Images-5"
            height={571}
          />
        </WorkCarousel>
      </Reveal>
    </WorkLayout>
  );
};

export default AmericanCancerPage;
