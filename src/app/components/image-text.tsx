import Image, { type ImageProps } from "next/image";

interface ImageTextProps {
  image: ImageProps;
  imagePosition?: "left" | "right";
  text: string | React.ReactNode;
}

function Text({ text }: Pick<ImageTextProps, "text">) {
  return <div className="sticky top-8">{text}</div>;
}

export function ImageText(props: ImageTextProps) {
  return (
    <div className="col-span-10 grid grid-cols-10 gap-[10px] relative">
      {props.imagePosition === "right" ? (
        <>
          <div className="col-span-10 sm:col-span-4">
            <Text text={props.text} />
          </div>
          <div className="col-span-10 sm:col-span-6">
            {/* eslint-disable-next-line */}
            <Image {...props.image} />
          </div>
        </>
      ) : (
        <>
          <div className="col-span-10 sm:col-span-6">
            {/* eslint-disable-next-line */}
            <Image {...props.image} />
          </div>
          <div className="col-span-10 sm:col-span-4">
            <Text text={props.text} />
          </div>
        </>
      )}
    </div>
  );
}
