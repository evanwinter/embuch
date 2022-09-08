import React from "react";
import { colors } from "@utils";
import { WorkHeader } from "../../components/Work/WorkHeader";

export default function AmbetterPage() {
  return (
    <div>
      <WorkHeader
        title={"American Cancer Society Gala"}
        tags={[
          { text: "design", backgroundColor: colors.pink },
          { text: "production", backgroundColor: colors.orange },
          { text: "illustration", backgroundColor: colors.red },
        ]}
        subtitle={
          "The American Cancer Society 6th Annual Champions of Hope Gala"
        }
        description={
          "Designed the visual look and feel for the American Cancer Society's Gala."
        }
      />
    </div>
  );
}
