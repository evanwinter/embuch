import React from "react";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import { WorkLayout, WorkCarousel, WorkHeader } from "@components";
import { colors } from "@styles";
import Row from "../../components/Row";
import { useStaticQuery, graphql } from "gatsby";

export default function AmericanCancerPage({ location }) {
  // Get images from graphql layer
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
        style={{ borderBlock: `3px solid ${colors.black}` }}
      />

      <WorkCarousel
        backgroundColor={colors.darkGray}
        headline="Handout outlining research efforts given out to attendees of the Gala."
      >
        <StaticImage
          src="../../images/work/american-cancer/ACS_Gala_Handout-1.jpg"
          alt="ACS_Gala_Handout-1"
          height={571}
          quality={100}
        />
        <StaticImage
          src="../../images/work/american-cancer/ACS_Gala_Handout-2.jpg"
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

      <WorkCarousel
        backgroundColor={colors.darkGray}
        headline="Handout outlining research efforts given out to attendees of the Gala."
      >
        <StaticImage
          src="../../images/work/american-cancer/ACS_Gala_Handout-1.jpg"
          alt="ACS_Gala_Handout-1"
          height={571}
          width={571}
          quality={100}
        />
        <StaticImage
          src="../../images/work/american-cancer/ACS_Gala_Handout-2.jpg"
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

      <div
        style={{ display: "flex", justifyContent: "center" }}
        className="my-lg"
      >
        <StaticImage
          src="../../images/work/american-cancer/ACS-Handout-Mockup.jpg"
          alt="TODO"
          height={700}
          quality={100}
        />
      </div>

      <Row>
        <StaticImage
          src="../../images/work/american-cancer/ACS-Handout-Mockup.jpg"
          alt="TODO"
          height={700}
          quality={100}
        />
        <StaticImage
          src="../../images/work/american-cancer/ACS-Handout-Mockup.jpg"
          alt="TODO"
          height={700}
          quality={100}
        />
      </Row>

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

      <WorkCarousel
        backgroundColor={colors.white}
        color={colors.black}
        style={{ marginTop: 0 }}
      >
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
    </WorkLayout>
  );
}
