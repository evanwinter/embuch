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

        <TwoColumn span={[7, 3]} colReverse={true}>
          <div className="">
            <Reveal>
              <Image alt="TODO" src={DesktopScreenshot} />
            </Reveal>
          </div>
          <div className="sticky top-8">
            <Reveal>
              <p>
                Deserunt do laborum exercitation anim. Est reprehenderit elit id
                incididunt mollit ipsum laborum amet ullamco nisi enim fugiat.
                Ut dolor cupidatat nulla fugiat in ea sunt elit officia anim
                duis reprehenderit aute. Consequat aliqua cillum non est enim
                non aliquip voluptate nostrud irure enim non duis id laborum.
                Cillum esse consequat dolor occaecat ad adipisicing sint ut
                veniam.
              </p>
            </Reveal>
          </div>
        </TwoColumn>

        <TwoColumn span={[3, 7]}>
          <div className="sticky top-8">
            <Reveal>
              <p>
                Deserunt do laborum exercitation anim. Est reprehenderit elit id
                incididunt mollit ipsum laborum amet ullamco nisi enim fugiat.
                Ut dolor cupidatat nulla fugiat in ea sunt elit officia anim
                duis reprehenderit aute. Consequat aliqua cillum non est enim
                non aliquip voluptate nostrud irure enim non duis id laborum.
                Cillum esse consequat dolor occaecat ad adipisicing sint ut
                veniam.
              </p>
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
                Deserunt do laborum exercitation anim. Est reprehenderit elit id
                incididunt mollit ipsum laborum amet ullamco nisi enim fugiat.
                Ut dolor cupidatat nulla fugiat in ea sunt elit officia anim
                duis reprehenderit aute. Consequat aliqua cillum non est enim
                non aliquip voluptate nostrud irure enim non duis id laborum.
                Cillum esse consequat dolor occaecat ad adipisicing sint ut
                veniam.
              </p>
            </Reveal>
          </div>
        </TwoColumn>
      </div>
    </div>
  );
}
