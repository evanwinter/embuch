import Image from "next/image";
import { Reveal } from "@/app/components/Reveal";
import { WorkHeader } from "../header";

import ACS1 from "@/app/public/acs/acs-1.jpg";
import ACS2 from "@/app/public/acs/acs-2.jpg";
import ACS3 from "@/app/public/acs/acs-3.jpg";
import ACS4 from "@/app/public/acs/acs-4.jpg";
import ACS5 from "@/app/public/acs/acs-5.jpg";
import ACS6 from "@/app/public/acs/acs-6.jpg";
import ACS7 from "@/app/public/acs/acs-7.jpg";
import ACS8 from "@/app/public/acs/acs-8.jpg";
import { TwoColumn } from "@/app/components/two-column";

export default function ACSPage() {
  return (
    <div className="flex flex-col gap-4 sm:gap-8 lg:gap-12">
      {/* Header */}
      <WorkHeader
        brand="American Cancer Society"
        title="Design services for the annual American Cancer Society gala."
        types="Stuff"
      />

      <div className="flex flex-col gap-8 xl:gap-24">
        <div className="">
          <Image alt="TODO" src={ACS1} />
        </div>

        <div>
          <p className="max-w-[80ch] text-pretty leading-tight">
            Voluptate elit cillum dolore exercitation ad ut consectetur esse
            officia amet dolore exercitation ullamco quis. Ipsum eiusmod nulla
            minim pariatur sunt dolor proident laboris aute qui enim aliqua
            sunt. Magna magna eu eu officia exercitation excepteur ex. Irure
            eiusmod nulla minim ad anim aute.
          </p>
        </div>

        <div className="">
          <Reveal>
            <Image alt="TODO" src={ACS2} />
          </Reveal>
        </div>

        <div className="">
          <Reveal>
            <Image alt="TODO" src={ACS3} />
          </Reveal>
        </div>

        <TwoColumn span={[6, 4]}>
          <div>
            <Reveal>
              <Image alt="TODO" src={ACS4} />
            </Reveal>
          </div>
          <div className="sticky top-8">
            <Reveal>
              <Image alt="TODO" src={ACS5} />
            </Reveal>
          </div>
        </TwoColumn>

        <TwoColumn span={[4, 6]}>
          <div className="sticky top-8">
            <Reveal>
              <Image alt="TODO" src={ACS6} />
            </Reveal>
          </div>
          <div className="">
            <Reveal>
              <Image alt="TODO" src={ACS7} />
            </Reveal>
          </div>
        </TwoColumn>

        <div className="">
          <Reveal>
            <Image alt="TODO" src={ACS8} />
          </Reveal>
        </div>
      </div>
    </div>
  );
}
