import Blog1 from "@/public/vestwell/blog-1.jpg";
import Blog2 from "@/public/vestwell/blog-2.jpg";
import Blog3 from "@/public/vestwell/blog-3.jpg";
import Blog4 from "@/public/vestwell/blog-4.jpg";
import Blog5 from "@/public/vestwell/blog-5.jpg";
import Blog6 from "@/public/vestwell/blog-6.jpg";

import { WorkHeader } from "@/app/work/header";
import { TwoColumn } from "@/app/components/two-column";
import { Reveal } from "@/app/components/Reveal";
import { LargeText } from "@/app/components/large-text";
import { ResponsiveImage } from "@/app/components/responsive-image";

export default function BlogRedesignPage() {
  return (
    <div className="flex flex-col gap-4 sm:gap-8 lg:gap-12">
      {/* Header */}
      <WorkHeader
        brand="Vestwell &mdash; Blog Redesign"
        title="A comprehensive redesign of the Vestwell blog."
        types="Web Design"
      />

      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-8">
          <ResponsiveImage alt="TODO" src={Blog1} />
        </div>

        <TwoColumn span={[6, 4]}>
          <div className="">
            <Reveal>
              <ResponsiveImage alt="TODO" src={Blog2} />
            </Reveal>
          </div>
          <div className="sticky top-8">
            <Reveal>
              <LargeText>
                Led the redesign of Vestwell's blog to create a more modern,
                user-friendly experience that allows users to find relevant
                content easily.
              </LargeText>
              {/* <LargeText>
                Key enhancements include responsive design for seamless mobile
                access and a refreshed aesthetic that highlights thought
                leadership and educational resources. The new blog layout not
                only increased engagement but also reinforced Vestwell's
                position as a trusted voice in retirement planning.
              </LargeText> */}
            </Reveal>
          </div>
        </TwoColumn>

        <TwoColumn span={[5, 5]}>
          <div className="sticky top-8">
            <Reveal>
              <ResponsiveImage alt="TODO" src={Blog3} />
            </Reveal>
          </div>
          <div>
            <Reveal>
              <ResponsiveImage alt="TODO" src={Blog4} />
            </Reveal>
          </div>
        </TwoColumn>
        <TwoColumn span={[4, 6]}>
          <div className="">
            <Reveal>
              <ResponsiveImage alt="TODO" src={Blog5} />
            </Reveal>
          </div>
          <div>
            <Reveal>
              <ResponsiveImage alt="TODO" src={Blog6} />
            </Reveal>
          </div>
        </TwoColumn>
      </div>
    </div>
  );
}
