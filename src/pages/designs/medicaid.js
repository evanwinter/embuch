import React from "react";
import { WorkHeader, WorkLayout } from "@components";

export default function MedicaidPage({ location }) {
  return (
    <WorkLayout pathname={location.pathname}>
      <WorkHeader
        title="Medicaid"
        tags={[]}
        description="Rethinking Audible's plans page and product description pages."
      />
    </WorkLayout>
  );
}
