import React from "react";
import { WorkHeader, WorkLayout } from "@components";

export default function UltaPage({ location }) {
  return (
    <WorkLayout pathname={location.pathname}>
      <WorkHeader title="Ulta" tags={[]} description="" />
    </WorkLayout>
  );
}
