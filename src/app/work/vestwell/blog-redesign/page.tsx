import { WorkHeader } from "@/app/work/header";
import Image from "next/image";
import Blog1 from "@/app/public/vestwell/blog-1.jpg";
import Blog2 from "@/app/public/vestwell/blog-2.jpg";
import Blog3 from "@/app/public/vestwell/blog-3.jpg";
import Blog4 from "@/app/public/vestwell/blog-4.jpg";

import { TwoColumn } from "@/app/components/two-column";
import { Reveal } from "@/app/components/Reveal";

export default function BlogRedesignPage() {
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
                I led the redesign of Vestwell's blog to create a more modern,
                user-friendly experience that aligns with the brand’s identity.
                The updated design features improved navigation, clean layouts,
                and engaging visuals, making it easier for users to explore
                content and stay informed. Key enhancements include responsive
                design for seamless mobile access and a refreshed aesthetic that
                highlights thought leadership and educational resources. The new
                blog layout not only increased engagement but also reinforced
                Vestwell's position as a trusted voice in retirement planning.
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
