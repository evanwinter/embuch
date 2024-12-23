import Image from "next/image";
import { WorkHeader } from "../../header";
import MobileAppLaunch1 from "@/public/vestwell/mobile-app-launch-1.jpg";
import AppStore from "@/public/03.jpg";
import MobileMockup from "@/public/mockup-2.jpg";
import VestwellMobile from "@/public/vestwell-mobile.jpg";
import DesktopScreenshot from "@/public/vestwell/desktop-web.jpg";
import MobileApp from "@/public/vestwell/mobile-app.jpg";
import OnePager from "@/public/vestwell/one-pager.jpg";
import { TwoColumn } from "@/app/components/two-column";
import { Reveal } from "@/app/components/Reveal";
import { LargeText } from "@/app/components/large-text";

export default function MobileAppLaunchPage() {
  return (
    <div className="flex flex-col gap-4 sm:gap-8 lg:gap-12">
      {/* Header */}
      <WorkHeader
        brand="Vestwell &mdash; Mobile App Launch"
        title="A campaign announcing the launch of Vestwell's first-ever
      mobile application."
        types="Web, Social, Email Design"
      />

      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-8">
          <Image alt="TODO" src={MobileAppLaunch1} />
        </div>

        <TwoColumn span={[6, 4]} colReverse={true}>
          <div className="">
            <Reveal>
              <Image alt="TODO" src={DesktopScreenshot} />
            </Reveal>
          </div>
          <div className="sticky top-8">
            <Reveal>
              <LargeText>
                Landing page for Vestwell's mobile app launch, showcasing its
                features and benefits.
              </LargeText>
            </Reveal>
          </div>
        </TwoColumn>

        <div className="">
          <Reveal>
            <Image alt="TODO" src={AppStore} />
          </Reveal>
        </div>

        <TwoColumn span={[5, 5]}>
          <div className="sticky top-8 max-h-[calc(100dvh-64px)] overflow-hidden">
            <Reveal>
              <Image alt="TODO" src={MobileMockup} />
            </Reveal>
          </div>
          <div>
            <Reveal>
              <Image alt="TODO" src={VestwellMobile} />
            </Reveal>
          </div>
        </TwoColumn>

        <TwoColumn span={[2, 8]}>
          <div className="sticky top-8">
            <Reveal>
              <LargeText className="text-balance">
                LinkedIn post to announce the launch of the mobile app.
              </LargeText>
            </Reveal>
          </div>
          <div className="overflow-hidden">
            <Reveal>
              <Image alt="TODO" src={MobileApp} />
            </Reveal>
          </div>
        </TwoColumn>

        <TwoColumn span={[7, 3]} colReverse={true}>
          <div className="">
            <Reveal>
              <Image alt="TODO" src={OnePager} />
            </Reveal>
          </div>
          <div className="sticky top-8">
            <Reveal>
              <LargeText className="text-balance">
                Email communications were sent out to savers, advisors, and
                employers to announce the mobile app and encourage doiwnloads.
              </LargeText>
            </Reveal>
          </div>
        </TwoColumn>
      </div>
    </div>
  );
}
