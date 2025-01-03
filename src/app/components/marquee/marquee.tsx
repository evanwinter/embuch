import Image from "next/image";
import Emily from "@/public/emily.jpg";
import { Blue } from "./blue";
import { MarqueeImages } from "./marquee-images";
import { ResponsiveImage } from "../responsive-image";

export const Marquee = () => {
  return (
    <div className="relative py-16 my-16">
      <Blue className="absolute -right-[25vw] md:right-[10vw] top-0" />
      <div className="flex marquee-track gap-12">
        <MarqueeImages />
      </div>

      <div className="absolute -right-[25vw] md:right-[10vw] top-0 h-full">
        <Blue className="mix-blend-overlay" />
        <ResponsiveImage
          src={Emily}
          width={323}
          height={373}
          alt="Emily"
          className="shrink-0 absolute top-1/2 -translate-y-1/2 left-[80px] emily-image"
        />
      </div>
    </div>
  );
};
