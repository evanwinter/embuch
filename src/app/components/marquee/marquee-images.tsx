import Image, { type ImageProps } from "next/image";
import Flower1 from "@/public/Flower-1.png";
import Flower2 from "@/public/Flower-2.png";
import Flower3 from "@/public/Flower-3.png";
import Flower4 from "@/public/Flower-4.png";

const MarqueeImage = ({ src }: { src: ImageProps["src"] }) => (
  <Image
    alt="Flower"
    className="shrink-0 grayscale"
    height={160}
    src={src}
    width={160}
  />
);

export const MarqueeImages = () => (
  <>
    <MarqueeImage src={Flower1} />
    <MarqueeImage src={Flower2} />
    <MarqueeImage src={Flower3} />
    <MarqueeImage src={Flower4} />
    <MarqueeImage src={Flower1} />
    <MarqueeImage src={Flower2} />
    <MarqueeImage src={Flower3} />
    <MarqueeImage src={Flower4} />
    <MarqueeImage src={Flower1} />
    <MarqueeImage src={Flower2} />
    <MarqueeImage src={Flower3} />
    <MarqueeImage src={Flower4} />
    <MarqueeImage src={Flower1} />
    <MarqueeImage src={Flower2} />
    <MarqueeImage src={Flower3} />
    <MarqueeImage src={Flower4} />
    <MarqueeImage src={Flower1} />
    <MarqueeImage src={Flower2} />
    <MarqueeImage src={Flower3} />
    <MarqueeImage src={Flower4} />
    <MarqueeImage src={Flower1} />
    <MarqueeImage src={Flower2} />
    <MarqueeImage src={Flower3} />
    <MarqueeImage src={Flower4} />
    <MarqueeImage src={Flower1} />
    <MarqueeImage src={Flower2} />
    <MarqueeImage src={Flower3} />
    <MarqueeImage src={Flower4} />
    <MarqueeImage src={Flower1} />
    <MarqueeImage src={Flower2} />
    <MarqueeImage src={Flower3} />
    <MarqueeImage src={Flower4} />
  </>
);
