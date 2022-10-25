import React from "react";
import { BackLink, Grid, LogoCollection } from "@components";

import KonyKim1 from "@images/fun/logos/Logos-Website-KK-1.jpg";
import KonyKim2 from "@images/fun/logos/Logos-Website-KK-2.jpg";
import KonyKim3 from "@images/fun/logos/Logos-Website-KK-3.jpg";
import KonyKim4 from "@images/fun/logos/Logos-Website-KK-4.jpg";

import Coalfire1 from "@images/fun/logos/Logos-Website-Coalfire-1.jpg";
import Coalfire2 from "@images/fun/logos/Logos-Website-Coalfire-2.jpg";
import Coalfire3 from "@images/fun/logos/Logos-Website-Coalfire-3.jpg";
import Coalfire4 from "@images/fun/logos/Logos-Website-Coalfire-4.jpg";

import Lawndale1 from "@images/fun/logos/Logos-Website-Lawndale-1.jpg";
import Lawndale2 from "@images/fun/logos/Logos-Website-Lawndale-2.jpg";

import PrettyGood1 from "@images/fun/logos/Logos-Website-PG-1.jpg";
import PrettyGood2 from "@images/fun/logos/Logos-Website-PG-2.jpg";
import PrettyGood3 from "@images/fun/logos/Logos-Website-PG-3.jpg";
import PrettyGood4 from "@images/fun/logos/Logos-Website-PG-4.jpg";

import PipeLake from "@images/fun/logos/Logos-Website-PipeLake.jpg";

export default function LogosPage({ location }) {
  return (
    <div>
      <div
        style={{
          marginLeft: "var(--spacing-xl)",
          marginTop: "var(--spacing-xl)",
        }}
      >
        <BackLink to="/fun">back</BackLink>
      </div>

      <h1
        style={{
          marginLeft: "var(--spacing-xl)",
          marginTop: "var(--spacing-xl)",
        }}
      >
        Logos
      </h1>
      <Grid gridGap="4vw" padding="var(--spacing-xl)">
        <LogoCollection
          images={[KonyKim1, KonyKim2, KonyKim3, KonyKim4]}
          isDark={true}
        />
        <LogoCollection images={[Coalfire1, Coalfire2, Coalfire3, Coalfire4]} />
        <LogoCollection images={[Lawndale1, Lawndale2]} />
        <img
          style={{
            width: "100%",
            display: "block",
            border: "2px solid var(--color-black)",
          }}
          className="w-lg"
          src={PipeLake}
        />
        <LogoCollection
          images={[PrettyGood1, PrettyGood2, PrettyGood3, PrettyGood4]}
        />
      </Grid>
    </div>
  );
}
