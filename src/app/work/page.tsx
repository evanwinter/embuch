import Image from "next/image";

import MobileAppLaunch1 from "@/public/work/app-1.jpg";
import MobileAppLaunch2 from "@/public/work/app-2.jpg";
import Blog1 from "@/public/work/blog-1.jpg";
import Blog2 from "@/public/work/blog-2.jpg";
import ConferenceBooth1 from "@/public/work/conference-1.jpg";
import ConferenceBooth2 from "@/public/work/conference-2.jpg";
import BrandCollateral1 from "@/public/work/collateral-1.jpg";
import BrandCollateral2 from "@/public/work/collateral-2.jpg";
import Graphics1 from "@/public/work/graphics-1.jpg";
import Graphics2 from "@/public/work/graphics-2.jpg";
import ACS1 from "@/public/work/acs-1.jpg";
import ACS2 from "@/public/work/acs-2.jpg";
import HLK1 from "@/public/work/hlk-1.jpg";
import HLK2 from "@/public/work/hlk-2.jpg";

import { WorkPreview } from "@/app/work/preview";
import { ResponsiveImage } from "../components/responsive-image";

export default function WorkPage() {
  return (
    <div className="grid gap-12 sm:gap-24">
      <WorkPreview
        brand="Vestwell"
        title="Mobile App Launch"
        description="Web, Social, Email Design"
        href="/work/vestwell/mobile-app-launch"
      >
        <div className="overflow-hidden">
          <ResponsiveImage
            src={MobileAppLaunch1}
            alt="TODO"
            className="group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="hidden lg:block overflow-hidden">
          <ResponsiveImage
            src={MobileAppLaunch2}
            alt="Vestwell iconography"
            className="group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </WorkPreview>
      <WorkPreview
        brand="Vestwell"
        title="Brand Collateral"
        description="Illustration,  Layout, Print Production"
        href="/work/vestwell/brand-collateral"
      >
        <div className="hidden lg:block overflow-hidden">
          <ResponsiveImage
            src={BrandCollateral1}
            alt="TODO"
            className="group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="overflow-hidden">
          <ResponsiveImage
            src={BrandCollateral2}
            alt="TODO"
            className="group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </WorkPreview>
      <WorkPreview
        brand="Vestwell"
        title="Social &amp; Email Graphics"
        description="Motion, Illustration"
        href="/work/vestwell/social-and-email-graphics"
      >
        <div className="overflow-hidden">
          <ResponsiveImage
            src={Graphics1}
            alt="TODO"
            className="group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="hidden lg:block overflow-hidden">
          <ResponsiveImage
            src={Graphics2}
            alt="TODO"
            className="group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </WorkPreview>
      <WorkPreview
        brand="Vestwell"
        title="Blog Redesign"
        description="Web Design"
        href="/work/vestwell/blog-redesign"
      >
        <div className="hidden lg:block overflow-hidden">
          <ResponsiveImage
            src={Blog1}
            alt="TODO"
            className="group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="overflow-hidden">
          <ResponsiveImage
            src={Blog2}
            alt="TODO"
            className="group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </WorkPreview>
      <WorkPreview
        brand="Vestwell"
        title="Conference Booth"
        description="Experiental Design"
        href="/work/vestwell/conference-booth"
      >
        <div className="overflow-hidden">
          <ResponsiveImage
            src={ConferenceBooth1}
            alt="TODO"
            className="group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="hidden lg:block overflow-hidden">
          <ResponsiveImage
            src={ConferenceBooth2}
            alt="TODO"
            className="group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </WorkPreview>
      <WorkPreview
        brand="American Cancer Society"
        description="Experiential Design, Illustration,  Layout, Print Production"
        href="/work/american-cancer-society"
      >
        <div className="hidden lg:block overflow-hidden">
          <ResponsiveImage
            src={ACS1}
            alt="TODO"
            className="group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="overflow-hidden">
          <ResponsiveImage
            src={ACS2}
            alt="TODO"
            className="group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </WorkPreview>
      <WorkPreview
        brand="HLK"
        description="Illustration, Layout, Print Production"
        href="/work/hlk"
      >
        <div className="overflow-hidden">
          <ResponsiveImage
            src={HLK1}
            alt="TODO"
            className="group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="hidden lg:block overflow-hidden">
          <ResponsiveImage
            src={HLK2}
            alt="TODO"
            className="group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      </WorkPreview>
    </div>
  );
}
