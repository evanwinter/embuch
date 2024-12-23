import { WorkHeader } from "@/app/work/header";
import Image from "next/image";
import Booth1 from "@/app/public/vestwell/booth-1.jpg";
import Booth2 from "@/app/public/vestwell/booth-2.jpg";
import Booth3 from "@/app/public/vestwell/booth-3.jpg";
import Booth4 from "@/app/public/vestwell/booth-4.jpg";

import { TwoColumn } from "@/app/components/two-column";
import { Reveal } from "@/app/components/Reveal";
import { LargeText } from "@/app/components/large-text";

export default function ConferenceBoothPage() {
  return (
    <div className="flex flex-col gap-4 sm:gap-8 lg:gap-12">
      {/* Header */}
      <WorkHeader
        brand="Vestwell &mdash; Conference Booth"
        title="Conference booth design for Vestwell's largest conference of the year."
        types="Experiential Design"
      />

      <div className="flex flex-col gap-8 xl:gap-24">
        <div className="">
          <Image alt="TODO" src={Booth1} />
        </div>

        <div className="">
          <Reveal>
            <LargeText className="text-pretty max-w-[60ch]">
              I developed a comprehensive suite of brand collateral, including
              business cards, swag, brochures, one-pagers, and mailers, to
              support Vestwell's marketing and outreach efforts. Each piece was
              designed with a consistent aesthetic, balancing modern,
              professional visuals with clear, impactful messaging. These
              materials were tailored to resonate with different
              audiences—whether engaging savers, advisors, or employers—while
              maintaining brand integrity. From sleek, functional business cards
              to eye-catching mailers, this collateral elevated the brand's
              presence and strengthened connections across multiple touchpoints.
            </LargeText>
          </Reveal>
        </div>

        <div className="">
          <Reveal>
            <Image alt="TODO" src={Booth2} />
          </Reveal>
        </div>

        <TwoColumn span={[4, 6]}>
          <div className="sticky top-8">
            <Reveal>
              <Image alt="TODO" src={Booth3} />
            </Reveal>
          </div>
          <div className="">
            <Reveal>
              <Image alt="TODO" src={Booth4} />
            </Reveal>
          </div>
        </TwoColumn>
      </div>
    </div>
  );
}
