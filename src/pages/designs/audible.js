import React from "react";
import { WorkHeader } from "../../components/Work/WorkHeader";
import { colors } from "@utils";

export default function AudiblePage() {
  return (
    <div>
      <WorkHeader
        title={"Audible"}
        tags={[{ text: "product design", backgroundColor: colors.pink }]}
        description={
          "Rethinking Audible’s plans page and product description pages."
        }
      />
    </div>
  );
}
