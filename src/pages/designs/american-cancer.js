import React from "react";
import { StaticImage } from "gatsby-plugin-image";

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

const imageDefaults = { quality: 100, alt: "TODO" };
const imagePath = "../../images/work/american-cancer";

const AmericanCancerPage = ({ location }) => {
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
        <StaticImage
          {...imageDefaults}
          src={`${imagePath}/ACS-Header1.png`}
          alt="American Cancer Society Gala"
          layout="fullWidth"
          style={{ borderBlock: `2px solid ${colors.black}` }}
        />
      </WorkBanner>

      <Section>
        <Reveal effect="fadeInUp" distance="md">
          <p className="h2 my-none mx-auto">
            This booklet was created to highlight the research done by the
            American Cancer Society.
          </p>
        </Reveal>
      </Section>

      <WorkCarousel backgroundColor={colors.darkGray}>
        <StaticImage
          {...imageDefaults}
          src={`${imagePath}/Handout-1.jpg`}
          alt="Handout-1"
          height={571}
        />
        <StaticImage
          {...imageDefaults}
          src={`${imagePath}/Handout-2.jpg`}
          alt="Handout-2"
          height={571}
        />
        <StaticImage
          {...imageDefaults}
          src={`${imagePath}/Handout-3.jpg`}
          alt="Handout-3"
          height={571}
        />
        <StaticImage
          {...imageDefaults}
          src={`${imagePath}/Handout-4.jpg`}
          alt="Handout-4"
          height={571}
        />
        <StaticImage
          {...imageDefaults}
          src={`${imagePath}/Handout-5.jpg`}
          alt="Handout-5"
          height={571}
        />
        <StaticImage
          {...imageDefaults}
          src={`${imagePath}/Handout-6.jpg`}
          alt="Handout-6"
          height={571}
        />
        <StaticImage
          {...imageDefaults}
          src={`${imagePath}/Handout-7.jpg`}
          alt="Handout-7"
          height={571}
        />
      </WorkCarousel>

      <Section>
        <Reveal effect="fadeInUp">
          <StaticImage
            {...imageDefaults}
            src={`${imagePath}/ACS-Handout-Mockup-1.jpg`}
            objectFit="contain"
          />
        </Reveal>
      </Section>

      <Section
        style={{
          backgroundColor: "var(--color-black)",
          color: "var(--color-white)",
          paddingBottom: 0,
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
            <StaticImage {...imageDefaults} src={`${imagePath}/ACS-5.jpg`} />
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
            marginTop: "var(--spacing-xl)",
            justifyContent: "space-between",
          }}
        >
          <Reveal effect="fadeInUp" amount={0.25}>
            <StaticImage
              {...imageDefaults}
              src={`${imagePath}/Research-Highlights-1.jpg`}
              height={571}
            />
          </Reveal>
          <Reveal effect="fadeInUp" amount={0.25} delay={0.15}>
            <StaticImage
              {...imageDefaults}
              src={`${imagePath}/Research-Highlights-2.jpg`}
              height={571}
            />
          </Reveal>
          <Reveal effect="fadeInUp" amount={0.25} delay={0.3}>
            <StaticImage
              {...imageDefaults}
              src={`${imagePath}/Research-Highlights-3.jpg`}
              height={571}
            />
          </Reveal>
        </Row>
      </Section>

      <WorkCarousel backgroundColor={colors.black}>
        <StaticImage
          {...imageDefaults}
          src={`${imagePath}/ACS-1.jpg`}
          alt="ACS-1"
          height={571}
        />
        <StaticImage
          {...imageDefaults}
          src={`${imagePath}/ACS-2.jpg`}
          alt="ACS-2"
          height={571}
        />
        <StaticImage
          {...imageDefaults}
          src={`${imagePath}/ACS-3.jpg`}
          alt="ACS-3"
          height={571}
        />
        <StaticImage
          {...imageDefaults}
          src={`${imagePath}/ACS-4.jpg`}
          alt="ACS-4"
          height={571}
        />
        <StaticImage
          {...imageDefaults}
          src={`${imagePath}/ACS-5.jpg`}
          alt="ACS-5"
          height={571}
        />
      </WorkCarousel>

      <Section>
        <Reveal effect="fadeInUp">
          <StaticImage
            {...imageDefaults}
            src={`${imagePath}/Wall-Print.jpg`}
            objectFit="contain"
          />
        </Reveal>
      </Section>

      <WorkCarousel backgroundColor={colors.black} color={colors.white}>
        <StaticImage
          {...imageDefaults}
          src={`${imagePath}/ACS-Gala-Images-1.jpg`}
          alt="ACS-Gala-Images-1"
          height={700}
        />
        <StaticImage
          {...imageDefaults}
          src={`${imagePath}/ACS-Gala-Images-2.jpg`}
          alt="ACS-Gala-Images-2"
          height={700}
        />
        <StaticImage
          {...imageDefaults}
          src={`${imagePath}/ACS-Gala-Images-3.jpg`}
          alt="ACS-Gala-Images-3"
          height={700}
        />
        <StaticImage
          {...imageDefaults}
          src={`${imagePath}/ACS-Gala-Images-4.jpg`}
          alt="ACS-Gala-Images-4"
          height={700}
        />
        <StaticImage
          {...imageDefaults}
          src={`${imagePath}/ACS-Gala-Images-5.jpg`}
          alt="ACS-Gala-Images-5"
          height={700}
        />
      </WorkCarousel>

      <Section>
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
            framerBorder="0"
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
