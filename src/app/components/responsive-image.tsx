import Image, { ImageProps } from "next/image";

export const ResponsiveImage = (props: ImageProps) => (
  <Image {...props} sizes="(max-width: 600px) 400px, 1200px" />
);
