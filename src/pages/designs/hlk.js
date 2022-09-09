import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { WorkCarousel, WorkHeader, WorkLayout } from "@components";
import { colors } from "@styles";

export default function HlkPage({ location }) {
  return (
    <WorkLayout pathname={location.pathname}>
      <WorkHeader
        title={"HLK Brand"}
        tags={[
          { text: "design", backgroundColor: colors.pink },
          { text: "production", backgroundColor: colors.orange },
          { text: "illustration", backgroundColor: colors.red },
        ]}
        subtitle={"Ripple: Volume One"}
        description={
          "Book containing HLK’s weekly internal communication newsletters from 2020-2021."
        }
      />
      <StaticImage
        src="../../images/work/hlk/Ripple-Book_Mockup.jpg"
        alt="TODO"
        quality={100}
      />

      <WorkCarousel
        tab="Book"
        backgroundColor={colors.lightGray}
        color={colors.black}
      >
        <StaticImage
          src="../../images/work/hlk/Ripple_Spread_1.jpg"
          alt="TODO"
          height={600}
          quality={100}
        />
        <StaticImage
          src="../../images/work/hlk/Ripple_Spread_3.jpg"
          alt="TODO"
          height={600}
          quality={100}
        />
        <StaticImage
          src="../../images/work/hlk/Ripple_Spread_4.jpg"
          alt="TODO"
          height={600}
          quality={100}
        />
      </WorkCarousel>

      <h2
        style={{ marginTop: "120px", marginLeft: "70px", marginBottom: "40px" }}
      >
        Walking Challenge Informational Card
      </h2>
      <StaticImage
        src="../../images/work/hlk/HLK-WALKING-CHALLENGE-05.jpg"
        alt="TODO"
        quality={100}
      />

      <h2
        style={{ marginTop: "120px", marginLeft: "70px", marginBottom: "40px" }}
      >
        Holiday Card
      </h2>
      <StaticImage
        src="../../images/work/hlk/holiday-card-mockup.jpg"
        alt="TODO"
        quality={100}
      />
    </WorkLayout>
  );
}
