import Image from "next/image";
import { Reveal } from "@/app/components/Reveal";
import { TwoColumn } from "@/app/components/two-column";
import { WorkHeader } from "../../header";

import Collateral1 from "@/app/public/vestwell/collateral-1.jpg";
import Collateral2 from "@/app/public/vestwell/collateral-2.jpg";
import Collateral3 from "@/app/public/vestwell/collateral-3.jpg";
import Collateral4 from "@/app/public/vestwell/collateral-4.jpg";
import Collateral5 from "@/app/public/vestwell/collateral-5.jpg";

export default function BrandCollateralPage() {
  return (
    <div className="grid gap-12">
      {/* Header */}
      <WorkHeader
        brand="Vestwell"
        title="Brochures, one-pagers, and sales materials to show off our value prop."
        types="Illustration, Presentation Design, Layout"
      />

      <div className="flex flex-col gap-24">
        <div className="flex flex-col gap-8">
          <Image alt="TODO" src={Collateral1} />
        </div>

        <TwoColumn span={[5, 5]}>
          <div className="">
            <Reveal>
              <Image alt="TODO" src={Collateral2} />
            </Reveal>
          </div>
          <div className="sticky top-8">
            <Reveal>
              <p>
                I developed a comprehensive suite of brand collateral, including
                business cards, swag, brochures, one-pagers, and mailers, to
                support Vestwell's marketing and outreach efforts. Each piece
                was designed with a consistent aesthetic, balancing modern,
                professional visuals with clear, impactful messaging.
              </p>
            </Reveal>
          </div>
        </TwoColumn>

        <TwoColumn span={[5, 5]}>
          <div className="sticky top-8">
            <Reveal>
              <p>
                These materials were tailored to resonate with different
                audiences—whether engaging savers, advisors, or employers—while
                maintaining brand integrity. From sleek, functional business
                cards to eye-catching mailers, this collateral elevated the
                brand's presence and strengthened connections across multiple
                touchpoints.
              </p>
            </Reveal>
          </div>
          <div>
            <Reveal>
              <Image alt="TODO" src={Collateral3} />
            </Reveal>
          </div>
        </TwoColumn>

        <TwoColumn span={[5, 5]}>
          <div className="sticky top-8">
            <Reveal>
              <Image alt="TODO" src={Collateral4} />
            </Reveal>
          </div>
          <div>
            <Reveal>
              <Image alt="TODO" src={Collateral5} />
            </Reveal>
          </div>
        </TwoColumn>
      </div>
    </div>
  );
}
