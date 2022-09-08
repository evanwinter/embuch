import React from "react";
import { WorkHeader } from "../../components/Work/WorkHeader";
import { colors } from "@utils";

export default function HlkPage() {
  return (
    <div>
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
    </div>
  );
}
