import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { WorkHeader, WorkLayout } from "@components";
import { colors } from "@styles";

export default function AudiblePage({ location }) {
  return (
    <WorkLayout pathname={location.pathname}>
      <WorkHeader
        title={"Audible"}
        tags={[{ text: "product design", backgroundColor: colors.pink }]}
        description={
          "Rethinking Audible’s plans page and product description pages."
        }
      />

      <StaticImage
        style={{ marginBottom: "80px" }}
        src="../../images/work/audible/audible-1.jpg"
        alt="TODO"
      />
      <StaticImage
        style={{ marginBottom: "80px" }}
        src="../../images/work/audible/audible-2.jpg"
        alt="TODO"
      />
      <StaticImage
        style={{ marginBottom: "80px" }}
        src="../../images/work/audible/audible-3.jpg"
        alt="TODO"
      />
      <StaticImage
        style={{ marginBottom: "80px" }}
        src="../../images/work/audible/audible-4.jpg"
        alt="TODO"
      />

      <div style={{ display: "flex", gap: "50px", paddingInline: "36px" }}>
        <div>
          <StaticImage
            src="../../images/work/audible/audible-5.jpg"
            alt="TODO"
          />
        </div>
        <div style={{ maxWidth: "273px" }}>
          <StaticImage
            src="../../images/work/audible/audible-6.jpg"
            alt="TODO"
          />
        </div>
      </div>
    </WorkLayout>
  );
}
