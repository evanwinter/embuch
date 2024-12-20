import Image from "next/image";
import { Reveal } from "@/app/components/Reveal";
import { TwoColumn } from "@/app/components/two-column";
import { WorkHeader } from "../../header";

import Collateral1 from "@/app/public/vestwell/collateral-1.jpg";
import Collateral2 from "@/app/public/vestwell/collateral-2.jpg";
import Collateral3 from "@/app/public/vestwell/collateral-3.jpg";
import Collateral4 from "@/app/public/vestwell/collateral-4.jpg";
import Collateral5 from "@/app/public/vestwell/collateral-5.jpg";

export default function BrandCollateralPage() {
  return (
    <div className="grid gap-12">
      {/* Header */}
      <WorkHeader
        brand="Vestwell"
        title="Brochures, one-pagers, and sales materials to show off our value prop."
        types="Illustration, Presentation Design, Layout"
      />

      <div className="flex flex-col gap-24">
        <div className="flex flex-col gap-8">
          <Image alt="TODO" src={Collateral1} />
        </div>

        <TwoColumn span={[5, 5]}>
          <div className="">
            <Reveal>
              <Image alt="TODO" src={Collateral2} />
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

        <TwoColumn span={[5, 5]}>
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
          <div>
            <Reveal>
              <Image alt="TODO" src={Collateral3} />
            </Reveal>
          </div>
        </TwoColumn>

        <TwoColumn span={[5, 5]}>
          <div className="sticky top-8">
            <Reveal>
              <Image alt="TODO" src={Collateral4} />
            </Reveal>
          </div>
          <div>
            <Reveal>
              <Image alt="TODO" src={Collateral5} />
            </Reveal>
          </div>
        </TwoColumn>
      </div>
    </div>
  );
}
