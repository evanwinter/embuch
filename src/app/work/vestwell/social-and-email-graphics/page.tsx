import Image from "next/image";
import { WorkHeader } from "@/app/work/header";
import { TwoColumn } from "@/app/components/two-column";
import { Reveal } from "@/app/components/Reveal";

import Graphics1 from "@/public/vestwell/graphics-1.gif";
import Graphics2 from "@/public/vestwell/graphics-2.gif";
import Graphics3 from "@/public/vestwell/graphics-3.gif";
import Graphics4 from "@/public/vestwell/graphics-4.gif";
import Graphics5 from "@/public/vestwell/graphics-5.gif";
import Graphics6 from "@/public/vestwell/graphics-6.gif";
import Graphics7 from "@/public/vestwell/graphics-7.gif";
import Graphics8 from "@/public/vestwell/graphics-8.gif";
import { SmallHeading } from "@/app/components/small-heading";
import { LargeText } from "@/app/components/large-text";
import { ResponsiveImage } from "@/app/components/responsive-image";

export default function SocialAndEmailGraphicsPage() {
  return (
    <div className="flex flex-col gap-4 sm:gap-8 lg:gap-12">
      {/* Header */}
      <WorkHeader
        brand="Vestwell &mdash; Social &amp; Email Graphics"
        title="Social posts and graphics for emails that incorporate motion."
        types="Motion, Illustration"
      />

      <div className="flex flex-col gap-12">
        <div className="">
          <ResponsiveImage alt="TODO" src={Graphics1} />
        </div>

        <div>
          <Reveal>
            <LargeText className="font-semibold">Social Posts</LargeText>
          </Reveal>
        </div>

        <div className="">
          <Reveal>
            <ResponsiveImage alt="TODO" src={Graphics2} />
          </Reveal>
        </div>

        <div className="">
          <Reveal>
            <ResponsiveImage alt="TODO" src={Graphics3} />
          </Reveal>
        </div>
        <div className="">
          <Reveal>
            <ResponsiveImage alt="TODO" src={Graphics4} />
          </Reveal>
        </div>
        <div className="">
          <Reveal>
            <ResponsiveImage alt="TODO" src={Graphics5} />
          </Reveal>
        </div>
        <div className="">
          <Reveal>
            <ResponsiveImage alt="TODO" src={Graphics6} />
          </Reveal>
        </div>
        <div className="">
          <Reveal>
            <ResponsiveImage alt="TODO" src={Graphics7} />
          </Reveal>
        </div>
        <div className="">
          <Reveal>
            <ResponsiveImage alt="TODO" src={Graphics8} />
          </Reveal>
        </div>
      </div>
    </div>
  );
}
