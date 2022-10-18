import React from "react";
import { StaticImage } from "gatsby-plugin-image";

import { Grid, Row, Section, WorkHeader, WorkLayout } from "@components";
import { colors } from "@styles";

const imageDefaults = { quality: 100, alt: "TODO" };
const imagePath = "../../images/work/audible";

export default function AudiblePage({ location }) {
  return (
    <WorkLayout pathname={location.pathname}>
      <WorkHeader
        title="Audible"
        subtitle="Clearer Membership"
        description="Rethinking Audible’s plans page and product description pages."
        tags={[{ text: "product design", backgroundColor: colors.pink }]}
      />

      <StaticImage
        {...imageDefaults}
        src={`${imagePath}/Audible-Banner.jpg`}
        layout="fullWidth"
        style={{ borderBlock: `3px solid var(--color-black)` }}
      />

      <Section style={{ backgroundColor: "var(--color-black)" }}>
        <StaticImage
          {...imageDefaults}
          src={`${imagePath}/Audible-Plans.jpg`}
        />
      </Section>

      <Section
        style={{
          backgroundColor: "var(--color-black)",
          color: "var(--color-white)",
          paddingBlock: "var(--spacing-xxl)",
        }}
      >
        <p className="h2 w-lg my-none">
          Audible has multiple forms of membership for their customers. In order
          to make the tiers more easily digestible, we redesigned their plans
          page. We also made a recommendation based on thier current use of the
          platform.
        </p>
      </Section>

      <Section>
        <StaticImage {...imageDefaults} src={`${imagePath}/Audible-Web.jpg`} />
      </Section>

      <Section
        style={{
          backgroundColor: "var(--color-black)",
          color: "var(--color-white)",
        }}
      >
        <StaticImage
          {...imageDefaults}
          src={`${imagePath}/Audible-Desktop-Mobile.jpg`}
        />
        <Row
          rowStyles={{
            gap: "var(--spacing-xl)",
            marginTop: "var(--spacing-xl)",
          }}
        >
          <StaticImage
            {...imageDefaults}
            src={`${imagePath}/Audible-Mobile.jpg`}
          />
          <p className="p1 my-none">
            Along with the plans page, Audible wanted to make more immersive and
            engaging product description pages. We added extra content to pair
            with the audiobook as well as clear pricing up front.
          </p>
        </Row>
      </Section>

      <Section>
        <Grid
          gridGap="var(--spacing-xl)"
          style={{ gridTemplateColumns: "1fr 279px", alignItems: "start" }}
        >
          <StaticImage
            {...imageDefaults}
            src={`${imagePath}/Audible-Desktop.jpg`}
          />
          <StaticImage
            {...imageDefaults}
            src={`${imagePath}/Audible-Mobile-Layout.jpg`}
          />
        </Grid>
      </Section>
    </WorkLayout>
  );
}
