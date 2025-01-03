import Image from "next/image";
import { Reveal } from "@/app/components/Reveal";
import { WorkHeader } from "../header";

import ACS1 from "@/public/acs/acs-1.jpg";
import ACS2 from "@/public/acs/acs-2.jpg";
import ACS3 from "@/public/acs/acs-3.jpg";
import ACS4 from "@/public/acs/acs-4.jpg";
import ACS5 from "@/public/acs/acs-5.jpg";
import ACS6 from "@/public/acs/acs-6.jpg";
import ACS7 from "@/public/acs/acs-7.jpg";
import ACS8 from "@/public/acs/acs-8.jpg";
import { TwoColumn } from "@/app/components/two-column";
import { LargeText } from "@/app/components/large-text";
import { ResponsiveImage } from "@/app/components/responsive-image";

export default function ACSPage() {
  return (
    <div className="flex flex-col gap-4 sm:gap-8 lg:gap-12">
      {/* Header */}
      <WorkHeader
        brand="American Cancer Society"
        title="Booklet and experiential design for the American Cancer Society’s Gala."
        types="Experiential Design, Illustration, Layout, Print Production"
      />

      <div className="flex flex-col gap-12">
        <div className="">
          <ResponsiveImage alt="TODO" src={ACS1} />
        </div>

        <div>
          <Reveal>
            <LargeText className="text-pretty max-w-[72ch]">
              The American Cancer Society asked us to create an immersive
              experience for those attending the Gala. The visitors were able to
              walk through an exhibit that highlighted their research efforts.
              Visitors also connected to personal stories of those affected by
              cancer through quotes and custom illustrations.
            </LargeText>
          </Reveal>
        </div>

        <div className="">
          <Reveal>
            <ResponsiveImage alt="TODO" src={ACS2} />
          </Reveal>
        </div>

        <div className="">
          <Reveal>
            <ResponsiveImage alt="TODO" src={ACS3} />
          </Reveal>
        </div>

        <TwoColumn span={[6, 4]}>
          <div>
            <Reveal>
              <ResponsiveImage alt="TODO" src={ACS4} />
            </Reveal>
          </div>
          <div className="sticky top-8">
            <Reveal>
              <ResponsiveImage alt="TODO" src={ACS5} />
            </Reveal>
          </div>
        </TwoColumn>

        <TwoColumn span={[4, 6]}>
          <div className="sticky top-8">
            <Reveal>
              <ResponsiveImage alt="TODO" src={ACS6} />
            </Reveal>
          </div>
          <div className="">
            <Reveal>
              <ResponsiveImage alt="TODO" src={ACS7} />
            </Reveal>
          </div>
        </TwoColumn>

        <div className="">
          <Reveal>
            <ResponsiveImage alt="TODO" src={ACS8} />
          </Reveal>
        </div>

        <div className="mx-auto">
          <iframe
            width="1400"
            height="787.5"
            src="https://www.youtube.com/embed/1vTJ3nX1Bxg?si=CM7GXOs7HFS-S3fh"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}
