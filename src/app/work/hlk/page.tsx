import Image from "next/image";
import { Reveal } from "@/app/components/Reveal";
import { WorkHeader } from "@/app/work/header";
import { LargeText } from "@/app/components/large-text";

import HLK1 from "@/app/public/hlk/hlk-1.jpg";
import HLK2 from "@/app/public/hlk/hlk-2.jpg";
import HLK3 from "@/app/public/hlk/hlk-3.jpg";
import HLK4 from "@/app/public/hlk/hlk-4.jpg";

export default function HlkPage() {
  return (
    <div className="flex flex-col gap-4 sm:gap-8 lg:gap-12">
      <WorkHeader
        brand="HLK"
        title="Internal branding communications at HLK."
        types="Illustration, Layout, Print Production"
      />

      <div className="flex flex-col gap-8 xl:gap-24">
        <div className="">
          <Image alt="HLK Book Cover" src={HLK1} />
        </div>

        <Reveal>
          <LargeText className="font-semibold text-xl">Ripple</LargeText>
          <LargeText className="mb-8">
            Book containing HLK’s weekly internal communication newsletters from
            2020-2021.
          </LargeText>
          <Image alt="HLK Book Inside" src={HLK2} />
        </Reveal>

        <Reveal>
          <LargeText className="font-semibold text-xl">
            Walking Challenge
          </LargeText>
          <LargeText className="mb-8">
            Mailer sent out to all employees inviting them to participate in a
            steps challenge.
          </LargeText>
          <Image alt="HLK Mailer" src={HLK3} />
        </Reveal>

        <Reveal>
          <LargeText className="font-semibold text-xl">Holiday Card</LargeText>
          <LargeText className="mb-8">
            Card thanking partners of HLK for a great year accompanying a gift.
          </LargeText>
          <Image alt="HLK Holiday Card" src={HLK4} />
        </Reveal>
      </div>
    </div>
  );
}
