import { WorkHeader } from "@/app/work/header";
import Image from "next/image";
import Blog1 from "@/app/public/vestwell/blog-1.jpg";
import Blog2 from "@/app/public/vestwell/blog-2.jpg";
import Blog3 from "@/app/public/vestwell/blog-3.jpg";
import Blog4 from "@/app/public/vestwell/blog-4.jpg";

import { TwoColumn } from "@/app/components/two-column";
import { Reveal } from "@/app/components/Reveal";

export default function BlogPage() {
  return (
    <div className="flex flex-col gap-4 sm:gap-8 lg:gap-12">
      {/* Header */}
      <WorkHeader
        brand="Vestwell"
        title="Redesign of the Vestwell blog."
        types="Web Design"
      />

      <div className="flex flex-col gap-24">
        <div className="flex flex-col gap-8">
          <Image alt="TODO" src={Blog1} />
        </div>

        <TwoColumn span={[5, 5]}>
          <div className="">
            <Reveal>
              <Image alt="TODO" src={Blog2} />
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
              <Image alt="TODO" src={Blog3} />
            </Reveal>
          </div>
          <div>
            <Reveal>
              <Image alt="TODO" src={Blog4} />
            </Reveal>
          </div>
        </TwoColumn>
      </div>
    </div>
  );
}
