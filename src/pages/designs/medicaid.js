import React from "react";
import { WorkHeader, WorkLayout } from "@components";

export default function MedicaidPage({ location }) {
  return (
    <WorkLayout pathname={location.pathname}>
      <WorkHeader title="Medicaid" tags={[]} />
    </WorkLayout>
  );
}
