import { WorkHeader } from "@/app/work/header";
import Image from "next/image";
import Booth1 from "@/public/vestwell/booth-1.jpg";
import Booth2 from "@/public/vestwell/booth-2.jpg";
import Booth3 from "@/public/vestwell/booth-3.jpg";
import Booth4 from "@/public/vestwell/booth-4.jpg";

import { TwoColumn } from "@/app/components/two-column";
import { Reveal } from "@/app/components/Reveal";
import { LargeText } from "@/app/components/large-text";
import { ResponsiveImage } from "@/app/components/responsive-image";

export default function ConferenceBoothPage() {
  return (
    <div className="flex flex-col gap-4 sm:gap-8 lg:gap-12">
      {/* Header */}
      <WorkHeader
        brand="Vestwell &mdash; Conference Booth"
        title="Conference booth design for Vestwell's largest conference of the year."
        types="Experiential Design"
      />

      <div className="flex flex-col gap-12">
        <div className="">
          <ResponsiveImage alt="TODO" src={Booth1} />
        </div>

        <div className="">
          <Reveal>
            <ResponsiveImage alt="TODO" src={Booth2} />
          </Reveal>
        </div>

        <TwoColumn span={[4, 6]}>
          <div className="sticky top-8">
            <Reveal>
              <ResponsiveImage alt="TODO" src={Booth3} />
            </Reveal>
          </div>
          <div className="">
            <Reveal>
              <ResponsiveImage alt="TODO" src={Booth4} />
            </Reveal>
          </div>
        </TwoColumn>
      </div>
    </div>
  );
}
