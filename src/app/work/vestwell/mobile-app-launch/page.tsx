import Image from "next/image";
import { WorkHeader } from "../../header";
import MobileAppLaunch1 from "@/app/public/vestwell/mobile-app-launch-1.jpg";
import AppStore from "@/app/public/03.jpg";
import MobileMockup from "@/app/public/mockup-2.jpg";
import VestwellMobile from "@/app/public/vestwell-mobile.jpg";
import DesktopScreenshot from "@/app/public/vestwell/desktop-web.jpg";
import MobileApp from "@/app/public/vestwell/mobile-app.jpg";
import OnePager from "@/app/public/vestwell/one-pager.jpg";
import { TwoColumn } from "@/app/components/two-column";
import { Reveal } from "@/app/components/Reveal";

export default function MobileAppLaunchPage() {
  return (
    <div className="flex flex-col gap-4 sm:gap-8 lg:gap-12">
      {/* Header */}
      <WorkHeader
        brand="Vestwell &mdash; Mobile App Launch"
        title="A campaign announcing the launch of Vestwell's first-ever
      mobile application."
        types="Campaign"
      />

      <div className="flex flex-col gap-24">
        <div className="flex flex-col gap-8">
          <Image alt="TODO" src={MobileAppLaunch1} />
        </div>

        <TwoColumn span={[7, 3]} colReverse={true}>
          <div className="">
            <Reveal>
              <Image alt="TODO" src={DesktopScreenshot} />
            </Reveal>
          </div>
          <div className="sticky top-8">
            <Reveal>
              <p>
                To support the launch of Vestwell’s mobile app, I designed a
                dedicated landing page to effectively highlight the app's
                features and benefits. The page balances engaging visuals with
                concise messaging, focusing on how the app empowers users to
                manage their retirement plans on the go. Key design elements
                include bold headlines, app screen previews, and a seamless user
                experience, all crafted to align with Vestwell’s brand identity
                while driving excitement and engagement. This page was integral
                to positioning the mobile app as a game-changer for our audience
                and advancing the company’s goal of moving up-market.
              </p>
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

        <TwoColumn span={[3, 7]}>
          <div className="sticky top-8">
            <Reveal>
              <p>LinkedIn post to announce the launch of the mobile app.</p>
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
              <p>
                Email communications were sent out to savers, advisors, and
                employers to announce the mobile app and encourage doiwnloads.
              </p>
            </Reveal>
          </div>
        </TwoColumn>
      </div>
    </div>
  );
}
