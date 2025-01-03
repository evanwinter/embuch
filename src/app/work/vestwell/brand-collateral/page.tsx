import Image from "next/image";
import { Reveal } from "@/app/components/Reveal";
import { TwoColumn } from "@/app/components/two-column";
import { WorkHeader } from "../../header";

import Collateral1 from "@/public/vestwell/collateral-1.gif";
import Collateral2 from "@/public/vestwell/collateral-2.jpg";
import Collateral3 from "@/public/vestwell/collateral-3.jpg";
import Collateral4 from "@/public/vestwell/collateral-4.jpg";
import Collateral5 from "@/public/vestwell/collateral-5.jpg";
import { LargeText } from "@/app/components/large-text";
import { ResponsiveImage } from "@/app/components/responsive-image";

export default function BrandCollateralPage() {
  return (
    <div className="grid gap-12">
      {/* Header */}
      <WorkHeader
        brand="Vestwell &mdash; Brand Collateral"
        title="Brochures, one-pagers, and swag that highlight the Vestwell brand."
        types="Illustration, Layout, Print Production"
      />

      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-8">
          <ResponsiveImage alt="TODO" src={Collateral1} />
        </div>

        <div>
          <Reveal>
            <LargeText className="max-w-[60ch] text-pretty">
              Developed a comprehensive suite of brand collateral, including
              business cards, swag, brochures, one-pagers, and mailers, to
              support Vestwell's marketing and outreach efforts.
            </LargeText>
          </Reveal>
        </div>
        <TwoColumn span={[5, 5]}>
          <div className="">
            <Reveal>
              <ResponsiveImage alt="TODO" src={Collateral2} />
            </Reveal>
          </div>
          <div>
            <Reveal>
              <ResponsiveImage alt="TODO" src={Collateral3} />
            </Reveal>
          </div>
        </TwoColumn>

        {/* <TwoColumn span={[5, 5]}>
          <div className="sticky top-8">
            <Reveal>
              <LargeText>
                These materials were tailored to resonate with different
                audiences—whether engaging savers, advisors, or employers—while
                maintaining brand integrity. From sleek, functional business
                cards to eye-catching mailers, this collateral elevated the
                brand's presence and strengthened connections across multiple
                touchpoints.
              </LargeText>
            </Reveal>
          </div>
          <div>
            <Reveal>
              <ResponsiveImage alt="TODO" src={Collateral3} />
            </Reveal>
          </div>
        </TwoColumn> */}

        <TwoColumn span={[5, 5]}>
          <div className="sticky top-8">
            <Reveal>
              <ResponsiveImage alt="TODO" src={Collateral4} />
            </Reveal>
          </div>
          <div>
            <Reveal>
              <ResponsiveImage alt="TODO" src={Collateral5} />
            </Reveal>
          </div>
        </TwoColumn>
      </div>
    </div>
  );
}
