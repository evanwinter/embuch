import React from "react";
import { WorkHeader, WorkLayout } from "@components";
import { colors } from "@styles";

export default function AmbetterPage({ location }) {
  return (
    <WorkLayout pathname={location.pathname}>
      <WorkHeader
        title="Ambetter x Nascar"
        tags={[
          { text: "design", backgroundColor: colors.pink },
          { text: "production", backgroundColor: colors.orange },
        ]}
        description="Rethinking Audible's plans page and product description pages."
      />
    </WorkLayout>
  );
}
