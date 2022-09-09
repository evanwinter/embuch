import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { WorkLayout, WorkCarousel, WorkHeader } from "@components";
import { colors } from "@styles";

export default function AmericanCancerPage({ location }) {
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
      <WorkCarousel tab="Research" backgroundColor={colors.darkGray}>
        <StaticImage
          src="../../images/work/american-cancer/ACS_Gala_Handout-1.jpg"
          alt="ACS_Gala_Handout-1"
          height={600}
          quality={100}
        />
        <StaticImage
          src="../../images/work/american-cancer/ACS_Gala_Handout-2.jpg"
          alt="ACS_Gala_Handout-2"
          height={600}
          quality={100}
        />
        <StaticImage
          src="../../images/work/american-cancer/ACS_Gala_Handout-3.jpg"
          alt="ACS_Gala_Handout-3"
          height={600}
          quality={100}
        />
        <StaticImage
          src="../../images/work/american-cancer/ACS_Gala_Handout-4.jpg"
          alt="ACS_Gala_Handout-4"
          height={600}
          quality={100}
        />
        <StaticImage
          src="../../images/work/american-cancer/ACS_Gala_Handout-5.jpg"
          alt="ACS_Gala_Handout-5"
          height={600}
          quality={100}
        />
        <StaticImage
          src="../../images/work/american-cancer/ACS_Gala_Handout-6.jpg"
          alt="ACS_Gala_Handout-6"
          height={600}
          quality={100}
        />
        <StaticImage
          src="../../images/work/american-cancer/ACS_Gala_Handout-7.jpg"
          alt="ACS_Gala_Handout-7"
          height={600}
          quality={100}
        />
        <StaticImage
          src="../../images/work/american-cancer/ACS_Gala_Handout-8.jpg"
          alt="ACS_Gala_Handout-8"
          height={600}
          quality={100}
        />
        <StaticImage
          src="../../images/work/american-cancer/ACS_Gala_Handout-9.jpg"
          alt="ACS_Gala_Handout-9"
          height={600}
          quality={100}
        />
        <StaticImage
          src="../../images/work/american-cancer/ACS_Gala_Handout-10.jpg"
          alt="ACS_Gala_Handout-10"
          height={600}
          quality={100}
        />
        <StaticImage
          src="../../images/work/american-cancer/ACS_Gala_Handout-11.jpg"
          alt="ACS_Gala_Handout-11"
          height={600}
          quality={100}
        />
        <StaticImage
          src="../../images/work/american-cancer/ACS_Gala_Handout-12.jpg"
          alt="ACS_Gala_Handout-12"
          height={600}
          quality={100}
        />
        <StaticImage
          src="../../images/work/american-cancer/ACS_Gala_Handout-13.jpg"
          alt="ACS_Gala_Handout-13"
          height={600}
          quality={100}
        />
      </WorkCarousel>

      <StaticImage
        src="../../images/work/american-cancer/ACS-Handout-Mockup.jpg"
        alt="TODO"
      />

      <WorkCarousel tab="Impact" backgroundColor={colors.black}>
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
