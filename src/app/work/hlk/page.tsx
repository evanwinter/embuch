import Image from "next/image";
import { Reveal } from "@/app/components/Reveal";
import { WorkHeader } from "../header";

import HLK1 from "@/app/public/hlk/hlk-1.jpg";
import HLK2 from "@/app/public/hlk/hlk-2.jpg";
import HLK3 from "@/app/public/hlk/hlk-3.jpg";
import HLK4 from "@/app/public/hlk/hlk-4.jpg";

export default function HlkPage() {
  return (
    <div className="flex flex-col gap-4 sm:gap-8 lg:gap-12">
      {/* Header */}
      <WorkHeader
        brand="HLK"
        title="Work for an advertising agency based in St. Louis."
        types="Stuff"
      />

      <div className="flex flex-col gap-8 xl:gap-24">
        <div className="">
          <Image alt="TODO" src={HLK1} />
        </div>

        <div className="">
          <Reveal>
            <Image alt="TODO" src={HLK2} />
          </Reveal>
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
            <Image alt="TODO" src={HLK3} />
          </Reveal>
        </div>

        <div className="">
          <Reveal>
            <Image alt="TODO" src={HLK4} />
          </Reveal>
        </div>
      </div>
    </div>
  );
}
