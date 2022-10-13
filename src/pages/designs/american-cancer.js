import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";

import { Reveal, WorkLayout, WorkCarousel, WorkHeader } from "@components";
import { colors, Section } from "@styles";

const AmericanCancerPage = ({ location }) => {
  const images = useStaticQuery(graphql`
    query {
      allFile(filter: { relativeDirectory: { eq: "work/american-cancer" } }) {
        nodes {
          name
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  `).allFile.nodes.reduce((imageMap, image) => {
    imageMap[image.name] = image.childImageSharp.gatsbyImageData;
    return imageMap;
  }, {});

  console.log(images);

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

      <StaticImage
        src="../../images/work/american-cancer/ACS-Header1.png"
        alt="American Cancer Society Gala"
        placeholder="blurred"
        layout="fullWidth"
        style={{ borderBlock: `2px solid ${colors.black}` }}
      />

      <Section>
        <Reveal effect="fadeInUp" amount="all">
          <p className="h2">
            This booklet was created to highlight the research done by the
            American Cancer Society.
          </p>
        </Reveal>
      </Section>

      <Reveal effect="fadeIn" amount={0.25}>
        <WorkCarousel backgroundColor={colors.darkGray}>
          <GatsbyImage
            image={images["ACS_Gala_Handout-1"]}
            alt="ACS_Gala_Handout-1"
            height={571}
            quality={100}
          />
          <GatsbyImage
            image={images["ACS_Gala_Handout-2"]}
            alt="ACS_Gala_Handout-2"
            height={571}
            quality={100}
          />
          <StaticImage
            src="../../images/work/american-cancer/ACS_Gala_Handout-3.jpg"
            alt="ACS_Gala_Handout-3"
            height={571}
            quality={100}
          />
          <StaticImage
            src="../../images/work/american-cancer/ACS_Gala_Handout-4.jpg"
            alt="ACS_Gala_Handout-4"
            height={571}
            quality={100}
          />
          <StaticImage
            src="../../images/work/american-cancer/ACS_Gala_Handout-5.jpg"
            alt="ACS_Gala_Handout-5"
            height={571}
            quality={100}
          />
          <StaticImage
            src="../../images/work/american-cancer/ACS_Gala_Handout-6.jpg"
            alt="ACS_Gala_Handout-6"
            height={571}
            quality={100}
          />
          <StaticImage
            src="../../images/work/american-cancer/ACS_Gala_Handout-7.jpg"
            alt="ACS_Gala_Handout-7"
            height={571}
            quality={100}
          />
          <StaticImage
            src="../../images/work/american-cancer/ACS_Gala_Handout-8.jpg"
            alt="ACS_Gala_Handout-8"
            height={571}
            quality={100}
          />
          <StaticImage
            src="../../images/work/american-cancer/ACS_Gala_Handout-9.jpg"
            alt="ACS_Gala_Handout-9"
            height={571}
            quality={100}
          />
          <StaticImage
            src="../../images/work/american-cancer/ACS_Gala_Handout-10.jpg"
            alt="ACS_Gala_Handout-10"
            height={571}
            quality={100}
          />
          <StaticImage
            src="../../images/work/american-cancer/ACS_Gala_Handout-11.jpg"
            alt="ACS_Gala_Handout-11"
            height={571}
            quality={100}
          />
          <StaticImage
            src="../../images/work/american-cancer/ACS_Gala_Handout-12.jpg"
            alt="ACS_Gala_Handout-12"
            height={571}
            quality={100}
          />
          <StaticImage
            src="../../images/work/american-cancer/ACS_Gala_Handout-13.jpg"
            alt="ACS_Gala_Handout-13"
            height={571}
            quality={100}
          />
        </WorkCarousel>
      </Reveal>

      <Section>
        <Reveal effect="fadeInUp" amount={0.75}>
          <StaticImage
            src="../../images/work/american-cancer/ACS-Handout-Mockup-1.jpg"
            alt="TODO"
            quality={100}
          />
        </Reveal>
      </Section>

      <Reveal effect="fadeIn" amount={0.25}>
        <WorkCarousel backgroundColor={colors.black}>
          <StaticImage
            src="../../images/work/american-cancer/ACS-1.jpg"
            alt="ACS-1"
            height={600}
            quality={100}
          />
          <StaticImage
            src="../../images/work/american-cancer/ACS-2.jpg"
            alt="ACS-2"
            height={600}
            quality={100}
          />
          <StaticImage
            src="../../images/work/american-cancer/ACS-3.jpg"
            alt="ACS-3"
            height={600}
            quality={100}
          />
          <StaticImage
            src="../../images/work/american-cancer/ACS-4.jpg"
            alt="ACS-4"
            height={600}
            quality={100}
          />
          <StaticImage
            src="../../images/work/american-cancer/ACS-5.jpg"
            alt="ACS-5"
            height={600}
            quality={100}
          />
        </WorkCarousel>
      </Reveal>

      <Reveal effect="fadeInUp">
        <WorkCarousel backgroundColor={colors.lightGray} color={colors.black}>
          <StaticImage
            src="../../images/work/american-cancer/ACS-Gala-Images-1.jpg"
            alt="ACS-Gala-Images-1"
            height={600}
            quality={100}
          />
          <StaticImage
            src="../../images/work/american-cancer/ACS-Gala-Images-2.jpg"
            alt="ACS-Gala-Images-2"
            height={600}
            quality={100}
          />
          <StaticImage
            src="../../images/work/american-cancer/ACS-Gala-Images-3.jpg"
            alt="ACS-Gala-Images-3"
            height={600}
            quality={100}
          />
          <StaticImage
            src="../../images/work/american-cancer/ACS-Gala-Images-4.jpg"
            alt="ACS-Gala-Images-4"
            height={600}
            quality={100}
          />
          <StaticImage
            src="../../images/work/american-cancer/ACS-Gala-Images-5.jpg"
            alt="ACS-Gala-Images-5"
            height={600}
            quality={100}
          />
        </WorkCarousel>
      </Reveal>
    </WorkLayout>
  );
};

export default AmericanCancerPage;
