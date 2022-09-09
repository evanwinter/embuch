import React from "react";
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
    </WorkLayout>
  );
}
