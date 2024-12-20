import Image from "next/image";

import MobileAppLaunch1 from "@/app/public/vestwell/mobile-mockup-closeup.jpg";
import MobileAppLaunch2 from "@/app/public/vestwell/success-square.jpg";

import Blog1 from "@/app/public/vestwell/number-of-vestwell-plans.jpg";
import Blog2 from "@/app/public/vestwell/blog.jpg";

import ConferenceBooth1 from "@/app/public/vestwell/vestwell-conf-booth.jpg";
import ConferenceBooth2 from "@/app/public/vestwell/conf-illustration.jpg";

import BrandCollateral1 from "@/app/public/vestwell/umbrella.jpg";
import BrandCollateral2 from "@/app/public/vestwell/fact-sheet.jpg";

import ACS1 from "@/app/public/vestwell/acs-hug.jpg";
import ACS2 from "@/app/public/vestwell/shattering-expectations.jpg";

import HLK1 from "@/app/public/vestwell/ripple-book.jpg";
import HLK2 from "@/app/public/vestwell/ripple-illustration.jpg";

import { WorkPreview } from "./preview";

export default function WorkPage() {
  return (
    <div className="grid gap-24">
      {/* --- */}

      <WorkPreview
        brand="Vestwell"
        title="Mobile App Launch Campaign"
        description="Campaign"
        href="/work/vestwell/mobile-app-launch"
      >
        <div>
          <Image
            src={MobileAppLaunch1}
            alt="Closeup of Vestwell mobile app mockup"
          />
        </div>
        <div className="hidden lg:block">
          <Image src={MobileAppLaunch2} alt="Vestwell iconography" />
        </div>
      </WorkPreview>

      {/* --- */}

      <WorkPreview
        brand="Vestwell"
        title="Blog"
        description="Web Design"
        href="/work/vestwell/blog"
      >
        <div className="hidden lg:block">
          <Image src={Blog1} alt="TODO" />
        </div>
        <div>
          <Image src={Blog2} alt="TODO" />
        </div>
      </WorkPreview>

      {/* --- */}

      <WorkPreview
        brand="Vestwell"
        title="Conference Booth"
        description="Experiental Design"
        href="/work/vestwell/conference-booth"
      >
        <div>
          <Image src={ConferenceBooth1} alt="TODO" />
        </div>
        <div className="hidden lg:block">
          <Image src={ConferenceBooth2} alt="TODO" />
        </div>
      </WorkPreview>

      <WorkPreview
        brand="Vestwell"
        title="Brand Collateral"
        description="Illustration, Presentation Design, Layout"
        href="/work/vestwell/brand-collateral"
      >
        <div className="hidden lg:block">
          <Image src={BrandCollateral1} alt="TODO" />
        </div>
        <div>
          <Image src={BrandCollateral2} alt="TODO" />
        </div>
      </WorkPreview>

      <WorkPreview
        brand="American Cancer Society"
        description="experiential"
        href="/work/american-cancer-society"
      >
        <div className="hidden lg:block">
          <Image src={ACS1} alt="TODO" />
        </div>
        <div>
          <Image src={ACS2} alt="TODO" />
        </div>
      </WorkPreview>

      <WorkPreview
        brand="HLK"
        description="internal branding work for a scrappy st. louis agency"
        href="/work/hlk"
      >
        <div>
          <Image src={HLK1} alt="TODO" />
        </div>
        <div className="hidden lg:block">
          <Image src={HLK2} alt="TODO" />
        </div>
      </WorkPreview>
    </div>
  );
}
