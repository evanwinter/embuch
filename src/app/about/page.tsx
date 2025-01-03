import Image from "next/image";
import { SideDrawer } from "../components/side-drawer";
import { TwoColumn } from "../components/two-column";
import { Sidebar } from "../work/sidebar";
import Emily from "@/public/emily.jpg";
import { ResponsiveImage } from "../components/responsive-image";

export default function AboutPage() {
  return (
    <div className="p-4 sm:p-8 lg:p-12 flex items-start xl:gap-12 relative">
      <div className="xl:hidden">
        <SideDrawer>
          <Sidebar className="p-6 pr-8" />
        </SideDrawer>
      </div>
      <Sidebar className="sticky top-12 hidden shrink-0 xl:flex xl:flex-col xl:col-span-2" />

      <section className="mt-12 xl:mt-0 xl:px-12 md:h-[calc(100dvh-128px)] xl:h-[calc(100dvh-96px)] flex items-center">
        <div className="flex flex-col-reverse items-center md:flex-row gap-8 lg:gap-12 xl:gap-16">
          <div className="lg:max-w-lg xl:max-w-none flex-[50%] scale-x-[-1]">
            <ResponsiveImage
              src={Emily}
              alt="TODO"
              sizes="(max-width: 600px) 400px, (max-width: 1200px) 800px, 800px"
              quality={100}
            />
          </div>
          <div className="flex flex-[50%] flex-col gap-3 leading-tight text-lg text-pretty">
            <p>Hey, I&apos;m Emily! I’m a designer living in Chicago.</p>
            <p>
              I work at Vestwell as a Senior Designer, where I&apos;m helping
              with our mission to close the savings gap by taking complex
              financial concepts and making them digestible.
            </p>
            <p>
              Outside of work you can find me knitting, working towards racking
              up 200 hours of yoga for my teaching license, spending time in the
              northwoods of Wisconsin, playing Wingspan, or spending time with
              friends.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
